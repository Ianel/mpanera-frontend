import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import housesServices from "../../services/houses.services";

const AccountCard = ({ house }) => {
  const [image, setImage] = useState(null);
  console.log(house);

  useEffect(() => {
    housesServices
      .getHouseImagesById(house.house_id)
      .then((images) => {
        const imagesPath = images.data.results.map((image) => image["path"]);
        setImage(imagesPath[0]);
      })
      .catch((err) => console.error(err));
  }, [house]);

  return (
    <div className="shadow-lg w-64">
      <Link to={`/houses/${house.house_id}`}>
        <img
          className="w-full h-48 object-cover"
          src={`http://localhost:4000/${image}`}
        />
      </Link>
      <div className="p-4">
        <h2 className="font-semibold mb-4">{house.label}</h2>
        <Link
          to={`/offers/update/${house.house_id}`}
          className="px-[81px] py-2 bg-blue-400 hover:bg-blue-700 text-white"
        >
          Modifier
        </Link>
        <br />
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
          className="w-full py-2 bg-red-400 hover:bg-red-700 text-white mt-3"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default AccountCard;
