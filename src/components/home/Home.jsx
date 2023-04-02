import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Home.css";
const Home = () => {
  const data = useLoaderData();
  return (
    <>
      <section>
        <div className="container">
          <div className="text text-4xl font-bold text-center py-7 my-3 bg-orange-300">
            <h2>ALL COUNTRIES</h2>
          </div>
          <div className="grid grid-cols-3 gap-y-3 justify-items-center">
            {data.map((country) => (
              <Link key={country.cca3} to={`/country/${country.name.common}`}>
                <h3 className="text-xl hover:underline">
                  {country.name.common}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
