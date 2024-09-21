console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);
novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Função para obter e formatar a hora atual
function atualizarHora() {
    const mensagem = document.getElementById('mensagem');
    const agora = new Date();
    const horaAtual = agora.toLocaleTimeString(); // Formato de hora local

    // Atualizando o conteúdo do elemento com a hora atual
    mensagem.textContent = `A hora atual é: ${horaAtual}`;
}

// Chama a função a cada 1000ms (1 segundo)
setInterval(atualizarHora, 1000);

// Chamando a função para exibir imediatamente ao carregar a página
atualizarHora();

// Função para mudar a cor de fundo automaticamente a cada 3 segundos
function mudarCorDeFundoAutomaticamente() {
    const cores = ['#f0f8ff', '#faebd7', '#ffe4e1', '#b0e0e6', '#f08080', '#dda0dd'];
    setInterval(function() {
        const novaCor = cores[Math.floor(Math.random() * cores.length)];
        elementoBody.style.backgroundColor = novaCor;
        
        // Mensagem animada
        const mensagemAnimada = document.getElementById('mensagem-animada');
        mensagemAnimada.style.opacity = 1;

        // Oculta a mensagem após 1 segundo
        setTimeout(() => {
            mensagemAnimada.style.opacity = 0;
        }, 1000);
    }, 3000); // A cor muda a cada 3 segundos
}

// Iniciar a troca automática de cores
mudarCorDeFundoAutomaticamente();

// Desenhando uma moto usando ASCII art
const motoAscii = `
      ____       
     /    \\____      
    |          \\__   
  __|   (o)   (o)   )
 O                /|
 |    ________   \\_/___________
 |   |      | \\      |      |
 |___|______|__\\_____|______|`;

const motoElement = document.getElementById('moto');
motoElement.innerText = motoAscii;
