const seatRowOne = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2", "E1", "E2", "F1", "F2", "G1", "G2", "H1", "H2", "I1", "I2", "J1", "J2"];
const seatRowTwo = ["A3", "A4", "B3", "B4", "C3", "C4", "D3", "D4", "E3", "E4", "F3", "F4", "G3", "G4", "H3", "H4", "I3", "I4", "J3", "J4"];
let seatButtonsHTML = "";
for (let index = 0; index < seatRowOne.length; index++) {
    seatButtonsHTML += `<button id="${seatRowOne[index]}"class="w-28 h-14 bg-[#F7F8F8] rounded-xl flex items-center justify-center">${seatRowOne[index]}</button>`;
}
document.getElementById('seats').innerHTML = seatButtonsHTML;
