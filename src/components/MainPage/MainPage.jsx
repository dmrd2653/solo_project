import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './MainPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function MainPage() {

  const places = useSelector((store) => store.places.places);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: 'FETCH_PLACES' })
  }, []);

  const toPlaceForm = () => {
    history.push('/PlaceForm/')
  };
  
  const toInfo = (selectedPlace) => {
    history.push(`/PlaceInfo/${selectedPlace.id}`);
  }

  const deletePlace = (selectedPlace) => {
    dispatch({ type: 'DELETE_PLACE', payload: selectedPlace })
  };


  return (
    <div className="main">
      <h2>Bucket List</h2>
      <div>
          {places.map(place => {
            return (
                <div className='flex-container' key={place.id}>
                  <h3 className='place' onClick={(event) => toInfo(place)}>{place.name}</h3>
                  <div>
                  <button className='delete' onClick={(event) => deletePlace(place.id)}>Remove</button>
                  </div>
                </div>
            );
          })}
      </div>
      <center>
        <button className='btn' onClick={toPlaceForm}>Add a Place</button>
        <br/> <br/> 
      </center>
    </div>
  );
}


export default MainPage;
