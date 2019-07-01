export function whatsYourName(name: string) {
    console.log(name);
}

export interface StringValidator {
    iaAccepetable(s: string): boolean;
}

export const numberRegexp = /^[0-9]+$/;

class ZipCodeValidator implements StringValidator {
    iaAccepetable(s: string) {
        return s.length === 5 && numberRegexp.test(s);
    }
}

export {ZipCodeValidator};
export {ZipCodeValidator as mainValidator};

export default ZipCodeValidator;