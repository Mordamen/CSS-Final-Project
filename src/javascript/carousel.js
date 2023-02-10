// Initialise Carousel
var root = document.querySelector("#logoCarousel");
while (typeof root == "undefined") {}
const logoCarousel = new Carousel(root, {
  friction: 0.83,
  Dots: false,
  on: {
    change: (carousel, to) => {
      // Clear active elements
      document
        .querySelectorAll("#logoCarousel .is-active, #logoBar .is-active")
        .forEach((el) => {
          el.classList.remove("is-active");
        });

      // Mark current elements as active
      document
        .querySelectorAll(
          `#logoCarousel [data-for="${to}"], #logoBar [data-for="${to}"]`
        )
        .forEach((el) => {
          el.classList.add("is-active");
        });
    },
  },
});

// Make links clickable
document.getElementById("logoBar").addEventListener("click", (event) => {
  const index = event.target.dataset.for || -1;

  if (index > -1) {
    event.preventDefault();
    logoCarousel.slideTo(index);
  }
});
