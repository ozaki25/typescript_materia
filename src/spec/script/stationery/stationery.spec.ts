import {Stationery} from "../../../app/script/stationery/Stationery";

describe("Stationery", () => {
    var stationery: Stationery;
    beforeEach(function() {
        stationery = new Stationery("鉛筆", 500, 100, "東京");
    });

    describe("recive", () => {
        it("should be quantity is increased by 10", () => {
            stationery.receive();
            expect(stationery.quantity).toBe(110);
        });
    });

    describe("shipment", () => {
        it("should be quantity is decreased by 10", () => {
            stationery.shipment()
            expect(stationery.quantity).toBe(90);
        });
    });
});
