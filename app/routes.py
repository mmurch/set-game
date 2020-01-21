import time
from flask import render_template
from app import app
from app.set_game.daily_set_game import DailySetGame


@app.route('/')
def home():
    return render_template(
        "/home.j2",
        cards=DailySetGame.get_current_cards(),
        now=int(time.time()))
