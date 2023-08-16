import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import './PlaceInfo.css';

function PlaceInfo() {
    const info = useSelector(store => store.places.thisPlace);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const back = () => {
        history.push('/user');
    }
    useEffect(() => {
        dispatch({ type: 'FETCH_INFO', payload: id });
    }, [id]);

    return (
        <div className="flex-container">
        <h3>{info.name}</h3>
        <p>Location: {info.location}</p>
        <p>Category: {info.category}</p>
        <p>Notes: {info.notes}</p>
        <button>Search for it!</button>
        <button onClick={back}>Back</button>
        </div>
    )
}

export default PlaceInfo;