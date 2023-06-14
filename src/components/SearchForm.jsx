import React, { useState } from 'react';
import axios from 'axios';
import People from '../pages/People';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link } from "react-router-dom";
import obiImage from "./images/Obi_won_Kanobi.png"





const SearchForm = (props) => {
    // State for selecting "people/planets"
    const [userSelect, setUserSelect] = useState('people');
    // Selecting number(id) user types
    const [numberInput, setNumberInput] = useState();
    // errors for wrong number input
    const [numberErr, setNumberErr] = useState('');
    const [image, setImage] = useState(false);
    const navigate = useNavigate();

    // const fetchData = () => {
    //     axios.get('https://swapi.dev/api/').then(response => {
    //         setStarWarsPeople(response)
    //         console.log(response)
    //     })
    //         .catch((error) => {
    //             console.log(error)
    //         })
    // }

    const submitHandler = (e) => {
        e.preventDefault();
        if (userSelect == 'people' && numberInput < 83) {
            navigate(`/people/${numberInput}`)
            setNumberErr('')
            setImage('')
        }
        else if (userSelect == 'planets' && numberInput < 61) {
            navigate(`/planets/${numberInput}`)
            setNumberErr('')
            setImage('')
        } else if (userSelect == 'people' && numberInput >= 83) {
            setNumberErr("These arent the droids you're looking for!")
            setImage(true)
            navigate('/');

        } else if (userSelect == 'planets' && numberInput >= 61) {
            setNumberErr("These arent the droids you're looking for!")
            setImage(true)
            navigate('/');
        }
    }




    // handles user selection
    const changeHandler = (e) => {
        // setUserSelect('');
        setUserSelect(e.target.value);
    }

    // Handles number input
    const numberHandler = (e) => {
        setNumberInput(e.target.value);
    }

    return (
        <div className="container mt-5">
            <form onSubmit={submitHandler}>

                <div className="form-row align-items-center">
                    <div className="col-auto">
                        <label htmlFor="searchInput">Search for: </label>
                    </div>
                    <div className="col-auto">
                        <select onChange={changeHandler} defaultValue={userSelect} className="form-control">
                            <option>people</option>
                            <option>planets</option>
                        </select>
                    </div>
                </div>
                <div className="form-row align-items-center mt-3">
                    <div className="col-auto">
                        <label htmlFor="searchNumber">Enter ID:</label>
                    </div>
                    <div className="col-auto">
                        <input onChange={numberHandler}
                            type="number"
                            className="form-control"
                            id="searchNumber"
                            placeholder="Enter ID number"
                        />
                    </div>
                </div>
                <div className="form-row mt-3">
                    <div className="col">
                        <button type="submit" className="btn btn-primary">Search</button>
                    </div>
                </div>
            </form>
            <div style={{ margin: "20px" }} className="col">
                <Link to="/" className="btn btn-primary">Home</Link>
            </div>
            <div>
                <p style={{ color: "red" }}>{numberErr}</p>
                {image ? <img src={obiImage}></img> : ""}
            </div>
        </div>

    )
}
export default SearchForm