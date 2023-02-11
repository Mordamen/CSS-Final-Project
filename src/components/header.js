const insertHeader = document.querySelector(".header");

function insertHeading() {
  insertHeader.innerHTML = `
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="index.html" id="nav-home-link">
              Home
            </a>
            <a class="nav-link" href="about.html" id="nav-aboutus-link">
              About Us
            </a>
            <a class="nav-link" href="media.html" id="nav-media-link">
              Media
            </a>
            <a class="nav-link" href="faq.html" id="nav-faq-link">
              FAQ
            </a>
            <a class="nav-link" href="contact.html" id="nav-contactus-link">
              Contact Us
            </a>
          </div>
        </div>
        <a class="navbar-brand" href="index.html" id="logo">
          <img
            src="/assets/images/navbarIcon.webp"
            alt="Bootstrap"
            width="281"
            height="91"
          />
        </a>
      </div>
    </nav>
  </header>
`;
}

$(window).on("load", function () {
  insertHeading();
});

// window.onload = insertHeading();

// document.querySelector(".header").innerHTML = `<header>
//     <nav class="navbar navbar-expand-lg bg-body-tertiary">
//       <div class="container-fluid">
//         <button
//           class="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="navbar-toggler-icon"></span>
//         </button>
//         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div class="navbar-nav">
//             <a class="nav-link" href="index.html" id="nav-home-link">
//               Home
//             </a>
//             <a class="nav-link" href="about.html" id="nav-aboutus-link">
//               About Us
//             </a>
//             <a class="nav-link" href="media.html" id="nav-media-link">
//               Media
//             </a>
//             <a class="nav-link" href="faq.html" id="nav-faq-link">
//               FAQ
//             </a>
//             <a class="nav-link" href="contact.html" id="nav-contactus-link">
//               Contact Us
//             </a>
//           </div>
//         </div>
//         <a class="navbar-brand" href="index.html" id="logo">
//           <img
//             src="/assets/images/navbarIcon.webp"
//             alt="Bootstrap"
//             width="281"
//             height="91"
//           />
//         </a>
//       </div>
//     </nav>
//   </header>`;
