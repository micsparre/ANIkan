# ANIkan

## prerequisites

have python downloaded and run commands in [venv.md](venv.md)

relevant commands can be found in [src/help.txt](src/help.txt)

to run the commands, you must be in [src](src) directory or supply full path [src/app.py](src/app.py) to the python3 command

## relevant resources

- [API link](https://aniapi.com/docs/resources/anime)

## TODO

1. build out GET request functions for every type of GET request resource
    - resource objects: Anime, Episode, Song, Resource, User, UserStory
    - make classes for each? OOP?

2. build out parsing functions for every key in the Anime (and other resources?) data dictionary received from API
    - keys: ['anilist_id', 'mal_id', 'tmdb_id', 'format', 'status', 'titles', 'descriptions', 'start_date', 'end_date', 'weekly_airing_day', 'season_period', 'season_year', 'episodes_count', 'episode_duration', 'trailer_url', 'cover_image', 'banner_image', 'genres', 'sagas', 'score', 'nsfw', 'has_cover_image', 'id']
        - more info at API link above
        - not all keys guaranteed to be on object (check b4 indexing)

3. build front-end application (React?) to interact with back-end API requests
    - how to make websites look pretty? pre-built components? look on youtube?
