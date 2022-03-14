from bs4 import BeautifulSoup

def title_desc(data):
    title = data['titles']['en']
    if title != None:
        print("Title:", title + '\n')
        if data['descriptions']['en']:
            parsed_data = BeautifulSoup(data['descriptions']['en'], 'html.parser')
            print("Description:", parsed_data.get_text() + '\n')
        return 0
    return 1