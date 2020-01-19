
// our card features
const Color = { RED: 0, GREEN: 1, PURPLE: 2 }

const Number = { ONE: 0, TWO: 1, THREE: 2 }

const Shape = { SQUIGGLE: 0, DIAMOND: 1, OVAL: 2 }

const Style = { EMPTY: 0, SHADED: 1, FILLED: 2 }


// card class for more readable set logic, internal to this module
class Card {
    constructor (color, number, shape, style) {
        this.color = color;
        this.number = number;
        this.shape = shape;
        this.style = style;
    }
}


// getters for each feature based on id
// id corresponds to the cards placed in a predictable order
// so you can derive the attribute from the id alone
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

    // sets are three cards where each of the four attributes 
    // is all the same or all different
    static isSet(cardOneId, cardTwoId, cardThreeId){
        let cards = [
            getCardById(cardOneId),
            getCardById(cardTwoId),
            getCardById(cardThreeId)
        ];

        // for each feature, it is a set if the sum 
        // of its values (0, 1, 2) mod 3 is equal to zero
        // code is repetitive, but less repetitive options have looked overkill
        if ((cards[0].color + cards[1].color + cards[2].color) % 3 != 0) {
            return false;
        }
        if ((cards[0].number + cards[1].number + cards[2].number) % 3 != 0) {
            return false;
        }
        if ((cards[0].shape + cards[1].shape + cards[2].shape) % 3 != 0) {
            return false;
        }
        if ((cards[0].style + cards[1].style + cards[2].style) % 3 != 0) {
            return false;
        }

        return true;
    }
}
export default SetGame

