```javascript
let selectedCarName = "";
let selectedCarPrice = 0;


// ================= OPEN BOOKING =================

function openBooking(carName, price) {

    selectedCarName = carName;
    selectedCarPrice = price;

    document.getElementById("bookingModal").style.display = "flex";

    document.getElementById("selectedCar").innerHTML =
        `<strong>Selected Car:</strong> ${carName}`;

    calculatePrice();
}


// ================= CLOSE BOOKING =================

function closeBooking() {

    document.getElementById("bookingModal").style.display = "none";

}


// ================= CALCULATE PRICE =================

function calculatePrice() {

    const start =
        document.getElementById("modalPickupDate").value;

    const end =
        document.getElementById("modalDropDate").value;


    if (!start || !end) {

        document.getElementById("totalPrice").innerText =
            "₹" + selectedCarPrice;

        return;
    }


    const startDate = new Date(start);
    const endDate = new Date(end);


    const difference =
        endDate - startDate;


    let days =
        Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );


    if (days < 1) {
        days = 1;
    }


    const total =
        days * selectedCarPrice;


    document.getElementById("totalPrice").innerText =
        "₹" + total.toLocaleString("en-IN");

}


// ================= DATE LISTENERS =================

document
    .getElementById("modalPickupDate")
    .addEventListener(
        "change",
        calculatePrice
    );


document
    .getElementById("modalDropDate")
    .addEventListener(
        "change",
        calculatePrice
    );


// ================= CONFIRM BOOKING =================

function confirmBooking() {

    const name =
        document.getElementById("customerName").value;

    const phone =
        document.getElementById("phone").value;

    const pickup =
        document.getElementById("modalPickup").value;

    const pickupDate =
        document.getElementById("modalPickupDate").value;

    const dropDate =
        document.getElementById("modalDropDate").value;


    if (
        name === "" ||
        phone === "" ||
        pickup === "" ||
        pickupDate === "" ||
        dropDate === ""
    ) {

        alert("Please fill all booking details.");

        return;
    }


    if (new Date(dropDate) < new Date(pickupDate)) {

        alert("Drop-off date cannot be before pick-up date.");

        return;
    }


    const startDate =
        new Date(pickupDate);

    const endDate =
        new Date(dropDate);


    let days =
        Math.ceil(
            (endDate - startDate) /
            (1000 * 60 * 60 * 24)
        );


    if (days < 1) {
        days = 1;
    }


    const total =
        days * selectedCarPrice;


    // Add booking to table

    const table =
        document.getElementById("bookingTable");


    const row =
        table.insertRow();


    row.innerHTML = `

        <td>${table.rows.length}</td>

        <td>${selectedCarName}</td>

        <td>${pickupDate}</td>

        <td>${dropDate}</td>

        <td>
            <span class="confirmed">
                Confirmed
            </span>
        </td>

    `;


    alert(
        "Booking confirmed successfully!\n\n" +
        "Car: " + selectedCarName +
        "\nCustomer: " + name +
        "\nTotal: ₹" + total.toLocaleString("en-IN")
    );


    closeBooking();

    document
        .getElementById("bookings")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// // ================= SEARCH CARS =================

function searchCars() {

    const pickup =
        document.getElementById("pickupLocation").value;

    const drop =
        document.getElementById("dropLocation").value;

    const pickupDate =
        document.getElementById("pickupDate").value;

    const dropDate =
        document.getElementById("dropDate").value;


    if (
        pickup === "" ||
        drop === "" ||
        pickupDate === "" ||
        dropDate === ""
    ) {

        alert("Please enter all search details.");

        return;
    }


    if (new Date(dropDate) < new Date(pickupDate)) {

        alert("Drop-off date cannot be before pick-up date.");

        return;
    }


    document
        .getElementById("cars")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ================= LOGIN =================

function openLogin() {

    document.getElementById("loginModal").style.display =
        "flex";

}


function closeLogin() {

    document.getElementById("loginModal").style.display =
        "none";

}


// ================= CLOSE MODAL =================

window.onclick = function(event) {

    const bookingModal =
        document.getElementById("bookingModal");

    const loginModal =
        document.getElementById("loginModal");


    if (event.target === bookingModal) {

        bookingModal.style.display = "none";

    }


    if (event.target === loginModal) {

        loginModal.style.display = "none";

    }

};
```
