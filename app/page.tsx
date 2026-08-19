import Hero from "./components/Hero";
import WelcomeHome from "./components/WelcomeHome";
import OurPromise from "./components/OurPromise";
import OurServices from "./components/OurServices";
import LifeAtOakridge from "./components/LifeAtOakridge";
import WhyFamiliesChooseUs from "./components/WhyFamiliesChooseUs";
import ComfortableAmenities from "./components/ComfortableAmenities";
import MoveInProcess from "./components/MoveInProcess";
import LocationSection from "./components/LocationSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WelcomeHome />
      <OurPromise />
      <OurServices />
      <LifeAtOakridge />
      <WhyFamiliesChooseUs />
      <ComfortableAmenities />
      <MoveInProcess />
      <LocationSection />
    </>
  );
}
