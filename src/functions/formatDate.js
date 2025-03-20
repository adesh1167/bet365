import { DateTime } from "luxon";

export default function formatDate(seconds, full=false){
    const now = DateTime.now();
    const date = DateTime.fromSeconds(seconds / 1000);
  
    return date.toFormat("dd/MM/yyyy");
    
}

export function highlightDate(dateString, full=false, zone = "+0"){
  
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyyMMddHHmmss", {zone: "UTC+0"});

  if (!date.isValid) return("Invalid Date");

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

export function featuredDate(dateString, zone = "+0"){
  
  let date = DateTime.fromFormat(dateString, "yyyyMMddHHmmss", {zone: "UTC+0"});

  if (!date.isValid) return("Invalid Date");

  date = date.setZone(`UTC${zone}`);
  
  let newDate = {};

  return `${date.weekdayShort} ${date.toFormat('dd')} ${date.monthShort}`;

}

export function featuredTime(dateString, zone = "+0"){
  
  let date = DateTime.fromFormat(dateString, "yyyyMMddHHmmss", {zone: "UTC+0"});

  if (!date.isValid) return("Invalid Date");

  date = date.setZone(`UTC${zone}`);
  
  let newDate = {};

  return `${date.toLocaleString(DateTime.TIME_24_SIMPLE)}`;

}

export function manageTicketDate(dateString, zone){
  dateString = dateString.trim();
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm:ss", {zone: "UTC+1"});
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
    return date.toFormat("MMM dd HH:mm");
  } else {
    // Otherwise, show just the date
    return date.toFormat("dd/MM/yyyy HH:mm:ss");
  }
}

export function ticketDate(dateString, zone){
  dateString = dateString.trim();
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm:ss", {zone: "UTC+1"});
  date = date.setZone(`UTC${zone}`);

  // if (date.hasSame(now, 'day')) {
  //   return "Today | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  // } else if (date.plus({ days: 1 }).hasSame(now, 'day')) {
  // //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
  //   return "Yesterday | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  // } else if (date.minus({ days: 1 }).hasSame(now, 'day')) {
  // //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
  //   return "Tomorrow | " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  // } else if (date.hasSame(now, 'year')) {
  //   return date.toFormat("MMM dd | HH:mm");
  // } else {
    // Otherwise, show just the date
    return date.toFormat("dd/MM/yyyy HH:mm:ss");
  // }
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

export function matchDate(dateString, zone = "+1"){
  dateString = dateString.trim();
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm", {zone: "UTC+1"});
  date = date.setZone(`UTC${zone}`);

  // if (date.hasSame(now, 'day')) {
  //   return "Today " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  // } else if (date.plus({ days: 1 }).hasSame(now, 'day')) {
  // //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
  //   return "Yesterday " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  // } else if (date.minus({ days: 1 }).hasSame(now, 'day')) {
  // //   return `Yesterday ${date.toLocaleString(DateTime.TIME_SIMPLE)}`;
  //   return "Tomorrow " + date.toLocaleString(DateTime.TIME_24_SIMPLE);
  // } else if (date.hasSame(now, 'year')) {
  //   return date.toFormat("MMM dd - HH:mm");
  // } else {
    // Otherwise, show just the date
    // return date.toLocaleString(DateTime.DATE_MED);

    const newDate = {
      date: date.weekdayShort + " " + date.toFormat("dd MMM"),
      time: date.toLocaleString(DateTime.TIME_24_SIMPLE)
    }

    console.log(date, newDate);
    return newDate
  // }
}

export function isGreaterThan24hours(dateString, zone = "+1"){
  dateString = dateString.trim();
  const now = DateTime.now({zone: `UTC${zone}`});
  let date = DateTime.fromFormat(dateString, "yyyy-MM-dd HH:mm", {zone: "UTC+1"});
  date = date.setZone(`UTC${zone}`);

  const isGreater = (date.diff(now, "hours").as("hours") * -1) > 120;

  return isGreater;
}

export function isGreaterThanTime(variableDate, startSeconds, zone = "+1"){
  variableDate = variableDate.trim();
  // const now = DateTime.now({zone: `UTC${zone}`});
  // let date1 = DateTime.fromSeconds(startSeconds, {zone: "UTC+1"});
  let date2 = DateTime.fromSQL(variableDate, {zone: "UTC+1"});
  // date1 = date1.setZone(`UTC${zone}`);

  const date1Seconds = startSeconds/1000; 
  const date2Seconds = date2.toSeconds();

  console.log(date2Seconds, date1Seconds);

  const isGreater = date2Seconds >= date1Seconds;
  console.log(isGreater);

  return isGreater;
}