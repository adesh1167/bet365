export default function replaceBookingCode(bookingCode, prefix = "1") {
    const length = 6;
    const bookingCodePostfix = bookingCode.slice(-length);
  
    const newBookingCode = prefix + bookingCodePostfix;
  
    return newBookingCode;
  }
  