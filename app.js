//console.log(dados); - Não apaguei rsrs, me apeguei :'D

function search() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("result-container");
    console.log(section); // Loga a seção no console para fins de depuração

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let research = "";

    // Itera sobre cada objeto dentro do array 'dados'
    for (let dado of dados) {
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

    // Atribui o HTML gerado à seção de resultados
    section.innerHTML = research;
}