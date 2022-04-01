# ANIkan

## prerequisites

have python downloaded and run commands in [venv.md](venv.md)

relevant commands can be found in [src/help.txt](src/help.txt)

to run the commands, you must be in [src](src) directory or supply full path [src/app.py](src/app.py) to the python3 command

## relevant resources

- [aniAPI link](https://aniapi.com/docs/resources/anime)
- [v2 aniAPI docs](https://anilist.gitbook.io/anilist-apiv2-docs/)

## TODO

1. build out GET request functions for every type of GET request resource (python)
    - resource objects: Episode, Song, Resource, User, UserStory
      - make classes for each
    - how does pagination work?

2. build front-end application (React?) to interact with back-end API requests
    - how to make websites look pretty? pre-built components? look on youtube?
    - features to show for searched anime:
      - format
      - titles (en)
      - descriptions (en)
      - episodes_count
      - cover_image (reliant on has_cover_image)
      - genres
      - sagas
      - score
    - replace search with [Autocomplete](https://mui.com/components/autocomplete/#search-as-you-type)?

3. future features:
    - utility to view/watch episodes
    - anime tracker: keep track of current animes watched/watching, ratings, what episode you're on, etc
    - how to find anime based on what you've watched and what you like (crowd-sourcing?)

4. switch from v1 to v2 (API)
    - look [here](https://anilist.gitbook.io/anilist-apiv2-docs/)
    - [schema](https://anilist.github.io/ApiV2-GraphQL-Docs/)
