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