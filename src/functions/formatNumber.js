export default function formatNumber(number, hasComma=false, lang="en-US") {

    if (typeof number !== 'number' || isNaN(number)) {
        try {
            return Number(number).toLocaleString(lang, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        } catch (error) {
            
        }
    } else{
        return number.toLocaleString(lang, {minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: hasComma});
    }
}