import { Clock, Video } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  description: string;
  tag: string;
  authorName: string;
  isVideo?: boolean;
  duration: string;
}

export function ArticleCard({
  image,
  category,
  title,
  description,
  tag,
  authorName,
  isVideo = true,
  duration,
}: ArticleCardProps) {
  return (
    <article className="group cursor-pointer hover-lift">
      <div className="relative rounded-xl overflow-hidden mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-3 left-3 bg-foreground/90 text-primary-foreground text-xs px-3 py-1.5 rounded-full backdrop-blur-sm">
          {category}
        </span>
      </div>
      <h3 className="font-semibold text-foreground mb-2 group-hover:text-accent transition-colors line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {description}
      </p>
      <span className="inline-block px-3 py-1 bg-accent-light text-accent-foreground text-xs rounded-full mb-3 hover:bg-accent-medium/40 transition-colors">
        {tag}
      </span>
      <div className="flex items-center justify-between text-xs text-muted-foreground">
        <div className="flex items-center gap-2">
          <img
            src={profilePhoto}
            alt={authorName}
            className="w-6 h-6 rounded-full object-cover ring-2 ring-accent-light"
          />
          <span className="font-medium">{authorName}</span>
        </div>
        <div className="flex items-center gap-3">
          {isVideo && (
            <span className="flex items-center gap-1">
              <Video className="w-3.5 h-3.5" />
              Video
            </span>
          )}
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {duration}
          </span>
        </div>
      </div>
    </article>
  );
}
