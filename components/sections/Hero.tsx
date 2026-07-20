"use client";

import HeroCanvas from "../three/HeroCanvas";
import HeroContent from "@/components/hero/HeroContent";

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
  
          <HeroCanvas />
          
        </div>
      </div>
      
    </section>
    
  );
  
}

