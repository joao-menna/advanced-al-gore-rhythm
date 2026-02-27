# Problema: Validate Stack Sequences

Autor: **Ricardo Fialho**.

Revisado por:

Dadas duas listas de inteiros `pushed` e `popped`, ambas contendo
valores distintos, retorne `true` se este puder ter sido o resultado de
uma sequência de operações de inserção (push) e remoção (pop) em uma
pilha inicialmente vazia, ou `false` caso contrário.

# Exemplo:

## Primeiro:

**Entrada:** pushed = \[1,2,3,4,5\], popped = \[4,5,3,2,1\]

**Saída:** true

**Explicação:** Podemos executar a seguinte sequência: push(1), push(2),
push(3), push(4), pop() -\> 4, push(5), pop() -\> 5, pop() -\> 3, pop()
-\> 2, pop() -\> 1

## Segundo:

**Entrada:** pushed = \[1,2,3,4,5\], popped = \[4,3,5,1,2\]

**Saída:** false

**Explicação:** 1 não pode ser removido antes de 2.

# Restrições

-   `1 <= pushed.length <= 1000`
-   `0 <= pushed[i] <= 1000`
-   Todos os elementos de `pushed` são únicos.
-   `popped.length == pushed.length`
-   `popped` é uma permutação de `pushed`

# Como o LLM foi utilizado:

Foi desenvolvida uma solução mas que não seguia os padrões do
`Clean Code`, desse modo, sugeri à LLM uma formatação que tornasse o
código mais otimizado e com menos de 5ms de tempo de execução (tempo
inicial), este foi o resultado.

# Evidência

![Evidência](evidencia.png)
