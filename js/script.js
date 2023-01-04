let okno = document.querySelector(".okno");
let btn = document.querySelector(".header_content_txt_button");
let krest = document.querySelector(".krest");
let burger = document.querySelector(".burger");
let list_burger = document.querySelector(".list_burger");
let clouse = document.querySelector(".clouse");
let home_btn1 = document.querySelector(".home_btn1"); 
let home_btn2 = document.querySelector(".home_btn2");
let project_box2 = document.querySelector(".project_box2");


burger.onclick = () => {
    list_burger.style.transform = "translateY(0)";
    burger.style.display = "none";
    clouse.style.display = "block";
};
clouse.onclick = () => {
    list_burger.style.transform = "translateY(-100%)";
    clouse.style.display = "none";
    burger.style.display = "block";
};

home_btn2.onclick = () => {
    project_box2.style.display = "flex";
}
home_btn1.onclick = () => {
    project_box2.style.display = "none";
}