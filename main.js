const hamb = document.getElementById("hamb");
const popup = document.querySelector("#popup");
const close_popup = document.getElementById("close_popup");

function hamb_toggle() {
    popup.classList.toggle("close");
    popup.classList.toggle("open");
    document.body.classList.toggle("no-scroll")
}

hamb.addEventListener("click", function (e) {
    if (popup.classList.contains('close')) {
        hamb_toggle()
    }
});
close_popup.addEventListener("click", function (e) {
    if (popup.classList.contains('open')) {
        hamb_toggle()
    }
});
// **********************************modal*****************************************
const dropbtn = document.querySelector(".dropbtn");
const modal = document.querySelector(".modal");
const drop_down = document.querySelector(".drop_down");
const modal_bck = document.querySelector(".modal_bck");
const open__modal = document.querySelector(".open__modal");
const btn_close_modal = document.querySelectorAll(".btn_close_modal");

function close_modal(e) {
    document.body.classList.toggle("no-scroll")
    modal_bck.classList.toggle("modal_back_open");
}

modal.addEventListener("click", function (e) {
    e.stopPropagation()
    if (e.target === dropbtn) {
        drop_down.classList.toggle("drop_down_show");
    } else if (drop_down.classList.contains("drop_down_show")) {
        drop_down.classList.remove("drop_down_show");
    }
});

open__modal.addEventListener("click", close_modal)
modal_bck.addEventListener("click", close_modal)
btn_close_modal[0].addEventListener("click", close_modal)
btn_close_modal[1].addEventListener("click", close_modal)
