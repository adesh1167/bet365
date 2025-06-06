async function generateUUID2(dateStr, type) {
    // Get current date and time (YYYY-MM-DD HH:mm:ss)
  
    // Encode as Uint8Array
    const encoder = new TextEncoder();
    const data = encoder.encode(dateStr);
  
    // Hash using SHA-1
    const hashBuffer = await crypto.subtle.digest("SHA-1", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, "0")).join("");
  
    // Format as UUID v5
    
    const UUID = ([
      hashHex.substring(0, 8),
      hashHex.substring(8, 12),
      "4" + hashHex.substring(13, 16), // Set version to 5
      (parseInt(hashHex[16], 16) & 0x3 | 0x8).toString(16) + hashHex.substring(17, 20), // Variant
      hashHex.substring(20, 32),
    ]).join("-");

    console.log(UUID);
    return UUID

  }

  function generateUUID(timestamp) {
    // Convert timestamp to a number (removing non-numeric characters)
    const numericPart = timestamp.replace(/\D/g, ""); // Extracts only digits
  
    // Use a simple hash function to create a unique but consistent ID
    let hash = 0;
    for (let i = 0; i < numericPart.length; i++) {
      hash = (hash * 31 + numericPart.charCodeAt(i)) % 0xffffffff;
    }
  
    // Convert hash to a hexadecimal string and format the ID
    return "D" + Math.abs(hash).toString(16).toUpperCase();
  }

  export default generateUUID;
  