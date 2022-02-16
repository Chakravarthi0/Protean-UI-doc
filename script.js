// dropdown

let dropDown = document.getElementsByClassName("menu-dropdown");
let asideList = document.getElementsByClassName("aside-menu");
let dropDownIcon = document.getElementsByClassName("dd-menu-icon");

dropDown[0].addEventListener("click", () => {
  asideList[0].classList.toggle("hidden");
  if (!asideList[0].classList.contains("hidden")) {
    dropDownIcon[0].style.transform = "rotate(180deg)";
  } else {
    dropDownIcon[0].style.transform = "rotate(0deg)";
  }
});

// copy button

let copyButtons = document.getElementsByClassName("copy-btn");

function copyBtnChange() {
  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].classList.add("btn", "btn-primary");
    copyButtons[i].style.fontSize = "1.6rem";
    copyButtons[i].style.textAlign = "center";

    let copiedBtn = document.createElement("button");
    copiedBtn.style.display = "none";
    copiedBtn.classList.add("btn");
    copiedBtn.style.backgroundColor = "#188464";
    copiedBtn.style.fontWeight = "bold";
    copiedBtn.innerHTML = "Copied";
    copyButtons[i].parentNode.insertBefore(copiedBtn, copyButtons[i]);
    copyButtons[i].addEventListener("click", function () {
      this.style.display = "block !important";
      copiedBtn.style.display = "block";

      this.setAttribute("style", "display: none !important");

      setTimeout(() => {
        copyButtons[i].setAttribute("style", "display: block !important");
        copyButtons[i].style.fontSize = "1.6rem";
        copyButtons[i].style.textAlign = "center";
        copiedBtn.style.display = "none";
      }, 1000);
    });
  }
}
