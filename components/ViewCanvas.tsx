"use client";

import { Canvas } from "@react-three/fiber";
import { SodaCan } from "./SodaCan";
import { Environment, Float, View } from "@react-three/drei";
import FloatingCan from "@/components/FloatingCan";

const ViewCanvas = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        overflow:
          "h/Users/marllonramosmarins/Desktop/ZypHQa8jQArT0Oq1_fizzi-site-assets (1)/labels/cherry.png /Users/marllonramosmarins/Desktop/ZypHQa8jQArT0Oq1_fizzi-site-assets (1)/labels/grape.png /Users/marllonramosmarins/Desktop/ZypHQa8jQArT0Oq1_fizzi-site-assets (1)/labels/lemon-lime.png /Users/marllonramosmarins/Desktop/ZypHQa8jQArT0Oq1_fizzi-site-assets (1)/labels/strawberry.png /Users/marllonramosmarins/Desktop/ZypHQa8jQArT0Oq1_fizzi-site-assets (1)/labels/watermelon.pngidden",
        pointerEvents: "none",
        zIndex: 30,
      }}
      shadows
      dpr={[1, 1.5]}
      gl={{ antialias: true }}
      camera={{
        fov: 30,
      }}
    >
      <View.Port />
    </Canvas>
  );
};

export default ViewCanvas;
