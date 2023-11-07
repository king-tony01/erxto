"use strict";

import { dashboard } from "./dashboard.js";
import { chart, activate } from "./helpers.js";
import { market } from "./market.js";
import { trade } from "./trade.js";
const page = document.querySelector("main");
const tabs = document.querySelectorAll(".tab");
const bell = document.querySelector(".notice");
const notificationCon = document.querySelector(".notification");
const closeNoticeBtn = notificationCon.querySelector(".fa-close");

await init();

//USER DATA

const user = {
  username: "",
  email: "",
  phone: "",
};

//NOTIFICATION OPENING
bell.addEventListener("click", () => {
  notificationCon.classList.add("active");
});

//CLOSING THE NOTIFICATION
closeNoticeBtn.addEventListener("click", () => {
  notificationCon.classList.remove("active");
});

//TABS IMPLEMENTATION
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");
    const selectedTab = tab.getAttribute("data-tab");
    switch (selectedTab) {
      case "dashboard":
        page.innerHTML = dashboard();
        chart();
        break;
      case "market":
        page.innerHTML = market();
        chart();
        break;
      case "trade":
        page.innerHTML = trade();
        break;
      default:
        break;
    }
    activate();
  });
});

async function init() {
  page.innerHTML = dashboard();
  activate();
  chart();
}
