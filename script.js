let nomes = [], senhas = []
let continuar = true;

function CadastroUsuario() {
    nomes.push(prompt("Digite um nome:"))
    senhas.push(prompt("Digite uma senha:"))
    console.log("Usuario Cadastrado.")
}

function Opcoes() {
    let opcao = prompt("Digite 1 => Cadastro | 2 => Login | 3 => Excluir Usuario | 4 => Encerrar Programa.")
    switch (opcao) {
        case 1:
            CadastroUsuario();
            break;
        case 2:
            Login();
            break;
        case 3:
            ExcluirUsuario();
            break;
        case 4:
            continuar = false;
            break;
    }
}

while (continuar) {
    Opcoes();
}