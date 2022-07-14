function parseCount(string) {
    const parsedValue = Number.parseInt(string, 10);
    if (Number.isNaN(parsedValue)) {
        throw new Error('Невалидное значение');
    }
    return parsedValue;
}

function validateCount(count) {
    try {
        const parsedValue = parseCount(count);
        return parsedValue;
    } catch(err) {
        return err;
    }
}

class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }

        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const {a, b, c} = this;
        const p = 1/2 * (a + b + c);
        const s = Math.sqrt(p*(p - a)*(p -b)*(p-c));
        return Number(s.toFixed(3));
    }
}

function getTriangle(l1, l2, l3) {
    try {
        return new Triangle(l1, l2, l3);
    } catch(e) {
        const errFunc = () => 'Ошибка! Треугольник не существует';
        return {
            getPerimeter: errFunc,
            getArea: errFunc,
        };
    }
}
