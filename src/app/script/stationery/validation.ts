export namespace Validation {
    export let validString = (param): boolean => !!param.trim();
    export let validNumber = (param): boolean => param !== "" && isFinite(param);
    export let valid = (params, columnNames): boolean => {
        var valid = true;
        columnNames.forEach(name => { if(!!params[name]["msg"]) valid = false });
        return valid;
    }
}
