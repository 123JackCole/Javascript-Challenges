class Book {

    constructor(title, author, isbn, numCopies) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.numCopies = numCopies;
    }

    get availability() {
        return this.getAvailability();
    }

    getAvailability() {
        if (this.numCopies === 0) {
            return "out of stock";
        } else if (this.numCopies < 10) {
            return "low stock";
        } else {
            return "in stock";
        }
    }

    sell = (numCopiesSold = 1) => {
        this.numCopies -= numCopiesSold;
    }

    restock = (numCopiesStocked = 5) => {
        this.numCopies += numCopiesStocked;
    }

}