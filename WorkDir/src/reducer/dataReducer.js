export default (state={filterValue:'All', requestData:[]},action) => {

    if (action.type === "setData") {
        let newRequestData = action.payload.requestData;
        let newState = {...state, requestData:newRequestData}
        return newState
    }
    else if(action.type === "filterData") {
        return {...state, filterValue:action.payload.filterValue};
    }
    else if(action.type === "deleteData") {
        let nData = state.requestData;
        let dataItem = action.payload.dataItem;
        let finalData = nData.filter(request => dataItem.id !== request.id);
        let newState = {...state, requestData:finalData};
        return newState;
    }else if(action.type === 'updateStatus'){
        let dataItem = action.payload.dataItem;
        let status = action.payload.status;
        let nData = state.requestData;
        let finalData = nData.map((item) => {
            if(item.id === dataItem.id){
                item.status = status;
                let nDate = new Date();
                let dateTime =  nDate.getFullYear() + "-"
                    + (nDate.getMonth()+1)  + "-"
                    + nDate.getDate() + " "
                    + nDate.getHours() + ":"
                    + nDate.getMinutes() + ":"
                    + nDate.getSeconds();
                item.updated_at = dateTime;
            }
            return item;
        });
        let newState = {...state, requestData:finalData}
        return newState;
    }

    return state;
}