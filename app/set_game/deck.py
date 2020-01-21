from .card import Card
from .features import Number, Color, Shape, Style
from math import floor


class Deck():

    def __init__(self):
        return

    @staticmethod
    def get_card_by_id(self, id):
        if id < 1 or id > 81:
            raise ValueError
        return Card(
            self.get_number(id),
            self.get_color(id),
            self.get_style(id)
        )

    @staticmethod
    def get_color(id):
        return Color(floor((id - 1) % 9 / 3))

    @staticmethod
    def get_number(id):
        return Number((id - 1) % 3)

    @staticmethod
    def get_shape(id):
        return Shape(floor((id - 1) % 27 / 9))

    @staticmethod
    def get_style(id):
        if id <= 27:
            return Style.FILLED
        elif id <= 54:
            return Style.SHADED
        return Style.EMPTY
