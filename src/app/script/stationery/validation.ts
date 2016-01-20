export namespace Validation {
    export let validString = (param: string): boolean => !!param.trim();
    export let validNumber = (param: string): boolean => !!param.trim() && isFinite(parseInt(param));
    export let valid = (params: {}, columnNames: string[]): boolean => {
        var valid = true;
        columnNames.forEach(name => { if(!!params[name]["msg"]) valid = false });
        return valid;
    }
}
