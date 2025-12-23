import os
from bs4 import BeautifulSoup
from markdownify import markdownify as md

# CONFIGURATION
# ---------------------------------------------------------
INPUT_FOLDER = './m3plandval'   # Folder containing your messy HTML files
OUTPUT_FOLDER = './em3plandval'   # Where to save clean .md files
# ---------------------------------------------------------

def clean_html_to_md(html_content):
    soup = BeautifulSoup(html_content, 'html.parser')

    # 1. Extract the Title
    # Freshdesk usually puts the title in an h1 with class 'fw-page-title'
    title_tag = soup.find(class_='fw-page-title')
    title = title_tag.get_text(strip=True) if title_tag else "Untitled Article"

    # 2. Extract the Main Body
    # The actual content is usually in a div with class 'fw-content'
    content_div = soup.find('div', class_='fw-content')
    
    if not content_div:
        return None, "No content div found"

    # 3. Clean up specific Freshdesk noise inside the content
    # Remove 'script' tags if any snuck in
    for script in content_div(["script", "style"]):
        script.decompose()

    # 4. Convert HTML to Markdown
    # str(content_div) passes just the inner HTML of the article to the converter
    markdown_body = md(str(content_div), heading_style="ATX", strip=['a']) 
    # Note: strip=['a'] removes links but keeps text. Remove that argument if you WANT to keep links.
    # markdownify generally handles iframes (videos) by leaving them as HTML, which DocFX supports.

    # 5. Construct Final Output
    # We add the Title as a YAML header (for DocFX) or just a standard H1
    final_output = f"# {title}\n\n{markdown_body}"
    
    # Remove excessive newlines often created during conversion
    final_output = final_output.replace('\n\n\n', '\n\n')
    
    return title, final_output

def process_folder():
    if not os.path.exists(OUTPUT_FOLDER):
        os.makedirs(OUTPUT_FOLDER)

    for filename in os.listdir(INPUT_FOLDER):
        if filename.endswith(".html") or filename.endswith(".md"):
            file_path = os.path.join(INPUT_FOLDER, filename)
            
            with open(file_path, 'r', encoding='utf-8') as f:
                raw_html = f.read()

            print(f"Processing: {filename}...")
            title, clean_md = clean_html_to_md(raw_html)

            if clean_md:
                # Create a safe filename from the title or use original
                safe_name = os.path.splitext(filename)[0] + ".md"
                output_path = os.path.join(OUTPUT_FOLDER, safe_name)

                with open(output_path, 'w', encoding='utf-8') as f:
                    f.write(clean_md)
                print(f"  -> Saved to {safe_name}")
            else:
                print(f"  -> Skipped (Could not find content body)")

if __name__ == "__main__":
    process_folder()