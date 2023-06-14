import { Routes, Route, Link } from "react-router-dom";
import { useParams } from "react-router";
import React, { useState, useEffect } from 'react';
import axios from 'axios';






const People = () => {
    const { id } = useParams();
    const [peopleData, setPeopleData] = useState();


    useEffect(() => {
        // Making an HTTP GET request to the Star Wars API using axios
        axios.get(`https://swapi.dev/api/people/${id}`).then(response => {
            setPeopleData(response.data) // Updating the "peopleData" state with the response data from the API
        })
            .catch((error) => {
                console.log(error)
            })
    }, [id])
    // Dependency Array ^ will re-run whenever the 'id' parameter changes

    return (

        <>
            {/* <button onClick={fetchData} style={{ marginTop: "100px" }} >Fetch Starwars API</button> */}
            {
                peopleData && // WHY DOES THIS WORK?
                <div style={{ margin: "20px" }}>
                    <h3><span style={{ color: "blue" }}>Name: </span> {peopleData.name}</h3>
                    <h3><span style={{ color: "purple" }}>Gender: </span>{peopleData.gender}</h3>
                    <h3><span style={{ color: "red" }}>Hair Color: </span>{peopleData.hair_color}</h3>
                    <h3><span style={{ color: "pink" }}>Height: </span>{peopleData.height}</h3>
                </div>
            }
        </>

    )
}

export default People