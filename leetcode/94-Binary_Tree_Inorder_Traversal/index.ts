function inorderTraversal(root: TreeNode | null): number[] {
    const resultado: number[] = [];

    const percorrer = (no: TreeNode | null): void => {
        if (no === null) {
            return;
        }

        // Esquerda
        percorrer(no.left);

        // Raiz
        resultado.push(no.val);

        // Direita
        percorrer(no.right);
    };

    percorrer(root);
    return resultado;
}