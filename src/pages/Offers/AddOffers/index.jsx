import React, { useReducer, useState } from "react";
import HouseImage from "./HouseImage";
import HouseLabel from "./HouseLabel";
import HouseLocation from "./HouseLocation";
import HouseMoreInfos from "./HouseMoreInfos";
import HousePrice from "./HousePrice";
import HouseType from "./HouseType";

const AddOffers = () => {
  const [step, setStep] = useState(1);

  const initialState = {
    label: "",
    category: "",
    stateOf: "",
    rentPrice: "",
    paymentDate: "",
    area: "",
    description: "",
    city: "",
    postalCode: "",
    region: "",
    country: "",
    adress: "",
    accessibility: "",
    rooms_number: "",
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "label":
        return { ...state, label: action.value };
      case "category":
        return { ...state, category: action.value };
      case "stateOf":
        return { ...state, stateOf: action.value };
      case "rentPrice":
        return { ...state, rentPrice: action.value };
      case "paymentDate":
        return { ...state, paymentDate: action.value };
      case "area":
        return { ...state, area: action.value };
      case "description":
        return { ...state, description: action.value };
      case "city":
        return { ...state, city: action.value };
      case "postalCode":
        return { ...state, postalCode: action.value };
      case "region":
        return { ...state, region: action.value };
      case "country":
        return { ...state, country: action.value };
      case "adress":
        return { ...state, adress: action.value };
      case "accessibility":
        return { ...state, accessibility: action.value };
      case "rooms_number":
        return { ...state, rooms_number: action.value };
      default:
        return state;
    }
  };

  const [states, dispatch] = useReducer(reducer, initialState);

  const prevStep = () => {
    setStep((step) => step - 1);
  };

  const nextStep = () => {
    setStep((step) => step + 1);
  };

  const handleChange = (input, value) => {
    dispatch({ type: input, value: value });
  };

  const prevButton = (e) => {
    e.preventDefault();
    prevStep();
  };

  const nextButton = (e) => {
    e.preventDefault();
    nextStep();
  };

  switch (step) {
    case 1:
      return (
        <HouseType
          nextButton={nextButton}
          handleChange={handleChange}
          step={step}
        />
      );
    case 2:
      return (
        <HouseLabel
          nextButton={nextButton}
          prevButton={prevButton}
          handleChange={handleChange}
          values={states}
          step={step}
        />
      );
    case 3:
      return (
        <HouseLocation
          nextButton={nextButton}
          prevButton={prevButton}
          handleChange={handleChange}
          step={step}
        />
      );
    case 4:
      return (
        <HousePrice
          nextButton={nextButton}
          prevButton={prevButton}
          handleChange={handleChange}
          step={step}
        />
      );
    case 5:
      return (
        <HouseMoreInfos
          nextButton={nextButton}
          prevButton={prevButton}
          handleChange={handleChange}
          values={states}
          step={step}
        />
      );
    case 6:
      return (
        <HouseImage
          nextButton={nextButton}
          prevButton={prevButton}
          handleChange={handleChange}
          values={states}
          step={step}
        />
      );
    default:
      <HouseType nextButton={nextButton} handleChange={handleChange} />;
  }
};

export default AddOffers;
