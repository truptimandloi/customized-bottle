"use client";

import { useRef, useEffect, useState } from "react";
import { useCustomizer } from "../../context/CustomizerContext";

export default function LabelGenerator() {
  const canvasRef = useRef(null);
  const { brand, tagline, price, logo, logoText, logoColor, setLabelImage } = useCustomizer();

  useEffect(() => {
    generateLabel();
  }, [brand, tagline, price, logo, logoText, logoColor]);

  const generateLabel = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // High-quality label dimensions
    const width = 1200;
    const height = 800;
    canvas.width = width;
    canvas.height = height;

    // Elegant gradient background
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#fafafa");
    gradient.addColorStop(0.5, "#ffffff");
    gradient.addColorStop(1, "#f5f5f5");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Decorative top border
    ctx.fillStyle = logoColor;
    ctx.fillRect(0, 0, width, 8);

    // Decorative bottom border
    ctx.fillRect(0, height - 8, width, 8);

    // Left side accent strip
    ctx.fillStyle = logoColor;
    ctx.globalAlpha = 0.1;
    ctx.fillRect(0, 0, 120, height);
    ctx.globalAlpha = 1;

    // Outer elegant border
    ctx.strokeStyle = logoColor;
    ctx.lineWidth = 3;
    ctx.globalAlpha = 0.3;
    ctx.strokeRect(20, 20, width - 40, height - 40);
    ctx.globalAlpha = 1;

    let logoYStart = 120;

    // Logo or text on LEFT SIDE
    if (logo) {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const logoSize = 160;
        // Logo positioned on left side
        ctx.drawImage(img, 40, logoYStart, logoSize, logoSize);
        finalizeLabel(ctx, width, height);
      };
      img.onerror = () => {
        finalizeLabel(ctx, width, height);
      };
      img.src = logo;
    } else if (logoText) {
      ctx.font = "bold 40px 'Arial', sans-serif";
      ctx.fillStyle = logoColor;
      ctx.textAlign = "left";
      ctx.fillText(logoText, 70, logoYStart + 80);
      finalizeLabel(ctx, width, height);
    } else {
      finalizeLabel(ctx, width, height);
    }
  };

  const finalizeLabel = (ctx, width, height) => {
    const centerX = width / 2;
    let currentY = 150;

    // Company Name - Large and bold in CENTER
    ctx.font = "bold 100px 'Arial', sans-serif";
    ctx.fillStyle = "#1a1a1a";
    ctx.textAlign = "center";
    ctx.fillText(brand || "BRAND", centerX, currentY);
    currentY += 120;

    // Decorative line under name
    ctx.strokeStyle = logoColor;
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(centerX - 150, currentY - 20);
    ctx.lineTo(centerX + 150, currentY - 20);
    ctx.stroke();
    currentY += 40;

    // Tagline - Styled italic in CENTER
    ctx.font = "italic 28px 'Arial', sans-serif";
    ctx.fillStyle = "#4a5568";
    ctx.fillText(tagline || "Premium Quality", centerX, currentY);
    currentY += 80;

    // Price Box - Stylish gradient
    const priceY = currentY;
    const priceGradient = ctx.createLinearGradient(centerX - 220, priceY - 40, centerX + 220, priceY + 60);
    priceGradient.addColorStop(0, "#059669");
    priceGradient.addColorStop(1, "#047857");
    ctx.fillStyle = priceGradient;
    ctx.beginPath();
    ctx.roundRect(centerX - 220, priceY - 40, 440, 110, 15);
    ctx.fill();

    // Price text
    ctx.font = "bold 54px 'Arial', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(`₹${price || "XXX"}`, centerX, priceY + 20);

    // "per piece" text
    ctx.font = "13px 'Arial', sans-serif";
    ctx.fillStyle = "#e0e7ff";
    ctx.fillText("per piece", centerX, priceY + 55);

    // Bottom watermark
    ctx.font = "11px 'Arial', sans-serif";
    ctx.fillStyle = "#d0d0d0";
    ctx.textAlign = "center";
    ctx.fillText("Premium Bottled Label", centerX, height - 40);

    // Export as image
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      setLabelImage(url);
    }, "image/png", 1.0);
  };

  return (
    <div className="space-y-4">
      <h3 className="font-semibold text-gray-900">Live Label Preview</h3>
      <div className="border-2 border-gray-300 rounded-lg p-4 bg-white overflow-auto">
        <canvas
          ref={canvasRef}
          className="w-full max-w-2xl mx-auto border rounded bg-white shadow-lg"
        />
      </div>
    </div>
  );
}
