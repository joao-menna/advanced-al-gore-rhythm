# Problema: Valid Parentheses

Autor: **Nicolas Borges**
Revisado por:

Dada uma string s contendo apenas os caracteres '(', ')', '{', '}', '[' e ']', determine se a string de entrada é válida.

Uma string de entrada é válida se:

1. Parênteses de abertura devem ser fechados pelo mesmo tipo de parêntese.

2. Parênteses de abertura devem ser fechados na ordem correta.

3. Todo parêntese de fechamento deve ter um parêntese de abertura correspondente do mesmo tipo.

# Exemplo:

## Primeiro:

**Entrada:** s = "()"

**Saída:** true


## Segundo:

**Entrada:** s = "()[]{}"

**Saída:** true


## Terceiro:

**Entrada:** s = "(]"

**Saída:** false


## Quarto:

**Entrada:** s = "([])"

**Saída:** true


## Quinto:

**Entrada:** s = "([)]"

**Saída:** false

# Restrições:
* `1 <= s.length <= 10⁴`
* `s` consiste apenas dos caracteres `'()[]{}'`.

# Como o LLM foi utilizado:

Quando me faltava compreensão de como funcionava algo na línguagem TypeScript, pediria uma explicação sobre as funções e suas estruturas para fazer uso na programação de uma solução ao problema utilizando pilha.

# Evidência

![Evidencia](evidencia.png)
