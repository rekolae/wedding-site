from sys import argv
from pprint import pprint

# You need to install requests from pip
from requests import post


def main(filename: str) -> None:
    with open(filename, encoding="utf-8") as user_records:
        for line in user_records.readlines():
            # Data is in format "username;fullname;password"
            # See example text file inside the folder
            splitted = line.split(";")

            # Pocketbase fields needed to add users
            data = {
                "username": splitted[0].strip(),
                "name": splitted[1].strip(),
                "password": splitted[2].strip(),
                "passwordConfirm": splitted[2].strip(),
            }

            # Change the address to match your setup
            response = post(
                "http://localhost:8090/api/collections/users/records", json=data
            )

            pprint(response.json())


if __name__ == "__main__":
    # Give input file as argument on the commandline
    main(argv[1])
    exit(0)
