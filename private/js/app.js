"use strict";
import { dashboard } from "./dashboard.js";
import { chart, activate, getUser } from "./helpers.js";
import { market } from "./market.js";
import { trade } from "./trade.js";

document.addEventListener("DOMContentLoaded", async () => {
  const page = document.querySelector("main");
  const tabs = document.querySelectorAll(".tab");
  const bell = document.querySelector(".notice");
  const notificationCon = document.querySelector(".notification");
  const closeNoticeBtn = notificationCon.querySelector(".fa-close");
  //USER DATA
  let user = {};
  await init();

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
    tab.addEventListener("click", async () => {
      tabs.forEach((tab) => tab.classList.remove("active"));
      tab.classList.add("active");
      const selectedTab = tab.getAttribute("data-tab");
      switch (selectedTab) {
        case "dashboard":
          await init();
          chart();
          break;
        case "market":
          page.innerHTML = market();
          chart();
          break;
        case "trade":
          page.innerHTML = trade(user);
          break;
        default:
          break;
      }
      activate();
    });
  });

  async function init() {
    user = await getUser();
    let data = {
      userData: user,
    };
    page.innerHTML = dashboard(data);
    activate();
    chart();
    console.log(user);
  }
});
