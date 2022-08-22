import moment from "moment";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSnapshot } from "valtio";
import Input, { TextArea } from "../../components/Input";
import authService from "../../services/auth.service";
import usersService from "../../services/users.service";
import states from "../../states";
import avatar from "../../assets/images/avatar1.png";

const ProfileForm = () => {
  const [gender, setGender] = useState("");
  const [userId, setUserId] = useState(0);
  const [profileAvatarImage, setProfileAvatarImage] = useState("");

  const snapshot = useSnapshot(states);

  useEffect(async () => {
    const id = await authService.getUserId();
    setUserId(id);

    await usersService
      .getUser(id)
      .then((user) => {
        setGender(user.data.results.gender);

        states.input.profileFirstname = user.data.results.firstname;
        states.input.profileLastname = user.data.results.lastname;
        states.input.profileBirthdate = user.data.results.birthdate;
        states.input.profileCity = user.data.results.city;
        states.input.profilePostalCode = user.data.results.postal_code;
        states.input.profileRegion = user.data.results.region;
        states.input.profileCountry = user.data.results.country;
        states.input.profileAdress = user.data.results.adress;
        states.input.profilePhoneNumber = user.data.results.phone_number;
        states.input.profileEmail = user.data.results.email;
        states.input.profileFacebookName = user.data.results.facebook_name;
        setProfileAvatarImage(user.data.results.profile_avatar);
        states.input.profileAbout = user.data.results.about;
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="w-2/3 mx-auto my-5">
      <h2 className="text-lg font-bold text-center mb-4">
        Veuillez remplir les champs suivants
      </h2>

      <form>
        <div className="grid grid-cols-2 gap-3">
          <label htmlFor="lastname" className="flex flex-col">
            Nom
            <Input
              id="lastname"
              name="profileLastname"
              type="text"
              placeholder="Nom"
              value={snapshot.input.profileLastname}
            />
          </label>
          <label htmlFor="firstname" className="flex flex-col">
            Prenom
            <Input
              id="firstname"
              name="profileFirstname"
              type="text"
              placeholder="Prénom"
              value={snapshot.input.profileFirstname}
            />
          </label>
          <label htmlFor="gender" className="flex flex-col">
            Sexe
            <select
              className="rounded-md border-gray-500 border-2"
              name="sexe"
              id="gender"
              onChange={(e) => {
                setGender(e.target.value);
              }}
              value={gender}
            >
              <option>Choisir votre sexe</option>
              <option value="Homme">Homme</option>
              <option value="Femme">Femme</option>
            </select>
          </label>
          <label htmlFor="birthdate" className="flex flex-col">
            Date de naissance
            <Input
              id="birthdate"
              value={moment(snapshot.input.profileBirthdate).format(
                "yyyy-MM-DD"
              )}
              name="profileBirthdate"
              type="date"
            />
          </label>
          <label htmlFor="city" className="flex flex-col">
            Ville
            <Input
              value={snapshot.input.profileCity}
              id="city"
              name="profileCity"
              type="text"
              placeholder="Ville"
            />
          </label>
          <label htmlFor="postalCode" className="flex flex-col">
            Code postal
            <Input
              value={snapshot.input.profilePostalCode}
              id="postalCode"
              name="profilePostalCode"
              type="text"
              placeholder="Code postal"
            />
          </label>
          <label htmlFor="region" className="flex flex-col">
            Région
            <Input
              value={snapshot.input.profileRegion}
              id="region"
              name="profileRegion"
              type="text"
              placeholder="Région"
            />
          </label>
          <label htmlFor="country" className="flex flex-col">
            Pays
            <Input
              value={snapshot.input.profileCountry}
              id="country"
              name="profileCountry"
              type="text"
              placeholder="Pays"
            />
          </label>
          <label htmlFor="adress" className="flex flex-col">
            Adresse
            <Input
              value={snapshot.input.profileAdress}
              id="adress"
              name="profileAdress"
              type="text"
              placeholder="Adresse"
            />
          </label>
          <label htmlFor="phoneNumber" className="flex flex-col">
            Numéro de télephone
            <Input
              value={snapshot.input.profilePhoneNumber}
              id="phoneNumber"
              type="tel"
              name="profilePhoneNumber"
              placeholder="Numéro de télephone"
            />
          </label>
          <label htmlFor="email" className="flex flex-col">
            Email
            <Input
              value={snapshot.input.profileEmail}
              id="email"
              name="profileEmail"
              type="email"
              placeholder="Email"
            />
          </label>
          <label htmlFor="facebook_name" className="flex flex-col">
            Nom facebook
            <Input
              value={snapshot.input.profileFacebookName}
              id="facebook_name"
              name="profileFacebookName"
              type="text"
              placeholder="Nom Facebook"
            />
          </label>
          <label htmlFor="profileAvatar" className="flex flex-col">
            Photo de profil
            {/* <Input
                //value={snapshot.input.profileAvatar}
                id="profileAvatar"
                name="profileAvatar"
                type="file"
                className="border-none"
              /> */}
            <input
              type="file"
              name="profileAvatar"
              id="profileAvatar"
              className="border-none"
              onChange={(e) => setProfileAvatarImage(e.target.files[0])}
            />
            <img
              className="w-24 h-24 mt-3 rounded-md"
              src={
                profileAvatarImage
                  ? `http://localhost:4000/${profileAvatarImage}`
                  : avatar
              }
              alt="profile image"
            />
          </label>
          <label htmlFor="profileAbout" className="flex flex-col">
            A propos
            <TextArea
              id="profileAbout"
              name="profileAbout"
              placeholder="A propos"
              value={snapshot.input.profileAbout}
            ></TextArea>
          </label>
        </div>
        <button
          onClick={(e) => {
            const userData = {
              user_id: userId,
              firstname: snapshot.input.profileFirstname,
              lastname: snapshot.input.profileLastname,
              gender: gender,
              birthdate: snapshot.input.profileBirthdate,
              city: snapshot.input.profileCity,
              postal_code: snapshot.input.profilePostalCode,
              region: snapshot.input.profileRegion,
              country: snapshot.input.profileCountry,
              adress: snapshot.input.profileAdress,
              phone_number: snapshot.input.profilePhoneNumber,
              email: snapshot.input.profileEmail,
              facebook_name: snapshot.input.profileFacebookName,
              profile_avatar: profileAvatarImage,
              about: snapshot.input.profileAbout,
            };

            usersService
              .updateUser(userId, userData)
              .then(() => {
                toast.success("Données modifiées");
                window.location.reload();
              })
              .catch((error) => toast.error(error.message));

            let formData = new FormData();

            formData.append("profileAvatar", profileAvatarImage);

            formData.append("user_id", userId);

            usersService
              .uploadUserImage(formData)
              .then((response) => {
                console.log(response.data);
                //toast.success("Photo ajoutée");
                //actions.toggleLoader();
              })
              .catch((error) => console.error(error));
          }}
          className="bg-blue-500 w-full text-white px-3 py-2 my-6 rounded-md"
        >
          Confirmer
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
