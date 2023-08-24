import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";
import { Typography } from "@mui/material/styles/createTypography";
import "./Form.css";

function PlaceForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newPlace, setNewPlace] = useState({
        name: '', location: '', category: '', notes: ''
    });

    const addPlace = () => {
        dispatch({ type: 'ADD_PLACE', payload: newPlace});
        setNewPlace({name: '', location: '', category: '', notes: ''})
        history.push('/MainPage')
    };

    const back = () => {
        history.push('/MainPage')
    };


    return(
        <div className="form">
            <center>
                <h2>Add a Place</h2>

                <div className="form-container">
                    <div className="textfield">
                        <TextField
                        size="small" 
                        label="Name of Place"
                        variant="filled"
                        value={newPlace.name}
                        required
                        multiline
                        onChange={(event) => {setNewPlace({ ...newPlace, name: event.target.value})}} 
                        color="success"
                        />
                    </div>

                    <div className="textfield">
                        <TextField
                        size="small" 
                        label="Name of Location"
                        variant="filled"
                        value={newPlace.location}
                        required
                        onChange={(event) => {setNewPlace({ ...newPlace, location: event.target.value})}} 
                        color="success"
                        />
                    </div>

                    <div className="textfield">
                        <TextField
                        size="small" 
                        label="Category"
                        variant="filled"
                        value={newPlace.category}
                        required
                        onChange={(event) => {setNewPlace({ ...newPlace, category: event.target.value})}} 
                        color="success"
                        />
                    </div>

                    <div className="textfield">
                        <TextField 
                        size="small"
                        label="Notes"
                        variant="filled"
                        value={newPlace.notes}
                        multiline
                        onChange={(event) => {setNewPlace({ ...newPlace, notes: event.target.value})}} 
                        color="success"
                        />
                    </div>
                </div>
                <br/> <br/>

                <button className="btn" onClick={addPlace}>Add</button>
                <br/> <br/> <br/>
                <button className="btn" onClick={back}>Back</button>
            </center>
        </div>


    )
}

export default PlaceForm;