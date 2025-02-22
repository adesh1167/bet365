export default function generateBookingCode(prefix = "1") {
    const characters = 'ABCDEF0123456789';
    const length = 6;
    let randomCode = prefix;
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters[randomIndex];
    }

    return randomCode;
  }
  