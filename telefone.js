//Para impedir o usuário de digitar letras
inputTelefone.addEventListener('keypress', function (e) {
    if (/[^0-9]/.test(e.key) && e.key !== "Enter") {
        e.preventDefault();
    } 
});

//Preenchimento automático de caracteres especiais 
inputTelefone.addEventListener('input', function (e) {
    let valor = this.value.replace(/\D/g, ''); // Remove tudo que não for dígito
    
    if (valor.length > 11) {
        valor = valor.slice(0, 11); // Limita a 11 dígitos
    }
    
    if (valor.length < 10){
        return
    } else if (valor.length === 10) {
        valor = valor.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
    } else {
        valor = valor.replace(/(\d{2})(\d{5})(\d{0,4})/, "($1) $2-$3");
    }

    this.value = valor;
});