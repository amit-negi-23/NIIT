const pi = 3.14;

const calculateArea = (choice, side, length, breadth, radius) => {
    let area = 0.0;
    switch (choice) {
        case 'square':
            if (side) {
                area = side * side;
            } else {
                area = -1;
            }
            break;

        case 'rectangle':
            if (length && breadth) {
                area = length * breadth;
            } else {
                area = -1;
            }
            break;

        case 'circle':
            if (radius) {
                area = 3.14 * radius * radius;
            } else {
                area = -1;
            }
            break;

        default:
            area = -1;
            break;
    }
    return area
}
module.exports = { calculateArea }
