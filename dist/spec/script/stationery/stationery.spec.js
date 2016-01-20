(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../../../app/script/stationery/Stationery"], factory);
    }
})(function (require, exports) {
    var Stationery_1 = require("../../../app/script/stationery/Stationery");
    describe("Stationery", function () {
        var stationery;
        beforeEach(function () {
            stationery = new Stationery_1.Stationery("鉛筆", 500, 100, "東京");
        });
        describe("recive", function () {
            it("should be quantity is increased by 10", function () {
                stationery.receive();
                expect(stationery.quantity).toBe(110);
            });
        });
        describe("shipment", function () {
            it("should be quantity is decreased by 10", function () {
                stationery.shipment();
                expect(stationery.quantity).toBe(90);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGlvbmVyeS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NwZWMvc2NyaXB0L3N0YXRpb25lcnkvc3RhdGlvbmVyeS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsMkJBQXlCLDJDQUEyQyxDQUFDLENBQUE7SUFFckUsUUFBUSxDQUFDLFlBQVksRUFBRTtRQUNuQixJQUFJLFVBQXNCLENBQUM7UUFDM0IsVUFBVSxDQUFDO1lBQ1AsVUFBVSxHQUFHLElBQUksdUJBQVUsQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxRQUFRLEVBQUU7WUFDZixFQUFFLENBQUMsdUNBQXVDLEVBQUU7Z0JBQ3hDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDckIsTUFBTSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDMUMsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxVQUFVLEVBQUU7WUFDakIsRUFBRSxDQUFDLHVDQUF1QyxFQUFFO2dCQUN4QyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUE7Z0JBQ3JCLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ3pDLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQyJ9