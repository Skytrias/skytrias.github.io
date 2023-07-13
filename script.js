// offset navbar scrolling
{
  const links = document.querySelectorAll(".nav-link"); // or any other selector what you want

  for (const link of links) {
    link.addEventListener("click", scrollToSection);
  }

  function scrollToSection(e) {
    console.log("yo")
    e.preventDefault();
    const href = this.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    const navbarHeight = document.querySelector(".navbar").offsetHeight
    
    // still use location hash
    location.hash = href

    scroll({
      top: offsetTop - navbarHeight,
      behavior: "smooth"
    });
  }
}