import { Spacer } from "../_components/section";
import Footer from "../footer";
import { HomeHero } from "./home-hero";
import { SelectedWork } from "./selected-work";

export default function V3Page() {
  return (
    <>
      <HomeHero />
      <Spacer />
      <SelectedWork />
      <Spacer />
      <Footer />
    </>
  );
}
