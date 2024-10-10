const conteudo = {titulo: 0,
    entendimento:   1,
    ensino:         2,
    exemplos:       3,
    aprendizado:    4,
    estudo:         5,
}

matriz = function(m) {
    s = `<table class="matriz">`;
    for (var i = 0; i < m.length; i++) {
        s += "<tr>";
        for (var j = 0; j < m[i].length; j++) {
            s += "<td>"+m[i][j]+"<td>";
        }
        s += "</tr>";
    }
    s += "</table>";
    return s;
}
frac = function(a, b) {return `<sup>${a}</sup>/<sub>${b}</sub>`;}
s = function(n) {
    return `<sub>${n}</sub>`;
}

const enunciados = ["",
    "O que entendi do assunto?",
    "Como posso ensinar alguém?",
    "Quais exemplos podem ilustrar minhas explicações?",
    "O que não entendi do assunto?",
    "Como estudo?",
];

conteudos = [
       ["Sistemas 2x2",
        "É utilizado pra chegar a resolução de duas equações, conseguindo o valor de suas icognitas (se for possível). Creio que tive uma boa abrangencia no conteúdo.<br>Os métodos para resolução que achei mais fácil foram os de substituição e adição.",
        "Acredito que a forma mais fácil de ensinar esse conteúdo seria mostrando exercícios, que auxiliam na compreensão da resolução.",
        `<hr>EX 1:
        | 2x + 3y = 5
        | x - y = 1
        3L${s(2)} + L${s(1)}
        | 2x + 3y = 5
        | 5x = 8
        
        x = ${frac(8, 5)}

        <resp>x = 1,6</resp>
       
        1,6 - y = 1
        -y = 1 - 1,6
        y = - 1 + 1,6

        <resp>y = 0,6</resp>

        <hr>EX 2:
        | 4x + 2y = 8
        | -3x + y = 4
        L${s(1)} - 2L${s(2)}
        | 4x + 2y = 8
        | 10x = 4
        
        <resp>x = 0,4</resp>

        4 * (0,4) + 2y = 8
        1,6 + 2y = 8
        2y = 8 - 1,6

        <resp>y = 3,2</resp>

        <hr>EX 3:
        | x + y = 3
        | 2x - y = 0
        L${s(1)} + L${s(2)}
        | x + y = 3
        | 3x = 3

        <resp>x = 1</resp>

        1 + y = 3
        
        <resp>y = 2</resp>

        <hr>Fonte: Questões - ChatGPT, Resolução - Eu`,

        "Não houve dificuldade na compreensão do conteúdo, já que eu já havia estudado em anos passados, e não lembro as dificuldades que tive na época.",
        "Não tive dificuldades, para tentar aprender bastou realizar os exercícios propostos. Acredito que possa dificultar para quem nunca teve contato com equações somente."
    ], ["Sistemas 3x3",
        "Possui 3 equações, e algumas tem mais de uma solução, ou nenhuma solução, existem métodos de resolver, como o de adição (usado na 2x2 acima) e o escalonamento (que será explicado aqui).",
        `A pessoa deve ser primeiro apresentada ao sistema 2x2, para ficar mais aconchegada no assunto, depois, apresentada a matrizes.
        Passos:
        1: Transformar em Matriz
        2: Fazer as operações entre as linhas para simplificar as equações, e cancelar icógnitas
        3: Fazer as equações, e substituir os valores`,
        `<hr>EX 1:
        | 2x + 3y - z = 1
        | 2x - y + 5z = 17
        | -2x + y + 3z = 6
        ${matriz([
            [ 2,  3, -1, "| 1"],
            [ 2, -1,  5, "| 17"],
            [-2,  1,  3, "| 6"]
        ])}
        L<sub>2</sub> = L<sub>1</sub> - L<sub>2</sub>
        L<sub>3</sub> = L<sub>1</sub> + L<sub>3</sub>
        ${matriz([
            [ 2,  3, -1, "| 1"],
            [ 0,  4, -6, "| -16"],
            [ 0,  4,  2, "| 7"]
        ])}
        L<sub>3</sub> = L<sub>3</sub> - L<sub>2</sub>
        ${matriz([
            [ 2,  3, -1, "| 1"],
            [ 0,  4, -6, "| -16"],
            [ 0,  0,  8, "| 23"]
        ])}
        | 2x + 3y - z = 1
        | 4y - 6z = -16
        | 8z = 23

        <resp>z = 2,875</resp>

        4y - (6 * 2,875) = -16
        4y = -16 + 17,25
        4y = 1,25

        <resp>y = 0,3125</resp>

        2x + (3 * 0,3125) - 2,875 = 1
        2x - 1,9375 = 1
        
        <resp>x = 1,46875</resp>
        
        <hr>Fonte: Questões - ChatGPT, Resolução - Eu`,
        "Compreendi bem, mas achei meio demorado e cansativo o processo de transformação.",
        "Não tive que estudar."
    ], ["Matriz Inversa",
        "É a matriz que ao ser multiplicada pela original vai retornar a Identidade (a com 1 na linha principal e 0 no resto). É usada na criptografia.",
        `Passos:
        Em 2x2:
        1: calcula o determinante
        2: divide todos os números da matriz pelo determinante
        3: multiplica por -1 os da secundária
        4: troca os elementos da principal

        Em 3x3:
        1: calcula o determinante
        2: repete as 2 primeiras colunas e linhas
        3: corta a primeira coluna e linha
        4: com todas as 2x2 montadas, realizar as determinantes, e com os resultados, criar uma matriz nova. (lembrar que as linhas compõem as colunas e vice-versa).
        5: dividir todos pelo determinante`,
        `<hr>EX 1 (2x2):
        ${matriz([
            [1, 2],
            [3, 4]
        ])}
        <resp>det = -2</resp> 

        ${matriz([
            [ 4, -2],
            [-3,  1]
        ])}

        ${matriz([
            [ -2,  1],
            [1.5,  -0.5]
        ])}
        Fonte: Questão - ChatGPT, Resolução - Eu

        <hr>EX 2 (2x2):
        ${matriz([
            [5, 7],
            [2, 3]
        ])}
        <resp>det = 1</resp> 

        ${matriz([
            [3, -7],
            [-2, 4]
        ])}

        Fonte: Questão - ChatGPT, Resolução - Eu
        <hr>EX 3 (3x3):
        ${matriz([
            [4,7,9],
            [1,4,0],
            [0,0,1]
        ])}
        <resp>det = 9</resp>
        
        ${matriz([
            ["<s>4</s>","<s>7</s>","<s>9</s>","<s>4</s>","<s>7</s>"],
            ["<s>1</s>",4,0,1,4],
            ["<s>0</s>",0,1,0,0],
            ["<s>4</s>",7,9,4,7],
            ["<s>1</s>",4,0,1,4]
        ])}

        ${matriz([
            [frac(4,9),  frac(-7,9), -4],
            [frac(-1,9), frac(4,9),   1],
            [0,          0,           1]
        ])}

        Fonte: <a class="simples" href="https://exercicios.brasilescola.uol.com.br/exercicios-matematica/exercicios-sobre-matriz-inversa.htm">Brasil Escola</a>`,
        "Tive dificuldade na 3x3, pelo mesmo, esqueci de trocar as linhas e colunas durante a prova, o que ocasionou no resultado errado.",
        "Para estudar, revisei as fórmulas, já que o calculo para as 3x3 é meio confuso."
    ], ["Criptografia",
        "É utilizada para esconder dados, se tem uma matriz usada como chave, que codifica / decodifica a matriz, que depois pode ser convertira em texto com caracteres respectivos.",
        "A atividade passada em aula foi uma boa forma de explicar o conteúdo, creio que alguma atividade semelhante.",
        `N = A * M
        [A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26,  : 27]
        
        Texto: MATHEUS JOSE FERRARI

        A = ${matriz([
            [22, 13],
            [ 1,  1]
        ])}

        M = ${matriz([
            [13, 1, 20, 8, 5, 21, 19, 27, 10, 15],
            [19, 5, 27, 6, 5, 18, 18, 1, 18, 9]
        ])}

        N = ${matriz([
            [533, 87, 791, 254, 175, 696, 652, 607, 454, 447], 
            [32, 6, 47, 14, 10, 39, 37, 28, 28, 24]    
        ])}

        "N" é a Matriz codificada, e para decodificar, precisamos multiplicar pela Inversa da chave original

        A<sup>-1</sup> * N = M

        A<sup>-1</sup> = ${matriz([
            [frac(1,9), frac(-13,9)],
            [frac(-1,9), frac(22, 9)]
        ])}`,
        "Não houve dificuldades.",
        "Foi um conteúdo bem breve, mas legal de se trabalhar, já que envolvia o curso. Não tive que estudar."
    ], ["Trigonometria no triângulo retângulo",
        "É utilizado para calcular valores em triângulos onde um dos ângulos é 90.",
        `Teorema de Pitágoras:
        Cateto oposto (CO): Lado oposto do ângulo analizado
        Cateto adjacente (CA): Lado adjacente do ânglo analizado
        Hipotenusa (H): Lado maior e que está contra o ângulo de 90°

        a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup>
        a: Hipotenusa,
        b: Cateto adjacente
        c: Cateto oposto
        
        cos: ${frac("CA", "H")}
        sen: ${frac("CO", "H")}
        tan: ${frac("CO", "CA")}

        Valores Importantes:
        (1, 2, 3, 3, 2, 1, todo mundo sobre 2, raiz em cada um)
        ${matriz([
            ["   ","30°","45°","60°"],
            ["sen",frac(1,2),frac("√2",2),frac("√3",2)],
            ["cos",frac("√3",2),frac("√2",2),frac(1,2)],
            ["tan",frac("√3",3),1,"√3"]

        ])}
        `,
        `O exercício dado em aula para medir coisas do Campus é um bom exemplo do uso prático desse tipo de calculo, onde facilita (ou as vezes torna possível) a medição de algo em específico. É um dos conteúdos mais fáceis de complementar ao dia a dia.`,
        "É chato de identificar em que momento usar uma função em específico, mas não é dificil.",
        "É meio decoreba, algumas coisas ajudam, como a musiquinha que disse."
    ], ["Trigonometria num triângulo qualquer",
        "É utilizado quando não tem um triângulo retângulo, da mesma forma que o outro, ajuda a conseguir valores ou pular etapas de medição.",
        `Leis:
        Lei dos Senos:
        ${frac("a", "sen(Â)")} = ${frac("b","sen(B̂)")} = ${frac("c", "sen(Ĉ)")}

        Lei dos Cossenos:
        a<sup>2</sup> = b<sup>2</sup> + c<sup>2</sup> - 2 * b * c * cos(Â)
        b<sup>2</sup> = a<sup>2</sup> + c<sup>2</sup> - 2 * a * c * cos(B̂)
        c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup> - 2 * a * b * cos(Ĉ)
        `,
        `Há um tempo atrás, quando estava programando a trajetória de um projétil em um jogo que estava produzindo, me deparei com uma situação em que foi necessário o uso da Lei dos Senos para interpolar dois pontos em uma curva.`,
        "Não consegui entender a prova das Leis, e a Lei dos Cossenos foi meio dificil de decorar.",
        "Estudei as fórmulas, e tentei integrar com os conteúdos que tenho acesso no cotidiano, como esse caso em que foi utilizado."
    ], ["Arcos",
        "Arco seria uma quantidade específica da circunferência do círculo.",
        `Fórmulas:
        Comprimento do Arco (regra de 3):
        ${matriz([["2πr", "360°"],["l", "α"]])}

        Radiano para Grau
        1 rad ≅ 57,2958°
        0,0174533 rad ≅ 1°

        O que é radiano?:
        1 Radiano é um raio estendido sobre a circunferência.
        Por consequência, π rad = 180° e 2π rad = 360°
        ${matriz([["π","y"],["180°","x°"]])}
        `,
        ``,
        "Não houve dúvidas, conteúdo simples.",
        "Apenas uma revisada superficial é suficiente, conteúdo bem sucinto."
    ], ["Ciclo trigonométrico",
        "É usado pra apresentar os conceitos acima de forma gráfica e tangível, é um circulo com marcações de ângulos e valores.",
        `O círculo é dividido em 4 quadrantes, cada um com diferença de 90° entre eles, o ângulo é demarcado do 0 para a direita, onde ao curvar no sentido horário, diminui o angulo, e ao contrario o aumenta.

        Primeira Determinação Positiva:
        Em graus: É o módulo do ângulo e 360
        Em radianos: Deve estar entre 0 e 2π, então é o módulo da quantidade de radianos e 2π.

        Acredito que a maneira ensinada em aula foi bastante lúdica e simples, gostei da maneira como foi explicado.`,
        ``,
        "Não consegui entender muito bem o assunto sobre ângulos congruentes e coisas do tipo, e necessito revisar.",
        "Os materiais desenvolvidos são um ótimo material de estudo para esse conteúdo."
    ]
];

