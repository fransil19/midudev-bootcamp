import { Languages } from "./Languages"
import { Weather } from "./Weather"

export const Countrie = ({countrie}) => {
    return (
      <div>
        <h1>{countrie.name.common}</h1>
        <p>Capital: {countrie.capital[0]}</p>
        <p>Population: {countrie.population}</p>
        <h3>Languages</h3>
        <Languages languages={countrie.languages} />
        <img src={countrie.flags.png} alt="" />
        <Weather location={countrie.name.common} />
      </div>
    )
  }