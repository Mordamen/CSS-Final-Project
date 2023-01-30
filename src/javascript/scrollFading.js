// -----------------
let sections = gsap.utils.toArray("section"),
  currentSection = sections[0];

gsap.defaults({ overwrite: "auto", duration: 1.3 });

// stretch out the body height according to however many sections there are.
gsap.set("body", { height: sections.length * 100 + "%" });

// create a ScrollTrigger for each section
sections.forEach((section, i) => {
  ScrollTrigger.create({
    // use dynamic scroll positions based on the window height (offset by half to make it feel natural)
    start: () => (i - 0.5) * innerHeight,
    end: () => (i + 0.5) * innerHeight,
    scrub: true,
    markers: true,
    toggleActions: "restart none reverse reset",
    // when a new section activates (from either direction), set the section accordingly.
    onToggle: (self) => self.isActive && setSection(section),
  });
});

function setSection(newSection) {
  if (newSection !== currentSection) {
    gsap.to(currentSection, { autoAlpha: 0, duration: 0.8 });
    gsap.to(newSection, { autoAlpha: 1, duration: 0.8 });
    const tl = gsap.timeline();
    tl.from("h1", { x: -300, duration: 0.3 });
    currentSection = newSection;
  }
}
function removeAnnoyingText() {
  $(
    ".gsap - marker - start",
    ".gsap - marker - end",
    ".gsap - marker - scroller - start",
    ".gsap - marker - scroller - end"
  ).empty();
}

window.onload = removeAnnoyingText();
