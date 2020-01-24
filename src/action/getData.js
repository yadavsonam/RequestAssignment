import {getRequests} from "../API";

function sortData(data){
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

function setData(requestData){
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

