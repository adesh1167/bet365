export default function formatNumber(number, hasComma = false, lang = "en-US") {

    if (typeof number !== 'number' || isNaN(number)) {
        try {
            return Number(number).toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        } catch (error) {

        }
    } else {
        return number.toLocaleString(lang, { minimumFractionDigits: 2, maximumFractionDigits: 2, useGrouping: hasComma });
    }
}

export function ordinal(n) {
    var s = ["th", "st", "nd", "rd"];
    var v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}