import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/product_context";

const About = () => {
  const { myName } = useProductContext();

  const data = {
    name: "Krish Ecommerce",
  };

  return (
    <>
      {myName}
      <HeroSection myData={data} />
    </>
  );
};

export default About;
