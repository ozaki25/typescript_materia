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
        Validation.validNumber = function (param) { return param !== "" && isFinite(param); };
        Validation.valid = function (params, columnNames) {
            var valid = true;
            columnNames.forEach(function (name) { if (!!params[name]["msg"])
                valid = false; });
            return valid;
        };
    })(Validation = exports.Validation || (exports.Validation = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvVmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLFVBQVUsQ0FRMUI7SUFSRCxXQUFpQixVQUFVLEVBQUMsQ0FBQztRQUNkQSxzQkFBV0EsR0FBR0EsVUFBQ0EsS0FBS0EsSUFBY0EsT0FBQUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZEEsQ0FBY0EsQ0FBQ0E7UUFDakRBLHNCQUFXQSxHQUFHQSxVQUFDQSxLQUFLQSxJQUFjQSxPQUFBQSxLQUFLQSxLQUFLQSxFQUFFQSxJQUFJQSxRQUFRQSxDQUFDQSxLQUFLQSxDQUFDQSxFQUEvQkEsQ0FBK0JBLENBQUNBO1FBQ2xFQSxnQkFBS0EsR0FBR0EsVUFBQ0EsTUFBTUEsRUFBRUEsV0FBV0E7WUFDbkNBLElBQUlBLEtBQUtBLEdBQUdBLElBQUlBLENBQUNBO1lBQ2pCQSxXQUFXQSxDQUFDQSxPQUFPQSxDQUFDQSxVQUFBQSxJQUFJQSxJQUFNQSxFQUFFQSxDQUFBQSxDQUFDQSxDQUFDQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxDQUFDQSxDQUFDQSxLQUFLQSxDQUFDQSxDQUFDQTtnQkFBQ0EsS0FBS0EsR0FBR0EsS0FBS0EsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDekVBLE1BQU1BLENBQUNBLEtBQUtBLENBQUNBO1FBQ2pCQSxDQUFDQSxDQUFBQTtJQUNMQSxDQUFDQSxFQVJnQixVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVExQiJ9