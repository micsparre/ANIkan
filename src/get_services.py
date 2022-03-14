import requests
import urllib.parse
import validate as validate
import parse as parse
import random

BASE_URL = 'https://api.aniapi.com'
token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEzOTkiLCJuYmYiOjE2NDcyMjE1NTQsImV4cCI6MTY0OTgxMzU1NCwiaWF0IjoxNjQ3MjIxNTU0fQ.VK7gOuuIU2m2BnQLssbzn7bQ1dw1t_FB0cRmBlGr37o'

headers = {'Authorization': "Bearer {}".format(token)}
# endpoint = "/v1/anime?title=Tokyo%20Ghou"
# auth_response = requests.get(BASE_URL + endpoint, headers=headers)
# print(auth_response.status_code)
# print(auth_response.json()['data'])
# print(auth_response.json()['data'][0].keys())

def random_anime():
    endpoint = "/v1/random/anime?locale=en&genres=action"
    while True:
        auth_response = requests.get(BASE_URL + endpoint, headers=headers)
        validate.check_response(auth_response)
        data = auth_response.json()['data'][0]
        print("data keys:", str(data.keys()) + '\n')

        print("score:", data['score'])
        if data['score']  >= 75:
            rc = parse.title_desc(data)
            if rc == 0: break


def search(title):
    url_encoded_title = urllib.parse.quote(title)
    endpoint = "/v1/anime?title={}&formats=0".format(url_encoded_title)
    auth_response = requests.get(BASE_URL + endpoint, headers=headers)
    validate.check_response(auth_response)
    data = auth_response.json()['data']
    # print(data)
    count = data['count'] if data else 0
    print("Found {} title".format(count) + ("s" if count != 1 else "") + '\n')
    for doc in data['documents']:
        rc = parse.title_desc(doc)

def popular_anime():
    endpoint = "/v1/anime"
    auth_response = requests.get(BASE_URL + endpoint, headers=headers)
    validate.check_response(auth_response)
    data = auth_response.json()['data']
    r_doc = data['documents'][random.randint(0,99)]
    rc = parse.title_desc(r_doc)
    print("score:", str(r_doc['score']) + '\n')
