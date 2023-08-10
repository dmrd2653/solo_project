import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function PlaceForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [newPlace, setNewPlace] = useState({
        name: '', location: '', category: '', notes: ''
    });

    const addPlace = () => {
        dispatch({ type: 'ADD_PLACE', payload: newPlace});
        setNewPlace({name: '', location: '', category: '', notes: ''})
        history.push('/user')
    };

    const back = () => {
        history.push('/user')
    };
    return(
        <>
        <h2>Add a Place</h2>
        <input type="text" value={newPlace.name} placeholder="Name"
            onChange={(event) => {setNewPlace({ ...newPlace, name: event.target.value})}}
            />
        <input type="text" value={newPlace.location} placeholder="Location"
            onChange={(event) => {setNewPlace({ ...newPlace, location: event.target.value})}}
            />
        <input type="text" value={newPlace.category} placeholder="Category"
            onChange={(event) => {setNewPlace({ ...newPlace, category: event.target.value})}}
            />
        <input type="text" value={newPlace.notes} placeholder="Notes"
            onChange={(event) => {setNewPlace({ ...newPlace, notes: event.target.value})}}
            />
        <button onClick={addPlace}>Add</button>
        <br/>
        <button onClick={back}>Back</button>
        <br/>
        </>


    )
}

export default PlaceForm;