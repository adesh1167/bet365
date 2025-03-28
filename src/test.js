import generateLogo from "./functions/generateLogo";

const jerseyPresets = [
    {
        "type": 12,
        "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#5C8FAE,#FFDF1B,#0046A8,#2B72DE,#C40010,#2B72DE,#F0F0F0"
    },
    {
        "type": 16,
        "colors": "#F0F0F0,#C40010,#F0F0F0,#F0F0F0,#C40010,#0046A8,#2B72DE,#2B72DE,#C40010,#2B72DE,#F0F0F0"
    },
    {
        "type": 17,
        "colors": "#C0D6FE,#832034,#832034,#832034,#999999,#888888,#B0E8E6,#F0F0F0,#FBED32,#5F002B,#F0F0F0"
    },
    {
        "type": 10,
        "colors": "#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#F0F0F0,#0A0A0A,#0A0A0A,#0A0A0A,#0A0A0A,#025C17,#0A0A0A"
    },
    {
        "type": 18,
        "colors": "#79ADE2,#679FEA,#79ADE2,#79ADE2,#5C8FAE,#FFDF1B,#F0F0F0,#F0F0F0,#FDBD0F,#F0F0F0,#F0F0F0"
    },
    {
        "type": 16,
        "colors": "#0A0A0A,#0A0A0A,#F0F0F0,#F0F0F0,#F0F0F0,#FFDF1B,#262626,#0A0A0A,#F4F48A,#F0F0F0,#0A0A0A"
    },
    
]

function GenerateRandomJersey(data){
    const index = data % jerseyPresets.length;
    const preset = jerseyPresets[index];
    return generateLogo(preset.type, preset.colors)
}

export default GenerateRandomJersey;