import React from "react";

interface HeroProps {
  title: string;
  backgroundImage?: string; // Imagen de fondo opcional
}

const Hero: React.FC<HeroProps> = ({ title, backgroundImage }) => {
  return (
    <div
      className={`relative flex items-center justify-center w-full h-64 bg-primary-800`}
    >
      {backgroundImage && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            opacity: 0.1,
          }}
        ></div>
      )}

      <div className="relative z-10 w-full wrapper flex items-start">
        <h1 className="text-4xl font-bold text-white">{title}</h1>
      </div>
    </div>
  );
};

export default Hero;
