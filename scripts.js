// Sidebar icon hover effects
document.querySelectorAll('.sidebar a').forEach(link => {
  link.addEventListener('mouseenter', () => {
    link.querySelector('i').style.transform = 'scale(1.1)';
  });
  link.addEventListener('mouseleave', () => {
    link.querySelector('i').style.transform = 'scale(1)';
  });
});
//About

    document.querySelectorAll('.impact-card').forEach(card => {
      card.style.opacity = 0;
      card.style.transform = 'translateY(20px)';
      card.style.transition = 'all 0.6s ease';
      observer.observe(card);
    });
    //Gallery
    // Add this to your existing script section
document.querySelector('.sidebar-gallery-icon').addEventListener('click', () => {
  document.getElementById('global-gallery').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
});
//nAVBAR
// Add interactive globe rotation on scroll
  document.addEventListener('scroll', () => {
    const btnGlobe = document.querySelector('.btn-globe');
    const scrollPercent = window.scrollY / 500;
    btnGlobe.style.transform = `rotate(${scrollPercent * 45}deg)`;
  });
  //Jozi Bounce
  // Add click animation
document.querySelectorAll('.jozi-bounce-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    this.style.animation = 'none';
    void this.offsetWidth; // Trigger reflow
    this.style.animation = 'joziPulse 0.5s';
  });
});
document.querySelector('.orb').addEventListener('click', () => {
  new Audio('hologram_activation.mp3').play();
});

// Mobile sidebar toggle
document.getElementById('mobile-menu-button').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebar-overlay');
  
  // Toggle sidebar
  sidebar.classList.toggle('-translate-x-full');
  
  // Toggle overlay
  overlay.classList.toggle('opacity-0');
  overlay.classList.toggle('pointer-events-none');
});

//our impact


   // Form Submission Logic
  const contactForm = document.getElementById('contactForm');
  const formConfirmation = document.getElementById('formConfirmation');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form processing
    contactForm.classList.add('opacity-50', 'pointer-events-none');
    contactForm.querySelector('button').innerHTML = '<i class="fas fa-circle-notch fa-spin mr-2"></i> Encrypting...';
    
    setTimeout(() => {
      formConfirmation.classList.remove('hidden');
      contactForm.reset();
      contactForm.classList.remove('opacity-50', 'pointer-events-none');
      contactForm.querySelector('button').innerHTML = 'Initiate Transmission <svg viewBox="0 0 24 24" width="20" height="20" class="ml-2 animate-pulse"><path fill="currentColor" d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></svg>';
      
      // Hide confirmation after 5s
      setTimeout(() => formConfirmation.classList.add('hidden'), 5000);
    }, 2000);
  });

  // Animated background effect
  document.addEventListener('mousemove', (e) => {
    const gridBg = document.querySelector('.bg-grid-white');
    if (gridBg) {
      const x = e.clientX / window.innerWidth * 10;
      const y = e.clientY / window.innerHeight * 10;
      gridBg.style.transform = `translate(${x}px, ${y}px)`;
    }
  });

  //Mobile Toggle
  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const navbarMobileMenuButton = document.getElementById('navbar-mobile-menu-button');
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');

    const toggleSidebar = () => {
      sidebar.classList.toggle('active');
      overlay.classList.toggle('active');
    };

    if (mobileMenuButton) {
      mobileMenuButton.addEventListener('click', toggleSidebar);
    }
    if (navbarMobileMenuButton) {
      navbarMobileMenuButton.addEventListener('click', toggleSidebar);
    }

    if (overlay) {
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });
    }

    const sidebarLinks = sidebar.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('active');
        overlay.classList.remove('active');
      });
    });
  });


  // Animated Counter (2025 Update)
  function animateCounter(id, target, duration = 2000) {
    const element = document.getElementById(id);
    const progress = document.getElementById(id.replace('counter', 'progress'));
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        element.textContent = Math.floor(target).toLocaleString() + '+';
        progress.style.width = '100%';
        clearInterval(timer);
      } else {
        element.textContent = Math.floor(start).toLocaleString();
        progress.style.width = `${(start / target) * 100}%`;
      }
    }, 16);
  }

 // Impact Counter Observer - Single Focus Implementation
const impactObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Animate numerical counter
      animateCounter('counter-children', 125000);
      
      // Animate radial progress (girls' education metric)
      const radial = document.getElementById('girls-progress');
      radial.style.strokeDasharray = '0, 100'; // Reset state
      setTimeout(() => {
        radial.style.transition = 'stroke-dasharray 1.5s ease-out';
        radial.style.strokeDasharray = '89, 100'; // 89% completion
      }, 500);
      
      impactObserver.unobserve(entry.target); // Disconnect after triggering
    }
  });
}, { threshold: 0.1 });

// Activate only on the impact section
impactObserver.observe(document.getElementById('impact'));  


