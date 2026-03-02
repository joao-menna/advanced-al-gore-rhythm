## 🔗 Problema: Remove Duplicates from Sorted List

### **Autor:** Henrique | **Revisado por:**

Dada a raiz (`head`) de uma lista encadeada ordenada, remova todos os nós duplicados de forma que cada elemento apareça apenas uma vez. A lista resultante deve permanecer ordenada.



---

### **Exemplos**

* **Exemplo 1:**
    * **Entrada:** `head = [1, 1, 2]`
    * **Saída:** `[1, 2]`
* **Exemplo 2:**
    * **Entrada:** `head = [1, 1, 2, 3, 3]`
    * **Saída:** `[1, 2, 3]`

---

### **Restrições**

* O número de nós na lista está no intervalo **[0, 300]**.
* `-100 <= Node.val <= 100`.
* A lista é garantidamente fornecida em **ordem crescente**.

---

### **Como o LLM foi utilizado**

Neste exercício, foquei em entender a manipulação de ponteiros em listas encadeadas. Com o auxílio do LLM, analisei por que não precisamos de um "Dummy Node" neste caso específico (já que o `head` nunca muda) e como a estrutura de repetição `while` deve validar tanto o nó atual quanto o `next` para evitar erros de leitura em memória (`null pointer exceptions`). A solução atingiu complexidade de tempo **O(n)** e espaço **O(1)**.

---
