//Grupo 09 Estatistica 2020

    function inserirDados() {
        let nome_ordem = document.getElementById("nome_ordem");
        let ordem = document.getElementById("ordem_valores");
        let up_input = document.getElementById("arquivo");
        let up_botao = document.getElementById("btn-upload-csv");
        let nome = document.getElementById("nome_variavel");
        let label = document.getElementById("label_nome")
        let label_dados = document.getElementById("label_dados");
        let dados = document.getElementById("dados_variavel");
        let botao = document.getElementById("calcular"); 
        let tipo_tabela = document.getElementById("tipo_tabela").value;
        limparResultados();
  
        if (tipo_tabela !== "") {
          up_input.style.display = 'block';
          up_botao.style.display = 'block';
          label.style.display = 'block';
          nome.style.display = 'block';
          label_dados.style.display = 'block';
          dados.style.display = 'block';
          botao.style.display = 'block';
      
          if (tipo_tabela === "nominal"){
            nome_ordem.style.display = 'none';
            ordem.style.display = 'none';
          } 
          if (tipo_tabela === "ordinal") {
            nome_ordem.style.display = 'block';
            ordem.style.display = 'block';
          } 
          if (tipo_tabela === "discreta") {
            nome_ordem.style.display = 'none';
            ordem.style.display = 'none';
          } 
          if (tipo_tabela === "continua") {
            nome_ordem.style.display = 'none';
            ordem.style.display = 'none';
          }
        } else {
          up_input.style.display = 'none';
          up_botao.style.display = 'none';
          label.style.display = 'none';
          nome.style.display = 'none';
          label_dados.style.display = 'none';
          dados.style.display = 'none';
          botao.style.display = 'none';
          nome_ordem.style.display = 'none';
          ordem.style.display = 'none';
        }
      }
  
  function calcular() {
    if (document.getElementById("tipo_tabela").value === "nominal"){
      criarTabelaNom();
    } if (document.getElementById("tipo_tabela").value === "ordinal") {
      criarTabelaOrd();
    } if (document.getElementById("tipo_tabela").value === "discreta") {
      criarTabelaDiscreta();
    } if (document.getElementById("tipo_tabela").value === "continua") {
      criarTabelaContinua();
    }
  }
  
  function getRandomColor() {
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    //  console.log(color);
    return color;
  }
  
  function tratamentoDeDados() {
    //Recebendo dados do input
    let dadosVar = document.getElementById("dados_variavel").value;
    //dividindo os dados
    // let array_variavel = variavel;
    let array_dados_variavel = dadosVar.split(";").map(Number);
    //alfabeticamente
    array_dados_variavel = quickSort(array_dados_variavel);
    //calcular quantidade de cada item
    const quantidade_dados = array_dados_variavel.reduce((acumulador, atual) => {
      acumulador[atual] = acumulador[atual] ? acumulador[atual] + 1 : 1;
      return acumulador;
    }, {});
  
    // Array vazia que irá conter {nome: 'nome_digitado', valor: valor_digitado}
    let array_valores = [];
    // contador auxiliar
    // percorrer todos os nomes digitados e adicionar na array "final" que será ordenada alfabeticamente
    let valor_anterior;
    array_dados_variavel.forEach((dados_variavel) => {
      if (dados_variavel != valor_anterior) {
        array_valores.push({
          valor: dados_variavel,
          qtde: quantidade_dados[dados_variavel],
        });
      }
      valor_anterior = dados_variavel;
    });
  
    let total_dados = [];
    array_valores.forEach((t) => {
      total_dados.push(parseFloat(t.qtde));
    });
  
    // Somatório total
    let resultado = total_dados.reduce(
      (acumulador, item) => acumulador + item,
      0
    );
  
    //calculo FA
    //cont aux q
    let k = 0;
    let l = 0;
    // o primeiro valor
    // enquanto percorre, soma quantidade
    array_valores.forEach((element) => {
      element.fi = element.qtde;
      element.fr_porcento = (element.qtde * 100) / resultado;
      //Caso base, caso seja primeira vez no laco o FA eh o valor do item mesmo
      if (k == 0) {
        element.fa = parseFloat(element.qtde);
        //caso seja um item depois do primeiro, soma o valor do FA do anterior com o atual
      } else if (k > 0) {
        //fa anterior q-1                        //valor do item atual
        element.fa =
          parseFloat(array_valores[k - 1].fa) + parseFloat(element.qtde);
      }
      k++;
      if (l == 0) {
        element.fa_porcento = parseFloat(element.fr_porcento);
      } else if (l > 0) {
        element.fa_porcento =
          parseFloat(array_valores[l - 1].fa_porcento) +
          parseFloat(element.fr_porcento);
      }
      l++;
    });
  
    return array_valores;
  }
  
  function tratamentoDeDadosNominal() {
    //recebendo dados do input
    let dadosVar = document.getElementById("dados_variavel").value;
    //dividindo os dados
    // let array_variavel = variavel;
    let array_dados_variavel = dadosVar.split(";");
    //alfabeticamente
    array_dados_variavel = quickSort(array_dados_variavel);
    //calcular quantidade de cada item
    const quantidade_dados = array_dados_variavel.reduce((acumulador, atual) => {
      acumulador[atual] = acumulador[atual] ? acumulador[atual] + 1 : 1;
      return acumulador;
    }, {});
  
    // Array vazia que irá conter {nome: 'nome_digitado', valor: valor_digitado}
    let array_valores = [];
    // contador auxiliar
    // percorrer todos os nomes digitados e adicionar na array "final" que será ordenada alfabeticamente
    let valor_anterior;
    array_dados_variavel.forEach((dados_variavel) => {
      if (dados_variavel != valor_anterior) {
        array_valores.push({
          valor: dados_variavel,
          qtde: quantidade_dados[dados_variavel],
        });
      }
      valor_anterior = dados_variavel;
    });
  
    let total_dados = [];
    array_valores.forEach((t) => {
      total_dados.push(parseFloat(t.qtde));
    });
  
    // Somatório total
    let resultado = total_dados.reduce(
      (acumulador, item) => acumulador + item,
      0
    );
  
    //calculo FA
    //cont aux q
    let k = 0;
    let l = 0;
    // o primeiro valor
    // enquanto percorre, soma quantidade
    array_valores.forEach((element) => {
      element.fi = element.qtde;
      element.fr_porcento = (element.qtde * 100) / resultado;
      //Caso base, caso seja primeira vez no laco o FA eh o valor do item mesmo
      if (k == 0) {
        element.fa = parseFloat(element.qtde);
        //caso seja um item depois do primeiro, soma o valor do FA do anterior com o atual
      } else if (k > 0) {
        //fa anterior q-1                        //valor do item atual
        element.fa =
          parseFloat(array_valores[k - 1].fa) + parseFloat(element.qtde);
      }
      k++;
      if (l == 0) {
        element.fa_porcento = parseFloat(element.fr_porcento);
      } else if (l > 0) {
        element.fa_porcento =
          parseFloat(array_valores[l - 1].fa_porcento) +
          parseFloat(element.fr_porcento);
      }
      l++;
    });
  
    return array_valores;
  }
  
  //criando tabela discreta
  function criarTabelaDiscreta() {
    limparResultados();
    let div_tabela_discreta = document.getElementById("div_tabela_discreta_nominal_ordinal");
    div_tabela_discreta.style.display = 'block';
    let corpo = document.querySelector("tbody");
    //limpar tela
    corpo.innerHTML = "";
    let array_valores = tratamentoDeDados();
    //mostrar nome tabela
    let nome_tabela = document.getElementById("nome_tabela");
  
    nome_tabela.innerHTML = "Quantitativa Discreta";
    array_valores.forEach((e) => {
      let linha = document.createElement("tr");
      let campoDados = document.createElement("tr");
      let campo_fr_porcento = document.createElement("td");
      let campo_fa = document.createElement("td");
      let campo_fa_porcento = document.createElement("td");
      let campoVariavel = document.createElement("td");
      let texto_fa = document.createTextNode(e.fa);
      let texto_fr_porcento = document.createTextNode(Math.floor(e.fr_porcento));
      let texto_fa_porcento = document.createTextNode(Math.floor(e.fa_porcento));
      let textoVariavel = document.createTextNode(e.valor);
      let texto_fi = document.createTextNode(e.fi);
      campoDados.appendChild(texto_fi);
      campoVariavel.appendChild(textoVariavel);
      campo_fr_porcento.appendChild(texto_fr_porcento);
      campo_fa.appendChild(texto_fa);
      campo_fa_porcento.appendChild(texto_fa_porcento);
      linha.appendChild(campoVariavel);
      linha.appendChild(campoDados);
      linha.appendChild(campo_fr_porcento);
      linha.appendChild(campo_fa);
      linha.appendChild(campo_fa_porcento);
      corpo.appendChild(linha);
    });
  }
  
  function criarTabelaNom() {
    limparResultados();
    let div_tabela_discreta = document.getElementById("div_tabela_discreta_nominal_ordinal");
    div_tabela_discreta.style.display = 'block';
    let corpo = document.querySelector("tbody");
    //limpar tela
    corpo.innerHTML = "";
    array_valores = tratamentoDeDadosNominal();
    nome_tabela.innerHTML = "Qualitativa Nominal";
    //mostrar moda na tela
    let texto_moda = document.getElementById("texto_moda");
    texto_moda.innerHTML = `Moda: ${valor_moda} <b>`;
    array_valores.forEach((e) => {
      let linha = document.createElement("tr");
      let campoDados = document.createElement("tr");
      let campo_fr_porcento = document.createElement("td");
      let campo_fa = document.createElement("td");
      let campo_fa_porcento = document.createElement("td");
      let campoVariavel = document.createElement("td");
      let texto_fa = document.createTextNode(e.fa);
      let texto_fr_porcento = document.createTextNode(Math.floor(e.fr_porcento));
      let texto_fa_porcento = document.createTextNode(Math.floor(e.fa_porcento));
      let textoVariavel = document.createTextNode(e.valor);
      let texto_fi = document.createTextNode(e.fi);
      campoDados.appendChild(texto_fi);
      campoVariavel.appendChild(textoVariavel);
      campo_fr_porcento.appendChild(texto_fr_porcento);
      campo_fa.appendChild(texto_fa);
      campo_fa_porcento.appendChild(texto_fa_porcento);
      linha.appendChild(campoVariavel);
      linha.appendChild(campoDados);
      linha.appendChild(campo_fr_porcento);
      linha.appendChild(campo_fa);
      linha.appendChild(campo_fa_porcento);
      corpo.appendChild(linha);
    });
  
  }
  
  function tratamentoDeDadosContinua() {
    //organizar em ordem crescente done
    //descobrir a amplitude
    let dadosVar = document.getElementById("dados_variavel").value;
    let array_dados_variavel = dadosVar.split(";").map(Number);
    array_dados_variavel = quickSort(array_dados_variavel);
    let at = array_dados_variavel.slice(-1) - array_dados_variavel[0];
    //quantidade de classes
    let classe = [];
    let qtde_classes = Math.floor(Math.sqrt(array_dados_variavel.length));
    classe[0] = qtde_classes - 1;
    classe[1] = qtde_classes;
    classe[2] = qtde_classes + 1;
  
    let aux = true;
    let qtde_linha = 0;
    let intervalo_classes = 0;
    while (aux) {
      at++;
      // for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if ((at % classe[j] == 0) && (at / classe[j] > 1)) {
          aux = false;
          qtde_linha = classe[j];
          intervalo_classes = at / classe[j];
          break;
        }
      }
      // }
    }
  
    let array_final_continua = [];
    // montar tabela com as linhas separando intervalos de classe
    let valor_anterior = (array_dados_variavel[0]  - 1);
    // precisamos navegar a qtde de classes separando pelo valor do intervalo
    for (let i = 0; i < qtde_linha; i++) {
      let limite_classe = valor_anterior + intervalo_classes;
  
      qtde_itens_intervalo = array_dados_variavel.filter(
        (item) => item >= valor_anterior && item < limite_classe
      );
      array_final_continua.push({
        valor: `${valor_anterior} |----- ${limite_classe}`,
        qtde: qtde_itens_intervalo.length,
        xi: Math.ceil((limite_classe + valor_anterior) / 2),
        intervalo_classes:  intervalo_classes,
        limite_inferior: valor_anterior,
      });
  
      valor_anterior = valor_anterior + intervalo_classes;
      // a quantide de itens por intervalor é o FI
    }
  
    let total_dados = [];
    array_final_continua.forEach((t) => {
      total_dados.push(parseFloat(t.qtde));
    });
  
    // Somatório total
    let resultado = total_dados.reduce(
      (acumulador, item) => acumulador + item,
      0
    );
  
    //calculo FA
    //cont aux q
    let k = 0;
    let l = 0;
    // o primeiro valor
    // enquanto percorre, soma quantidade
    array_final_continua.forEach((element) => {
      element.fi = element.qtde;
      element.fr_porcento = (element.qtde * 100) / resultado;
      //Caso base, caso seja primeira vez no laco o FA eh o valor do item mesmo
      if (k == 0) {
        element.fa = parseFloat(element.qtde);
        //caso seja um item depois do primeiro, soma o valor do FA do anterior com o atual
      } else if (k > 0) {
        //fa anterior q-1                        //valor do item atual
        element.fa =
          parseFloat(array_final_continua[k - 1].fa) + parseFloat(element.qtde);
      }
      k++;
      if (l == 0) {
        element.fa_porcento = parseFloat(element.fr_porcento);
      } else if (l > 0) {
        element.fa_porcento =
          parseFloat(array_final_continua[l - 1].fa_porcento) +
          parseFloat(element.fr_porcento);
      }
      l++;
    });
  
    return array_final_continua;
  }
  
  //criando tabela continua
  function criarTabelaContinua() {
    limparResultados();
    let div_tabela_continua = document.getElementById("div_tabela_continua");
    div_tabela_continua.style.display = 'block';
  
    let corpo = document.getElementById("tabela_continua");
    //limpar tela
    corpo.innerHTML = "";
    let array_valores = tratamentoDeDadosContinua();
    //mostrar nome tabela
    let nome_tabela = document.getElementById("nome_tabela");
    nome_tabela.innerHTML = "Quantitativa Continua";
    array_valores.forEach((e) => {
      let linha = document.createElement("tr");
      let campoDados = document.createElement("tr");
      let campo_fr_porcento = document.createElement("td");
      let campo_fa = document.createElement("td");
      let campo_fa_porcento = document.createElement("td");
      let campoVariavel = document.createElement("td");
      let campo_xi = document.createElement("td");
      let texto_xi = document.createTextNode(e.xi);
      let texto_fa = document.createTextNode(e.fa);
      let texto_fr_porcento = document.createTextNode(Math.floor(e.fr_porcento));
      let texto_fa_porcento = document.createTextNode(Math.floor(e.fa_porcento));
      let textoVariavel = document.createTextNode(e.valor);
      let texto_fi = document.createTextNode(e.fi);
      campoDados.appendChild(texto_fi);
      campoVariavel.appendChild(textoVariavel);
      campo_fr_porcento.appendChild(texto_fr_porcento);
      campo_fa.appendChild(texto_fa);
      campo_fa_porcento.appendChild(texto_fa_porcento);
      campo_xi.appendChild(texto_xi);
      linha.appendChild(campoVariavel);
      linha.appendChild(campoDados);
      linha.appendChild(campo_fr_porcento);
      linha.appendChild(campo_fa);
      linha.appendChild(campo_fa_porcento);
      linha.appendChild(campo_xi);
      corpo.appendChild(linha);
    });
  
  }
  
  function tratamentoDeDadosOrdinal() {
    //recebendo dados do input
    let dadosVar = document.getElementById("dados_variavel").value;
    let ordem_dados = (document.getElementById("ordem_valores").value).split(';');
    let dados_incorretos = false;
    //dividindo os dados
    // let array_variavel = variavel;
    let array_dados_variavel = dadosVar.split(";");
    //alfabeticamente
    array_dados_variavel = quickSort(array_dados_variavel);
    ///console.log(array_dados_variavel);
    //calcular quantidade de cada item
    const quantidade_dados = array_dados_variavel.reduce((acumulador, atual) => {
      acumulador[atual] = acumulador[atual] ? acumulador[atual] + 1 : 1;
      return acumulador;
    }, {});
  
    // Array vazia que irá conter {nome: 'nome_digitado', valor: valor_digitado}
    let array_valores = [];
    // contador auxiliar
    // percorrer todos os nomes digitados e adicionar na array "final" que será ordenada alfabeticamente
    let valor_anterior;
    array_dados_variavel.forEach((dados_variavel) => {
      if (dados_variavel != valor_anterior) {
        array_valores.push({
          valor: dados_variavel,
          qtde: quantidade_dados[dados_variavel],
        });
      }
      valor_anterior = dados_variavel;
    });
  
    // TODO: ordenar de acordo com usuário
    // percorrer array de valores e verificar se "batem" com os dados ordenados
    ordem_dados.forEach((valor) => {
      if (array_dados_variavel.includes(valor) !== true) {
        dados_incorretos = true;
        return;
      }
    });
  
    if (dados_incorretos === true) {
        alert('Os valores digitados não estão nos dados!!!');
        return false;
    }
  
    let array_valores_ordenado = [];
    ordem_dados.forEach((valor_ordem) => {
      array_valores.forEach((item) => { 
        if (item.valor === valor_ordem) {
          array_valores_ordenado.push(item);
        }
      });
    });
  
    let total_dados = [];
    array_valores_ordenado.forEach((t) => {
      total_dados.push(parseFloat(t.qtde));
    });
  
    // Somatório total
    let resultado = total_dados.reduce(
      (acumulador, item) => acumulador + item,
      0
    );
  
    //calculo FA
    //cont aux q
    let k = 0;
    let l = 0;
    // o primeiro valor
    // enquanto percorre, soma quantidade
    array_valores_ordenado.forEach((element) => {
      element.fi = element.qtde;
      element.fr_porcento = (element.qtde * 100) / resultado;
      //Caso base, caso seja primeira vez no laco o FA eh o valor do item mesmo
      if (k == 0) {
        element.fa = parseFloat(element.qtde);
        //caso seja um item depois do primeiro, soma o valor do FA do anterior com o atual
      } else if (k > 0) {
        //fa anterior q-1                        //valor do item atual
        element.fa =
          parseFloat(array_valores_ordenado[k - 1].fa) + parseFloat(element.qtde);
      }
      k++;
      if (l == 0) {
        element.fa_porcento = parseFloat(element.fr_porcento);
      } else if (l > 0) {
        element.fa_porcento =
          parseFloat(array_valores_ordenado[l - 1].fa_porcento) +
          parseFloat(element.fr_porcento);
      }
      l++;
    });
  
    return array_valores_ordenado;
  }
  function criarTabelaOrd() {
    limparResultados();
    let corpo = document.querySelector("tbody");
    let div_tabela_discreta = document.getElementById("div_tabela_discreta_nominal_ordinal");
    div_tabela_discreta.style.display = 'block';
    array_valores = tratamentoDeDadosOrdinal();
  
    if (array_valores === false) {
      return;
    }
  
    // nome tabela
    let nome_tabela = document.getElementById("nome_tabela");
    nome_tabela.innerHTML = "Qualitativa Ordinal/Nominal";
    array_valores.forEach((e) => {
      let linha = document.createElement("tr");
      let campoDados = document.createElement("tr");
      let campo_fr_porcento = document.createElement("td");
      let campo_fa = document.createElement("td");
      let campo_fa_porcento = document.createElement("td");
      let campoVariavel = document.createElement("td");
      let texto_fa = document.createTextNode(e.fa);
      let texto_fr_porcento = document.createTextNode(Math.floor(e.fr_porcento));
      let texto_fa_porcento = document.createTextNode(Math.floor(e.fa_porcento));
      let textoVariavel = document.createTextNode(e.valor);
      let texto_fi = document.createTextNode(e.fi);
      campoDados.appendChild(texto_fi);
      campoVariavel.appendChild(textoVariavel);
      campo_fr_porcento.appendChild(texto_fr_porcento);
      campo_fa.appendChild(texto_fa);
      campo_fa_porcento.appendChild(texto_fa_porcento);
      linha.appendChild(campoVariavel);
      linha.appendChild(campoDados);
      linha.appendChild(campo_fr_porcento);
      linha.appendChild(campo_fa);
      linha.appendChild(campo_fa_porcento);
      corpo.appendChild(linha);
    });
  
  }
  
    // Função auxiliar de ordenação
        function troca(vet, i, j) {
          let aux = vet[i];
          vet[i] = vet[j];
          vet[j] = aux;
        }
    
        function quickSort(vet, fnComp, posIni = 0, posFim = vet.length - 1) {
          if(posFim > posIni) {
              const posPivot = posFim;
              let posDiv = posIni - 1;
              for(let i = posIni; i < posFim; i++) {
                if(vet[i] < vet[posPivot] && i != posDiv) {
                
              posDiv++;
              troca(vet, i, posDiv);
           }
        }
        posDiv++;
        troca(vet, posDiv, posPivot);
  
        quickSort(vet, fnComp, posIni, posDiv - 1);
  
        quickSort(vet, fnComp, posDiv + 1, posFim);
     }
     return vet;
  }
  
  // Essa função lê o CSV
  function lerCSV() {
    let fileInput = document.getElementById("arquivo");
    let string_valores = "";
    Papa.parse(fileInput.files[0], {
      header: false,
      complete: function (results) {
        results.data[0].forEach((item) => {
          string_valores += item + ";";
        });
        document.getElementById("dados_variavel").value = string_valores.slice(0, -1);
      },
    });
  }
  
  function limparResultados()
  {
    
    let discreta_nominal_ordinal = document.getElementById("discreta_nominal_ordinal");
    discreta_nominal_ordinal.innerHTML = "";
  
    let div_tabela_discreta = document.getElementById("div_tabela_discreta_nominal_ordinal");
    div_tabela_discreta.style.display = 'none';
  
    let div_tabela_continua = document.getElementById("div_tabela_continua");
    div_tabela_continua.style.display = 'none';
  
    let tabela_continua = document.getElementById("tabela_continua");
    tabela_continua.innerHTML = "";
  
    document.getElementById("container_grafico").innerHTML = '&nbsp;';
    document.getElementById("container_grafico").innerHTML = '<canvas id="myChart"></canvas>';
  }