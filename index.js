const EightGb = document.getElementById("eightGb");
const SixteenGb = document.getElementById("sixteenGb");

const memoryCost = document.getElementById("memory-cost");

const TwoFifty = document.getElementById("twofifty");
const FiveHundred = document.getElementById("fivehundred");
const OneTera = document.getElementById("onetera");

const extrsStorage = document.getElementById("extra-storage");

const Friday = document.getElementById("friday");
const Monday = document.getElementById("monday");

const deliveryCharge = document.getElementById("delivery-charge");


const bestPrice = document.getElementById("best-price");
const totalPrice = document.getElementById("total-price");
const grandPrice = document.getElementById("price");


//total function
function total() {
    totalPrice.innerText = parseFloat(bestPrice.innerText) + parseFloat(memoryCost.innerText) + parseFloat(extrsStorage.innerText) + parseFloat(deliveryCharge.innerText);

    grandPrice.innerText = totalPrice.innerText;
    console.log("hihi")
}


// addEventListener for Ram
EightGb.addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-cost');
    memoryPrice.innerText = 0;
    total();

});


SixteenGb.addEventListener('click', function () {
    const memoryPrice = document.getElementById('memory-cost');
    memoryPrice.innerText = 100;
    total();


});
// AddEventListener for Memory

TwoFifty.addEventListener('click', function () {
    const memoryPrice = document.getElementById('extra-storage');
    memoryPrice.innerText = 0;
    total();

});

FiveHundred.addEventListener('click', function () {
    const memoryPrice = document.getElementById('extra-storage');
    memoryPrice.innerText = 100;
    total();

});
OneTera.addEventListener('click', function () {
    const memoryPrice = document.getElementById('extra-storage');
    memoryPrice.innerText = 180;
    total();

});


//AddEventlistener or delivery day
Friday.addEventListener('click', function () {
    const memoryPrice = document.getElementById('delivery-charge');
    memoryPrice.innerText = 0;
    total();

});

Monday.addEventListener('click', function () {
    const memoryPrice = document.getElementById('delivery-charge');
    memoryPrice.innerText = 20;
    total();

});
// cuppon part: type stevekaku.

const amount = document.getElementById("cupon");
const ok = 'stevekaku';
document.getElementById("applyButton").addEventListener('click', function () {
    console.log("thik ase")
    if (amount.value == ok) {
        grandPrice.innerText = (parseFloat(totalPrice.innerText) * 80) / 100;

    }
    else {
        grandPrice.innerText = totalPrice.innerText;

    }
    amount.value = "";



});

//grandPrice.innerText = total();





