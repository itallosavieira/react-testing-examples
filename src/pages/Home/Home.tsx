import { useState } from "react";


const Home = () => {
  const [buttonText, setButtonText] = useState('Show');

  const handleClick = () => {
    setButtonText((prev) => (
      prev === 'Show' ? 'Hide' : 'Show'
    ))
  }
  return (
    <>
      <h2> Home </h2>
      <button onClick={handleClick} role="button"> {buttonText} </button>
      { 
        buttonText === 'Show' ? 
        '' :
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      }
    </>
  )
}

export default Home;