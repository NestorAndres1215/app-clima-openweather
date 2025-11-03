document.addEventListener('DOMContentLoaded', () => {

  const headerIcons = document.querySelectorAll('header .group');
  headerIcons.forEach((icon, index) => {
    icon.style.opacity = 0;
    icon.style.transform = 'scale(0.3) rotate(-15deg)';
    setTimeout(() => {
      icon.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
      icon.style.opacity = 1;
      icon.style.transform = 'scale(1) rotate(0deg)';
    }, index * 150);

    // Hover animado
    icon.addEventListener('mouseenter', () => {
      icon.style.transition = 'all 0.3s ease-out';
      icon.style.transform = 'scale(1.2) rotate(10deg)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transition = 'all 0.3s ease-out';
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  const headerTitle = document.querySelector('header h1 span');
  if (headerTitle) {
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = 'translateY(30px) scale(0.8)';
    setTimeout(() => {
      headerTitle.style.transition = 'all 0.8s ease-out';
      headerTitle.style.opacity = 1;
      headerTitle.style.transform = 'translateY(0) scale(1)';
    }, 500);

    // Hover del título
    headerTitle.addEventListener('mouseenter', () => {
      headerTitle.style.transform = 'translateY(-2px) scale(1.05)';
    });
    headerTitle.addEventListener('mouseleave', () => {
      headerTitle.style.transform = 'translateY(0) scale(1)';
    });
  }

  const headerHr = document.querySelector('header hr.hr-premium');
  if (headerHr) {
    headerHr.style.width = '0';
    setTimeout(() => {
      headerHr.style.transition = 'width 1s ease-out';
      headerHr.style.width = '8rem';
    }, 700);
  }

  const headerText = document.querySelector('header p');
  if (headerText) {
    headerText.style.opacity = 0;
    headerText.style.transform = 'translateY(20px)';
    setTimeout(() => {
      headerText.style.transition = 'all 0.8s ease-out';
      headerText.style.opacity = 1;
      headerText.style.transform = 'translateY(0)';
    }, 900);
  }
});
