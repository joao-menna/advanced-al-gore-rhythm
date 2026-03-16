# Problema: Add Two Numbers

Autor: **João Izidoro**

Revisado por: **João Menna**

São dadas duas listas encadeadas não vazias que representam dois números inteiros não negativos. Os dígitos são armazenados em ordem reversa, e cada um de seus nós contém um único dígito. Adicione os dois números e retorne a soma como uma lista encadeada.

Você pode assumir que os dois números não contêm zeros à esquerda, exceto o próprio número 0.

# Exemplo:

## Primeiro:

**Entrada**: l1 = [2,4,3], l2 = [5,6,4]

**Saída**: [7,0,8]

**Explicação**: 342 + 465 = 807.


## Segundo:

**Entrada**: l1 = [0], l2 = [0]

**Saída**: [0]


## Terceiro:

**Entrada**: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]

**Saída**: [8,9,9,9,0,0,0,1]


# Restrições

* O número de nós em cada lista encadeada está na faixa [1, 100].
* 0 <= Node.val <= 9
* É garantido que a lista representa um número que não possui zeros à esquerda.

---

# Como o LLM foi utilizado:

Sempre que eu queria uma opinião ou estava travado sem saber como prosseguir, pedia uma explicação sobre o que eu estava deixando passar, sem exemplos de código, para ser capaz de atingir $O(max(m, n))$.

# Evidência

![Evidencia](evidencia.png)
