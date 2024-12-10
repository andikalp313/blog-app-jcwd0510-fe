import React from "react";
import Jumbotron from "./components/Jumbotron";
import BlogList from "@/features/home/components/BlogList";

const HomePage = () => {
  return (
    <main className="container mx-auto px-4">
      <Jumbotron />
      <BlogList />
    </main>
  );
};

export default HomePage;
