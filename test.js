const stringLength = require("./stringLength");
const stringReverse = require("./ReverseString")
const Calculate = require("./calculate")
const capital = require('./uperCase');

let testing = "dancedanc";

it("check if string is greater than 0 & less than 10", () => {
  expect(stringLength(testing)).toBeGreaterThan(0);
  expect(stringLength(testing)).toBeLessThan(10);
});

test("String Reverse", () => {
  expect(stringReverse("hello")).toEqual("olleh");
});

const case1 = new Calculate(4, 2);
const case2 = new Calculate(10, 6);
describe ('Calculator', () => {
    test ('add', () => {
        expect(case1.add()).toBe(6);
        expect(case2.add()).toBe(16);
    }
    );
    test ('subtract', () => {
        expect(case2.sub()).toBe(4);
        expect(case1.sub()).toBe(2);
    }
    );
    test ('multiply', () => {
        expect(case1.mul()).toBe(8);
        expect(case2.mul()).toBe(60);
    }
    );
    test ('divide', () => {
        expect(case1.div()).toBe(2);
        expect(case2.div()).toBe(1.6666666666666667);
    }
    );
}
);

test ('capital', () => {
    expect(capital("hello")).toBe("Hello");
    }
    );