from bs4 import BeautifulSoup

class Anime:
    
    # initialize anime object from API response object
    def __init__(self, data):
        self.id = data['id'] if 'id' in data else None
        self.anilist_id = data['anilist_id'] if 'anilist_id' in data else None
        self.mal_id = data['mal_id'] if 'mal_id' in data else None
        self.tmbd_id = data['tmbd_id'] if 'tmbd_id' in data else None
        self.format = data['format'] if 'format' in data else None
        self.status = data['status'] if 'status' in data else None
        self.titles = data['titles'] if 'titles' in data else None
        self.descriptions = data['descriptions'] if 'descriptions' in data else None
        self.start_date = data['start_date'] if 'start_date' in data else None
        self.end_date = data['end_date'] if 'end_date' in data else None
        self.weekly_airing_day = data['weekly_airing_day'] if 'weekly_airing_day' in data else None
        self.season_period = data['season_period'] if 'season_period' in data else None
        self.season_year = data['season_year'] if 'season_year' in data else None
        self.episodes_count = data['episodes_count'] if 'episodes_count' in data else None
        self.episode_duration = data['episode_duration'] if 'episode_duration' in data else None
        self.trailer_url = data['trailer_url'] if 'trailer_url' in data else None
        self.cover_image = data['cover_image'] if 'cover_image' in data else None
        self.has_cover_image = data['has_cover_image'] if 'has_cover_image' in data else None
        self.cover_color = data['cover_color'] if 'cover_color' in data else None
        self.banner_image = data['banner_image'] if 'banner_image' in data else None
        self.genres = data['genres'] if 'genres' in data else None
        self.sagas = data['sagas'] if 'sagas' in data else None
        self.sequel = data['sequel'] if 'sequel' in data else None
        self.prequel = data['prequel'] if 'prequel' in data else None
        self.score = data['score'] if 'score' in data else None
        self.nsfw = data['nsfw'] if 'nsfw' in data else None
    
    # return anime english title
    def get_english_title(self):
        if self.titles and self.titles['en']:
            return self.titles['en']
        return None
    
    # return anime english description (parsed from html)
    def get_english_description(self):
        if self.descriptions and self.descriptions['en']:
            parsed_data = BeautifulSoup(self.descriptions['en'], 'html.parser')
            return parsed_data.get_text()
        return None
    
    def get_score(self):
        if self.score:
            return self.score
        return None
    
    # prints out title, description, and score
    def toString(self):
        title = "Title: " + self.get_english_title() + '\n'
        desc = "Description: " + self.get_english_description() + '\n'
        score = "Score: " + str(self.get_score()) + '\n'
        return title + '\n' + desc + '\n' + score
    
    # comparator by score for Anime objects
    def compare(self):
        return self.score

        