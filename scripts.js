// Função para adicionar um produto ao carrinho
function adicionarAoCarrinho(nome, preco) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    
    // Verificar se o produto já está no carrinho
    let produtoExistente = carrinho.find(item => item.nome === nome);
    if (produtoExistente) {
        produtoExistente.quantidade += 1;
    } else {
        carrinho.push({ nome: nome, preco: preco, quantidade: 1 });
    }
    
    // Salvar o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    alert(`${nome} foi adicionado ao carrinho!`);
}

// Função para carregar e exibir os itens do carrinho na página carrinho.html
function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let carrinhoLista = document.getElementById('carrinho-lista');
    let carrinhoTotal = document.getElementById('carrinho-total');
    
    if (!carrinhoLista) return; // Se não estiver na página do carrinho, não faz nada

    // Limpar a lista antes de recarregar
    carrinhoLista.innerHTML = '';

    if (carrinho.length === 0) {
        carrinhoLista.innerHTML = '<p>Seu carrinho está vazio.</p>';
        carrinhoTotal.textContent = '0.00';
        return;
    }

    let total = 0;
    carrinho.forEach((item, index) => {
        let subtotal = item.preco * item.quantidade;
        total += subtotal;

        let itemDiv = document.createElement('div');
        itemDiv.className = 'd-flex justify-content-between align-items-center mb-3 border-bottom pb-2';
        itemDiv.innerHTML = `
            <div>
                <h5>${item.nome}</h5>
                <p>Preço unitário: R$ ${item.preco.toFixed(2)}</p>
                <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
            </div>
            <div class="d-flex align-items-center">
                <input type="number" min="1" max="99" value="${item.quantidade}" onchange="atualizarQuantidade(${index}, this.value)" class="form-control w-25 me-2">
                <button class="btn btn-danger btn-sm" onclick="removerDoCarrinho(${index})">Remover</button>
            </div>
        `;
        carrinhoLista.appendChild(itemDiv);
    });

    carrinhoTotal.textContent = total.toFixed(2);
}

// Função para atualizar a quantidade de um item no carrinho
function atualizarQuantidade(index, novaQuantidade) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    novaQuantidade = parseInt(novaQuantidade);

    if (novaQuantidade < 1 || novaQuantidade > 99) {
        alert('A quantidade deve estar entre 1 e 99.');
        carregarCarrinho(); // Recarrega para corrigir o valor
        return;
    }

    carrinho[index].quantidade = novaQuantidade;
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

// Função para remover um item do carrinho
function removerDoCarrinho(index) {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    carrinho.splice(index, 1);
    localStorage.setItem('carrinho', JSON.stringify(carrinho));
    carregarCarrinho();
}

// Função para confirmar agendamento (mantida do código anterior)
function confirmarAgendamento() {
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const horario = document.getElementById("horario").value;

    if (data && horario) {
        alert(`Agendamento confirmado!\nServiço: ${servico}\nData: ${data}\nHorário: ${horario}`);
    } else {
        alert("Por favor, preencha a data e o horário.");
    }
}

// Exibir data e hora atual no console (mantida do código anterior)
setInterval(() => {
    const agora = new Date();
    console.log(`Hora atual: ${agora.toLocaleTimeString()}`);
}, 1000);

// Validação simples do formulário (mantida do código anterior)
document.getElementById("cadastroForm")?.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cadastro enviado com sucesso!");
});

// Carregar o carrinho ao carregar a página
document.addEventListener('DOMContentLoaded', carregarCarrinho);
