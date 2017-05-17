window.onload = main;

function main(){
    
    // variavel dos filmes
    var filme = [{"codigo":"1","nome":"Guardiões da Galaxia vol.2","cartaz":"cartaz/cartaz.jpg","classificacao":"12","genero":"Aventura","duracao":"137","diretor":"James Gunn","elenco":"Chris Pratt, Vin Diesel, Zoe Saldana, Dave Batista, Bradley Cooper, Karen Gillan, Pom Klementieff, Michael Rooker","sinopse":"Os Guardiões precisam lutar para manter sua recém descoberta família unida, enquanto descobrem os mistérios sobre o verdadeiro pai de Peter Quill. Antigos inimigos se tornam aliados e personagens conhecidos e amados dos quadrinhos virão ao auxílio dos nossos heróis, enquanto o Universo Cinematográfico da Marvel continua se expandindo."},
                 {"codigo":"2","nome":"Kingsman - O circulo dourado","cartaz":"cartaz/kingsman-cartaz.jpg","classificacao":"16","genero":"Acao","duracao":"?","diretor":"Matthew Vaughn","elenco":"Taron Egerton, Colin Firth, Julianne Moore","sinopse":"Quando o quartel general Kingsman é destruído, uma jornada os leva à descoberta de uma organização de espionagem nos EUA. Essas duas corporações secretas de elite devem se unir para derrotar um inimigo comum."},
                 {"codigo":"3","nome":"Alien Covenant","cartaz":"cartaz/alien-cartaz.jpg","classificacao":"16","genero":"Ficcao/Suspense/Terror","duracao":"122","diretor":"Ridley Scott","elenco":"Michael Fassbender, James Franco, Katherine Waterston, Noomi Rapace, Guy Pearce","sinopse":"2104. Viajando pela galáxia, os tripulantes da nave colonizadora Covenant encontram um planeta remoto com ares de paraíso inexplorado. Encantados, eles acreditam na sorte e ignoram a realidade do local: uma terra sombria que guarda terríveis segredos e tem o sobrevivente David como habitante solitário."},
                 {"codigo":"4","nome":"Star Wars - Os Ultimos Jedi","cartaz":"cartaz/poster-swviii.jpg","classificacao":"12","genero":"Acao/Aventura/Ficcao","duracao":"?","diretor":" Rian Johnson","elenco":"Daisy Ridley , Adam Driver , Oscar Isaac , Domhnall Gleeson , Mark Hamill , Lupita Nyong'o","sinopse":"Após encontrar o mítico e recluso Luke Skywalker (Mark Hammil) em uma ilha isolada, a jovem Rey (Daisy Ridley) busca entender o balanço da Força a partir dos ensinamentos do mestre jedi. Paralelamente, o Primeiro Império de Kylo Ren (Adam Driver) se reorganiza para enfrentar a Aliança Rebelde."},
                 {"codigo":"5","nome":"Velozes e Furiosos 8","cartaz":"cartaz/vf8-cartaz.jpg","classificacao":"14","genero":"Acao","duracao":"136","diretor":"F. Gary Gray","elenco":"Vin Diesel, Jason Statham, Jordana Brewster, Charlize Theron, Dwayne Johnson, Scott Eastwood, Kurt Russell, Helen Mirren","sinopse":"Depois que Brian e Mia se aposentaram, e o resto da equipe foi exonerado, Dom e Letty estão em lua de mel e levam uma vida pacata e completamente normal. Mas a adrenalina do passado acaba voltando com tudo quando uma mulher misteriosa faz com que Dom retorne ao mundo do crime e da velocidade."}];
    
    // constroi tabela de assentos
    var divTable = document.createElement("div");
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");
    var theadTr = document.createElement("tr");
    
    divTable.setAttribute("class", "table-responsive");
    table.setAttribute("class", "table");
    
    // FOR para o THEAD da tabela, numerando a primeira linha de 0 a 10
    for(var i = 0; i <= 10; i++){
        var theadTh = document.createElement("th");
        theadTh.innerHTML = i;
        theadTr.appendChild(theadTh);
    }
    thead.appendChild(theadTr);
    
    // GERANDO O RESTO DA TABELA
    
    // "alfabeto" cria um array de "A" á "J"
    var alfabeto = "ABCDEFGHIJ".split("");
    // percorre todas as letras de "alfabeto" usando forEach()
    alfabeto.forEach(function(x){
        var tr = document.createElement("tr");
        var thRow = document.createElement("th");
        thRow.setAttribute("scope","row");
        thRow.innerHTML = x;
        tr.appendChild(thRow);
        for(var j = 1; j <= 10; j++){
            var td = document.createElement("td");
            td.setAttribute("id", x+""+j);
            td.innerHTML = x+""+j;
            tr.appendChild(td);
            tbody.appendChild(tr);
        }
    });
    
    divTable.appendChild(table)
    table.appendChild(thead);
    table.appendChild(tbody);
    document.getElementById("tabelaLugares").appendChild(divTable);
    
    // CLICK DOS LUGARES
    
    var lugares = document.querySelectorAll("#tabelaLugares table tr td");
    var lugaresArr = Array.prototype.slice.call(lugares);
    lugaresArr.forEach(function(x){
        x.addEventListener("click", function(e){
            var ul = document.getElementById("lugaresEscolhidos");
            if(x.title === "escolhido"){
                x.style.backgroundColor = "black";
                x.style.color = "white";
                x.removeAttribute("title");
                var li = document.getElementById("l"+x.id);
                ul.removeChild(li);
            }
            else{
                var li = document.createElement("li");
                li.setAttribute("id", "l"+x.id);
                li.innerHTML = x.id;
                ul.appendChild(li);
                x.style.backgroundColor = "red";
                x.setAttribute("title", "escolhido");
            }
        });
    });
    
    // FINALIZAR
    
    var btnCartao = document.getElementById("btnCartao");
    var btnBoleto = document.getElementById("btnBoleto");
    var divCartao = document.getElementById("cartao");
    var divBoleto = document.getElementById("boleto");
    
    btnCartao.addEventListener("click", function(e){
        divBoleto.style.display = "none"; 
        divCartao.style.display = "block";
    });
    
    btnBoleto.addEventListener("click", function(e){
        divCartao.style.display = "none"; 
        divBoleto.style.display = "block";
    });
    
    
    // FORMAS DE PAGAMENTO
    
    var mesCartao = document.getElementById("mesCartao");
    var anoCartao = document.getElementById("anoCartao");
    var meses = ["mês",1,2,3,4,5,6,7,8,9,10,11,12];
    var ano = ["ano",2017,2018,2019,2020,2021,2022,2023,2024,2025];
    options(meses, mesCartao);
    options(ano, anoCartao);
    
    function options(array, target){
       array.forEach(function(x){
           var option = document.createElement("option");
           option.setAttribute("value", x);
           option.innerHTML = x;
           target.appendChild(option);
        }); 
    }
}