import React from "react";
import Cards from "../components/Cards";
import Header from "../components/Header";
import List from "../components/List";
import Showcase from "../components/Showcase";

const Home = () => {
  return (
    <>
      <Header />
      <Showcase />
      <Cards />
      <List />
    </>
  );
};

export default Home;
