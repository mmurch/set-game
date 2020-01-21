from bs4 import BeautifulSoup
import requests


class DailySetGame:

    def __init__(self):
        return

    @staticmethod
    def get_current_cards():

        page = requests.get('https://www.setgame.com/set/puzzle', verify=False)

        soup = BeautifulSoup(page.content, 'html.parser')

        tds = soup.find_all('div', class_='set-card-td')

        return list(map(lambda td: int(''.join(filter(str.isdigit, td.a.img['src']))), tds))
