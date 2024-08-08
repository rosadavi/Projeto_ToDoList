// console.log('Hello World');

class Tarefa {
    constructor(descricao, prioridade){
        this.descricao = descricao;
        this.prioridade = prioridade;
        this.compelta = false;
        this.data = new Date();
    }

    marcarCompleta() {
        this.compelta = true;
    }

    editarDescricao(novoValor) {
        this.descricao = novoValor;
    }

    get descricaoTarefa() {
        return this.descricao;
    }

    get dataCriacao() {
        return `${this.data.getDate()}/${this.data.getMonth()}/${this.data.getFullYear()} - ${this.data.getHours()}:${this.data.getMinutes()}:${this.data.getSeconds()}`;
    }

    get verPrioridade() {
        return this.prioridade;
    }
}

class GeradorDeTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionarTarefa(descricao, prioridade) {
        const tarefa = new Tarefa(descricao, prioridade);
        this.tarefas.push(tarefa);
    }

    listarTarefas() {
        this.tarefas.forEach((tarefa, index) => {
            console.log(`${index + 1}: ${tarefa.descricaoTarefa} - ${tarefa.compelta ? 'Completa' : 'Pendente'} - Data de Criacao: ${tarefa.dataCriacao}`);
        });
    }

    listarTarefasCompletas() {
        console.log('Tarefas Completas:')
        for(let v of this.tarefas) {
            if(v.compelta) {
                console.log(v.descricao);
            }
        }
    }

    listarTarefasPendentes() {
        console.log('Tarefas Pendentes:')
        for(let v of this.tarefas) {
            if(!v.compelta) {
                console.log(v.descricao);
            }
        }
    }

    listarTarefasPrioridade(prioridade) {
        console.log(`Tarefas de prioridade ${prioridade}:`);
        for(let i = 0; i < this.tarefas.length; i++) {
            if(this.tarefas[i].prioridade === prioridade) {
                console.log(`${i + 1}: ${this.tarefas[i].descricaoTarefa} - ${this.tarefas[i].compelta ? 'Completa' : 'Pendente'} - ${this.tarefas[i].dataCriacao} - ${this.tarefas[i].prioridade}`);
            }
        }
    }

    removerTarefa(index) {
        this.tarefas.splice(index - 1, 1);
    }
    
}

const gerenciador = new GeradorDeTarefas();
gerenciador.adicionarTarefa("Aprender JavaScript", "BAIXA");
gerenciador.adicionarTarefa("Praticar Codificacao", "MEDIA");
gerenciador.tarefas[1].marcarCompleta();
// gerenciador.listarTarefa();
gerenciador.tarefas[0].editarDescricao("Aprender Git");
gerenciador.listarTarefasPrioridade("BAIXA");