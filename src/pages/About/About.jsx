import React, { useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import states from "@/states";

const AboutPage = () => {
  useEffect(() => {
    states.selectedLink = "about";
  }, []);

  return (
    <MainLayout>
      <h1>Hi</h1>
    </MainLayout>
  );
};

export default AboutPage;
