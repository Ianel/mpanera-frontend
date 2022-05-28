import { proxy } from "valtio";

const states = proxy({
  input: {},
  selectedLink: "accueil",
  selectedOffersLink: "publier une offre",
});

export default states;
