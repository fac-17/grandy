import React from "react";

const Form = ({ setClicked, setPokeIndex }) => {
  const handleSubmit = () => {
    const generateRandomNum = () => {
      return Math.floor(Math.random() * 151);
    };

    setPokeIndex(generateRandomNum());
    setClicked(true);
  };

  return <button onClick={handleSubmit}>Catch 'em!</button>;
};

export default Form;
