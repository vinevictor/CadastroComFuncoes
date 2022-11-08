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

function Login(nome, senha) {
    let loginVerdadeiro = nomes.includes(nome)
    let senhaVerdadeira = senha.includes(senha)
    if (loginVerdadeiro && senhaVerdadeira) {
        let nomeIndex = nomes.indexOf(nome)
        let senhaIndex = senha.indexOf(senha)
        if (senhaIndex == nomeIndex) {
            return true

        } else {
            return false

        }
    } else {
        return false
    }
}



while (continuar) {
    Opcoes();
}