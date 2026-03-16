function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return "";
    let prefixo = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefixo) !== 0) {
            prefixo = prefixo.substring(0, prefixo.length - 1);
            if (prefixo === "") return "";
        }
    }

    return prefixo;
}