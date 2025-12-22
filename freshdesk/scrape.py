import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
import time
import re

class SupplyChainUniversalCopier:
    def __init__(self, start_url, output_dir="sc365_complete_backup"):
        self.start_url = start_url
        self.base_domain = "https://" + urlparse(start_url).netloc
        self.output_dir = output_dir
        self.session = requests.Session()
        
        # --- AUTHENTICATION & HEADERS ---
        # I've included the headers you used in your file
        self.session.headers.update({
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
            # If the site is truly public, this Cookie isn't strictly necessary, but good to have just in case.
            "Cookie": "_cs_c=1; _BEAMER_USER_ID_CkAnkUkX19260=ac6b3339-f229-49b5-b2f6-42c8fae24702; _BEAMER_FIRST_VISIT_CkAnkUkX19260=2025-04-10T08:09:33.954Z; _ga=GA1.1.1693595072.1752246173; _hp2_id.870388005=%7B%22userId%22%3A%227466956205073281%22%2C%22pageviewId%22%3A%221310786269249848%22%2C%22sessionId%22%3A%22387152605243203%22%2C%22identity%22%3Anull%2C%22trackerVersion%22%3A%224.0%22%7D; _cs_id=aae89d46-4ef3-ae6b-8b81-60c66fa95fbd.1744272552.8.1764753137.1764753137.1734932206.1778436552295.1.x; _BEAMER_DATE_CkAnkUkX19260=2025-12-08T08:15:00.000Z; _x_w=7_1; return_to=/a/tickets/202201144; authorize=true; helpdesk_node_session=ce3882e456192ea4ec8a423c53aef24900633b012957bea8b97a3aa42feda632fdd2613a94533bed5e8729ffa83e9c667932fcbdda3419216f46703efd8578b7; user_credentials=BAhJIgGOZGMxZjMyODllOWMwMTExNDFmNzE1NTlkNTg1ODViYjQwOWExMGQ0NTE2OWMyMzdkZWRkODUyMTA3MTM5ODllYzkzMmM0YTA5NDI1NmE5NWM5MGJmOTNkNTAzZWI5ZjFiMjM3YmM2NjFjMGE3NDk2Njc3NDVmYjhlMDRlNDIyZmU6OjEwMzExMzE4MTUyNwY6BkVU--1da732aa182fdb9bc00032042d05cd23c23cc74d; fd=827cf3c1-977a-4950-86d9-7a70da24508f; session_state=MGYwYjdlMDczZWEwZDk4YTA5NjFlMjcxOGY4NzFlZGE1Y2JjNTJmOGE4MTBkYmI0YTU0MGQyNWJlYjczNTM2MA%3D%3D.920988368344259271; session_token=02bf6a05ca624088db20a45506079008ba95bba32ad6fc4cf4ce67eae2f3aebb001202b3d3c0e9554e9112a8aa34d25ceac0eeaf8edce4f7fe9b86e1c7fab3b832ac1df4fdda0cd420e91cb7724104bfe16b3254b13682d7c739ce0f9606b9f26fca3d30262732ed7d4459f4286358b5; service_worker=true; _gcl_au=1.1.553521660.1766133234; _ga_SVD9VGDT5G=GS2.1.s1766157593$o4$g0$t1766157597$j56$l0$h0; _x_m=; _hp2_props.2826793817=%7B%22account_state%22%3A%22active%22%2C%22account_plan%22%3A%22Pro%2021%22%2C%22billing_cycle%22%3Anull%7D; _hp2_ses_props.2826793817=%7B%22r%22%3A%22https%3A%2F%2Fsupport.supplychain365.com%2Fsupport%2Fsolutions%2Farticles%2F103000025343-supplychain365-general-information%22%2C%22ts%22%3A1766404415916%2C%22d%22%3A%22support.supplychain365.com%22%2C%22h%22%3A%22%2Fa%2Fsolutions%2Farticles%2F103000025344%22%7D; _BEAMER_FILTER_BY_URL_CkAnkUkX19260=false; __cf_bm=QqKUFgFrTUHYB1zEvNn3AdF8ePeB.QRKf4kH0i.E46A-1766409973-1.0.1.1-vTANpSqUYEITn4nSwGLiGL6rg8S8P90GdvaGm7JXWlJrrD__hIRSfYU_XYngrlcFHJL6ctILZOEbyUQHYebQDLGMwN6xUyW5eDbGYOjG4qI; _hp2_id.2826793817=%7B%22userId%22%3A%223391395836890201%22%2C%22pageviewId%22%3A%228457169291164523%22%2C%22sessionId%22%3A%227412630776605403%22%2C%22identity%22%3A%22103113181527%22%2C%22trackerVersion%22%3A%224.0%22%2C%22identityField%22%3Anull%2C%22isIdentified%22%3A1%7D; _helpkit_session=cGhpOGZHVFRhdEdUczZjZ0JuTkthSDJoNzlkUWM3OEZiRDNtS2FFZDVDcTg0SmlUcEVIekFTQkpIMW4yYXdrUEVKR2dUQnY2OGFmV0FBWS8zY1c5Y1M0Vmo2c2oxK2gvR2U3KzQ4b3BUeW5FS2RBZHc3ak1xS01YMGRxM1U1TmRuSzNOVjNBY3B2K1YrMEt6dGpRQ1NnSFZySW9oeFdzZGVBY2NLcGh0WU1WTk5YOUZvYUFxVGdyV214ZjJTL0dWcGg2WW5KM3JUbkFOQzkzd1ZNWk8xVFlHUUMvb2grVERIS3lsMmV4WGdJUjVQRDN5VlUybEJkUGVNYXpjZXg3SWZJeUNnNUJQODFoTFlpYXBPMGFHa1lKdjY3aEVSd3BUMEtsczZCaHdSVnZ1TUczY1V6TEtsdEkzcTlnbWFOTWRpL3NXMFhiRmcvZlBTbEl4dE9teDloSWo2V1JzNUNVV0svSDhlNlh2REdHUkh2SnE3VlZsSDV5REVrZTFWV0RJWjViMXFhSE5IRWx0b1NIbE03U1Z5YXNjYnF3OFp6TXU4RjBTZW1Kd3Z3Mm45SkphYTZMdkF3MzI2RTB2MEJZN0RjdXpRQm5pRTFCc1N4cXYwbXVvN2tabStreGVVUzBadnNrUGM2djB0Q3JLRTNTU2dwbnM5cHlHUzkvN3ZXaFhaZkJVRTFqTEE4a2ZITitSRmVyazF6RmJNY0pUd3RveUFhejVWQUIra2dROWtIczM2d1VhdEpHdHFraFBQZmV1TjV6bzdYNmhKZWI5dkhqbU1xR09yeURxZEx4ZlNady9WS3FsL2w2UzBKRT0tLVo3ZTFxTWE5THpzN2NLdi9NeUo0aVE9PQ%3D%3D--9c0209426d9d0fb49f9796fd963052c9c351efb0" 
        })

        if not os.path.exists(output_dir):
            os.makedirs(output_dir)
        
        self.visited_urls = set()

    def clean_filename(self, text):
        """Sanitize filenames."""
        text = re.sub(r'[\\/*?:"<>|]', "", text)
        return text.strip()[:100]

    def save_article(self, url, content, folder_name="General"):
        """Saves HTML to a specific subfolder."""
        if url in self.visited_urls:
            return
        
        soup = BeautifulSoup(content, "html.parser")
        
        # 1. Get Title
        title_tag = soup.find("h1") or soup.find("title")
        filename = self.clean_filename(title_tag.get_text(strip=True)) if title_tag else "untitled"
        
        # 2. Prepare Folder
        safe_folder = self.clean_filename(folder_name)
        folder_path = os.path.join(self.output_dir, safe_folder)
        os.makedirs(folder_path, exist_ok=True)
        
        # 3. Save File
        full_path = os.path.join(folder_path, f"{filename}.html")
        with open(full_path, "w", encoding="utf-8") as f:
            f.write(content)
        
        print(f"   [Saved] {filename}")
        self.visited_urls.add(url)

    def process_folder(self, folder_url, folder_name):
        """Scrapes all articles inside a specific folder URL (handles pagination)."""
        print(f"\n[Folder] Scanning: {folder_name}...")
        current_url = folder_url
        
        while current_url:
            try:
                resp = self.session.get(current_url)
                soup = BeautifulSoup(resp.text, "html.parser")
                
                # A. Find all Article Links in this folder
                article_links = []
                for a in soup.find_all("a", href=True):
                    # Freshdesk usually puts articles under /articles/ or /solutions/articles/
                    if "/articles/" in a['href']:
                        full_link = urljoin(self.base_domain, a['href'])
                        article_links.append(full_link)
                
                if not article_links:
                    print(f"   [!] No articles found in {current_url} (might be empty)")
                    break

                # B. Save Each Article
                for art_url in article_links:
                    if art_url not in self.visited_urls:
                        # Polite delay
                        time.sleep(0.2)
                        art_resp = self.session.get(art_url)
                        self.save_article(art_url, art_resp.text, folder_name)

                # C. Find 'Next Page' Button
                next_btn = soup.find("a", {"rel": "next"}) or \
                           soup.find("a", class_="next_page") or \
                           soup.find("a", string=re.compile(r"Next", re.I))
                
                if next_btn and next_btn.get("href"):
                    current_url = urljoin(self.base_domain, next_btn["href"])
                    print("   --> Moving to next page of folder...")
                else:
                    current_url = None # Stop loop

            except Exception as e:
                print(f"   [Error] Failed in folder {folder_name}: {e}")
                break

    def run(self):
        print(f"Starting crawl at Root: {self.start_url}")
        try:
            # 1. Fetch the Main Menu (Solutions Page)
            resp = self.session.get(self.start_url)
            soup = BeautifulSoup(resp.text, "html.parser")
            
            # 2. Find ALL Folders/Categories
            # Freshdesk Structure: Home -> [Category Links] -> [Folder Links]
            # We look for any link containing '/folders/'
            folder_links = []
            
            for a in soup.find_all("a", href=True):
                if "/folders/" in a['href']:
                    full_link = urljoin(self.base_domain, a['href'])
                    # Get the text of the link as the Folder Name
                    folder_name = a.get_text(strip=True) or "Unknown Folder"
                    folder_links.append((full_link, folder_name))
            
            # Remove duplicate URLs while keeping names
            unique_folders = {}
            for url, name in folder_links:
                if url not in unique_folders:
                    unique_folders[url] = name
            
            print(f"Found {len(unique_folders)} Folders. Starting download...\n")

            # 3. Iterate through every folder found
            for url, name in unique_folders.items():
                self.process_folder(url, name)
                
            print("\n[Done] All accessible articles have been downloaded.")

        except Exception as e:
            print(f"[Critical Error] {e}")

# --- CONFIGURATION ---
# IMPORTANT: Start at the 'Solutions' root, NOT a specific article
ROOT_URL = "https://support.supplychain365.com/support/solutions"

if __name__ == "__main__":
    copier = SupplyChainUniversalCopier(ROOT_URL)
    copier.run()