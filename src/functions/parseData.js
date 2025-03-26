import { createElement } from "react";
import { featuredDate } from "./formatDate";

export function parseData(data){
  const parser = new DOMParser();
  const divs = parser.parseFromString(data, 'text/html');
  const sections = divs.body.children;

  console.log(sections[3]);
  return sections;
}

export function parseData1(data) {
    // 1) Split the entire string by the '|' character into "sections"
    const sections = data.split('|');
    const parsedData = {};
  
    // 2) Process each section
    sections.forEach(section => {
      // Split by ';' to get individual tokens
      const tokens = section.split(';').map(t => t.trim()).filter(Boolean);
  
      let sectionKey = null;
      let obj = {};
  
      tokens.forEach(token => {
        // If the token has '=' we treat it as a key-value pair
        if (token.includes('=')) {
          const [k, v] = token.split('=');
          obj[k.trim()] = (v || '').trim();
        } 
        // Otherwise, it's a standalone token (like "PA", "MG", etc.)
        else {
          // We treat the first standalone token as the "section key"
          // If there happen to be multiple standalone tokens, you can decide whether
          // to keep only the first, or store them all in an array, etc.
          if (!sectionKey) {
            sectionKey = token.trim();
          } else {
            // If you prefer to capture extra flags, you can store them here:
            // obj[token.trim()] = true;
          }
        }
      });
  
      // 3) Store in parsedData under the discovered key (or in a _NO_KEY array if none)
      if (sectionKey) {
        if (!parsedData[sectionKey]) {
          parsedData[sectionKey] = [];
        }
        parsedData[sectionKey].push(obj);
      } else {
        // If there's no standalone token (e.g., the section was all key=value pairs),
        // store it under a special placeholder
        if (!parsedData._NO_KEY) {
          parsedData._NO_KEY = [];
        }
        parsedData._NO_KEY.push(obj);
      }
    });
  
    return parsedData;
}

export function getMatches (data){
    return data.PA.filter(item => item.FD)
}

export function addOdds(matches, data){
    return matches.map(match => {
        const oddObjs = data.PA.filter(odd => odd.FI === match.FI && (odd.OD && odd.FS && odd.OI));
        const odds = oddObjs.map(odd => odd.OD)
        return {
            ...match,
            odds
        }
    })
}

export function sortMatchesByDate(matches, zone){
    const dates = {};
    matches.forEach(match => {
        const date = featuredDate(match.BC, zone);
        if(!dates[date]){
            dates[date] = [];
        }
        dates[date].push(match);
    })

    return dates;
}

export function getFeaturedMatches(data){
    return data.MG.filter(item => item.PX)
}

export function addMatchDetails(highlights, data){
    let PFs = {};

    return highlights.map(highlight => {
        let index = 0;
        if(PFs[highlight.PF] === undefined){
            index = PFs[highlight.PF] = 0;
        } else{
            index = ++PFs[highlight.PF];
        }

        const detailsObj = data.MA.filter(detail => detail.FI === highlight.PF).slice(index, index + 3)
        const details = detailsObj.map(detail => detail.NA)
        return {
            ...highlight,
            details
        }
    })
}

export function getCarousel(data){
    const offer = data.MG.filter(item => item.LM);
    const others = data.EV.filter(item => item.SB);
    return [...offer, ...others];
}

export function convertOddsToDecimal(odd) {
    if (odd.includes('/')) {
        const [numerator, denominator] = odd.split('/').map(Number);
        return ((numerator / denominator) + 1).toFixed(2);
    } else {
        return (Number(odd) + 1).toFixed(2);
    }
}
  
  