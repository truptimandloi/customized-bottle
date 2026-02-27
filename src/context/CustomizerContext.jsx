"use client";
import { createContext, useContext, useState } from "react";

const CustomizerContext = createContext();

export function CustomizerProvider({ children }) {
  const [selectedDesign, setSelectedDesign] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [brand, setBrand] = useState("");
  const [tagline, setTagline] = useState("");
  const [price, setPrice] = useState(0);
  const [logo, setLogo] = useState(null);
  const [logoText, setLogoText] = useState("");
  const [logoColor, setLogoColor] = useState("#3b82f6");
  const [labelImage, setLabelImage] = useState(null);
  const [labelDataUrl, setLabelDataUrl] = useState(null);

  return (
    <CustomizerContext.Provider
      value={{
        selectedDesign, setSelectedDesign,
        quantity, setQuantity,
        brand, setBrand,
        tagline, setTagline,
        price, setPrice,
        logo, setLogo,
        logoText, setLogoText,
        logoColor, setLogoColor,
        labelImage, setLabelImage,
        labelDataUrl, setLabelDataUrl
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
}

export const useCustomizer = () => useContext(CustomizerContext);