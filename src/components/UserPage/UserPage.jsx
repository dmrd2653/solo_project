import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './UserPage.css';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {

  // const user = useSelector((store) => store.user);
  const places = useSelector((store) => store.places);
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch({ type: 'FETCH_PLACES' })
  }, []);

  const toPlaceForm = () => {
    history.push('/PlaceForm/')
  };
  const deletePlace = (selectedPlace) => {
    dispatch({ type: 'DELETE_PLACE', payload: selectedPlace })
  }

  return (
    <>
    <div className="container">
      {/* <h2>Welcome, {user.username}!</h2> */}
      <h2>Bucket List</h2>
      <ul className='flex-container'>
        {places.map(place => {
          return (
            <li key={place.id}>
              <h4>{place.name}</h4>
              <button onClick={(event) => deletePlace(place.id)}>Remove</button>
            </li>
          )
        })}
      </ul>
      <div className='container'>
        <button onClick={toPlaceForm}>Add a Place</button>
      </div>
    </div>
  
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
