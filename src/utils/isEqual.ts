export function isEqual(a: AnyObj, b: AnyObj) {
    if (Object.entries(a).length !== Object.entries(b).length) return false;
    for (let i = 0; i < Object.entries(a).length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}
