import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Planet = () => {
    const { id } = useParams();
    const [planetData, setPlanetData] = useState();


    useEffect(() => {

        // Making an HTTP GET request to the Star Wars API using axios
        axios.get(`https://swapi.dev/api/planets/${id}`).then(response => {
            setPlanetData(response.data) // Updating the "planetData" state with the response data from the API
        })
            .catch((error) => {
                console.log(error)
            })
    }, [id])
    // Dependency Array ^ will re-run whenever the 'id' parameter changes

    return (
        <>
            {
                planetData &&
                <div style={{ margin: "20px" }}>
                    <h3><span style={{ color: "blue" }}>Name:</span> {planetData.name}</h3>
                    <h3><span style={{ color: "purple" }}>Climate: </span>{planetData.climate}</h3>
                    <h3><span style={{ color: "red" }}>Population: </span>{planetData.population}</h3>
                    <h3><span style={{ color: "turquoise" }}>Orbital Period: </span>{planetData.orbital_period}</h3>
                </div>
            }
        </>
    )





}

export default Planet