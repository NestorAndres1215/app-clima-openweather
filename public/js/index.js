tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', 'serif'],
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                premium: {
                    50: '#f8f9fc',
                    100: '#e8ecf4',
                    500: '#4a6cf7',
                    600: '#3b5bdb',
                    700: '#2c4bc7',
                    900: '#1e3a8a',
                }
            },
            boxShadow: {
                'premium': '0 10px 30px -5px rgba(74, 108, 247, 0.15)',
                'premium-lg': '0 20px 50px -10px rgba(74, 108, 247, 0.2)',
            }
        }
    }
}
document.addEventListener('DOMContentLoaded', () => {
  // ===============================
  // Header
  // ===============================
  const headerIcons = document.querySelectorAll('header .group');
  headerIcons.forEach((icon, index) => {
    icon.style.opacity = 0;
    icon.style.transform = 'scale(0.5)';
    setTimeout(() => {
      icon.style.transition = 'all 0.6s ease-out';
      icon.style.opacity = 1;
      icon.style.transform = 'scale(1)';
    }, index * 150);
    icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.15) rotate(5deg)';
    });
    icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotate(0deg)';
    });
  });

  const headerTitle = document.querySelector('header h1 span');
  if (headerTitle) {
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = 'translateY(20px)';
    setTimeout(() => {
      headerTitle.style.transition = 'all 0.8s ease-out';
      headerTitle.style.opacity = 1;
      headerTitle.style.transform = 'translateY(0)';
    }, 500);
  }

  const headerHr = document.querySelector('header hr.hr-premium');
  if (headerHr) {
    headerHr.style.width = '0';
    setTimeout(() => {
      headerHr.style.transition = 'width 0.8s ease-out';
      headerHr.style.width = '8rem';
    }, 700);
  }

  // ===============================
  // Formulario
  // ===============================
  const form = document.querySelector('form');
  if (form) {
    form.style.opacity = 0;
    form.style.transform = 'translateY(-20px)';
    setTimeout(() => {
      form.style.transition = 'all 0.8s ease-out';
      form.style.opacity = 1;
      form.style.transform = 'translateY(0)';
    }, 800);
  }

  // ===============================
  // Mensaje de error
  // ===============================
  const errorDiv = document.querySelector('div[role="alert"], div.mb-8');
  if (errorDiv) {
    errorDiv.style.opacity = 0;
    errorDiv.style.transform = 'translateY(-10px)';
    setTimeout(() => {
      errorDiv.style.transition = 'all 0.6s ease-out';
      errorDiv.style.opacity = 1;
      errorDiv.style.transform = 'translateY(0)';
    }, 1000);
  }

  // ===============================
  // Resultado del clima
  // ===============================
  const climaCard = document.querySelector('main > div > div.bg-white/80');
  if (climaCard) {
    climaCard.style.opacity = 0;
    climaCard.style.transform = 'scale(0.8)';
    setTimeout(() => {
      climaCard.style.transition = 'all 0.8s ease-out';
      climaCard.style.opacity = 1;
      climaCard.style.transform = 'scale(1)';
    }, 1200);
  }

  // ===============================
  // Enlace al historial
  // ===============================
  const historialLink = document.querySelector('a[href="/historial"]');
  if (historialLink) {
    historialLink.style.opacity = 0;
    historialLink.style.transform = 'translateY(10px)';
    setTimeout(() => {
      historialLink.style.transition = 'all 0.6s ease-out';
      historialLink.style.opacity = 1;
      historialLink.style.transform = 'translateY(0)';
    }, 1400);
  }

  // ===============================
  // Botón Volver arriba
  // ===============================
  const btnUp = document.querySelector('button[aria-label="Volver arriba"]');
  if (btnUp) {
    btnUp.style.opacity = 0;
    btnUp.style.transform = 'translateY(20px)';
    setTimeout(() => {
      btnUp.style.transition = 'all 0.6s ease-out';
      btnUp.style.opacity = 1;
      btnUp.style.transform = 'translateY(0)';
    }, 1600);

    btnUp.addEventListener('mouseenter', () => {
      btnUp.style.transform = 'scale(1.15)';
    });
    btnUp.addEventListener('mouseleave', () => {
      btnUp.style.transform = 'scale(1)';
    });
  }

  // ===============================
  // Animación de scroll para todos los elementos al entrar en viewport
  // (opcional: si quieres más dinamismo)
  // ===============================
  const observerOptions = {
    threshold: 0.1
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transition = 'all 0.8s ease-out';
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0) scale(1)';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    el.style.opacity = 0;
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });
});
