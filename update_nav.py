import os

def update_file(file_path):
    with open(file_path, 'r', encoding='utf-8') as file:
        content = file.read()
    
    # Check if the file already has the navigation script
    if 'js/navigation.js' in content:
        return False
    
    # Add the navigation script before the closing head tag
    if '</head>' in content:
        new_content = content.replace(
            '</head>',
            '    <script src="js/navigation.js" defer></script>\n</head>'
        )
    else:
        # If no head tag, add it after the opening body tag
        new_content = content.replace(
            '<body>',
            '<body>\n    <script src="js/navigation.js" defer></script>'
        )
    
    # Remove any existing nav elements
    new_content = new_content.replace(
        '<nav class="navbar">',
        '<!-- Navigation will be inserted here by navigation.js -->'
    )
    
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(new_content)
    
    return True

def main():
    # Get all HTML files in the current directory
    html_files = [f for f in os.listdir('.') if f.endswith('.html') and f != 'index.html' and not f.startswith('node_modules')]
    
    for file in html_files:
        try:
            if update_file(file):
                print(f'Updated: {file}')
            else:
                print(f'Skipped (already updated): {file}')
        except Exception as e:
            print(f'Error updating {file}: {str(e)}')

if __name__ == '__main__':
    main()
