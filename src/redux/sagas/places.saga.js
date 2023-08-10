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

function* placesSaga() {
    yield takeEvery('FETCH_PLACES', fetchAllPlaces);
    yield takeEvery('ADD_PLACE', addNewPlace);
}

export default placesSaga;