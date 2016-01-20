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
        Validation.validNumber = function (param) { return Validation.validString(param) && isFinite(param); };
        Validation.valid = function (params, columnNames) {
            var valid = true;
            columnNames.forEach(function (name) { if (!!params[name]["msg"])
                valid = false; });
            return valid;
        };
    })(Validation = exports.Validation || (exports.Validation = {}));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hcHAvc2NyaXB0L3N0YXRpb25lcnkvVmFsaWRhdGlvbi50cyJdLCJuYW1lcyI6WyJWYWxpZGF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztJQUFBLElBQWlCLFVBQVUsQ0FRMUI7SUFSRCxXQUFpQixVQUFVLEVBQUMsQ0FBQztRQUNkQSxzQkFBV0EsR0FBR0EsVUFBQ0EsS0FBS0EsSUFBY0EsT0FBQUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsRUFBZEEsQ0FBY0EsQ0FBQ0E7UUFDakRBLHNCQUFXQSxHQUFHQSxVQUFDQSxLQUFLQSxJQUFjQSxPQUFBQSxzQkFBV0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsUUFBUUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsRUFBckNBLENBQXFDQSxDQUFDQTtRQUN4RUEsZ0JBQUtBLEdBQUdBLFVBQUNBLE1BQU1BLEVBQUVBLFdBQVdBO1lBQ25DQSxJQUFJQSxLQUFLQSxHQUFHQSxJQUFJQSxDQUFDQTtZQUNqQkEsV0FBV0EsQ0FBQ0EsT0FBT0EsQ0FBQ0EsVUFBQUEsSUFBSUEsSUFBTUEsRUFBRUEsQ0FBQUEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0E7Z0JBQUNBLEtBQUtBLEdBQUdBLEtBQUtBLENBQUFBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1lBQ3pFQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQTtRQUNqQkEsQ0FBQ0EsQ0FBQUE7SUFDTEEsQ0FBQ0EsRUFSZ0IsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFRMUIifQ==