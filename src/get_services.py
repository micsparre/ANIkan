import requests
import urllib.parse
import validate as validate
import parse as parse
import random
from resources.Anime import Anime

BASE_URL = 'https://api.aniapi.com'
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzOTkiLCJuYmYiOjE2NDcyMjE1NTQsImV4cCI6MTY0OTgxMzU1NCwiaWF0IjoxNjQ3MjIxNTU0fQ.VK7gOuuIU2m2BnQLssbzn7bQ1dw1t_FB0cRmBlGr37o'
headers = {'Authorization': "Bearer {}".format(token)}

# outputs a random anime with an english title
def random_anime():
    endpoint = "/v1/random/anime?locale=en&genres=action"
    while True:
        auth_response = requests.get(BASE_URL + endpoint, headers=headers)
        validate.check_response(auth_response.json())
        data = auth_response.json()['data'][0]
        
        
        anime_obj = Anime(data)
        if anime_obj.get_english_title():
            print(anime_obj.toString())
            break

# searchs for anime TV titles based on user input and sorts them by best score
def search(title):
    url_encoded_title = urllib.parse.quote(title)
    endpoint = "/v1/anime?title={}".format(url_encoded_title)
    auth_response = requests.get(BASE_URL + endpoint, headers=headers)
    validate.check_response(auth_response.json())
    data = auth_response.json()['data'] # keys = ['current_page', 'count', 'documents', 'last_page']
    count = data['count'] if data else 0
    print("Found {} title".format(count) + ("s" if count != 1 else "") + '\n')
    docs = [Anime(x) for x in data['documents']]
    docs.sort(key=Anime.compare)
    for doc in docs:
        print(doc.toString())

# outputs a random anime from top 100 list (from myanimelist.com)
def popular_anime():
    endpoint = "/v1/anime"
    auth_response = requests.get(BASE_URL + endpoint, headers=headers)
    validate.check_response(auth_response.json())
    data = auth_response.json()['data']
    docs = [Anime(x) for x in data['documents']]
    r_doc = docs[random.randint(0,99)]
    print(r_doc.toString())


# search("One Piece")