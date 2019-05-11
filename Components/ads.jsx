export function fetchAds() {
    return function (dispatch) {
        fetch(`https://fathomless-escarpment-67497.herokuapp.com/ads/`)
        .then((res)=> {return res.json()})
        .then((data) => {
            dispatch({
                type: 'FETCH_ADS_SUCCESS',
                payload: data
            })
        })
    }
}
export function addAds(ads){
    return (dispatch) => {
        fetch(`https://fathomless-escarpment-67497.herokuapp.com/ads/`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(ads)
        })
        .then((res) => {return res.json()})
        .then((data) => {
            dispatch({
                type: 'ADD_AD',
                payload: data
            })
        })
    }
}

export function deleteAds(_id){
    return (dispatch) => {
        fetch(`https://fathomless-escarpment-67497.herokuapp.com/ads/${_id}`,{
            method:'DELETE',
        })
        .then((res) => {return JSON.stringify(res)})
        .then(data => {
            dispatch({
                type: 'DELETE_AD',
                payload: _id
            })
        })
    }
}
export function updateAds(ads) {
    return (dispatch) => {
        fetch(`https://fathomless-escarpment-67497.herokuapp.com/ads/`, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            method: 'PUT',
            body: JSON.stringify(ads)
        })
            .then((res) => {
                return res.json()
            })
            .then((data) => {
                dispatch(fetchAds())
            })
    }
};
export function getAds(_id){
    return (dispatch) => {
        fetch(`https://fathomless-escarpment-67497.herokuapp.com/ads/${_id}`,{
            method: 'GET'
        })
        .then((res)=> {return res.json()})
        .then((data)=> {
            dispatch({
                type: 'EDIT_PRODUCT',
                payload: data
            })
        })
    }
}