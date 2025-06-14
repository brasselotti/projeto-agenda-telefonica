const form = document.getElementById('form');
const inputNome = document.getElementById('nome');
const inputTelefone = document.getElementById('telefone');
const inputFavorito = document.getElementById('favorito');

const iconeFavorito = '<img src="./images/estrela.png" alt="Ícone favorito" />';

const nomes = [];
const telefones = [];
let contagemFavoritos = 0;
let contagemContatos = 0;

let linhas = '';

form.addEventListener(`submit`, function(e) {
    e.preventDefault();
    adicionaLinha();
    atualizaTabela();
})

function isFavorito(){
    if (inputFavorito.checked){
        return true;
    }
}

function adicionaLinha() {    
    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já existe na lista`);
    } else if (telefones.includes(inputTelefone.value)){
        alert(`O telefone ${inputTelefone.value} já existe na lista`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(inputTelefone.value);
        contagemContatos++;
        
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${isFavorito()? iconeFavorito : ''}</td>`;
        linha += `</tr>`;
        linhas += linha;
        
        console.log(inputNome.value)
        console.log(inputTelefone.value)
        console.log(`${isFavorito()? 'Contato salvo e favoritado.' : 'Contato salvo.'}`)

        if (isFavorito()){
            contagemFavoritos++;
        }
    }

    inputNome.value = '';
    inputTelefone.value = '';
    inputFavorito.checked = false;
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    const totalContatos = document.getElementById('contatos');
    totalContatos.innerHTML = `Contatos: ${contagemContatos}`;

    const totalFavoritos = document.getElementById('favoritos');
    totalFavoritos.innerHTML = `Favoritos: ${contagemFavoritos}`
}