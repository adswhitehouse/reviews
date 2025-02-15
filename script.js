// Data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Variables
let personImg = document.querySelector(".jsPersonImg");
let author = document.querySelector(".jsAuthor");
let profession = document.querySelector(".jsProfession");
let textPara = document.querySelector(".jsTextPara");
let leftBtn = document.querySelector(".jsLeftBtn");
let rightBtn = document.querySelector(".jsRightBtn");
let surpriseBtn = document.querySelector(".jsSurpriseBtn");

// Declare starting item
let currentItem = 0;

// Input array data into html function
function inputData() {
  let arrayItem = reviews[currentItem];
  personImg.src = arrayItem.img;
  author.textContent = arrayItem.name;
  profession.textContent = arrayItem.job;
  textPara.textContent = arrayItem.text;
}

// Event listeners
// Load initial item
window.addEventListener("DOMContentLoaded", () => {
  inputData();
});

rightBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  inputData();
});

leftBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  inputData();
});

surpriseBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  inputData();
});
