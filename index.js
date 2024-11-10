// Função que calcula o saldo de Rankeadas e classifica o jogador

function classificarJogador(vitorias, derrotas) {
   
    
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Variável para armazenar o nível do jogador
    let nivel;

    // Classificação do jogador com base na quantidade de vitórias
    
    if (vitorias <=-0) {
        nivel = "Iniciante";

    }else if (vitorias <= 10) {
        nivel = "Ferro";
    
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    
    } else if (vitorias <= 50) {
        nivel = "Prata";
    
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    
    } else if (vitorias <= 90) {
        nivel = "Diamante";
    
    } else if (vitorias <= 100) {
        nivel = "Lendário";
    
    } else {
        nivel = "Imortal";
    }

    // Exibe a mensagem final com o saldo de vitórias e o nível
    console.log(`O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`);
}

classificarJogador( 1, 52); 
