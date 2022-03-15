# API Objects

## [Anime](Anime.py)

- id : unique identifier for an Anime (int)
- anilist_id : [Anilist](https://anilist.co/) external unique identifier (integer, nullable)
- mal_id : [MyAnimeList](https://myanimelist.net/) external unique identifier (integer, nullable)
- tmbd_id : [TheMovieDatabase](https://www.themoviedb.org/) external unique identifier (integer, nullable)
- format : the show's format destination (enum)
  - possible format enum values:
    - "TV": 0,
    - "TV_SHORT": 1,
    - "MOVIE": 2,
    - "SPECIAL": 3,
    - "OVA": 4,
    - "ONA": 5,
    - "MUSIC": 6
- status : the show's global release status (enum)
  - possible status enum values:
    - "FINISHED": 0,
    - "RELEASING": 1,
    - "NOT_YET_RELEASED": 2,
    - "CANCELLED": 3
- titles : a dictionary of the show's titles organized by localization (map of strings)
- descriptions : a dictionary of the show's descriptions organized by localization  (map of strings)
- start_date : the show's global release date (date, nullable)
- end_date : the known show's global end date (date, nullable)
- weekly_airing_day : the known show's episode release day (enum, nullable)
  - possible day enum values:
    - "Sunday": 0,
    - "Monday": 1,
    - "Tuesday": 2,
    - "Wednesday": 3,
    - "Thursday": 4,
    - "Friday": 5,
    - "Saturday": 6
- season_period : the season on which the show has been released (enum)
  - possible season_period enum values:
    - "WINTER": 0,
    - "SPRING": 1,
    - "SUMMER": 2,
    - "FALL": 3,
    - "UNKNOWN": 4
- season_year : the year on which the show has been released (int, nullable)
- episodes_count : number of episodes released for the show (int)
- episode_duration : the show's episode average duration in minutes (int, nullable)
- trailer_url : external link to the show's trailer video (string, nullable)
  - possible services:
    - YouTube
    - DailyMotion
- cover_image : the show's cover image (string)
- has_cover_image : indicates if the show has a cover image associated with it (bool)
- cover_color : the show's cover main color, in HEX format (string, nullable)
- banner_image : the show's banner image (string, nullable)
- genres : a collection of the show's associated genres (array of strings)
  - you can find all possible values [here](https://api.aniapi.com/v1/resources/1.0/0)
- sagas : a collection of the show's associated sagas (array of objects, nullable)
  - saga's object structure:

```python
    {
  // Map of strings
  // Contains the saga's title in various localizations
  "titles": {}

  // Map of strings
  // Contains the saga's description in various localizations
  "descriptions": {}

  // Integer
  // The saga's first episode number
  "episode_from": 0

  // Integer
  // The saga's last episode number
  "episode_to": 0

  // Integer
  // The saga's total episodes count
  "episodes_count": 0
}
```

- sequel : the show's precedent Anime's unique identifier in story-line (int, nullable)
- prequel : the show's successive Anime's unique identifier in story-line (int, nullable)
- score : the show's global appreciation indicator. min value = 0 and max score = 100 (float)
- nsfw :  indicates if the show is marked as NotSafeForWork (bool)
