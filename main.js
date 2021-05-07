//Objetive date
let finalDate = new Date("May 15 2021 07:00").getTime();

let timer = setInterval(tick, 1000);

function tick() {
  let now = new Date().getTime();

  let missingTime = finalDate - now;

  if (missingTime > 0) {
    let days = Math.floor(missingTime / (1000 * 60 * 60 * 24));
    days = days < 10 ? "0" + days : "";
    let hours = Math.floor(
      (missingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    hours = hours < 10 ? "0" + hours : hours;

    let mins = Math.floor((missingTime % (1000 * 60 * 60)) / (1000 * 60));
    mins = mins < 10 ? "0" + mins : mins;

    let seconds = Math.floor((missingTime % (1000 * 60)) / 1000);
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.querySelector(".days").innerText = days;
    document.querySelector(".hours").innerText = hours;
    document.querySelector(".minutes").innerText = mins;
    document.querySelector(".seconds").innerText = seconds;
  }
}
