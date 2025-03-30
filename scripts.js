// Função para confirmar agendamento
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

// Exibir data e hora atual no console (exemplo temporal)
setInterval(() => {
    const agora = new Date();
    console.log(`Hora atual: ${agora.toLocaleTimeString()}`);
}, 1000);

// Validação simples do formulário (opcional)
document.getElementById("cadastroForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Cadastro enviado com sucesso!");
});
