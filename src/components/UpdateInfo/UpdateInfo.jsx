import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";

function UpdateInfo() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { id } = useParams();
    const place = useSelector(store => store.places.thisPlace);
    const [updatedInfo, setUpdatedInfo] = useState({id: `${place.id}`,
        name: `${place.name}`, location: `${place.location}`, 
        category: `${place.category}`, notes: `${place.notes}`
    });

    const update = () => {
        dispatch({ type: 'UPDATE_PLACE', payload: updatedInfo});
        history.push('/MainPage')
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_INFO', payload: id });
    }, [id]);

    const back = () => {
        history.push('/MainPage')
    };
    
    return(
        <>
        <center>
            <h2>Update Info for {place.name}</h2>
            <div className="container2">
                <div className="form-container">
                    <TextField 
                    label="Name of Place"
                    variant="filled"
                    value={updatedInfo.name}
                    onChange={(event) => {setUpdatedInfo({ ...updatedInfo, name: event.target.value})}} 
                    color="success"
                    />
                </div>

                <div className="form-container">
                    <TextField 
                    label="Name of Location"
                    variant="filled"
                    value={updatedInfo.location}
                    onChange={(event) => {setUpdatedInfo({ ...updatedInfo, location: event.target.value})}} 
                    color="success"
                    />
                </div>

                <div className="form-container">
                    <TextField 
                    label="Category"
                    variant="filled"
                    value={updatedInfo.category}
                    onChange={(event) => {setUpdatedInfo({ ...updatedInfo, category: event.target.value})}} 
                    color="success"
                    />
                </div>

                <div className="form-container">
                    <TextField 
                    label="Notes"
                    variant="filled"
                    value={updatedInfo.notes}
                    multiline
                    onChange={(event) => {setUpdatedInfo({ ...updatedInfo, notes: event.target.value})}} 
                    color="success"
                    />
                </div>
            </div>
            <br/> <br/>
                <button className="btn" onClick={update}>Update</button>
                <br/> <br/> <br/>
                <button className="btn" onClick={back}>Back</button>
        </center>
        </>


    )
}

export default UpdateInfo;