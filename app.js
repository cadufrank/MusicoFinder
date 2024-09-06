//console.log(dados); - Não apaguei rsrs, me apeguei :D

function search() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("result-container");
    console.log(section); // Loga a seção no console para fins de depuração

    //Variável pra coletar a informação digitada em input
    let searchInput = document.getElementById("search-input").value

    //se campo pesquisa for uma string vazia, retorne
    if( searchInput == ""|| searchInput ==" "){
        section.innerHTML = "Busca Vazia, digite alguma palavra sobre algum artista 🤓"
        return
    }
    //configura tudo na pesquisa para letras minusculas
    searchInput = searchInput.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let research = "";
    let who = "";
    let resume = "";
    let careercontent = "";
    let singlescontent = "";
    //let tags = "";


    // Itera sobre cada objeto dentro do array 'dados'
    for (let dado of dados) {
        who = dado.who.toLowerCase()
        resume = dado.resume.toLowerCase()
        careercontent = dado.careercontent.toLowerCase()
        singlescontent = dado.singlescontent.toLowerCase()
        //uniquecontent não adicionado, porque é unico de cada artista :D
        //tags = dado.tags.toLowerCase() - preferi não usar porque estou usando todos os outros campos com dados que substituiem a lógica das tags! 

        //SE no dado includes searchInput, então faça
        if(who.includes(searchInput) || resume.includes(searchInput) || careercontent.includes(searchInput) || singlescontent.includes(searchInput)){

            // Constrói o HTML para cada artista, concatenando as informações do objeto 'dado'
        research += `<h2 id="who">${dado.who}</h2>
        <p id="resume">${dado.resume}</p>
        <br>
        <h2 id="career">${dado.career}</h2>
        <p id="careercontent">${dado.careercontent}</p>
        <h2 id="singles">${dado.singles}</h2>
        <p id="singlescontent">${dado.singlescontent}</p>
        <br>
        <h2 id="unique">${dado.unique}</h2>
        <p id="uniquecontent">${dado.uniquecontent}</p>
        <a href=${dado.knowmore} target="_blank" class="result-knowmore-link" id="knowmore"><h2>Saiba mais</h2></a>`;

        }
        
        
    }
if(!research){
    research = "Nada Foi Encontrado 🥹"
}
    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = research;
}