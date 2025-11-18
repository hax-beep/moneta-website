const fs = require('fs');
const path = require('path');

// Define the new navigation HTML with the Symphony of Financial Shift subtitle
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
                <a href="contact.html" class="nav-btn">Contact Us</a>
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
        
        // Skip if already updated
        if (content.includes('symphony-subtitle')) {
            console.log(`Skipping ${filePath} - already updated`);
            return;
        }
        
        // Update the active class based on the current page
        const pageName = path.basename(filePath, '.html');
        let updatedNav = newNavHTML;
        
        if (pageName !== 'index') {
            // Remove active class from all links
            updatedNav = updatedNav.replace(/nav-link active/g, 'nav-link');
            // Add active class to current page
            updatedNav = updatedNav.replace(
                `href="${pageName}.html" class="nav-link"`,
                `href="${pageName}.html" class="nav-link active"`
            );
        }
        
        // Replace the old navigation with the new one
        const navRegex = /<nav[\s\S]*?<\/nav>/;
        content = content.replace(navRegex, updatedNav);
        
        fs.writeFileSync(filePath, content, 'utf8');
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
