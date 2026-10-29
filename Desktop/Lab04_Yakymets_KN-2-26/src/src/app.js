let hotelName = "Grand Hotel";
const starRating = 5;

let roomCount = 5;
let totalRooms = 50;

const rooms = [
	{id: 1, type: "Standard", price: 100, capacity: 2, status: "available"},
	{id: 2, type: "Deluxe", price: 200, capacity: 3, status: "booked"},
	{id: 3, type: "Suite", price: 350, capacity: 4, status: "available"},
	{id: 4, type: "Single", price: 80, capacity: 1, status: "maintenance"},
	{id: 5, type: "Family", price: 250, capacity: 5, status: "available"},
	{id: 6, type: "Penthouse", price: 600, capacity: 6, status: "booked"},
	{id: 7, type: "Studio", price: 150, capacity: 2, status: "available"},
	{id: 8, type: "Presidential", price: 1000, capacity: 4, status: "available"},
];

function getHotelInfo() {
	return `${hotelName} (Rating: ${starRating}) has ${totalRooms} rooms.`;
}

function getAvailableRooms(roomList) {
	return roomList.filter((roomItem) => roomItem.status === "available");
}

const calculateTotal = (price, nights) => price * nights;

const formatBooking = (bookingId, clientName, price, nights, status) => {
	return `Booking #${bookingId} for ${clientName}: ${nights} nights, status: ${status}, total $${calculateTotal(
		price,
		nights
	)}`;
};

const getRoomType = (roomItem) => roomItem.type;

function getRoomPriceDescription(price) {
	if (price === 100) {
		return "Budget";
	}
	return "Standard or Luxury";
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
	for (let index = 0; index <= days; index++) {
		sum += 50;
	}
	return sum;
}

function getAllRoomTypes(roomList) {
	return roomList.map((roomItem) => getRoomType(roomItem));
}

function evaluateBookingPolicy(room, memberCard, season) {
	let discount = 1;
	if (season === "summer") {
		if (memberCard) {
			discount = 0.8;
		} else {
			discount = 0.9;
		}
	} else {
		discount = 1.0;
	}
	return discount;
}

function validUtilityFunction() {
	const activePrice = 100;
	if (activePrice > 500) {
		console.log("Expensive");
	}
}

const sampleBooking = {
	primaryClient: "John Doe",
	secondaryClient: "Jane Smith",
	roomNumber: 3,
};

function testSwitch(val) {
	switch (val) {
		case 1:
			return "One";
		case 2:
			return "Two";
		default:
			return "Other";
	}
}

let samplePrice = 100;
samplePrice = samplePrice + 10;

let numericValue = Number("123");

let extraProps = {a: 1, b: 2};
for (let prop in extraProps) {
	if (Object.prototype.hasOwnProperty.call(extraProps, prop)) {
		console.log(extraProps[prop]);
	}
}

let variableX = 5;
let variableY = 10;
if (variableX > 0) console.log(variableX);
console.log(variableY);

let quoteTest = "I'm here";
let semicolonMissing = true;
let longStringCall = formatBooking(
	1,
	"Customer Name With Very Long Details",
	500,
	10,
	"confirmed"
);

let objWrapTest = {
	"max-items": 10,
	regularProp: 20,
};

let trailingArray = [1, 2, 3];

let badSpacingObj = {a: 1, b: 2};

let arrowTest = (itemValue) => itemValue * 2;

let longLogicalExpression =
	(variableX > 0 && variableY > 0) ||
	(semicolonMissing && samplePrice > 0);

validUtilityFunction();
testSwitch(1);
console.log(sampleBooking.primaryClient);
console.log(numericValue);
console.log(quoteTest);
console.log(longStringCall);
console.log(objWrapTest);
console.log(trailingArray);
console.log(badSpacingObj);
console.log(arrowTest(5));
console.log(longLogicalExpression);
console.log(roomCount);
console.log(evaluateBookingPolicy(rooms[0], true, "summer"));

console.log("=== HOTEL SYSTEM REPORT ===");
console.log(getHotelInfo());
console.log("Available rooms count:", getAvailableRooms(rooms).length);
console.log("Total price calculation:", calculateTotal(150, 3));
console.log(
	"Formatted booking:",
	formatBooking(3, "Alice", 350, 2, "active")
);
console.log("Room price desc:", getRoomPriceDescription(100));
console.log("Service fee (spa):", getServiceFee("spa"));
console.log("Simulated booking days cost:", simulateBookingDays(5));
console.log("All room types:", getAllRoomTypes(rooms).join(", "));

let correctDiscountValue = 0.9;
console.log(
	"Calculated final cost with discount:",
	1000 * correctDiscountValue
);

console.log("=== END OF REPORT ===");