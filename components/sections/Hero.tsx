"use client";

// import HeroCanvas from "../three/HeroCanvas";
import HeroContent from "@/components/hero/HeroContent";

import dynamic from "next/dynamic";

import { Suspense } from "react";

const HeroCanvas = dynamic(
  () => import("../three/HeroCanvas"),
  {
    ssr: false,
   loading: () => (
  <div className="flex h-full w-full items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 to-slate-950">
    <div className="h-10 w-10 animate-spin rounded-full border-4 border-violet-500 border-t-transparent" />
  </div>
),
  }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
    >
      <div
        className="
          mx-auto
          grid
          min-h-screen
          max-w-7xl
          grid-cols-1
          items-center
          gap-10
          px-6
          pt-28
          lg:grid-cols-2
        "
      >
        {/* Left */}
        <HeroContent />

        {/* Right */}
        <div
          className="
            relative
            h-[450px]
            w-full
            lg:h-[650px]
            
          "
        >
           <div
    className="
      absolute
      left-1/2
      top-1/2
      h-80
      w-80
      -translate-x-1/2
      -translate-y-1/2
      rounded-full
      bg-violet-600/20
      blur-[120px]
    "
  />
  
         <Suspense
  fallback={
    <div className="h-full w-full animate-pulse rounded-xl bg-slate-900" />
  }
>
  <HeroCanvas />
</Suspense>
          
        </div>
      </div>
      
    </section>
    
  );
  
}

