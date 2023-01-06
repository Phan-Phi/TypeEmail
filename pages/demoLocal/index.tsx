import React, { useEffect } from "react";
import { useLocalStorage } from "react-use";

export default function DemoLocal() {
  localStorage.setItem("myCat", "Tom");
  localStorage.setItem("myCat1", "Tom");
  localStorage.setItem("myCat2", "Tom");
  const cat = localStorage.getItem("myCat");
  return <div>index</div>;
}
