var obj=require('../app');

describe("math Functionality", () => {
    describe("add", () =>{
    it("should add positive numbers", () => {
        const result = obj.add(4, 5);
        expect(result).toEqual(9);
    });

    it("should add negative numbers", () => {
        const result = obj.add(-4, -5);
        expect(result).toEqual(-9);
    });
    });
    describe("product", ()=> {
    it("should be positve product", () => {
        
        expect(obj.product(4,1000)).toEqual(4000);
    });
    });
    describe("sub", ()=> {
    it("negative sub", () => {
        
        expect(obj.sub(0,1)).toEqual(-1);
    });
    });
    describe("prime", ()=> {
        it("isprime", () => {
            
            expect(obj.prime(47)).toEqual(true);
        });
        it("isprime", () => {
            
            expect(obj.prime(22)).toEqual(false);
        });
    });
});