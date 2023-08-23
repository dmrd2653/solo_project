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
        history.push('/MainPage');
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
        <div className="main-container">
            <center className="title">
                <h3>{info.name}</h3> 
            </center>
            <div>
                <div className="info-container">
                    <p className="place-para">Location: {info.location}</p>
                    <p className="place-para">Category: {info.category}</p>
                    <p className="place-para">Notes: {info.notes}</p>
                </div>
            </div>

            <center>
                <button className="btn" onClick={(event) => updatePlace(info)}>🖊</button>
                <br/> <br/> <br/>
                <a href="https://www.google.com/maps/" className="btn" >Search</a>
                <br/> <br/> <br/>
                <button className="btn" onClick={back}>Back</button>
                {/* <UploadWidget />     */}
            </center>
            {/* <div className="flex-container">
                <div ref={containerRef} style={{ width: '1000px', margin: '3rem' }}></div>
            </div> */}
        </div>
    )
}

export default PlaceInfo;