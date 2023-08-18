import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";


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
        history.push('/user')
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_INFO', payload: id });
    }, [id]);

    const back = () => {
        history.push('/user')
    };
    
    return(
        <>
        <h2>Update Info for {place.name}</h2>
        <input type="text" value={updatedInfo.name} placeholder="Name"
            onChange={(event) => {setUpdatedInfo({ ...updatedInfo, name: event.target.value})}}
            />
        <input type="text" value={updatedInfo.location} placeholder="Location"
            onChange={(event) => {setUpdatedInfo({ ...updatedInfo, location: event.target.value})}}
            />
        <input type="text" value={updatedInfo.category} placeholder="Category"
            onChange={(event) => {setUpdatedInfo({ ...updatedInfo, category: event.target.value})}}
            />
        <input type="text" value={updatedInfo.notes} placeholder="Notes"
            onChange={(event) => {setUpdatedInfo({ ...updatedInfo, notes: event.target.value})}}
            />
        <button onClick={update}>Update</button>
        <br/>
        <button onClick={back}>Back</button>
        <br/>
        </>


    )
}

export default UpdateInfo;