import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './UserPage.css';

function UserPage() {

  // const user = useSelector((store) => store.user);
  const places = useSelector((store) => store.places);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_PLACES' })
  }, []);


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
            </li>
          )
        })}
      </ul>
    </div>
  
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
