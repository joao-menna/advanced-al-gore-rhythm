function isValid(s: string): boolean {
    const stack: string[] = [];

    const bracketMap: Record<string, string> = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (const char of s) {
        // Se for fecha parênteses
        if (char in bracketMap) {
            const topElement = stack.pop();

            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // É um abre parênteses
            stack.push(char);
        }
    }

    // Se stack estiver vazio, todos os parênteses combinaram
    return stack.length === 0;
}
