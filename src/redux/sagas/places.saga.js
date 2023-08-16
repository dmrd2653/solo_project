import { put, takeEvery } from "redux-saga/effects";


function* fetchAllPlaces() {
    try {
        const response = yield fetch('/api/travel_list');
        if (!response.ok) {
            throw new Error("Failed to fetch list");
        }
        const list = yield response.json();
        yield put ({ type: 'SET_PLACES', payload: list});
    } catch {
        console.error(error);
    }
}

function* fetchInfo(action) {
    try {
        const response = yield fetch(`/api/travel_list/${action.payload}`);
        if (!response.ok) {
            throw new Error("Failed to fetch info");
        }
        const info = yield response.json();
        yield put({ type: 'SET_INFO', payload: info})
    } catch {
        console.error(error);
    }
}

function* addNewPlace(action) {
    try {
        yield fetch('/api/travel_list', {
            method: 'POST',
            body: JSON.stringify(action.payload),
            headers: {'Content-Type': 'application/json'}
        });
        yield put ({ type: 'FETCH_PLACES'})
    } catch (error) {
        console.error(error);
    }
}

// function* editPlace(action) {
//     try {
//         yield fetch(`/api/travel_list/${action.payload}`, {
//             method: 'PUT'
//         });
//         yield put({ type: 'FETCH_PLACES'})
//     } catch (error) {
//         console.error(error);
//     }
// }

function* deletePlace(action) {
    try {
        yield fetch(`/api/travel_list/${action.payload}`, {
            method: 'DELETE'
        });
        yield put({ type: 'FETCH_PLACES'})
    } catch (error) {
        console.error(error);
    }
}

function* placesSaga() {
    yield takeEvery('FETCH_PLACES', fetchAllPlaces);
    yield takeEvery('FETCH_INFO', fetchInfo);
    yield takeEvery('ADD_PLACE', addNewPlace);
    // yield takeEvery('EDIT_PLACE', editPlace);
    yield takeEvery('DELETE_PLACE', deletePlace)
}

export default placesSaga;