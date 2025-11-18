// Navigation Bar Component
document.addEventListener('DOMContentLoaded', function() {
    // Remove any existing navigation elements
    const existingNavs = document.querySelectorAll('nav.navbar, .navbar, .nav-links, nav');
    existingNavs.forEach(nav => nav.remove());
    
    // Remove any duplicate header content
    const headers = document.querySelectorAll('header');
    if (headers.length > 1) {
        for (let i = 1; i < headers.length; i++) {
            headers[i].remove();
        }
    }
    
    // Create navigation HTML
    const navHTML = `
    <nav class="navbar">
        <div class="container">
            <!-- Left side - Logo -->
            <a href="index.html" class="logo">
                <img src="./images/moneta-logo.png" alt="MONETA 2025" class="logo-img">
                <div class="logo-text">
                    <span class="moneta-title">MONETA 2025</span>
                    <span class="symphony-subtitle">Symphony of Financial Shift</span>
                </div>
            </a>
            
            <!-- Mobile menu button (uses .hamburger so it matches styles.css) -->
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
            
            <!-- Navigation links -->
            <div class="nav-links">
                <a href="index.html" class="nav-link">Home</a>
                <a href="about.html" class="nav-link">About</a>
                <a href="events.html" class="nav-link">Events</a>
                <a href="speakers.html" class="nav-link">Speakers</a>
                <a href="sponsors.html" class="nav-link">Sponsors</a>
                <a href="team.html" class="nav-link">Team</a>
                <a href="blogs.html" class="nav-link">Blogs</a>
                <a href="testimonials.html" class="nav-link">Testimonials</a>
                <a href="#register" class="nav-btn register-btn">Register Now</a>
            </div>
        </div>
    </nav>
    `;

    // Add navigation to the page
    const header = document.querySelector('header');
    if (header) {
        header.insertAdjacentHTML('afterbegin', navHTML);
    } else {
        document.body.insertAdjacentHTML('afterbegin', navHTML);
    }

    // Mobile menu toggle functionality
    const mobileMenuBtn = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('active');

            // Toggle body scroll when menu is open
            if (this.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking on a nav link
        document.querySelectorAll('.nav-link, .nav-btn').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    // Highlight current page in navigation
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar') && !event.target.closest('.mobile-menu-btn')) {
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const navLinks = document.querySelector('.nav-links');
            if (mobileMenuBtn && navLinks) {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        }
    });
    
    // Handle window resize
    function handleResize() {
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        if (window.innerWidth > 1024) {
            // On desktop, ensure menu is visible and reset mobile styles
            if (navLinks) {
                navLinks.classList.remove('active');
                // clear any inline styles that might have been set
                navLinks.style.display = '';
                document.body.style.overflow = 'auto';
            }
        } else {
            // On mobile, rely on CSS to hide/show the menu via the .active class
            if (navLinks && !navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navLinks.style.display = '';
            }
        }
    }
    
    // Initial check
    handleResize();
    
    // Add resize listener
    window.addEventListener('resize', handleResize);
});
