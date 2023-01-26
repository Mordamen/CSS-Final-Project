import PAGES from "../models/pageModel.js";

/* Out pages */
const HOMEPAGELINK = document.getElementById(PAGES.HOME);
const ABOUTUSPAGELINK = document.getElementById(PAGES.ABOUT);
const CONTACTUSPAGELINK = document.getElementById(PAGES.CONTACT);
const MEDIAPAGELINK = document.getElementById(PAGES.MEDIA);
const FAQPAGELINK = document.getElementById(PAGES.FAQ);

function handlePageChange(pageToDisplay) {
  /* hide all pages */
  HOMEPAGELINK.classList.remove("d-block");
  ABOUTUSPAGELINK.classList.remove("d-block");
  CONTACTUSPAGELINK.classList.remove("d-block");
  MEDIAPAGELINK.classList.remove("d-block");
  FAQPAGELINK.classList.remove("d-block");
  HOMEPAGELINK.classList.add("d-none");
  ABOUTUSPAGELINK.classList.add("d-none");
  CONTACTUSPAGELINK.classList.add("d-none");
  MEDIAPAGELINK.classList.add("d-none");
  FAQPAGELINK.classList.add("d-none");

  switch (pageToDisplay) {
    case PAGES.HOME:
      HOMEPAGELINK.classList.remove("d-none");
      HOMEPAGELINK.classList.add("d-block");
      break;
    case PAGES.ABOUT:
      ABOUTUSPAGELINK.classList.remove("d-none");
      ABOUTUSPAGELINK.classList.add("d-block");
      break;
    case PAGES.CONTACT:
      CONTACTUSPAGELINK.classList.remove("d-none");
      CONTACTUSPAGELINK.classList.add("d-block");
      break;
    case PAGES.MEDIA:
      MEDIAPAGELINK.classList.remove("d-none");
      MEDIAPAGELINK.classList.add("d-block");
      break;
    case PAGES.FAQ:
      FAQPAGELINK.classList.remove("d-none");
      FAQPAGELINK.classList.add("d-block");
      break;
  }
}

export { handlePageChange };
