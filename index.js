// Função construtora e objetos
function alunos(nome, qtFaltas, notas) {
    return {
        nome: nome,
        qtFaltas: qtFaltas,
        notas: notas,
        calcularMedia() {
            let media = 0;
            for (let i = 0; i < this.notas.length; i++) {
                media += this.notas[i];
            }
            return media / this.notas.length;
        },
        faltas() {
            this.qtFaltas += 1;
        },
    };
}

let aluno0 = new alunos('Denise Capitaneo', 2, [10, 7, 8, 3]);
let aluno1 = new alunos('Denise Melo', 1, [8, 10, 7, 4]);
let aluno2 = new alunos('Gustavo Morais', 1, [7, 5, 7, 9]);
let aluno3 = new alunos('Tiago Batista', 0, [9, 6, 10, 9]);
let aluno4 = new alunos('Guilherme Moreira', 4, [7, 7, 9, 8]);

let curso = {
    nomeCurso: 'CTD - DH',
    notaAprovacao: 7,
    maxFaltas: 4,
    listaEstudantes: [aluno0, aluno1, aluno2, aluno3, aluno4],

    adcAluno(aluno) {
        this.listaEstudantes.push(aluno);
    },
    aprovacao(nAluno) {
        if (nAluno > this.listaEstudantes.length - 1) return 'Numero invalido';
        let aluno = this.listaEstudantes[nAluno];
        return aluno.qtFaltas < this.maxFaltas && aluno.calcularMedia() >= this.notaAprovacao
            ? true
            : aluno.calcularMedia() >= this.notaAprovacao * 1.1
            ? true
            : false;
        // if (aluno.qtFaltas < this.maxFaltas && aluno.calcularMedia() >= this.notaAprovacao)
        //     return true;
        // else if (aluno.calcularMedia() >= this.notaAprovacao * 1.1) return true;
        // else return false;
    },
    listaAprovacao() {
        let lisAprovacao = [];
        for (let i = 0; i < this.listaEstudantes.length; i++) {
            lisAprovacao.push(this.aprovacao(i));
        }
        return lisAprovacao;
    },
};

// Testando
let aluno5 = new alunos('Fulano de Tal', 2, [6, 8, 6, 5]);
curso.adcAluno(aluno5);

// console.log(curso.listaEstudantes[1].nome);
// console.log(curso.aprovacao(1));

// console.log(curso.listaEstudantes[4].nome);
// console.log(curso.aprovacao(4));

// console.log(curso.listaEstudantes[5].nome);
// console.log(curso.aprovacao(5));

// console.log(curso.aprovacao(6));

console.log(curso.listaAprovacao());
