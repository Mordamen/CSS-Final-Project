let propertiesArr;
let galleryDiv;
//this function will transfer data from homepage to this page
const initialPropertiesGallery = (propertiesArrFromHomePage) => {
  propertiesArr = propertiesArrFromHomePage;
  galleryDiv = document.getElementById("home-page-properties-gallery");
  createGallery();
};

const createHeader = () => {
  return `
  <nav class="navbar navbar-expand-lg bg-body-tertiary" id="header">
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
              <a class="nav-link" href="#" id="nav-home-link">Home</a>
              <a class="nav-link" href="#" id="nav-aboutus-link">About Us</a>
              <a class="nav-link" href="#" id="nav-media-link">Media</a>
              <a class="nav-link" href="#" id="nav-faq-link">FAQ</a>
              <a class="nav-link" href="#" id="nav-contactus-link"
                >Contact Us</a
              >
            </div>
          </div>
          <a class="navbar-brand" href="#" id="logo"
            ><img
              src="./assets/Images/headerbackground.png"
              alt="Bootstrap"
              width="281"
              height="91"
          /></a>
        </div>
      </nav>
  `;
};

const createGallery = () => {
  for (let property of propertiesArr) {
    galleryDiv.innerHTML += createCard(
      property.name,
      property.description,
      property.price,
      property.imgUrl
    );
  }
};

export default initialPropertiesGallery;
