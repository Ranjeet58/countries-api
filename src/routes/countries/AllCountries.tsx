import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CountriesInterface } from "../../types/interfaces";


function AllCountries(props: any) {
  return (
    <section className="container-block">
      {props.countries.map(
        ({ name, population, region, capital, flags }: CountriesInterface) => (
          <Link
            key={name}
            to={`/${name.toLowerCase().replace(/\s/g, "%20")}`}
            className="inside-container"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{
                translateY: -10,
              }}
            >
              <section className="image-container">
                <img
                  className="image"
                  src={flags?.svg || flags?.png}
                  alt={name}
                />
              </section>
              <section className="info-block">
                <h2 className="info-block-h2"> {name}</h2>
                <section>
                  <p className="p">
                    <span className="category">Population:</span>{" "}
                    {population.toLocaleString()}
                  </p>
                  <p className="p">
                    <span className="category">Region:</span> {region}
                  </p>
                  <p className="p">
                    <span className="category">Capital:</span> {capital}
                  </p>
                </section>
              </section>
            </motion.div>
          </Link>
        )
      )}
    </section>
  );
}


export default  AllCountries;