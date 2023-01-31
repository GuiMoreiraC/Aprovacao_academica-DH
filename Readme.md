# Sistema de Aprovacao academica - Avaliação Final - Programação Imperativa

## Objetivos

Vamos realizar uma série de exercícios conectados entre si. O objetivo é trabalhar um pouco com exercícios que dependem da etapa anterior para manter uma linha de trabalho.

Este é um projeto que tem como objetivo controlar as faltas e notas dos alunos de uma instituição de ensino. Ele possui uma função construtora que cria objetos para cada aluno, com informações como nome, quantidade de faltas e notas. Além disso, ele também possui um objeto curso, que tem informações sobre o curso, como nome, nota de aprovação e máximo de faltas. A função aprovacao() verifica se o aluno está aprovado ou não, considerando a quantidade de faltas e a média de notas. E a função listaAprovacao() retorna uma lista com o resultado da aprovação de todos os alunos do curso.

_*Importante*: Ao final, lembre-se de enviar o código completo para o Github, compartilhando o link do projeto com seus professores._

### Passo 1 (1,5 pontos)

Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números).

### Passo 2 (1,5 pontos)

Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.

### Passo 3 (1,5 pontos)

crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma lista de estudantes (um array composto pelos alunos criados no passo 2).

### Passo 4 (1,5 pontos)

Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

### Passo 5 (2 pontos)

Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.

### Passo 6 (2 pontos)

Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.
