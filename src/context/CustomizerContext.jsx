"use client";
import { createContext, useContext, useState } from "react";

const CustomizerContext = createContext();

export function CustomizerProvider({ children }) {
  const [selectedDesign, setSelectedDesign] = useState("");
  const [quantity, setQuantity] = useState(0);      // store as number
  const [brand, setBrand] = useState("");
  const [tagline, setTagline] = useState("");
  const [price, setPrice] = useState(0);             // numeric price
  const [logo, setLogo] = useState(null);
  const [logoText, setLogoText] = useState("");
  const [logoColor, setLogoColor] = useState("#3b82f6");
  const [labelImage, setLabelImage] = useState(null);

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
        labelImage, setLabelImage
      }}
    >
      {children}
    </CustomizerContext.Provider>
  );
}

export const useCustomizer = () => useContext(CustomizerContext);