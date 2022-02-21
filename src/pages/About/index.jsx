import React, { useEffect } from "react";
import Avatar from "../../components/Avatar";
import Input from "../../components/Input";
import LoginForm from "../../components/LoginForm";
import { MainLayout } from "../../layouts/main";
import { states } from "../../states";

const AboutPage = () => {
  useEffect(() => {
    states.selectedLink = "about";
  }, []);

  return (
    <MainLayout>
      <Input />
      <Avatar />
      <LoginForm />
    </MainLayout>
  );
};

export default AboutPage;
