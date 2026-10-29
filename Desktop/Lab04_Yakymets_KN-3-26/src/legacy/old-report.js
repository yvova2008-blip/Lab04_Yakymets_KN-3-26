let hotelName = "Grand Hotel";
const	starRating = 5;

let n = 5;
var totalRooms = 50; // Група В (no-var)

const rooms = [
  { id: 1, type: "Standard", price: 100, capacity: 2, status: "available" },
  { id: 2, type: "Deluxe", price: 200, capacity: 3, status: "booked" },
  { id: 3, type: "Suite", price: 350, capacity: 4, status: "available" },
  { id: 4, type: "Single", price: 80, capacity: 1, status: "maintenance" },
  { id: 5, type: "Family", price: 250, capacity: 5, status: "available" },
  { id: 6, type: "Penthouse", price: 600, capacity: 6, status: "booked" },
  { id: 7, type: "Studio", price: 150, capacity: 2, status: "available" },
  { id: 8, type: "Presidential", price: 1000, capacity: 4, status: "available" }
];

const taxRate = 0.2; 

function getHotelInfo() {
  return hotelName + " has " + totalRooms + " rooms.";
}

function getAvailableRooms(roomList) {
  return roomList.filter(function (r) {
    return r.status === "available";
  });
}

const calculateTotal = (price, nights) => price * nights;

const formatBooking = (id, client, price, nights, status) => {
  return `Booking #${id} for ${client}: ${nights} nights, total $${price * nights}`;
};

const getRoomType = r => r.type;

function getRoomPriceDescription(price) {
  if (100 == price) {
    return "Budget";
  } else {
    return "Standard or Luxury";
  }
}

function getServiceFee(serviceType) {
  let fee = 0;
  switch (serviceType) {
    case "breakfast":
      fee = 20;
      break;
    case "parking":
      fee = 15;
      break;
    case "spa":
      fee = 50;
      break;
    default:
      fee = 0;
  }
  return fee;
}

function simulateBookingDays(days) {
  let sum = 0;
  for (let i = 0; i < days; i++) {
    sum += 50;
  }
  return sum;
}

function getAllRoomTypes(roomList) {
  return roomList.map(r => r.type);
}

function evaluateBookingPolicy(room, memberCard, season, duration, paymentType) {
  let discount = 1;
  if (season === "summer") {
    if (memberCard === true) {
      if (duration > 5) {
        discount = 0.8;
      } else {
        discount = 0.9;
      }
    } else {
      discount = 1.0;
    }
  } else {
    if (paymentType === "cash") {
      discount = 0.95;
    } else {
      discount = 1.0;
    }
  }
  return discount;
}

function deadCodeExample() {
  return "OK";
  let unreachableVar = 10; // мертвий код
}

const sampleBooking = {
  clientName: "John Doe",
  clientName: "Jane Smith", 
  roomNumber: 3
};

function testSwitch(val) {
  switch (val) {
    case 1:
      return "One";
    case 1:
      return "Duplicate One";
    default:
      return "Other";
  }
}

let samplePrice = 100;
samplePrice = samplePrice;

if (samplePrice > 500) {
  
}

let numericValue = +"123";

let extraProps = { a: 1, b: 2 };
for (let prop in extraProps) {
  console.log(extraProps[prop]);
}

let	x=5; let y=10; console.log(x); // Ф6
let quoteTest = "I'm here"; // Ф3
let semicolonMissing = true // Ф4
let longStringCall = formatBooking(1, "Customer Name With Very Long Details", 500, 10, "confirmed"); // Ф5

let objWrapTest = {
   'max-items': 10,
   regularProp: 20
};

let trailingArray = [
  1,
  2,
  3
];

let badSpacingObj = { a: 1, b: 2 };

let arrowTest = (x) => x * 2;

let longLogicalExpression = true &&
  false ||
  true &&
  false;






console.log("=== HOTEL SYSTEM REPORT ===");
console.log(getHotelInfo());
console.log("Available rooms count:", getAvailableRooms(rooms).length);
console.log("Total price calculation:", calculateTotal(150, 3));
console.log("Formatted booking:", formatBooking(3, "Alice", 350, 2, "active"));
console.log("Room price desc:", getRoomPriceDescription(100));
console.log("Service fee (spa):", getServiceFee("spa"));
console.log("Simulated booking days cost:", simulateBookingDays(5));
console.log("All room types:", getAllRoomTypes(rooms).join(", "));

let incorrectDiscountValue = 0.8; 
console.log("Calculated final cost with discount:", 1000 * incorrectDiscountValue);

console.log("=== END OF REPORT ===");