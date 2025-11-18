import os

def update_html_file(file_path):
    try:
        with open(file_path, 'r', encoding='utf-8') as file:
            content = file.read()
        
        # Skip if already updated
        if 'js/navigation.js' in content:
            return False
            
        # Add script before closing head
        if '</head>' in content:
            new_content = content.replace(
                '</head>',
                '    <script src="js/navigation.js" defer></script>\n</head>'
            )
        else:
            # If no head tag found, add after opening body
            new_content = content.replace(
                '<body>',
                '<body>\n    <script src="js/navigation.js" defer></script>'
            )
        
        # Remove any existing nav elements
        new_content = new_content.replace(
            '<nav class="navbar">',
            '<!-- Navigation will be inserted here by navigation.js -->'
        )
        
        # Ensure there's a placeholder for the nav
        if '<!-- Navigation will be inserted here by navigation.js -->' not in new_content:
            new_content = new_content.replace(
                '<body>',
                '<body>\n    <!-- Navigation will be inserted here by navigation.js -->'
            )
        
        with open(file_path, 'w', encoding='utf-8') as file:
            file.write(new_content)
        
        return True
    except Exception as e:
        print(f"Error updating {file_path}: {str(e)}")
        return False

def main():
    # Get all HTML files in the current directory (excluding node_modules)
    html_files = []
    for root, dirs, files in os.walk('.'):
        if 'node_modules' in root:
            continue
        for file in files:
            if file.endswith('.html') and not file.startswith('.'):
                html_files.append(os.path.join(root, file))
    
    updated_count = 0
    for file_path in html_files:
        if update_html_file(file_path):
            print(f"Updated: {file_path}")
            updated_count += 1
        
    print(f"\nUpdate complete! {updated_count} files were updated.")

if __name__ == '__main__':
    main()
