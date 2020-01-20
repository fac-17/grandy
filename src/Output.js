import React, {useState, useEffect} from 'react';

const PokeAPI = () => {
    const [hasError, setErrors] = useState(false);
    const [poke, setPoke] = useState({});

    useEffect(() =>
        fetch("https://pokeapi.co/api/v2/ability/{number}/")
            .then(res => res.json())
            .then(res => this.setState({ poke: res}))
            .catch(() => this.setState({ hasError: true }))    
    );

return <div>{JSON.stringify(poke)}</div>;

};

export default PokeAPI;