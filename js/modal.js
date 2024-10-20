(() => {
  const refs = {
    openModalBtn: document.querySelector('.js-open-modal'),
    closeModalBtn: document.querySelector('.js-close-modal'),
    modal: document.querySelector('.js-modal'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModalOnBackdropClick);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function closeModalOnBackdropClick(event) {
    if (event.currentTarget === event.target) {
      toggleModal();
    }
  }
})();
