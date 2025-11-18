$content = Get-Content index.html -Raw
$newContent = Get-Content new_home_content.txt -Raw

# Find the section to replace
$startPattern = '<h2>.*?MONETA for Teachers</h2>'
$endPattern = '</div>\s*</div>\s*</section>'

# Replace the entire section
$content = $content -replace "(?s)$startPattern.*?$endPattern", $newContent + "</div>`n        </div>`n    </section>"

$content | Set-Content index.html
Write-Host 'Home page updated successfully'
