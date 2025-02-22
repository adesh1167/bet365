export default function interpolateText(text, data) {
    return text.replace(/\{(.+?)\}/g, (match, key) => {
        return data[key.trim()]
    });
}