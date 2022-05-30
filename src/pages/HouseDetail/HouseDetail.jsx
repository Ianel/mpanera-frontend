import React from "react";
import { mac } from "@/assets/images/images";
import MainLayout from "@/layouts/MainLayout";
import Image from "@/components/Image";
import Button from "@/components/Button";
import Title from "@/components/Title";
import { FaHome, FaMapMarkerAlt } from "react-icons/fa";

const HouseDetailPage = () => {
  return (
    <MainLayout>
      <div className="w-2/3 flex flex-col mx-auto">
        <Image src={mac} alt="macbook" className="self-center" />
        <div className="flex my-4 self-center">
          <Image src={mac} alt="macbook" className="self-center w-1/3" />
          <Image src={mac} alt="macbook" className="self-center w-1/3" />
          <Image src={mac} alt="macbook" className="self-center w-1/3" />
        </div>
        <Button>Afficher toutes les photos</Button>
      </div>
      <div className="w-2/3 mx-auto my-8">
        <div className="flex justify-between items-center">
          <Title type="h1">Villa Belle Vue</Title>
          <p className="font-bold text-lg">
            1.000 m<sup>2</sup>
          </p>
        </div>
        <div className="flex items-center text-gray-700">
          <FaMapMarkerAlt className="text-accent mr-2" />
          Lot 312 Parcelle 1225 Antanambao Ambalavato, Mahajanga 401, Boeny,
          Madagascar
        </div>
        <div className="mt-4">
          <Title type="h3" className="font-bold text-primaryDark">
            Description:
          </Title>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            quidem ducimus, aspernatur error, vitae unde at quo ea, praesentium
            atque totam in quis. Labore nobis amet porro nulla enim vero!
          </p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div>
            <Title type="h3" className="font-bold text-primaryDark">
              Type de logement:
            </Title>
            <div className="flex items-center">
              <FaHome />
              <p className="ml-2">Appartement</p>
            </div>
          </div>
          <div>
            <Title type="h3" className="font-bold text-primaryDark">
              Etat du logement:
            </Title>
            <p>8 / 10</p>
          </div>
          <div>
            <Title type="h3" className="font-bold text-primaryDark">
              Loyer du logement:
            </Title>
            <p>
              <span className="font-bold text-primaryDark">1.000.000 Ar</span> /
              mois
            </p>
          </div>
          <div>
            <Title type="h3" className="font-bold text-primaryDark">
              Date limite de paiement:
            </Title>
            <p>
              Avant le <span className="font-bold text-primaryDark">20</span> du
              mois
            </p>
          </div>
        </div>
        <div className="mt-4">
          <Title type="h3" className="font-bold text-primaryDark">
            Chambres:
          </Title>
          <div className="flex justify-between items-center flex-wrap">
            <div className="flex items-center">
              <FaHome />
              <p className="ml-2">2 chambres à coucher</p>
            </div>
            <div className="flex items-center">
              <FaHome />
              <p className="ml-2">1 salon</p>
            </div>
            <div className="flex items-center">
              <FaHome />
              <p className="ml-2">1 cuisine</p>
            </div>
            <div className="flex items-center">
              <FaHome />
              <p className="ml-2">2 douches / WC</p>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HouseDetailPage;
