const notificationIconEl = document.getElementById("notification");
const notificationListEl = document.getElementById("notification-list");
const countEl = document.getElementById("count");
const message1El = document.getElementById("message1");
const message2El = document.getElementById("message2");
const message3El = document.getElementById("message3");
const cleanEl = document.getElementById("clear");
let cont;

notificationIconEl.addEventListener("click", () => {
  notificationListEl.classList.toggle("show");
});

message1El.addEventListener("click", () => {
  message1El.classList.add("border");
  cont = countEl.innerText;
  if (cont != 0) {
    cont--;
    countEl.innerText = cont;
    if (cont == 0) {
      countEl.innerText == "";
    }
  }
});
message2El.addEventListener("click", () => {
  message2El.classList.add("border");
  cont = countEl.innerText;
  if (cont != 0) {
    cont--;
    countEl.innerText = cont;
    if (cont == 0) {
      countEl.innerText == "";
    }
  }
});
message3El.addEventListener("click", () => {
  message3El.classList.add("border");
  cont = countEl.innerText;
  if (cont != 0) {
    cont--;
    countEl.innerText = cont;
    if (cont == 0) {
      countEl.innerText == "";
    }
  }
});

cleanEl.addEventListener("click", () => {
  message1El.classList.add("border");
  message2El.classList.add("border");
  message3El.classList.add("border");
});

cleanEl.addEventListener("click", () => {
  countEl.classList.add("!hidden");
});