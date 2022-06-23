// Função construtora e objetos
function alunos(nome, qtFaltas, notas) {
    return {
        nome: nome,
        qtFaltas: qtFaltas,
        notas: notas,
        calcularMedia: function () {
            let media = 0;
            for (let i = 0; i < this.notas.length; i++) {
                media = media + this.notas[i];
            }
            return media;
        },
    };
}

let aluno0 = new alunos('Denise Capitaneo', 2, [10, 7, 8, 3]);
let aluno1 = new alunos('Denise Melo', 1, [8, 10, 7, 4]);
let aluno2 = new alunos('Gustavo Morais', 4, [7, 5, 7, 9]);
let aluno3 = new alunos('Tiago Batista', 0, [9, 6, 10, 9]);
let aluno4 = new alunos('Guilherme Moreira', 0, [6, 7, 5, 8]);

console.log(aluno0.calcularMedia());
