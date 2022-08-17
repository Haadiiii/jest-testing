class Calculate {
    constructor (a, b) {
        this.a = a;
        this.b = b;
    }
    add () {
        return this.a + this.b;
    }
    sub () {
        return this.a - this.b;
    }
    mul () { 
        return this.a * this.b;
    }
    div () {
        return this.a / this.b;
    }
}
 module.exports = Calculate;