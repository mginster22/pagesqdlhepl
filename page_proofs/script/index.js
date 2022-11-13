const burger = document.querySelector(".burger");
const navBar = document.querySelector(".nav_menu");
const menu = document.querySelectorAll(".menuu");
const navbars = document.querySelectorAll(".active_burger .nav_menu_item");
const navItems = document.querySelectorAll(".nav_menu_item");
const navItem = document.querySelector(".nav_menu_item");
const subNavMenuLists = document.querySelectorAll(".sub_nav_menu_list");
const subNavMenuList = document.querySelector(".sub_nav_menu_list");
const activeBurger = document.querySelector(".active_burger");

const questions = document.querySelectorAll(".title_question");
const texts = document.querySelectorAll(".text_title_question");
console.log(questions);
console.log(texts);

burger.addEventListener("click", () => {
  if (navBar.classList.contains("nav_menu")) {
    navBar.classList.add("active_burger");
    navBar.classList.remove("nav_menu");
  } else {
    navBar.classList.add("nav_menu");
    navBar.classList.remove("active_burger");
  }
});

document.querySelectorAll(".title_question").forEach((el) =>
  el.addEventListener("click", (e) => {
    const arrow = e.target;
    console.log(arrow);
    let content = el.nextElementSibling;
    if (arrow.classList.contains("title_question_arrow_rigth")) {
      arrow.classList.remove("title_question_arrow_rigth");
      arrow.classList.add("title_question_arrow_down");
    } else {
      arrow.classList.remove("title_question_arrow_down");
      arrow.classList.add("title_question_arrow_rigth");
    }
    if (content.style.maxHeight) {
      document
        .querySelectorAll(".text_title_question")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".text_title_question")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  })
);

document.querySelector(".play_video_link").addEventListener("click", () => {
  const modalVideo = document.querySelector(".modal_video");
  const close = document.querySelector(".close");
  close.classList.add("close_active");
  if (modalVideo.classList.contains("modal_video")) {
    modalVideo.classList.add("modal_video_active");
    modalVideo.classList.remove("modal_video_close");
  } else {
    return;
  }
});

document.querySelector(".close").addEventListener("click", (event) => {
  event.target.classList.remove("close_active");

  return document
    .querySelector(".modal_video")
    .classList.add("modal_video_close");
});

document
  .querySelector(".modal_video")
  .addEventListener("mouseup", function (event) {
    var obj = document.querySelector(".modal_video");
    obj.classList.remove("modal_video_active");

  });
