import { HeroSection } from "@/components/component/hero-section";
import Announcements from "../components/Announcements";
import CardSection from "../components/CardSection";
import { AdditionalInfo } from "@/components/component/additional-info";
import { Footer } from "@/components/component/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AdditionalInfo />
     { /*<Announcements />*/}
      {/* <CardSection /> */}
      <Footer />
    </>
  );
}
