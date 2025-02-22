function getDate(dateString, timeZone, full = false, isString = true){
    let timeZoneValue = 1 - (new Date().getTimezoneOffset())/60 - timeZone // (1(Nig) - timeZone) + (-timezoneOffset)
    timeZoneValue = (timeZoneValue >= 0 ? `+${timeZoneValue}` : `${timeZoneValue}`)

    let date;

    if(isString) date = new Date(dateString + timeZoneValue);
    else date = new Date(dateString)

    const year = date.getFullYear();
    let month = '0'+(Number(date.getMonth())+1);
    month = month.slice(-2);
    let day = '0'+(Number(date.getDate()));
    day = day.slice(-2);


    let hour = '0'+(Number(date.getHours()));
    hour = hour.slice(-2);
    let minute = '0'+(Number(date.getMinutes()));
    minute = minute.slice(-2);
    let second = '0'+(Number(date.getSeconds()));
    second = second.slice(-2);

    let time = `${hour}:${minute}${full ? `:${second}` : ''}`;

    return `${day}/${month}/${year} ${time}`
}

export default getDate;