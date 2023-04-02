import React from "react";
import { useLoaderData } from "react-router-dom";

const Country = () => {
  const country = useLoaderData()[0];
  return (
    <>
      <section>
        <div className="container">
          <div className="text text-4xl font-bold text-center py-5">
            <h2>To know more about {country.name.common}</h2>
          </div>
          <div className="card p-5 w-1/2 bg-slate-400 mx-auto">
            <div className="flag">
              <img
                className="object-center w-full h-full"
                src={country.flags.png}
                alt=""
              />
            </div>
            <div className="info text-center">
              <h2 className="name py-3 text-2xl text-white font-bold">
                {country.name.common}
              </h2>
              <p className="name text-xl font-bold">Region: {country.region}</p>
              <p className="name text-xl font-bold">area: {country.area}</p>
              <p className="name text-xl font-bold">
                population: {country.population}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Country;
