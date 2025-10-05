document.addEventListener("DOMContentLoaded", () => {
  const projects = document.querySelectorAll(".project-item");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalLink = document.getElementById("modal-link");
  const closeModal = document.getElementById("close-modal");
  const modalVideo = document.getElementById("modal-video");
  const modalSource = modalVideo.querySelector("source");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const info = project.dataset.info.split("|");

      modalTitle.textContent = info[0];
      modalDescription.textContent = info[1];
      modalLink.href = info[2];
      modalLink.textContent = "Acesse o projeto no GitHub";

      modalSource.src = info[3];
      modalVideo.load();

      modal.style.display = "flex";
      document.body.style.overflow = "hidden"; // bloqueia rolagem
    });
  });

  closeModal.addEventListener("click", closePopup);
  window.addEventListener("click", (event) => {
    if (event.target === modal) closePopup();
  });

  function closePopup() {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
    modalVideo.pause();
  }
});
