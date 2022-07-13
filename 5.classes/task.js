class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this._state = 100;
        this.type = null;
    }

    fix() {
        this.state = this._state * 1.5;
    }

    set state(value) {
        this._state = Math.max(0, Math.min(value, 100));
    }

    get state() {
        return this._state;
    } 
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = 'book';
        this.author = author;
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex((book) => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0];
        }
        return null;
    }
}

class Student {
    static getAverage(array) {
        const sum = array.reduce((acc, v) => acc + v);
        const count = array.length;
        return sum / count;
    }

    constructor(name) {
        this.name = name;
        this.subjects = {};
    }

    addMark(mark, subjectName) {
        if (mark < 1 || mark > 5) {
            return 'Ошибка, оценка должна быть числом от 1 до 5';
        }
        this.subjects[subjectName] = (this.subjects[subjectName] || []).concat(mark);
    }

    getAverageBySubject(subjectName) {
        if (this.subjects[subjectName]) {
            const average = Student.getAverage(this.subjects[subjectName]);
            console.log( `Средний балл по предмету ${subjectName} ${average}`);
            return average;
        }
        return 'Несуществующий предмет';
    }

    getAverage() {
        const marks = Object.values(this.subjects).flat();
        const average = Student.getAverage(marks);
        console.log( `Средний балл по всем предметам ${average}`);
        return average;
    }

    exclude(reason) {
        delete this.subjects;
        this.excluded = reason;
    }
}
