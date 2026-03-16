# Problema: Longest Common Prefix

Autor: **Henrique Cardosa**

Revisado por: **João Menna**


Escreva uma função para encontrar a string de prefixo comum mais longa entre um array de strings. Se não houver um prefixo comum, retorne uma string vazia `""`.

---

# Exemplo:

## Primeiro:

**Entrada:** `strs = ["flower", "flow", "flight"]`

**Saída:** `"fl"`

## Segundo:

**Entrada:** `strs = ["dog", "racecar", "car"]`

**Saída:** `""`

**Explicação:** Não há prefixo comum entre as strings de entrada.

---

# Restrições

* `1 <= strs.length <= 200`
* `0 <= strs[i].length <= 200`
* `strs[i]` consiste apenas em letras inglesas minúsculas.

---

# Como o LLM foi utilizado:

Neste desafio, utilizei o LLM para explorar diferentes estratégias de busca de prefixos: **Varredura Horizontal** vs **Varredura Vertical**. Discutimos como o método `indexOf()` do JavaScript/TypeScript pode ser usadopara verificar prefixos e como a manipulação de strings com `substring()` afeta a performance. 

---

# Evidência

![Evidencia](evidencia.png)
