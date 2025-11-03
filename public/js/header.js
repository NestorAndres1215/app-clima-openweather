document.addEventListener('DOMContentLoaded', () => {
  // Animación de los iconos
  const icons = document.querySelectorAll('header .group');
  icons.forEach((icon, index) => {
    icon.style.opacity = 0;
    icon.style.transform = 'scale(0.5)';
    setTimeout(() => {
      icon.style.transition = 'all 0.6s ease-out';
      icon.style.opacity = 1;
      icon.style.transform = 'scale(1)';
    }, index * 150);
  });

  // Animación del título
  const title = document.querySelector('header h1 span');
  title.style.opacity = 0;
  title.style.transform = 'translateY(20px)';
  setTimeout(() => {
    title.style.transition = 'all 0.8s ease-out';
    title.style.opacity = 1;
    title.style.transform = 'translateY(0)';
  }, 500);

  // Animación de la línea horizontal
  const hr = document.querySelector('header hr.hr-premium');
  hr.style.width = '0';
  setTimeout(() => {
    hr.style.transition = 'width 0.8s ease-out';
    hr.style.width = '8rem'; // Coincide con w-32
  }, 900);

  // Efecto hover adicional (pequeño rebote)
  icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
      icon.style.transition = 'transform 0.2s';
      icon.style.transform = 'scale(1.15) rotate(5deg)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transition = 'transform 0.2s';
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });
});
