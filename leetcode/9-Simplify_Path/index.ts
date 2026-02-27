function simplifyPath(path: string): string {

    // se não começar com "/", não é válido
    if (!path.startsWith("/")) return "";
    
    // troca "//" por "/"
    path = path.replace(/\/{2,}/g, "/");

    // não deixa terminar em "/" a não ser que seja o root
    if (path.length > 1 && path.endsWith("/")) {
    path = path.slice(0, -1);
    }

    const pathParts = path.split('/');
    const stack = [];

    for (const part of pathParts) {
        if (part === "" || part === ".") {
            continue;
        }
        if (part === "..") {
            stack.pop();
        } else {
            stack.push(part);
        }
    }

    return "/" + stack.join('/');

};