function reverseString(str: string): string {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    return reversedString;
}

console.log(reverseString('pedro'));
console.log(reverseString('targetsistemas'));