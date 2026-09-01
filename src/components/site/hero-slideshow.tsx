import { useState } from "react";

export function HeroSlideshow() {
  const [manualIndex, setManualIndex] = useState<number | null>(null);

  return (
    <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
      {/* Slide 1: Industrial Gym */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          manualIndex === null
            ? "animate-hero-slide-1"
            : manualIndex === 0
              ? "opacity-45 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
        }`}
      >
        <img
          src="/images/hero-gym.jpg"
          alt="Empty industrial gym, stacked iron plates and a barbell under hard light"
          className="h-full w-full object-cover object-center filter brightness-95 contrast-105"
        />
      </div>

      {/* Slide 2: Coach Jack Manuel (jack2.jpg) */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          manualIndex === null
            ? "animate-hero-slide-2"
            : manualIndex === 1
              ? "opacity-55 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
        }`}
      >
        <img
          src="/images/jack2.jpg"
          alt="Coach Okoro Ogbonna (Jack Manuel) The Power Engine"
          className="h-full w-full object-cover object-top md:object-center filter brightness-95 contrast-105"
        />
      </div>

      {/* Slide 3: Coach Jack Manuel Training (jack3.jpg) */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
          manualIndex === null
            ? "animate-hero-slide-3"
            : manualIndex === 2
              ? "opacity-50 scale-100 z-10"
              : "opacity-0 scale-105 z-0"
        }`}
      >
        <img
          src="/images/jack3.jpg"
          alt="Coach Jack Manuel raw strength workout on chest press machine"
          className="h-full w-full object-cover object-center filter brightness-95 contrast-105"
        />
      </div>

      {/* Dark overlay gradients for contrast and text legibility */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-bg via-bg/75 to-bg/50" />
      <div className="absolute inset-0 z-20 bg-radial-hero pointer-events-none" />
      <div className="grain-overlay z-20" />

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 pointer-events-auto">
        <button
          type="button"
          aria-label="Go to gym background slide"
          onClick={() => setManualIndex(0)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            manualIndex === null
              ? "animate-hero-indicator-1"
              : manualIndex === 0
                ? "w-7 bg-amber-400"
                : "w-3 bg-white/25 hover:bg-white/50"
          }`}
        />
        <button
          type="button"
          aria-label="Go to Coach Jack photo 1 slide"
          onClick={() => setManualIndex(1)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            manualIndex === null
              ? "animate-hero-indicator-2"
              : manualIndex === 1
                ? "w-7 bg-amber-400"
                : "w-3 bg-white/25 hover:bg-white/50"
          }`}
        />
        <button
          type="button"
          aria-label="Go to Coach Jack workout photo 2 slide"
          onClick={() => setManualIndex(2)}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            manualIndex === null
              ? "animate-hero-indicator-3"
              : manualIndex === 2
                ? "w-7 bg-amber-400"
                : "w-3 bg-white/25 hover:bg-white/50"
          }`}
        />
      </div>
    </div>
  );
}
