import jerseyPresets from "../data/jerseyPresets";
import generateLogo from "./generateLogo";
// import generateLogo from "./functions/generateLogo";

function GenerateRandomJersey(data) {
    const index = getTextValue(data) % jerseyPresets.length;
    const preset = jerseyPresets[index];

    return {
        type: preset.type,
        colors: preset.colors,
        logo: generateLogo(preset.type, preset.colors)
    }
}

function getTextValue(text) {
    return text
        .toUpperCase() // Convert to uppercase for consistency
        .split("") // Split into characters
        .reduce((sum, char) => {
            let value = char.charCodeAt(0) - 64; // A=1, B=2, ..., Z=26
            return sum + (value >= 1 && value <= 26 ? value : 0); // Ignore non-letters
        }, 0);
}

export default GenerateRandomJersey;