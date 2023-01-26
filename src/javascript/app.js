import PAGES from "../models/pageModel.js";
import { handlePageChange } from "../routes/router.js";

// console.log("🚀 ~ file: app.js:3 ~ handlePageChange", handlePageChange);

// console.log(PAGES);

const navHomeLink = document.getElementById("nav-home-link");
const navAboutUsLink = document.getElementById("nav-aboutus-link");
const navMediaLink = document.getElementById("nav-media-link");
const navFAQLink = document.getElementById("nav-faq-link");
const navContactUsLink = document.getElementById("nav-contactus-link");

navHomeLink.addEventListener("click", function () {
  handlePageChange(PAGES.HOME);
});

navAboutUsLink.addEventListener("click", function () {
  handlePageChange(PAGES.ABOUT);
});

navMediaLink.addEventListener("click", function () {
  handlePageChange(PAGES.MEDIA);
});

navFAQLink.addEventListener("click", function () {
  handlePageChange(PAGES.FAQ);
});

navContactUsLink.addEventListener("click", function () {
  handlePageChange(PAGES.CONTACT);
});
