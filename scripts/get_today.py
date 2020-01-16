from bs4 import BeautifulSoup
import requests

page = requests.get('https://www.setgame.com/set/puzzle', verify = False)

soup = BeautifulSoup(page.content, 'html.parser')

tds = soup.find_all('div', class_='set-card-td')

ids = list(map(lambda td: int(''.join(filter(str.isdigit, td.a.img['src']))), tds))

print(ids)
