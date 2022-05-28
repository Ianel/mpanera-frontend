import states from "@/states";
import OffersLayout from "@/layouts/OffersLayout";
import React, { useReducer } from "react";
import List from "./List";
import Publish from "./Publish";
import Saved from "./Saved";

const OffersPage = () => {
  const initialState = {
    publish: true,
    list: false,
    saved: false,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "publish":
        return { publish: true, list: false, saved: false };
      case "list":
        return { publish: false, list: true, saved: false };
      case "saved":
        return { publish: false, list: false, saved: true };
      default:
        return state;
    }
  };

  const [shows, dispatch] = useReducer(reducer, initialState);

  states.dispatch = dispatch;

  return (
    <OffersLayout>
      {shows["publish"] && <Publish />}
      {shows["saved"] && <Saved />}
      {shows["list"] && <List />}
    </OffersLayout>
  );
};

export default OffersPage;
