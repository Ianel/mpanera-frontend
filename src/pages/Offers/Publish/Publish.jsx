import React, { useEffect } from "react";
import states from "@/states";
import InputGroup from "@/components/Input/InputGroup";
import Title from "@/components/Title";
import Button from "@/components/Button";

const Publish = () => {
  useEffect(() => {
    states.selectedOffersLink = "publish";
  }, []);

  return (
    <div className="m-6 flex flex-col justify-evenly items-start flex-wrap">
      <div className="w-full md:my-4">
        <Title type="h4" className="font-bold">
          Informations de bases
        </Title>
        <div className="flex items-start justify-evenly flex-wrap">
          <div className="flex flex-col md:flex-row w-full justify-evenly">
            <InputGroup
              size="md:w-1/3"
              className="w-full"
              label="Nom du logement"
              type="text"
              placeholder="Nom du logement"
            />
            <InputGroup
              size="md:w-1/3"
              className="w-full"
              label="Type de logement"
              type="select"
              items={[
                { Maisons: "Maisons" },
                { Villas: "Villas" },
                { Appartements: "Appartements" },
                { Bungalows: "Bungalows" },
                { Pavillons: "Pavillons" },
              ]}
            />
            <InputGroup
              size="md:w-1/3"
              className="w-full"
              label="Etat de logement"
              type="select"
              items={[
                { "En excellent etat": "En excellent état" },
                { "En bon etat": "En bon état" },
                { Normal: "Normal" },
                { "En mauvais etat": "En mauvais état" },
                { "En piteux etat": "En piteux état" },
              ]}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-evenly">
            <InputGroup
              size="md:w-1/3"
              className="w-full"
              label="Loyer"
              type="text"
              placeholder="Loyer"
            />
            <InputGroup
              size="md:w-1/3"
              className="w-full"
              label="Date butoir de paiement"
              type="date"
            />
            <InputGroup
              size="md:w-1/3"
              className="w-full"
              label="Date d'inauguration"
              type="date"
            />
          </div>
          <div className="flex flex-col md:flex-row w-full justify-evenly items-start">
            <InputGroup
              size="md:w-1/3"
              label="Description"
              placeholder="Description du logement"
              type="textarea"
              className="border-gray-600 border-2 h-32 p-2 rounded-md w-full"
            />
            <InputGroup
              size="md:w-1/3"
              className="w-full"
              label="Superficie"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="w-full my-4 md:my-4">
        <Title type="h4" className="font-bold">
          Localisation
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <InputGroup
            className="w-full"
            label="Ville"
            type="text"
            placeholder="Ville"
          />
          <InputGroup
            className="w-full"
            label="Code postal"
            type="text"
            placeholder="Code postal"
          />
          <InputGroup
            className="w-full"
            label="Région"
            type="text"
            placeholder="Région"
          />

          <InputGroup
            className="w-full"
            label="Pays"
            type="text"
            placeholder="Pays"
          />
          <InputGroup
            className="w-full"
            label="Adresse"
            type="text"
            placeholder="Lot 312 Parcelle 1225 Antanambao Ambalavato"
          />
          <InputGroup
            className="w-full"
            label="Accessibilté"
            type="select"
            items={[
              { mer: "Près de la mer" },
              { route: "Près de la route" },
              { centreville: "Près du centre ville" },
              { centrecommercial: "Près d'un centre commercial" },
              { hopital: "Près d'un hopital" },
              { pharmacie: "Près d'une pharmacie" },
              { dispensaire: "Près d'un dispensaire" },
              { bus: "Près d'un arrêt de bus" },
            ]}
          />
        </div>
      </div>
      <div className="w-full md:my-4">
        <Title type="h4" className="font-bold">
          Chambres
        </Title>
        <div className="grid grid-cols-1 md:grid-cols-3 relative">
          <InputGroup
            className="w-full"
            label="Type de chambres"
            type="select"
            items={[
              { living: "Living" },
              { bedroom: "Chambre à coucher" },
              { kitchen: "Cuisine" },
              { sport: "Salle de sport" },
            ]}
          />
          <InputGroup className="w-full" type="text" label="Nombre" />
          <Button className="w-32 h-12 lg:absolute lg:bottom-2 lg:right-1/4">
            Ajouter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
