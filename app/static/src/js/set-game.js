
// our card features
const Color = { RED = 0, GREEN = 1, PURPLE = 2 }

const Number = { ONE = 0, TWO = 1, THREE = 2 }

const Shape = { SQUIGGLE = 0, DIAMOND = 1, OVAL = 2 }

const Style = { EMPTY = 0, SHADED = 1, FILLED = 2 }


// card class for more readable set logic, internal to this module
class Card {
    constructor (color, number, shape, style) {
        this.color = color;
        this.number = number;
        this.shape = shape;
        this.style = style;
    }
}

function getColor(id){
    let mod = id % 9;
    if (mod >= 1 && mod < 4){
        return Color.RED;
    }
    else if (mod >= 4 && mod < 7){
        return Color.PURPLE;
    }
    else if (mod >= 7 || mod == 0){
        return Color.GREEN
    }
}

function getNumber(id){
    return (id - 1) % 3;
}

function getShape(id){
    return Math.floor((id - 1) % 27 / 9);
}

function getStyle(id){
    if (id <= 27){
        return Style.FILLED
    }
    else if (id <= 54){
        return Style.SHADED
    }
    return Style.EMPTY
}

function getCardById(id){
    if (id < 1 || id > 81){
        throw "id outside of valid range";
    }
    return new Card(
        getColor(id),
        getNumber(id),
        getShape(id),
        getStyle(id)
    );
}

class SetGame {
    static isSet(cardOne, cardTwo, cardThree){
        // not implemented yet
        return false
    }
}
export default SetGame

