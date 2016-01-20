export namespace Validation {
    export let validString = (param: string): boolean => !!param.trim();
    export let validNumber = (param: number): boolean => isFinite(param);
    export let valid = (params: {}, columnNames: string[]): boolean => {
        var valid = true;
        columnNames.forEach(name => { if(!!params[name]["msg"]) valid = false });
        return valid;
    }
}
