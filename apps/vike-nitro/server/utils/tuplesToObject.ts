export function tuplesToObject(tuples: [string, string][]): Record<string, string> {
    const obj: Record<string, string> = {};
    for (const [key, value] of tuples) {
        obj[key] = value;
    }
    return obj;
}