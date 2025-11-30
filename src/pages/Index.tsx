import { ProfileSidebar } from "@/components/ProfileSidebar";
import { AboutSection } from "@/components/AboutSection";
import { OfferingsSection } from "@/components/OfferingsSection";
import { ArticlesSection } from "@/components/ArticlesSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-accent-light/20">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left Sidebar */}
          <ProfileSidebar />
          
          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <AboutSection />
            <OfferingsSection />
            <ArticlesSection />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Index;
