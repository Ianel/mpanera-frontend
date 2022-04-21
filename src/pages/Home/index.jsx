import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/Buttons";
import Card, { MainCard } from "@/components/Card";
import Input from "@/components/Input";
import Grid from "@/components/Grid";
import { MainLayout } from "@/layouts/main";
import Title from "@/components/Title";
import Header from "./Header";
import Engagements from "./Engagements";
import { states } from "@/states";
import { mac } from "@/assets/images/images";

export const HomePage = () => {
  useEffect(() => {
    states.selectedLink = "accueil";
  }, []);

  return (
    <MainLayout>
      <div className="pb-10">
        <div className="text-center p-8">
          <h1>Mpanera</h1>
          <p>La plateforme N°1 dans la recherche d'immobiliers</p>
        </div>
        <div className="px-8 flex lg:flex-row lg:justify-between lg:items-center flex-wrap gap-y-8">
          {["a", "b", "c", "d", "e", "f", "g", "h"].map((nb, index) => {
            return (
              <MainCard
                key={`li${index}`}
                src={mac}
                items={[
                  "1 living",
                  "2 chambres",
                  "Cuisine",
                  "DC/WC",
                  "1 salon",
                ]}
              />
            );
          })}
        </div>
      </div>
    </MainLayout>
  );
};
