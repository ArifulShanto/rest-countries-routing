import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countries , setCountries] = useState([]);
    useEffect(()=>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    return (
        <div>
            <h1>Total Country : {countries.length}</h1>
            <div>
            {
                countries.map(country => <Country key = {country.name.common} country = {country}></Country>)
            }
            </div>
        </div>
    );
};

export default Home;