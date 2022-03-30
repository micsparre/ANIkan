import sys
import get_services as get_services
import validate as validate

command = sys.argv[1]

validate.validate_args(sys.argv)

if command == "help":
    help_file = open('src/help.txt')
    print(help_file.read())
    help_file.close()
elif command == "random":
    get_services.random_anime()
elif command == "search":
    get_services.search(sys.argv[2])
elif command  == "popular":
    get_services.popular_anime()
