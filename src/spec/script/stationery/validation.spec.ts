import {Validation} from "../../../app/script/stationery/Validation";

describe("Validation", () => {
    describe("validString", () => {
        it("should be return false when give blank", () => {
            expect(Validation.validString("")).toBe(false);
        });
        it("should be return true when give string", () => {
            expect(Validation.validString("test")).toBe(true);
        });
    });

    describe("validNumber", () => {
        it("should be return false when give undefined", () => {
            expect(Validation.validNumber(undefined)).toBe(false);
        });
        it("should be return false when give integer", () => {
            expect(Validation.validNumber(10)).toBe(true);
        });
    });

    describe("valid", () => {
        let columnNames = ["brandName", "price"];
        let params = {};
        it("should be return false when give include error message", () => {
            params = { "brandName": { "msg": "test message" }, "price": { "msg": "test message" } };
            expect(Validation.valid(params, columnNames)).toBe(false);
        });
        it("should be return false when give include error message", () => {
            params = { "brandName": { "msg": "test message" }, "price": { "value": "test value" } };
            expect(Validation.valid(params, columnNames)).toBe(false);
        });
        it("should be return true when give not include error message", () => {
            params = { "brandName": { "value": "test value" }, "price": { "value": "test value" } };
            expect(Validation.valid(params, columnNames)).toBe(true);
        });
    });
});
