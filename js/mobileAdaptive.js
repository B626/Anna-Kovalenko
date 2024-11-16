if (window.innerWidth <= 768) {
   const introductionTitleContainer = document.querySelector(
      ".introduction__mobile-title-container"
   );
   const footerTitleContainer = document.querySelector(
      ".footer__mobile-title-container"
   );
   const footerOldTitle = document.querySelector(".footer__title")
  const h1 = document.createElement("h1")
  const h2 = document.createElement("h2");
  footerOldTitle.style.display = "none"
  h1.setAttribute("class", "introduction__mobile-title");
  h2.setAttribute("class", "footer__mobile-title");
  h2.innerHTML = "Зв'язатись зі мною"
  h1.innerHTML = "Про мене"
  introductionTitleContainer.append(h1)
  footerTitleContainer.append(h2)
} 

if (window.innerWidth > 768){
   const introductionTitleContainer = document.querySelector(
      ".introduction__mobile-title-container"
   );
   const footerTitleContainer = document.querySelector(
      ".footer__mobile-title-container"
   );
   introductionTitleContainer.style.display = "none"
   footerTitleContainer.style.display = "none";
}