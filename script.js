let btn = document.getElementById("btn");
let btn_div = document.getElementById("btn_div");
btn.addEventListener("mouseenter", () => {
  btn.style.backgroundColor = "#D5966C";
  btn_div.style.backgroundColor = "black";
});
btn.addEventListener("mouseleave", () => {
  btn.style.backgroundColor = "black";
  btn_div.style.backgroundColor = "#D5966C";
});
btn_div.addEventListener("mouseenter", () => {
  btn_div.style.backgroundColor = "black";
  btn.style.backgroundColor = "#D5966C";
});
btn_div.addEventListener("mouseleave", () => {
  btn_div.style.backgroundColor = "#D5966C";
  btn.style.backgroundColor = "black";
});
