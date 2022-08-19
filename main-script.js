var currentTime = document.querySelector("h1");
let selectMenu = document.querySelectorAll("select");
let ring = document.querySelector(".ring");
let sound = new Audio(
  "https://freesound.org/data/previews/316/316847_4939433-lq.mp3"
);
let time,
  alarm,
  activeAlarm = false;
sound.loop = true;
function displayTime() {
  let dateTime = new Date();
  let hrs = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  let session = hrs < 13 ? "AM" : "PM";
  hrs = hrs < 13 ? hrs : hrs - 12;
  currentTime.innerText = `${hrs}:${min}:${sec} ${session}`;
  time = `${hrs}:${min} ${session}`;
  if (time === alarm) {
    sound.play();
  }
  setInterval(displayTime, 1000);
}
displayTime();

for (let i = 0; i <= 12; i++) {
  var option = document.createElement("option");
  option.appendChild(document.createTextNode(i));
  let first = document.querySelector(".first");
  first.appendChild(option);
}

for (let i = 0; i <= 59; i++) {
  var option = document.createElement("option");
  option.appendChild(document.createTextNode(i));
  let second = document.querySelector(".second");
  second.appendChild(option);
}

ring.onclick = function () {
  if (activeAlarm === false) {
    hours.disabled = true;
    minutes.disabled = true;
    ampm.disabled = true;
    alarm =
      selectMenu[0].value +
      ":" +
      selectMenu[1].value +
      " " +
      selectMenu[2].value;
    ring.textContent = "Clear Alarm";
    activeAlarm = true;
  } else {
    hours.disabled = false;
    minutes.disabled = false;
    ampm.disabled = false;
    sound.pause();
    alarm = "00:00:00 AM";
    ring.textContent = "Set Alarm";
  }
};
