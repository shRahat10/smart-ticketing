
const ticketPrice = parseFloat(document.getElementById('ticket-price').innerText);
let discountAmount = parseFloat(document.getElementById('discount-amount').innerText);
let totalPrice = parseFloat(document.getElementById('total-price').innerText);
let grandPrice = parseFloat(document.getElementById('grand-price'));
let seatLeft = parseFloat(document.getElementById('seat-left').innerText);
let selectedSeatCount = parseInt(document.getElementById('selected-seat-count').innerText);

function changeButtonColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]', 'text-white');
    element.classList.remove('bg-[#F7F8F8]');
    addSeatDescription(elementId);

    seatLeftF();
    selectedSeatCountF();
    totalPriceF();
    grandPriceF();
    // addCoupon();

    if (selectedSeatCount === 4) {
        disableButtons();
    }
}

function seatLeftF() {
    seatLeft--;
    document.getElementById('seat-left').innerText = seatLeft;
}
function selectedSeatCountF() {
    selectedSeatCount++;
    document.getElementById('selected-seat-count').innerText = selectedSeatCount;
}
function totalPriceF() {
    totalPrice += ticketPrice;
    document.getElementById('total-price').innerText = totalPrice;
    addCoupon()
}
function grandPriceF() {
    grandPrice = totalPrice - discountAmount;
    document.getElementById('grand-price').innerText = grandPrice;
}

function disableButtons() {
    const allButtons = document.querySelectorAll('.seat-button');
    for (const button of allButtons) {
        button.disabled = true;
    }
}

function addSeatDescription(elementId) {
    const seatDescription = document.getElementById('seat-description');
    const newListItem = document.createElement('li');
    newListItem.classList.add('flex', 'justify-between');

    newListItem.innerHTML = `<span>${elementId}</span><span>Economy</span><span>550</span>`;
    seatDescription.appendChild(newListItem);
}

let isFunctionEnabled = false;

function enableCoupon() {
    isFunctionEnabled = true;
    addCoupon();
}

function addCoupon() {
    if (!isFunctionEnabled) {
        console.log("Function is disabled.");
        return;
    }
    else {
        const couponButton = document.getElementById('coupon-button');
        const couponInput = document.getElementById('coupon-input').value;

        if (couponInput === 'NEW15') {
            document.getElementById('discount-amount-show').classList.remove('hidden');
            discountAmount = totalPrice * 15 / 100;
            console.log(discountAmount);
            document.getElementById('discount-amount').innerText = discountAmount;
            grandPriceF();
            couponButton.disabled = true;
            couponButton.classList.add('bg-[#03071233]');
        }
        else if (couponInput === 'Couple 20') {
            document.getElementById('discount-amount-show').classList.remove('hidden');
            discountAmount = totalPrice * 20 / 100;
            console.log(discountAmount);
            document.getElementById('discount-amount').innerText = discountAmount;
            grandPriceF();
            couponButton.disabled = true;
            couponButton.classList.add('bg-[#03071233]');
        }
        else {
            alert('Invalid Coupon Code');
            document.getElementById('coupon-input').value = '';
            isFunctionEnabled = false;
        }
    }
}
