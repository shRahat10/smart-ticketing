
const ticketPrice = parseFloat(document.getElementById('ticket-price').innerText);
let discountAmount = parseFloat(document.getElementById('discount-amount').innerText);
let totalPrice = parseFloat(document.getElementById('total-price').innerText);
let grandPrice = parseFloat(document.getElementById('grand-price'));
let seatLeft = parseFloat(document.getElementById('seat-left').innerText);
let selectedSeatCount = parseInt(document.getElementById('selected-seat-count').innerText);

function seatSelect(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-[#1DD100]', 'text-white');
    element.classList.remove('bg-[#F7F8F8]');
    addSeatDescription(elementId);
    disableSelectedButton(elementId);

    seatLeftF();
    selectedSeatCountF();
    totalPriceF();
    grandPriceF();
    checkPhoneNumber();

    if (selectedSeatCount === 4) {
        disableButtons();
        document.getElementById('coupon-button').removeAttribute('disabled');
        document.getElementById('coupon-button').classList.add('bg-[#1DD100]');
        document.getElementById('coupon-input').removeAttribute('disabled');
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
}
function grandPriceF() {
    grandPrice = totalPrice - discountAmount;
    document.getElementById('grand-price').innerText = grandPrice;
}

function disableSelectedButton(elementId) {
    document.getElementById(elementId).disabled = true;
}

function disableButtons() {
    const allButtons = document.querySelectorAll('.seat-button');
    for (const button of allButtons) {
        button.disabled = true;
    }
}

function enableButtons() {
    const allButtons = document.querySelectorAll('.seat-button');
    for (const button of allButtons) {
        button.disabled = false;
    }
}

function removeButtonColor() {
    const allButtons = document.querySelectorAll('.seat-button');
    for (const button of allButtons) {
        button.classList.add('bg-[#F7F8F8]');
        button.classList.remove('bg-[#1DD100]', 'text-white');
    }
}

function addSeatDescription(elementId) {
    const seatDescription = document.getElementById('seat-description');
    const newListItem = document.createElement('li');
    newListItem.classList.add('flex', 'justify-between');

    newListItem.innerHTML = `<span>${elementId}</span><span>Economy</span><span>550</span>`;
    seatDescription.appendChild(newListItem);
}

function addCoupon() {
    const couponButton = document.getElementById('coupon-button');
    const couponInput = document.getElementById('coupon-input').value;

    if (couponInput === 'NEW15') {
        document.getElementById('discount-amount-show').classList.remove('hidden');
        discountAmount = totalPrice * 15 / 100;
        document.getElementById('discount-amount').innerText = discountAmount;
        grandPriceF();
        couponButton.disabled = true;
        couponButton.classList.add('bg-[#03071233]');
        couponButton.classList.remove('bg-[#1DD100]');
        document.getElementById('coupon-input').setAttribute('disabled', 'true');
    }
    else if (couponInput === 'Couple 20') {
        document.getElementById('discount-amount-show').classList.remove('hidden');
        discountAmount = totalPrice * 20 / 100;
        document.getElementById('discount-amount').innerText = discountAmount;
        grandPriceF();
        couponButton.disabled = true;
        couponButton.classList.add('bg-[#03071233]');
        couponButton.classList.remove('bg-[#1DD100]');
        document.getElementById('coupon-input').setAttribute('disabled', 'true');
    }
    else if (couponInput === '') {
        alert('Enter Coupon Code');
        document.getElementById('coupon-input').value = '';
    }
    else {
        alert('Invalid Coupon Code');
        document.getElementById('coupon-input').value = '';
    }
}

function checkPhoneNumber() {
    let phoneNumberInput = document.getElementById('phone-number');
    let successButton = document.getElementById('success-button');
    let phoneNumber = phoneNumberInput.value;

    if (/^\d+$/.test(phoneNumber)) {
        successButton.removeAttribute('disabled');
        successButton.classList.add('bg-[#1DD100]');
        successButton.classList.remove('bg-[#03071233]');
    }
    else {
        successButton.setAttribute('disabled', 'disabled');
        successButton.classList.remove('bg-[#1DD100]');
        successButton.classList.add('bg-[#03071233]');
    }
}

function continueButton() {
    document.getElementById('success-button').setAttribute('disabled', 'true');
    document.getElementById('phone-number').value = '';
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    phoneNumber = '';
    removeButtonColor();

    document.getElementById('seat-left').innerText = 40;
    document.getElementById('selected-seat-count').innerText = 0;
    document.getElementById('total-price').innerText = 0;
    document.getElementById('grand-price').innerText = 0;

    document.getElementById('discount-amount').innerText = 0;
    document.getElementById('discount-amount-show').classList.add('hidden');
    document.getElementById('coupon-input').value = '';
    document.getElementById('coupon-button').classList.add('bg-[#03071233]');
    document.getElementById('coupon-button').classList.remove('bg-[#1DD100]');
    document.getElementById('coupon-input').setAttribute('disabled', 'true');

    discountAmount = parseFloat(document.getElementById('discount-amount').innerText);
    totalPrice = parseFloat(document.getElementById('total-price').innerText);
    grandPrice = parseFloat(document.getElementById('grand-price'));
    seatLeft = parseFloat(document.getElementById('seat-left').innerText);
    selectedSeatCount = parseInt(document.getElementById('selected-seat-count').innerText);

    document.getElementById('success-button').classList.remove('bg-[#1DD100]');
    document.getElementById('success-button').classList.add('bg-[#03071233]');

    const parent = document.getElementById('seat-description');
    const ulChilds = parent.getElementsByTagName('li');
    const childArray = Array.from(ulChilds);
    for (const child of childArray) {
        parent.removeChild(child);
    }
    enableButtons();
}