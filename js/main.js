const nextButton = document.querySelector(".next");
const prevButton = document.querySelector(".previous");
const imageContainerArray = Array.from(
  document.querySelector(".images-container").children,
);
const imagesContainer = document.querySelector(".images-container");

imageContainerArray.forEach((img, i) => img.setAttribute("data-index", i));
// const newListBullets = document.createElement("ul");
const slidesNumber = imageContainerArray.length;

const listItemArray = document.querySelectorAll(`ul li`);
const listItemLength = listItemArray.length;
let index = 0;
const checkAndSlideForward = () => {
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
};

// let timeOfSilding = setInterval(checkAndSlideForward, 4000);
// let timeToStartSlide;
nextButton.addEventListener("click", () => {
  // clearInterval(timeOfSilding);

  if (index === 1 || index === 0) {
    listItemArray[index].classList.remove("active");
    index++;
    imagesContainer.style.left = `-${index}000px`;

    listItemArray[index].classList.add("active");

    // const dataIndex = imageContainerArray[index].getAttribute("data-index");
  } else if (index === 2) {
    // listItemArray.forEach((el) => el.classList.remove("active"));
    listItemArray[index].classList.remove("active");
    index = 0;
    imagesContainer.style.left = `0px`;
    listItemArray[index].classList.add("active");
    // imagesContainer.style.left = `0`;
  } else {
    console.log("SOMETHING WENT WRONG");
  }
  // timeToStartSlide = setTimeout(() => {
  //   timeOfSilding = setInterval(checkAndSlideForward, 4000);
  // }, 4000);
});

prevButton.addEventListener("click", () => {
  // clearInterval(timeOfSilding);
  // clearTimeout(timeToStartSlide);
  if (index === 0) {
    listItemArray[index].classList.remove("active");
    index = 2;
    imagesContainer.style.left = `-${index}000px`;
    listItemArray[index].classList.add("active");
  } else if (index === 2) {
    listItemArray[index].classList.remove("active");
    index--;
    imagesContainer.style.left = `-${index}000px`;

    listItemArray[index].classList.add("active");
  } else if (index === 1) {
    listItemArray[index].classList.remove("active");
    index = 0;
    imagesContainer.style.left = `0px`;

    listItemArray[index].classList.add("active");
  }
});
