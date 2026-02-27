# Problema: Add Two Numbers

Autor: **João Izidoro**
Revisado por: **João Menna**

Você é dado um *caminho absoluto* para um sistema de arquivos Unix, que sempre começa com `'/'`. Sua tarefa é transformar esse caminho absoluto em um **caminho canônico simplificado**.

As *regras* de um sistema de arquivo Unix-style são as seguintes:
* Um único ponto `.` representa o diretório atual.
* Um ponto duplo `..` representa o diretório anterior/pai.
* Múltiplas barras consecutivas, como `//` e `///`, são tratadas como uma única barra `/`.
* Qualquer sequência de pontos que não corresponda às regras acima deve ser tratada como um nome válido de diretório ou arquivo. Por exemplo, `...` e `....` são nomes válidos de diretório ou arquivo.

O caminho canônico simplificado deve seguir estas regras:

* O caminho deve começar com uma única barra `/`.
* Os diretórios dentro do caminho devem ser separados por exatamente uma barra `/`.
* O caminho não deve terminar com uma barra `/`, a menos que seja o diretório raiz.
* O caminho não deve conter pontos simples ou duplos (`.` e `..`) usados para indicar diretórios atual ou pai.

Retorne o **caminho canônico simplificado**.

# Exemplo:

## Primeiro:

**Entrada**: path = "/home/"

**Saída**: "/home"

**Explicação**: A barra à direita deve ser removida.

---

## Segundo:

**Entrada**: path = "/home//foo/"

**Saída**: "/home/foo"

**Explicação:** Barras consecutivas devem ser trocadas por únicas

---

# Terceiro:

**Entrada**: path = "/home/user/Documents/../Pictures"  

**Saída**: "/home/user/Pictures"  

**Explicação:** O ponto duplo `..` representa subir um nível no diretório (diretório pai).

---

# Quarto:

**Entrada**: path = "/../"  

**Saída**: "/"  

**Explicação:** Não é possível subir um nível acima do diretório raiz.

---

# Quinto:

**Entrada**: path = "/.../a/../b/c/../d/./"  

**Saída**: "/.../b/d"  

**Explicação:** `...` é um nome válido de diretório neste problema. O `..` sobe um nível e o `.` representa o diretório atual (sem alterar o caminho).


# Restrições

* `1 <= path.length <= 3000`
* `path` consiste de letras em Inglês, pontos `'.'`, barras `'/'` or underline `"_"`.
* `path` é um caminho válido absoluto unix.

---

# Como o LLM foi utilizado:

Após normalizar o caminho (retirar `'//'`, barras à direita e validar se começa com `'/'`), perguntei ao GPT como utilizar Pilhas nessa atividade. Ele guiou para a validação `for`, e como separar a string `path` apropriadamente.

# Evidência

![Evidencia](evidencia.png)
