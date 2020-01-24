export function deleteData(dataItem){
    //let requestData = rData.filter(request => dataItem.id !== request.id);
    return {
        type:"deleteData",
        payload:{
            dataItem
        }
    };
}
export default deleteData;