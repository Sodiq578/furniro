$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  
  

  










  const modal = document.querySelector(".modal");
const dialog = document.createElement("dialog");
dialog.innerHTML = modal.innerHTML;
modal.replaceWith(dialog);

const openDialog = document.querySelector(".openmodal");
const cancelButton = document.querySelector(".cancel-button");

let isModalOpen = false;

// Modalni ochish
openDialog.addEventListener("click", () => {
  dialog.showModal();
  isModalOpen = true;
});

// Modalni yopish funksiyasi
function closeDialog() {
  dialog.close();
  isModalOpen = false;
}

// Chiqish tugmasini bosganda modalni yoping
cancelButton.addEventListener("click", () => {
  if (isModalOpen) {
    closeDialog();
  }
});

// Modalni tashqariga bosilganda yoki o'ng tomoniga bosilganda modalni yoping
dialog.addEventListener("click", (e) => {
  if (isModalOpen) {
    const dialogDimensions = dialog.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      closeDialog();
    } else if (e.clientX > dialogDimensions.right - 10 || window.innerWidth <= 1200) {
      closeDialog();
    }
  }
});

// Oyna o'lchamini 1200 piksellikdan past bo'lsa modalni yoping
window.addEventListener("resize", () => {
  if (window.innerWidth <= 1200) {
    closeDialog();
  }
});

// Cacel rasim tugmasini bosganda modalni yoping
const cacelImg = document.querySelector(".cancel__img");
cacelImg.addEventListener("click", () => {
  closeDialog();
});
