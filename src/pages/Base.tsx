import { Hero } from "../sections";
import { NAVIGATION } from "../constants";
import { Navbar } from "../components";

const Base = () => {
  return (
    <>
      <Navbar {...NAVIGATION} />
      <Hero />
    </>
  );
};

export default Base;
