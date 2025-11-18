import os
import re

def clean_navigation(html_content):
    # Remove any existing navigation that might be duplicated
    html_content = re.sub(
        r'<nav class="navbar">[\s\S]*?<\/nav>',
        '',
        html_content
    )
    
    # Remove any duplicate navigation includes
    html_content = re.sub(
        r'<!--#include virtual=["\']/components/navigation.html["\']\s*-->\s*<!--#include virtual=["\']/components/navigation.html["\']\s*-->',
        '<!--#include virtual="/components/navigation.html" -->',
        html_content
    )
    
    # Ensure only one navigation include exists
    if '<!--#include virtual="/components/navigation.html" -->' not in html_content:
        html_content = html_content.replace(
            '<body>',
            '<body>\n    <!--#include virtual="/components/navigation.html" -->'
        )
    
    # Remove any duplicate SSI includes
    html_content = re.sub(
        r'<!--#include virtual=["\']/ssi/ssi.html["\']\s*-->\s*<!--#include virtual=["\']/ssi/ssi.html["\']\s*-->',
        '<!--#include virtual="/ssi/ssi.html" -->',
        html_content
    )
    
    return html_content

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as file:
            content = file.read()
        
        updated_content = clean_navigation(content)
        
        # Only write if changes were made
        if updated_content != content:
            with open(filepath, 'w', encoding='utf-8') as file:
                file.write(updated_content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {str(e)}")
        return False

def main():
    # Process all HTML files
    updated_count = 0
    for root, dirs, files in os.walk('.'):
        # Skip node_modules and other directories
        if 'node_modules' in root or '.git' in root or 'ssi' in root or 'components' in root:
            continue
            
        for file in files:
            if file.endswith('.html') and file != 'ssi.html':
                filepath = os.path.join(root, file)
                if process_file(filepath):
                    print(f"Updated: {filepath}")
                    updated_count += 1
    
    print(f"\nCleanup complete! {updated_count} files were updated.")

if __name__ == '__main__':
    main()
