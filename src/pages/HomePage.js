import { Hero,Services, TopDiscount, TopRated } from "../components";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <TopRated />
      <TopDiscount />
      <Services />
    </main>
  );
};

export default HomePage;
