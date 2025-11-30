import { useState, useEffect } from "react";
import { Calendar, MapPin, Play, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";
import coaching1 from "@/assets/coaching-1.jpg";
import coaching2 from "@/assets/coaching-2.jpg";
import coaching3 from "@/assets/coaching-3.jpg";

const specialties = ["Endometriosis", "Yoga", "Meditation", "Early Parenthood"];
const languages = [
  { name: "English", flag: "🇬🇧" },
  { name: "Danish", flag: "🇩🇰" },
];

const profileImages = [profilePhoto, coaching1, coaching2, coaching3];

export function ProfileSidebar() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <aside className="w-full lg:w-80 flex-shrink-0 animate-fade-in">
      {/* Profile Card */}
      <div className="bg-card rounded-2xl shadow-card p-6 mb-4 hover-lift">
        {/* Profile Photo with decorative background */}
        <div className="flex justify-center mb-4">
          <div className="relative">
            {/* Animated decorative circles */}
            <div className="absolute -inset-3 bg-gradient-to-br from-accent-light via-accent-medium/30 to-accent-light rounded-full animate-pulse-soft" />
            <div className="absolute -inset-1 bg-accent-light rounded-full" />
            
            {/* Profile image with auto-change */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-card shadow-lg">
              {profileImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt="Thilde Vesterby - Fertility Coach"
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                    index === currentImageIndex ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            
            {/* Introduction Video Badge */}
            <button className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-foreground text-primary-foreground text-xs px-3 py-1.5 rounded-full flex items-center gap-1.5 hover:bg-foreground/90 transition-all hover:scale-105 whitespace-nowrap shadow-md">
              <Play className="w-3 h-3 fill-current" />
              Introduction Video
            </button>
          </div>
        </div>

        {/* Name and Location */}
        <div className="text-center mt-8 mb-4">
          <h1 className="text-xl font-semibold text-foreground mb-1">
            Thilde Vesterby
          </h1>
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            Copenhagen, Denmark 🇩🇰
          </p>
        </div>

        {/* Title Badge */}
        <div className="flex justify-center mb-6">
          <span className="px-4 py-1.5 border border-border rounded-full text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors cursor-default">
            Fertility Coach
          </span>
        </div>

        {/* Specialties */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Specialties:</p>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={specialty}
                className="px-3 py-1.5 bg-secondary text-secondary-foreground text-xs rounded-full border border-border hover:border-accent hover:bg-accent-light transition-all cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Appointment Type */}
        <div className="mb-6">
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Appointment Type:</p>
          <div className="flex items-center gap-2 text-sm text-foreground">
            <div className="w-6 h-6 bg-accent-light rounded-full flex items-center justify-center">
              <User className="w-3.5 h-3.5 text-accent" />
            </div>
            <span>In Person</span>
          </div>
        </div>

        {/* Languages */}
        <div>
          <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">Languages Spoken:</p>
          <div className="flex gap-4">
            {languages.map((lang) => (
              <span key={lang.name} className="flex items-center gap-1.5 text-sm text-foreground">
                <span className="text-base">{lang.flag}</span>
                {lang.name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Card */}
      <div className="bg-gradient-to-br from-accent-light to-accent-medium/30 rounded-2xl p-6 hover-lift" style={{ animationDelay: "200ms" }}>
        <div className="flex justify-center mb-3">
          <div className="w-12 h-12 bg-card rounded-xl flex items-center justify-center shadow-soft animate-float">
            <Calendar className="w-6 h-6 text-accent" />
          </div>
        </div>
        <h3 className="text-center font-semibold text-foreground mb-1">
          Schedule 30-Minute Intro Call
        </h3>
        <p className="text-center text-xs text-muted-foreground mb-4">
          Available: Monday - Friday, 9:00am - 5:00pm
        </p>
        <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5">
          Book Intro Call
        </Button>
      </div>
    </aside>
  );
}
