const projects = {
  1: {
    title: "Python Cryptography",
    description: "Python3 Cryptography machine, It uses seeded randomisation to encrypt and decrypt.",
    link: "https://github.com/Ashley-Watts/Python_Based_Encryption"
  },
  2: {
    title: "Project Two",
    description: "Project Two Description",
    link: "https://example.com/project-two"
  },
  3: {
    title: "Project Three",
    description: "Project Three Description",
    link: "https://example.com/project-three"
  }
};

const modal = document.getElementById('projectModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalLink = document.getElementById('modalLink');
const closeModalBtn = document.getElementById('closeModal');

document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', () => {
    const id = card.getAttribute('data-project');
    openModal(id);
  });
  card.addEventListener('keypress', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const id = card.getAttribute('data-project');
      openModal(id);
    }
  });
});

closeModalBtn.addEventListener('click', closeModal);
window.addEventListener('click', e => {
  if (e.target === modal) {
    closeModal();
  }
});

function openModal(id) {
  const project = projects[id];
  if (!project) return;
  modalTitle.textContent = project.title;
  modalDesc.textContent = project.description;
  modalLink.href = project.link;
  modalLink.textContent = "View Project";
  modal.classList.add('active');
  closeModalBtn.focus();
}

function closeModal() {
  modal.classList.remove('active');
}
