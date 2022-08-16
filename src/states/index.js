import { proxy } from "valtio";

const states = proxy({
  houseResults: [],
  input: {},
  selectedLink: "accueil",
  selectedOffersLink: "publier une offre",
  loading: false,
});

export default states;
