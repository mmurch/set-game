from enum import Enum, auto


class Color(Enum):
    RED = 0
    GREEN = 1
    PURPLE = 2


class Number(Enum):
    ONE = 0
    TWO = 1
    THREE = 2


class Shape(Enum):
    SQUIGGLE = 0
    DIAMOND = 1
    OVAL = 2


class Style(Enum):
    EMPTY = 0
    SHADED = 1
    FILLED = 2
