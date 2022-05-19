import { proxy } from "valtio";

const states = proxy({
  input: {},
  selectedLink: "accueil",
});

export default states;
