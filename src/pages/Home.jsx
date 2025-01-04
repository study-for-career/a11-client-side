import Slider from "../components/Slider";
import YouMayLike from "../components/YouMayNeed";
import { useContext, useEffect } from "react";
import { AuthContext } from "../private pages/AuthProvider";
import PopularServices from "../components/PopularServices";
import HighlightSection from "../components/HighlightSection";

const Home = () => {
  // Dynamically change the title of the page
  useEffect(() => {
    document.title = 'Home';
  }, [])

  const { theme } = useContext(AuthContext)

  return (
    <div data-theme={theme} >

      <Slider></Slider>

      <div className="w-full md:w-11/12 mx-auto">
        <PopularServices></PopularServices>
      </div>
      <HighlightSection></HighlightSection>
      <div className="w-full md:w-11/12 mx-auto">
        <YouMayLike></YouMayLike>
      </div>


    </div>
  );
};

export default Home;
