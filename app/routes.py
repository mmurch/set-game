import time
from flask import render_template
from app import app
from app.set_game.daily_set_game import DailySetGame

@app.route('/')
@app.route('/index')
def index():
    return render_template(
        "/game/game.j2", 
        cards = DailySetGame.get_current_cards(), 
        now=int(time.time()))

@app.route('/home')
def home():
    return render_template(
        "/home.j2", 
        cards = DailySetGame.get_current_cards(), 
        now=int(time.time()))
