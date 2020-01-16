from .card import Card
from .features import Number, Color, Style

class Deck():

    def __init__(self):
        return

    @staticmethod
    def get_card_by_id(self, id):
        return Card(
            self.get_number(id),
            self.get_color(id),
            self.get_style(id)
        )

    @staticmethod
    def get_style(id):
        if 0 < id <= 27:
            return Style.FILLED
        elif 27 < id <= 54:
            return Style.SHADED
        elif 54 < id <= 81:
            return Style.EMPTY
        else:
            raise ValueError
    
    @staticmethod
    def get_color(id):
        mod = id % 9
        if 1 <= mod < 4:
            return Color.RED
        elif 4 <= mod < 7:
            return Color.PURPLE
        elif 7 <= mod < 9 or mod == 0:
            return Color.GREEN
        else:
            raise ValueError
    
    @staticmethod
    def get_number(id):
        return id % 3 or 3
