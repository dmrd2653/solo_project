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

function* placesSaga() {
    yield takeEvery('FETCH_PLACES', fetchAllPlaces);

}

export default placesSaga;