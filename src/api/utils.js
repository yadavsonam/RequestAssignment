export function formatDate(date) {
        let nDate = new Date(date);
        let day = nDate.getDate();
        if (day < 10) {
            day = "0" + day;
        }
        let month = nDate.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }
        let year = nDate.getFullYear();
        return year + "-" + month + "-" + day;
}
