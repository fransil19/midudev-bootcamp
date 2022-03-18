import { Countrie } from "./Countrie"

export const Content = ({Countries, handleClick}) => {
    if (Countries.length > 10) {
      return <p>Too many matches, specify another filter</p>
    }
    else if(Countries.length === 1){
      return <Countrie countrie={Countries[0]} />
    }
    else{
      return Countries.map(fCountrie => {
        return (
          <div key={fCountrie.name.common}>
            <p>{fCountrie.name.common} <button type='button' onClick={handleClick} id={fCountrie.name.common}>show</button></p>
          </div>
        )
      })
    }
  }