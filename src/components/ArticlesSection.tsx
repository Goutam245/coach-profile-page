import { ArticleCard } from "./ArticleCard";
import article1 from "@/assets/article-1.jpg";
import article2 from "@/assets/article-2.jpg";
import article3 from "@/assets/article-3.jpg";
import article4 from "@/assets/article-4.jpg";

const articles = [
  {
    image: article1,
    category: "Trying to Conceive",
    title: "Moving for Fertility: Why Less Can Be More",
    description: "Find out how gentle movement like walking, yoga, and stretching can optimize your fertility journey.",
    tag: "Movement",
    authorName: "Thilde Vesterby",
    duration: "20 min",
  },
  {
    image: article2,
    category: "Trying to Conceive",
    title: "Cycle-Syncing Your Workouts",
    description: "Learn how aligning your fitness routine with your menstrual cycle can boost energy, reduce PMS, and support conception.",
    tag: "Movement",
    authorName: "Thilde Vesterby",
    duration: "20 min",
  },
  {
    image: article3,
    category: "Trying to Conceive",
    title: "Creating a Fertility-Friendly Sleep Routine",
    description: "Actionable tips for winding down, minimizing screen time, and improving rest for hormone harmony.",
    tag: "Sleep",
    authorName: "Thilde Vesterby",
    duration: "20 min",
  },
  {
    image: article4,
    category: "Trying to Conceive",
    title: "Sleep & Fertility: The Missing Link",
    description: "Understand how sleep quality and duration directly impact your reproductive health and hormone balance.",
    tag: "Sleep",
    authorName: "Thilde Vesterby",
    duration: "20 min",
  },
];

export function ArticlesSection() {
  return (
    <section>
      <h2 className="text-2xl font-semibold text-foreground mb-6 animate-fade-in">
        From Thilde Vesterby
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </section>
  );
}
