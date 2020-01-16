import requests

for num in range(1, 82):
    with open(f"../app/static/img/card_{num}.png", 'wb') as f:
        resp = requests.get(f"https://www.setgame.com/sites/all/modules/setgame_set/assets/images/new/{num}.png", verify=False)
        f.write(resp.content)