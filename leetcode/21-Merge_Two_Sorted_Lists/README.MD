## 🔗 Problema: Merge Two Sorted Lists

### **Autor:** Henrique | **Revisado por:** 

Você recebeu os cabeçalhos de duas listas encadeadas ordenadas, `list1` e `list2`. O objetivo é mesclar as duas listas em uma única lista **ordenada**, conectando os nós originais.

O resultado deve retornar o cabeçalho da nova lista encadeada mesclada.



---

### **Exemplos**

* **Exemplo 1:**
    * **Entrada:** `list1 = [1, 2, 4]`, `list2 = [1, 3, 4]`
    * **Saída:** `[1, 1, 2, 3, 4, 4]`
* **Exemplo 2:**
    * **Entrada:** `list1 = []`, `list2 = []`
    * **Saída:** `[]`
* **Exemplo 3:**
    * **Entrada:** `list1 = []`, `list2 = [0]`
    * **Saída:** `[0]`

---

### **Restrições**

* O número de nós em ambas as listas está no intervalo **[0, 50]**.
* `-100 <= Node.val <= 100`.
* Ambas as listas estão ordenadas de forma **não decrescente**.

---

### **Como o LLM foi utilizado**

Para este desafio, utilizei o LLM para discutir a técnica do **Dummy Node** (Nó Fictício). Entendi que criar um nó inicial vazio simplifica a lógica de inserção, pois evita verificações constantes de se a lista resultante está vazia ou não. Também exploramos como lidar com "sobras" de nós quando uma lista é maior que a outra, garantindo uma solução eficiente com complexidade de tempo **O(n + m)**.

---
