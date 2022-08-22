(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
    checkbox: document.querySelector("[check-box]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.checkbox.addEventListener("click", toggleModal1);
  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
  function toggleModal1() {
    refs.modal.classList.toggle("is-checked");
  }
})();
