import React from "react";

const OffersLayout = ({
  nextButton,
  prevButton,
  children,
  step,
  end = false,
}) => {
  return (
    <div className="w-full h-screen">
      <div className="px-8 py-4 flex justify-between items-center shadow-lg">
        <button
          className="rounded-lg bg-blue-500 text-white w-32 py-2"
          onClick={prevButton}
        >
          Retour
        </button>
        <p>{step} / 7 </p>
        <button
          className="rounded-lg bg-blue-500 text-white w-32 py-2"
          onClick={nextButton != undefined ? nextButton : () => {}}
        >
          {end ? "Terminer" : "Suivant"}
        </button>
      </div>
      {children}
    </div>
  );
};

export default OffersLayout;
