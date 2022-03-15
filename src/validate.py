
# command line argument length validation
def validate_args(args):
    command = args[1]
    if command == "help":
        if len(args) != 2:
            print_error()
    elif command == "random":
        if len(args) != 2:
            print_error()
    elif command == "search":
        if len(args) != 3:
            print_error()
    elif command == "popular":
        if len(args) != 2:
            print_error()
    else:
        print("invalid command")
        exit(1)
        
# helper function to print error response and exit with non-zero error code
def print_error():
    print("invalid num args")
    print("run commmand: 'python3 app.py help' for more information")
    exit(1)
    
# check response code from GET request
def check_response(response):
    if response['status_code'] != 200:
        print("bad response code:", response['status_code'])
        exit(1)