import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface CoachingCardProps {
  images: string[];
  title: string;
  description: string;
  price: string;
}

export function CoachingCard({ images, title, description, price }: CoachingCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="flex flex-col sm:flex-row gap-4 p-4 bg-card rounded-xl border border-border hover:border-accent/50 hover:shadow-card-hover transition-all duration-300 group">
      {/* Image with auto-slideshow */}
      <div className="w-full sm:w-48 h-32 flex-shrink-0 rounded-lg overflow-hidden relative">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={title}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              index === currentImageIndex 
                ? "opacity-100 scale-100" 
                : "opacity-0 scale-105"
            }`}
          />
        ))}
        {/* Image indicators */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                index === currentImageIndex 
                  ? "bg-primary-foreground w-3" 
                  : "bg-primary-foreground/50"
              }`}
            />
          ))}
        </div>
      </div>
      
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {description}
          </p>
          <Button 
            variant="default" 
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transition-transform"
          >
            Read More
          </Button>
        </div>
      </div>
      
      <div className="sm:text-right flex-shrink-0 flex items-center">
        <span className="text-xl font-semibold text-foreground">{price}</span>
      </div>
    </div>
  );
}
