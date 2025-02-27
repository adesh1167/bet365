import { DateTime } from "luxon";

export default function formatDate(seconds, full=false){
    const now = DateTime.now();
    const date = DateTime.fromSeconds(seconds);
  
    if (date.hasSame(now, 'day')) {
      return full ? `Today ${date.toLocaleString(DateTime.TIME_24_SIMPLE)}` : date.toLocaleString(DateTime.TIME_24_SIMPLE);
    } else if (date.plus({ days: 1 }).hasSame(now, 'day')) {
    //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
      return `Yesterday`;
    } else if (date.minus({ days: 1 }).hasSame(now, 'day')) {
    //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
      return full ? `Tomorrow ${date.toLocaleString(DateTime.TIME_24_SIMPLE)}` : `Tomorrow`;
    } else if (date.hasSame(now, 'year')) {
      return full ? `${date.toLocaleString({month: 'short', day: 'numeric'})} at ${date.toLocaleString(DateTime.TIME_24_SIMPLE)}` : date.toLocaleString({month: 'short', day: 'numeric'});
    } else {
      // Otherwise, show just the date
      return date.toLocaleString(DateTime.DATE_MED); 
    }
}

export function highlightDate(seconds, full=false, zone = "+0"){
  // const now = DateTime.now();
  // const date = DateTime.fromSeconds(seconds);
  
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromSeconds(seconds, "yyyy-MM-dd HH:mm:ss", {zone: "UTC+1"});
  date = date.setZone(`UTC${zone}`);
  
  let newDate = {};

  if (date.hasSame(now, 'day')) {
    if(full){
      newDate.text = "today";
      newDate.rest = date.toLocaleString(DateTime.TIME_24_SIMPLE)
    } else{
      newDate.rest = date.toLocaleString(DateTime.TIME_24_SIMPLE);
    }
  } else if (date.plus({ days: 1 }).hasSame(now, 'day')) {
    //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    newDate.rest = "yesterday";
  } else if (date.minus({ days: 1 }).hasSame(now, 'day')) {
    //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    if(full){
      newDate.text = "tomorrow";
      newDate.rest = date.toLocaleString(DateTime.TIME_24_SIMPLE)
    } else{
      newDate.text = "tomorrow";
    }
  } else if (date.hasSame(now, 'year')) {
    if(full){
      newDate.rest = `${date.toLocaleString({month: 'short', day: 'numeric'})} at ${date.toLocaleString(DateTime.TIME_24_SIMPLE)}`
    } else{
      newDate.rest = date.toLocaleString({month: 'short', day: 'numeric'});
    }
  } else {
    // Otherwise, show just the date
    newDate.rest = date.toLocaleString(DateTime.DATE_MED); 
  }

  return newDate
}

export function ticketDate(dateString, zone){
  dateString = dateString.trim();
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm:ss", {zone: "UTC+1"});
  date = date.setZone(`UTC${zone}`);

  if (date.hasSame(now, 'day')) {
    return "Today | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.plus({ days: 1 }).hasSame(now, 'day')) {
  //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    return "Yesterday | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.minus({ days: 1 }).hasSame(now, 'day')) {
  //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    return "Tomorrow | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.hasSame(now, 'year')) {
    return date.toFormat("MMM dd | HH:mm");
  } else {
    // Otherwise, show just the date
    return date.toFormat("dd/MM/yyyy | HH:mm");
  }
}

export function transactionDate(dateString, zone){
  dateString = dateString.trim();
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm:ss", {zone: "UTC+1"});
  date = date.setZone(`UTC${zone}`);

  if (date.hasSame(now, 'day')) {
    return "Today | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.plus({ days: 1 }).hasSame(now, 'day')) {
  //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    return "Yesterday | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.minus({ days: 1 }).hasSame(now, 'day')) {
  //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    return "Tomorrow | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.hasSame(now, 'year')) {
    return date.toFormat("MMM dd | HH:mm");
  } else {
    // Otherwise, show just the date
    return date.toFormat("dd/MM/yy | HH:mm");
  }
}

export function matchDate(dateString, zone){
  dateString = dateString.trim();
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm", {zone: "UTC+1"});
  date = date.setZone(`UTC${zone}`);

  if (date.hasSame(now, 'day')) {
    return "Today " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.plus({ days: 1 }).hasSame(now, 'day')) {
  //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    return "Yesterday " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.minus({ days: 1 }).hasSame(now, 'day')) {
  //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
    return "Tomorrow " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  } else if (date.hasSame(now, 'year')) {
    return date.toFormat("MMM dd - HH:mm");
  } else {
    // Otherwise, show just the date
    return date.toLocaleString(DateTime.DATE_MED);
  }
}