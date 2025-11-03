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
  // Animar título
  const title = document.querySelector('main h1 span');
  if (title) {
    title.style.opacity = 0;
    title.style.transform = 'translateY(20px)';
    setTimeout(() => {
      title.style.transition = 'all 0.8s ease-out';
      title.style.opacity = 1;
      title.style.transform = 'translateY(0)';
    }, 200);
  }

  // Animar HR
  const hr = document.querySelector('main hr.hr-premium');
  if (hr) {
    hr.style.width = '0';
    setTimeout(() => {
      hr.style.transition = 'width 0.8s ease-out';
      hr.style.width = '8rem'; // Coincide con w-32
    }, 400);
  }

  // Animar cards
  const cards = document.querySelectorAll('main .group');
  cards.forEach((card, index) => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    setTimeout(() => {
      card.style.transition = 'all 0.6s ease-out';
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, 600 + index * 150); // animación secuencial
  });

  // Animar botón "Volver arriba" al cargar
  const btnUp = document.querySelector('button[aria-label="Volver arriba"]');
  if (btnUp) {
    btnUp.style.opacity = 0;
    btnUp.style.transform = 'translateY(20px)';
    setTimeout(() => {
      btnUp.style.transition = 'all 0.6s ease-out';
      btnUp.style.opacity = 1;
      btnUp.style.transform = 'translateY(0)';
    }, 1000);

    // Efecto hover adicional
    btnUp.addEventListener('mouseenter', () => {
      btnUp.style.transform = 'scale(1.15)';
    });
    btnUp.addEventListener('mouseleave', () => {
      btnUp.style.transform = 'scale(1)';
    });
  }
});
