from enum import Enum, auto

class Color(Enum):
    RED = auto()
    GREEN = auto()
    PURPLE = auto()

class Number(Enum):
    ONE = 1
    TWO = 2
    THREE = 3

class Style(Enum):
    EMPTY = auto()
    SHADED = auto()
    FILLED = auto()
