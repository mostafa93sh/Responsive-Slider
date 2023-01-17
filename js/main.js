const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".previous");
const imageContainerArray = Array.from(
  document.querySelector(".images-container").children,
);
const imagesContainer = document.querySelector(".images-container");

// positionOfContainer.addEventListener("animationiteration", (e) => {
//   console.log("e");
// });

// const bulletsItemHandler = () => {};
imageContainerArray.forEach((img, i) => img.setAttribute("data-index", i));
// const newListBullets = document.createElement("ul");
const slidesNumber = imageContainerArray.length;
// for (let i = 1; i <= slidesNumber; i++) {
//   const newListBulletsElement = document.createElement("li");
//   newListBulletsElement.setAttribute("data-index", i);
//   newListBulletsElement.appendChild(document.createTextNode(i));
//   newListBullets.appendChild(newListBulletsElement);
// }
// document.querySelector("main.container").appendChild(newListBullets);
const listItemArray = document.querySelectorAll(`ul li`);
const listItemLength = listItemArray.length;

let index = 0;
setInterval(() => {
  if (index < 2) {
    imagesContainer.style.left = `-${index + 1}000px`;

    listItemArray[index].classList.remove("active");
    listItemArray[index + 1].classList.add("active");

    // const dataIndex = imageContainerArray[index].getAttribute("data-index");
    index++;
  } else {
    listItemArray.forEach((el) => el.classList.remove("active"));
    index = 0;
    listItemArray[index].classList.add("active");
    imagesContainer.style.left = `0`;
  }
}, 4000);
