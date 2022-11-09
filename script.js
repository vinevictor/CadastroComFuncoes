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
        case "1":
            CadastroUsuario();
            break;
        case "2":
            let nome = prompt("Digite o Usuario:")
            let senha = prompt("Digite a senha:")
            console.log(Login(nome, senha))
            break;
        case "3":
            let usuario = prompt("Digite o Usuario que deseja excluir:")
            ExcluirUsuario(usuario);
            break;
        case "4":
            continuar = false;
            break;
        default:
            console.log("Opção Inválida")
            break;
    }
}


function Login(nome, senha) {
    let loginVerdadeiro = nomes.includes(nome)
    let senhaVerdadeira = senha.includes(senha)

    if (loginVerdadeiro && senhaVerdadeira) {
        let nomeIndex = nomes.indexOf(nome)
        let senhaIndex = senhas.indexOf(senha)

        if (senhaIndex == nomeIndex) {
            return true

        } else {
            return false

        }
    } else {
        return false
    }
}

function ExcluirUsuario(usuario) {
    let usuarioExiste = nomes.includes(usuario)
    let nomesSup = []
    let senhasSup = []
    if (usuarioExiste) {
        let index = nomes.indexOf(usuario)
        nomes[index] = 0
        senhas[index] = 0
        nomes.forEach(x => {
            if (x == 0) {

            } else {
                nomesSup.push(x)
            }
        })
        senhas.forEach(x => {
            if (x == 0) {

            } else {
                senhasSup.push(x)
            }
        })
    } else {
        console.log("Usuario não encontrado")
    }
    nomes = nomesSup
    senhas = senhasSup
}



while (continuar) {
    Opcoes();
}