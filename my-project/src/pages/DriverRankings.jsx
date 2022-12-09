import axios from "axios";
import { useState } from "react";
import { data } from "../Data";
import ButtonD from "../assets/ButtonD";

function DriverRankings() {
  const [drivers, setDrivers] = useState(data.response);
  const [season, setSeason] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(season);
    const options = {
      method: "GET",
      url: "https://api-formula-1.p.rapidapi.com/rankings/drivers",
      params: { season: season },
      headers: {
        "X-RapidAPI-Key": "1e2e850ac9msh7c289f39ee50a35p1ca0eajsn229da1eaba8e",
        "X-RapidAPI-Host": "api-formula-1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setDrivers(response.data.response);
      })
      .catch(function (error) {
        console.error(error);
      });
    setSeason("");
  };

  return (
    <>
      <h1 className="text-8xl  text-left  text-gray-900 border-t-8 border-r-8 border-[#e10600] rounded-tr-lg my-10 container font-extrabold tracking-widest capitalize">
        F1 Driver Rankings
      </h1>
      <p className="container bg-zinc-200 p-6 w-3/4 font-medium  ">
        Check out this season's official F1 line-up. Full breakdown of drivers,
        points and current positions. Follow your favourite F1 drivers on and
        off the track.
      </p>

      <div className="container ">
        <form onSubmit={handleSubmit} className="p-12 grid grid-cols-4">
          <label htmlFor="season" className="text-3xl uppercase text-[black]">
            Please enter the year
          </label>
          <input
            type="text"
            name="season"
            id="season"
            value={season}
            placeholder="eg:Enter the year to get the driver rankings"
            onChange={(e) => {
              setSeason(e.target.value);
            }}
            className="border-4 border-gray-900 rounded-lg h-14 text-lg w-[100%] md:w-[90%] text-center outline-2 focus:outline-[#e10600] focus:ring-4 focus:ring-[#e10600] col-span-2 "
          />
          <button type="submit" onClick={handleSubmit}>
            <ButtonD>Submit</ButtonD>
          </button>
        </form>
      </div>
      <div className="container mx-auto ">
        <div className="grid mx-auto md:grid-cols-2 lg:grid-cols-3 gap-8 overflow-hidden">
          {drivers.map((driver) => (
            <div
              key={driver.driver.id}
              className="border-t-2 border-r-2 border-gray-900 rounded-tr-lg hover:bg-gradient-to-r from-gray-300 via-gray-300 to-red-600   hover:text-gray-900 hover:scale-[1.1]  transition duration-1000 ease-in-out shadow-lg shadow-indigo-300 divide-y divide-gray-200"
            >
              <div className="flex justify-between py-5 px-3 text-4xl font-black ">
                <p className="text-4xl">{driver.position}</p>
                <div className="text-4xl ">
                  <p>
                    {driver.points}{" "}
                    <span className="bg-gray-900 text-white px-2">PTS</span>
                  </p>
                </div>
              </div>
              <div className="flex gap-4 px-3">
                <div className="w-2 h-13 bg-blue-600"></div>
                <h2 className="text-2xl font-semibold  tracking-wide">
                  {driver.driver.name}
                </h2>
              </div>
              <p className="text-gray-400 mt-4 px-3">{driver.team.name}</p>
              <div className="flex items-end justify-around ">
                <p className="text-8xl font-black py-4">
                  {driver.driver.number}
                </p>
                <img
                  src={driver.driver.image}
                  alt={driver.driver.name}
                  className="aspect-square"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DriverRankings;
