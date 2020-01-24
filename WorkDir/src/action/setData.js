export function sortData(data){
    data.sort(function(a,b){
        return new Date(b.updated_at) - new Date(a.updated_at);
    });
    return data;
};

function setData(rData){
    let requestData = sortData(rData);
    return {
        type:"setData",
        payload:{
            requestData
        }
    };
}

export default setData;