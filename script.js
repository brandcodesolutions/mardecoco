function enviarWhatsapp(e) {
  e.preventDefault();
  const nome = document.getElementById('campo-nome').value;
  const whatsapp = document.getElementById('campo-whatsapp').value;
  const cidade = document.getElementById('campo-cidade').value;
  const estado = document.getElementById('campo-estado').value;
  const mensagem = `Olá, eu me chamo ${nome}, o meu telefone é ${whatsapp} e eu moro em ${cidade}, ${estado}. Eu quero ser uma revendedora Mar de Coco!`;
  window.open(`https://wa.me/5518996742364?text=${encodeURIComponent(mensagem)}`, '_blank');
}

// Animações de fade-in
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => {
  observer.observe(section);
});

// Menu hamburguer
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
}

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});