muchoTexto = function(texto) {
    return texto.replaceAll("\n", "<br>");
}

pulaLinha = function (d) {
    d.appendChild(document.createElement("br"));
}

novoEnunciado = function (enun) {
    temp = document.createElement("h2");
    temp.innerHTML = enun;
    return temp;
}

novaExplica = function (exp) {
    temp = document.createElement("p");
    temp.style.textAlign = "justify";
    temp.innerHTML = exp;
    return temp;
}

inserirConteudo = function (elemento) {
    div = document.createElement("div");
    div.setAttribute("class", "caixa");
    div.style.width = "700px;";
    t = document.createElement("h1");
    tit = elemento[conteudo.titulo];
    t.setAttribute("id", tit);
    t.innerHTML = tit;
    t.setAttribute("class", "textCenter");
    div.appendChild(t);

    a = elemento[conteudo.entendimento];
    if (a != "") {
        div.appendChild(novoEnunciado(enunciados[conteudo.entendimento]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento[conteudo.ensino];
    if (a != "") {
        div.appendChild(novoEnunciado(enunciados[conteudo.ensino]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }
    
    a = elemento[conteudo.exemplos];
    if (a != "") {
        div.appendChild(novoEnunciado(enunciados[conteudo.exemplos]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento[conteudo.aprendizado];
    if (a != "") {
        div.appendChild(novoEnunciado(enunciados[conteudo.aprendizado]));
        div.appendChild(novaExplica(muchoTexto(a)));
        pulaLinha(div);
    }

    a = elemento[conteudo.estudo];
    if (a != "") {
        div.appendChild(novoEnunciado(enunciados[conteudo.estudo]));
        div.appendChild(novaExplica(muchoTexto(a)));
    }
    document.body.appendChild(div);
    pulaLinha(document.body);
}

explorar = document.createElement("div");
explorar.setAttribute("class", "caixa");
exploraTit = document.createElement("h1");
exploraTit.innerHTML = "Explorar Conteúdos:";
explorar.appendChild(exploraTit);
insereExplora = function (e) {
    tit = e[conteudo.titulo];
    a = document.createElement("a");
    a.setAttribute("class", "simples");
    a.setAttribute("href", "#" + tit);
    a.innerHTML = "<h3>" + tit + "</h3>";
    explorar.appendChild(a);
}
conteudos.forEach(e => insereExplora(e));
document.body.appendChild(explorar);

pulaLinha(document.body);

conteudos.forEach(e => inserirConteudo(e));


conclusao = document.createElement("div");
conclusao.setAttribute("class", "caixa");
conclusaoTit = document.createElement("h1");
conclusaoTit.setAttribute("class", "textCenter");
conclusaoTit.innerHTML = "Conclusão";
conclusaoText = document.createElement("h3");
conclusaoText.style.textAlign = "justify";
conclusaoText.innerHTML = muchoTexto(
`Acredito que tive um bom desempenho nesse trimestre, não houve muitas dificuldades e as que tive, tirei minhas dúvidas.
Gostei muito dos exercícios e atividades propostas (especialmente a do círculo), pois ajudam a exemplificar o uso desses conhecimentos.

Foi um dos trimestres mais leves, e a Matemática foi a mais simples comparada a outras matérias.

Um ponto importante a ressaltar seriam as atitutes dos alunos, que ao fazerem muitas conversas paralelas, acabam desconcentrando os interessados no conteúdo e fazendo interrompimento da aula para que a prof. chame sua atenção. Gostaria que fosse feita a retirada desses alunos da aula, já que não contribuem, assim ajudando os que não se concentram facilmente.`
);
conclusao.appendChild(conclusaoTit);
conclusao.appendChild(conclusaoText);
document.body.appendChild(conclusao);

pulaLinha(document.body);

disclaimer = document.createElement("div");
disclaimer.setAttribute("class", "caixa");
disclaimerTit = document.createElement("h1");
disclaimerTit.setAttribute("class", "textCenter");
disclaimerTit.innerHTML = "Isenção de responsabilidade";
disclaimerText = document.createElement("h3");
disclaimerText.style.textAlign = "justify";
disclaimerText.innerHTML = muchoTexto(`Momentos em que não é citado a fonte externa, são onde o material foi retirado dos conteúdos repassados pela professora durante as aulas.`);
disclaimer.appendChild(disclaimerTit);
disclaimer.appendChild(disclaimerText);
document.body.appendChild(disclaimer);
