import os
import re

def update_navigation(html_content):
    # Remove any existing navigation
    html_content = re.sub(
        r'<nav class="navbar">[\s\S]*?<\/nav>',
        '',
        html_content
    )
    
    # Add the navigation component
    html_content = html_content.replace(
        '<body>',
        '<body>\n    <!--#include virtual="/components/navigation.html" -->'
    )
    
    # Add SSI support if not present
    if '<!--#include virtual=' not in html_content:
        html_content = html_content.replace(
            '<body>',
            '<!--#include virtual="/ssi/ssi.html" -->\n<body>'
        )
    
    return html_content

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Skip if already processed
        if '<!--#include virtual="/components/navigation.html" -->' in content:
            return False
            
        updated_content = update_navigation(content)
        
        with open(filepath, 'w', encoding='utf-8') as file:
            file.write(updated_content)
            
        return True
    except Exception as e:
        print(f"Error processing {filepath}: {str(e)}")
        return False

def main():
    # Create components directory if it doesn't exist
    os.makedirs('components', exist_ok=True)
    
    # Create SSI support file
    with open('ssi/ssi.html', 'w') as f:
        f.write("""
        <script>
        // SSI (Server Side Includes) emulation
        document.addEventListener('DOMContentLoaded', function() {
            // Find all includes
            const includes = document.querySelectorAll('[data-include]');
            
            // Process each include
            Array.prototype.forEach.call(includes, function(include) {
                const file = include.getAttribute('data-include');
                if (file) {
                    const xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function() {
                        if (this.readyState === 4) {
                            if (this.status === 200) {
                                include.outerHTML = this.responseText;
                            } else if (this.status === 404) {
                                include.outerHTML = '<!-- Error: Include file not found -->';
                            }
                            include.removeAttribute('data-include');
                        }
                    };
                    xhr.open('GET', file, true);
                    xhr.send();
                }
            });
        });
        </script>
        """)
    
    # Process all HTML files
    updated_count = 0
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other directories
        if 'node_modules' in root or '.git' in root or 'ssi' in root:
            continue
            
        for file in files:
            if file.endswith('.html') and file != 'ssi.html':
                filepath = os.path.join(root, file)
                if process_file(filepath):
                    print(f"Updated: {filepath}")
                    updated_count += 1
    
    print(f"\nUpdate complete! {updated_count} files were updated.")
    print("\nNote: For the navigation to work properly, you'll need to serve the website using a local server.")
    print("You can use Python's built-in server by running: python -m http.server")

if __name__ == '__main__':
    main()
