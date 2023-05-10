import About from "../About/About";
import Banner from "../Banner/Banner";
import ChooseUs from "../ChooseUs/ChooseUs";
import Contact from "../Contact/Contact";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Team from "../Team/Team";

const Home = () => {
  return (
    <div className="space-y-28">
      <Banner></Banner>
      <About></About>
      <Service></Service>
      <Contact></Contact>
      <Products></Products>
      <Team></Team>
      <ChooseUs></ChooseUs>
    </div>
  );
};

export default Home;
