import AppointmentList from "../components/AppointmentList";
import Restaurants from "../components/Restaurants";
import { appointmentData } from "../helper/data";
import { useState } from "react";

const Home = () => {
  const [appointment, setAppointment] = useState(appointmentData);

  return (
    <main>
      {/* Section d'arrière-plan avec texte superposé */}
      <div className="background-container">
        <div className="overlay-text">
          <h1>Our food site makes it easy to find local food</h1>
          <p className="small-description">Experience fine dining at the world's most renowned restaurants. Our exclusive selection of venues offers a culinary adventure unlike any other. Indulge in world-class dishes, top-notch service, and unforgettable experiences.</p>
          </div>
      </div>

      {/* Section des restaurants */}
      <Restaurants apps={appointment} setApps={setAppointment} />

      {/* Liste des rendez-vous */}
      <AppointmentList apps={appointment} setApps={setAppointment} />
    </main>
  );
};

export default Home;
