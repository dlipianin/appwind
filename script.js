const checkbox = document.getElementById("checkbox");

checkbox.addEventListener("change", () => {
  document.querySelector("body").classList.toggle("dark");
  document.getElementById("header").classList.toggle("dark");
  document.getElementById("hero").classList.toggle("dark");
  document.querySelector(".trailer").classList.toggle("dark");
  const dark = document.querySelectorAll(".dark-p");
  for (let index = 0; index < dark.length; index++) {
    dark[index].classList.toggle("dark");
  }
  const featuresContainer = document.querySelectorAll(".features-container");
  for (let index = 0; index < featuresContainer.length; index++) {
    featuresContainer[index].classList.toggle("dark");
  }
  document.getElementById("download").classList.toggle("dark");
  document.getElementById("reviews").classList.toggle("dark");
  document.getElementById("partners").classList.toggle("dark");
  const price = document.querySelectorAll(".price");
  for (let index = 0; index < price.length; index++) {
    price[index].classList.toggle("dark");
  }
  const cardHeader = document.querySelectorAll(".card-header");
  for (let index = 0; index < cardHeader.length; index++) {
    cardHeader[index].classList.toggle("dark");
  }
  const reviewsContainer = document.querySelectorAll(".reviews-container");
  for (let index = 0; index < reviewsContainer.length; index++) {
    reviewsContainer[index].classList.toggle("dark");
  }
  const faqContainer = document.querySelectorAll(".faq-container");
  for (let index = 0; index < faqContainer.length; index++) {
    faqContainer[index].classList.toggle("dark");
  }
  const articleContainer = document.querySelectorAll(".article-container");
  for (let index = 0; index < articleContainer.length; index++) {
    articleContainer[index].classList.toggle("dark");
  }
  document.querySelector(".contact-form").classList.toggle("dark");
  const inputs = document.querySelectorAll("input");
  for (let index = 0; index < inputs.length; index++) {
    inputs[index].classList.toggle("dark");
  }
  document.querySelector("textarea").classList.toggle("dark");
  document.querySelector(".footer-p").classList.toggle("dark");
});
