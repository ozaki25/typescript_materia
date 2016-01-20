(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports", "../../../app/script/stationery/Validation"], factory);
    }
})(function (require, exports) {
    var Validation_1 = require("../../../app/script/stationery/Validation");
    describe("Validation", function () {
        describe("validString", function () {
            it("should be return false when give blank", function () {
                expect(Validation_1.Validation.validString("")).toBe(false);
            });
            it("should be return true when give string", function () {
                expect(Validation_1.Validation.validString("test")).toBe(true);
            });
        });
        describe("validNumber", function () {
            it("should be return false when give undefined", function () {
                expect(Validation_1.Validation.validNumber(undefined)).toBe(false);
            });
            it("should be return false when give integer", function () {
                expect(Validation_1.Validation.validNumber(10)).toBe(true);
            });
        });
        describe("valid", function () {
            var columnNames = ["brandName", "price"];
            var params = {};
            it("should be return false when give include error message", function () {
                params = { "brandName": { "msg": "test message" }, "price": { "msg": "test message" } };
                expect(Validation_1.Validation.valid(params, columnNames)).toBe(false);
            });
            it("should be return false when give include error message", function () {
                params = { "brandName": { "msg": "test message" }, "price": { "value": "test value" } };
                expect(Validation_1.Validation.valid(params, columnNames)).toBe(false);
            });
            it("should be return true when give not include error message", function () {
                params = { "brandName": { "value": "test value" }, "price": { "value": "test value" } };
                expect(Validation_1.Validation.valid(params, columnNames)).toBe(true);
            });
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NwZWMvc2NyaXB0L3N0YXRpb25lcnkvdmFsaWRhdGlvbi5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0lBQUEsMkJBQXlCLDJDQUEyQyxDQUFDLENBQUE7SUFFckUsUUFBUSxDQUFDLFlBQVksRUFBRTtRQUNuQixRQUFRLENBQUMsYUFBYSxFQUFFO1lBQ3BCLEVBQUUsQ0FBQyx3Q0FBd0MsRUFBRTtnQkFDekMsTUFBTSxDQUFDLHVCQUFVLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ25ELENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLHdDQUF3QyxFQUFFO2dCQUN6QyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEQsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztRQUVILFFBQVEsQ0FBQyxhQUFhLEVBQUU7WUFDcEIsRUFBRSxDQUFDLDRDQUE0QyxFQUFFO2dCQUM3QyxNQUFNLENBQUMsdUJBQVUsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUQsQ0FBQyxDQUFDLENBQUM7WUFDSCxFQUFFLENBQUMsMENBQTBDLEVBQUU7Z0JBQzNDLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQUMsQ0FBQztRQUNQLENBQUMsQ0FBQyxDQUFDO1FBRUgsUUFBUSxDQUFDLE9BQU8sRUFBRTtZQUNkLElBQUksV0FBVyxHQUFHLENBQUMsV0FBVyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3pDLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQztZQUNoQixFQUFFLENBQUMsd0RBQXdELEVBQUU7Z0JBQ3pELE1BQU0sR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFLEVBQUUsQ0FBQztnQkFDeEYsTUFBTSxDQUFDLHVCQUFVLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUM5RCxDQUFDLENBQUMsQ0FBQztZQUNILEVBQUUsQ0FBQyx3REFBd0QsRUFBRTtnQkFDekQsTUFBTSxHQUFHLEVBQUUsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLGNBQWMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsRUFBRSxDQUFDO2dCQUN4RixNQUFNLENBQUMsdUJBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELENBQUMsQ0FBQyxDQUFDO1lBQ0gsRUFBRSxDQUFDLDJEQUEyRCxFQUFFO2dCQUM1RCxNQUFNLEdBQUcsRUFBRSxXQUFXLEVBQUUsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUM7Z0JBQ3hGLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDN0QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDIn0=