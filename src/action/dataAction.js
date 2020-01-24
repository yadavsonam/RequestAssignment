import {getRequests} from "../API";

export function sortData(data){
    data.sort(function(a,b){
        return new Date(b.updated_at) - new Date(a.updated_at);
    });
    return data;
}

//To Remove
/*function getData(payload){
    return {
        type:"getData",
        payload
    };
}*/

export function setData(requestData){
    return {
        type:"setData",
        payload:{
            requestData
        }
    };
}

const fetchReqData = async (dispatch, param) => {
    //To Remove
    //dispatch(getData());
    await getRequests(param).then(response => {
        response = sortData(response);
        dispatch(setData(response))
    })
};

const setFilter = (dispatch, filterValue) => {

    return dispatch({
        type: "filterData",
        payload:{
            filterValue
        }
    });
}

export const setFilterAction = (dispatch) => {
    return (filterValue) => setFilter(dispatch, filterValue)
}



const deleteData = (dispatch, dataItem) => {
    return dispatch({
        type: "deleteData",
        payload:{
            dataItem
        }
    });
}

export const deleteDataAction = (dispatch) => {
    return (dataItem) => deleteData(dispatch, dataItem)
}


const fetchDataAction = (dispatch, param) => {
    return () => fetchReqData(dispatch);
};
export default fetchDataAction;

// export function fetchData(dispatch, param) {
//     //
//     getRequests(param).then(response => {
//         //Set data action call
//         console.log(response)
//         dispatch(setData(response))
//     })
//
//     return dispatch(getData(param))
// }

const updateStatusData = (dispatch, dataItem,status) => {
    return dispatch({
        type: "updateStatus",
        payload:{
            dataItem,
            status
        }
    });
}

export const updateStatusAction = (dispatch) => {
    return (dataItem,status) => updateStatusData(dispatch, dataItem,status)
}