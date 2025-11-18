const fs = require('fs');
const path = require('path');

// Define the new navigation HTML with Register Now button
const newNavHTML = `    <nav class="navbar">
        <div class="container">
            <a href="index.html" class="logo">
                <img src="logo.png" alt="MONETA 2025" class="logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
                <div class="logo-text">
                    <span class="moneta-title">MONETA 2025</span>
                    <span class="symphony-subtitle">Symphony of Financial Shift</span>
                </div>
            </a>
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
            <div class="mobile-menu-btn">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    </nav>`;

// Function to update navigation in a file
function updateNavigation(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Update the navigation with the new register button
        const navRegex = /<nav[\s\S]*?<\/nav>/;
        let updatedContent = content.replace(navRegex, newNavHTML);
        
        // Update active state based on current page
        const pageName = path.basename(filePath, '.html');
        if (pageName !== 'index') {
            // Remove active class from all links
            updatedContent = updatedContent.replace(/nav-link active/g, 'nav-link');
            // Add active class to current page
            updatedContent = updatedContent.replace(
                `href="${pageName}.html" class="nav-link"`,
                `href="${pageName}.html" class="nav-link active"`
            );
        }
        
        // Add custom CSS for the register button if not already present
        if (!updatedContent.includes('.register-btn')) {
            const styleTag = `
    <style>
        .register-btn {
            background: linear-gradient(135deg, #4a90e2, #1a5f9a);
            color: white !important;
            font-weight: 600;
            padding: 0.5rem 1.5rem !important;
            border-radius: 50px;
            transition: all 0.3s ease;
            box-shadow: 0 4px 15px rgba(74, 144, 226, 0.3);
            border: none;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
        .register-btn:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
            background: linear-gradient(135deg, #5a9cec, #2a6faa);
        }
        @media (max-width: 992px) {
            .register-btn {
                margin-top: 1rem;
                width: 100%;
                text-align: center;
                display: block;
            }
        }
    </style>`;
            updatedContent = updatedContent.replace('</head>', styleTag + '\n    </head>');
        }
        
        fs.writeFileSync(filePath, updatedContent, 'utf8');
        console.log(`Updated navigation in ${filePath}`);
    } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
    }
}

// Get all HTML files in the current directory
const files = fs.readdirSync('.').filter(file => file.endsWith('.html'));

// Update navigation in each file
files.forEach(file => {
    updateNavigation(file);
});

console.log('Navigation update complete!');
