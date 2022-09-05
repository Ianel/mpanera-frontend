import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import housesServices from "../../services/houses.services";

const AccountCard = ({ house }) => {
  const [image, setImage] = useState(null);
  const [toggleIsActive, setToggleIsActive] = useState(true);
  console.log(house);

  useEffect(() => {
    setToggleIsActive(house.is_house_active);

    housesServices
      .getHouseImagesById(house.house_id)
      .then((images) => {
        const imagesPath = images.data.results.map((image) => image["path"]);
        setImage(imagesPath[imagesPath.length - 1]);
      })
      .catch((err) => console.error(err));
  }, [house]);

  return (
    <div className="shadow-lg w-48">
      <Link to={`/houses/${house.house_id}`}>
        <img
          className="w-full h-32 object-cover"
          src={`http://localhost:4000/${image}`}
        />
      </Link>
      <div className="p-4">
        <h2 className="font-semibold mb-2">{house.label}</h2>
        <div className="flex flex-row flex-wrap justify-between items-center">
          <Link
            to={`/offers/update/${house.house_id}`}
            className="text-blue-500 hover:font-bold text-center"
          >
            Modifier
          </Link>
          <button
            onClick={async () => {
              await housesServices
                .deleteHousebyId(house.house_id)
                .then((res) => {
                  console.log(res);
                  toast.success("Logement effacé");
                })
                .catch((error) => console.log(error))
                .finally(() => console.log("Deletion done"));

              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }}
            className="text-red-500 hover:font-bold"
          >
            Supprimer
          </button>
          <button
            className="text-gray-800 hover:font-bold"
            onClick={async () => {
              await setToggleIsActive((toggleIsActive) => !toggleIsActive);

              await housesServices
                .toggleHouseStatus(house.house_id, {
                  isHouseActive: !toggleIsActive,
                })
                .then((res) => console.log(res.data.results))
                .catch((error) => console.error(error))
                .finally(() => console.log("Status changed"));
            }}
          >
            {toggleIsActive == true
              ? "Marquer comme occupé"
              : "Marquer comme libre"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountCard;
