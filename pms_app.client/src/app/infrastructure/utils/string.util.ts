export class StringUtil {
    static removeDigits(text:string): string {
        return text.replace(/\d+/g, '');
    }
}