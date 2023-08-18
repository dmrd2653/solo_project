import React, { useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch, useSelector } from "react-redux";
import './PlaceInfo.css';
import UploadWidget from "../UploadWidget/UploadWidget";

function PlaceInfo() {
    const info = useSelector(store => store.places.thisPlace);
    const { id } = useParams();
    const history = useHistory();
    const dispatch = useDispatch();
    const containerRef = useRef(null);
    const updatePlace = (selectedPlace) => {
        history.push(`/UpdateInfo/${selectedPlace.id}`)
    };

    const back = () => {
        history.push('/user');
    }
    
    useEffect(() => {
        dispatch({ type: 'FETCH_INFO', payload: id });
    }, [id]);

    useEffect(() => {
        if (window && containerRef.current) {
            window.cloudinary.galleryWidget({
                container: containerRef.current,

                cloudName: 'dd2jeccca',

                mediaAssets: [{ tag: 'solo'}],
            }).render();
        }
    }, []);

    return (
        <div>
            <div className="flex-container">
                <h3>{info.name}</h3>
                <p>Location: {info.location}</p>
                <p>Category: {info.category}</p>
                <p>Notes: {info.notes}</p>
            </div>
            <div className="flex-container">
                <button onClick={(event) => updatePlace(info)}>🖊</button>
                <button>Search for it!</button>
                <button onClick={back}>Back</button>
                <UploadWidget />    
            </div>
            <div className="flex-container">
                <div ref={containerRef} style={{ width: '1000px', margin: '3rem' }}></div>
            </div>
        </div>
    )
}

export default PlaceInfo;