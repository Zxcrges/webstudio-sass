(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };


  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", handleBackdrop);
  window.addEventListener("keydown", handleKeyDown);


  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
    document.body.classList.toggle("no-scroll");
  }
  function handleKeyDown(e) {
    if (e.code === "Escape") {
      toggleModal();
    }
  }
  function handleBackdrop(e) {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  }
})();
