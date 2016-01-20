(function (factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    var Validation;
    (function (Validation) {
        Validation.validString = function (param) { return !!param.trim(); };
        Validation.validNumber = function (param) { return isFinite(param); };
        Validation.valid = function (params, columnNames) {
            var valid = true;
            columnNames.forEach(function (name) { if (!!params[name]["msg"])
                valid = false; });
            return valid;
        };
    })(Validation = exports.Validation || (exports.Validation = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvVmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLFVBQVUsQ0FRMUI7SUFSRCxXQUFpQixVQUFVLEVBQUMsQ0FBQztRQUNkQSxzQkFBV0EsR0FBR0EsVUFBQ0EsS0FBYUEsSUFBY0EsT0FBQUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZEEsQ0FBY0EsQ0FBQ0E7UUFDekRBLHNCQUFXQSxHQUFHQSxVQUFDQSxLQUFhQSxJQUFjQSxPQUFBQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUFmQSxDQUFlQSxDQUFDQTtRQUMxREEsZ0JBQUtBLEdBQUdBLFVBQUNBLE1BQVVBLEVBQUVBLFdBQXFCQTtZQUNqREEsSUFBSUEsS0FBS0EsR0FBR0EsSUFBSUEsQ0FBQ0E7WUFDakJBLFdBQVdBLENBQUNBLE9BQU9BLENBQUNBLFVBQUFBLElBQUlBLElBQU1BLEVBQUVBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBO2dCQUFDQSxLQUFLQSxHQUFHQSxLQUFLQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUN6RUEsTUFBTUEsQ0FBQ0EsS0FBS0EsQ0FBQ0E7UUFDakJBLENBQUNBLENBQUFBO0lBQ0xBLENBQUNBLEVBUmdCLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBUTFCIn0=