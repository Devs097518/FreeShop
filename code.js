
let inter1 = document.querySelector('.interrogacao');
let sobre = document.getElementById('sobre');
let info1 = document.getElementById('sentendido');


let ongs = document.getElementById('ongs');
let titulo = document.getElementById('tituloONG');
let t2 = document.getElementById('t2ONG');
let paraONG = document.getElementById('paraONG');

let h1obj = document.getElementById('h1obj');
let donimg = document.getElementById('donimg');
let dondescription = document.getElementById('dondescription');
let id2 = document.getElementById('id2');


let vinda = document.getElementById('vinda');
let ida = document.getElementById('ida');


let box1 = document.getElementById('box1');
let box2 = document.getElementById('box2');
let box3 = document.getElementById('box3');
let box4 = document.getElementById('box4');

let box5 = document.getElementById('box5');
let box6 = document.getElementById('box6');
let box7 = document.getElementById('box7');
let box8 = document.getElementById('box8');
let box9 = document.getElementById('box9');

let box10 = document.getElementById('box10');
let box11 = document.getElementById('box11');
let caixa4 = Array.from(document.getElementsByClassName('caixa4'));

let check1 = document.querySelector("input[name='tres'][value='valor1']");
let check2 = document.querySelector("input[name='tres'][value='valor2']");
let check3 = document.querySelector("input[name='tres'][value='valor3']");

let olhada = document.getElementsByClassName('olhada');
let produto = document.getElementById('produto');
let sairitem = document.getElementById('sairitem');
let contagem = caixa4.length;

let andar = 0;



let pagina1 = () => {
    caixa4.forEach(todas => {
        todas.style.display = 'none';
    });

    box1.style.display = 'flex';
    box2.style.display = 'flex';
    box3.style.display = 'flex';
    box4.style.display = 'flex';
}

let pagina2 = () => {
    caixa4.forEach(todas => {
        todas.style.display = 'none';
    });

    box5.style.display = 'flex';
    box6.style.display = 'flex';
    box7.style.display = 'flex';
    box8.style.display = 'flex';
}

let pagina3 = () => {
    caixa4.forEach(todas => {
        todas.style.display = 'none';
    });

    box9.style.display = 'flex';
    box10.style.display = 'flex';
    box11.style.display = 'flex';
    console.log('tá chamando a pag 3 sim');

}

let f1 = () => {
    h1obj.innerHTML = 'Mesa';
    donimg.src = 'fmesa.jpg';
    dondescription.textContent = 'pois é, tenho uma mesa e vou me mudar, estou colocando para doação!';
    id2.innerHTML = 'Brasília(DF) <br> 14/12/2024 <br> (50) 99885-1234';
};
let f2 = () => {
    h1obj.innerHTML = 'casaco';
    donimg.src = 'casaco.jpg';
    dondescription.textContent = 'Sei que estamos entrando para o inverno e eu queria doar um de meus casacos para quem precisar, ele é praticamente novo e só usei poucas vezes. Pode deixar que o envio fica comigo.';
    id2.innerHTML = 'São Paulo(SP) <br> 14/05/2025 <br> (50) 54635-1234';
};
let f3 = () => {
    h1obj.innerHTML = 'Livro';
    donimg.src = 'flivros.webp';
    dondescription.textContent = 'Já li toda a franquia de Senhor dos Anéis e é um espetáculo! Eu gostaria que outras pessoas tivessem a mesma oportunidade, estão em bom estado';
    id2.innerHTML = 'Rio Grande do Norte(RN) <br> 23/12/2024 <br> (55) 92370-1234';
};
let f4 = () => {
    h1obj.innerHTML = 'Vitrola';
    donimg.src = 'fvitrola.avif';
    dondescription.textContent = 'já dancei muitas valsas com esta belezinha e ainda funciona! Está em bom estado e eu pago para entregar.';
    id2.innerHTML = 'Mato Grosso do Sul(MS) <br> 10/12/2024 <br> (51) 23799-1234';
};
let f5 = () => {
    h1obj.innerHTML = 'Sofá';
    donimg.src = 'fsofa.webp';
    dondescription.textContent = 'Sofá de couro, só perdeu um pouco de leveza em cima por conta do uso. Estarei de mudanças e preciso doar este sofá pra já!';
    id2.innerHTML = 'Espírito Santo(ES)<br> 13/12/2024 <br> (50) 99885-3457';
};
let f6 = () => {
    h1obj.innerHTML = 'Ferramentas';
    donimg.src = 'ftool.jpg';
    dondescription.textContent = 'Eu tenho esta caixa de ferramentas que tem todos os tamanhos de fenda e está em bom uso. Só é um pouco velha devido ao tempo de uso mas está em perfeito estado.';
    id2.innerHTML = 'Rio de Janeiro(RJ)<br> 13/07/2024 <br> (55) 28455-1234';
};
let f7 = () => {
    h1obj.innerHTML = 'Bicicleta';
    donimg.src = 'fbike.webp';
    dondescription.textContent = 'Estou doando esta bike pois vou me mudar e não queria vender ela, ela não tem freio mas tem essas cestas pra carregar compras ou coisas do tipo, que é bastante útil, de preferência, que seja para alguém daqui de Recife ou região pois não posso pagar o frete.';
    id2.innerHTML = 'Recife(PE) <br> 12/10/2024 <br> (50) 98543-1204';
};
let f8 = () => {
    h1obj.innerHTML = 'Patinete';
    donimg.src = 'fpatinete.avif';
    dondescription.textContent = 'Doação de patinete, pode servir tanto para crianças quanto para adultos se locomover ao seu trabalho. Em bom estado, não posso pagar o transporte.';
    id2.innerHTML = 'Rio Grande do Sul(RS) <br> 13/12/2025 <br> (50) 99543-1904';
};
let f9 = () => {
    h1obj.innerHTML = 'Quadro';
    donimg.src = 'fpic.webp';
    dondescription.textContent = 'Gosto muito de fazer arte, como quadros assim. Conheci a ideia do projeto e gostei muito, então resolvi fazes estes 3 quadros para colocar na doação aqui e deixar a sua casa mais colorida nestas festas de fim de ano. Pode deixxar que eu faço o envio, só entrar em contato comigo!';
    id2.innerHTML = 'Minas Gerais(MG) <br> 20/12/2025 <br> (55) 97545-1987';
};
let f10 = () => {
    h1obj.innerHTML = 'Câmera Fotográfica';
    donimg.src = 'fcam.jpg';
    dondescription.textContent = 'Essa é uma câmera de muito tempo de uso mas ainda funciona, é carregada a pilha. Posso fazer a entrega somente no meu Estado, fora dele não posso cobrir o frete mas posso ajudar com uma parte, só falar comigo.';
    id2.innerHTML = 'Brasília(DF) <br> 01/12/2025 <br> (50) 10025-1234';
};
let f11 = () => {
    h1obj.innerHTML = 'Muda de Mangueira';
    donimg.src = 'fmang.webp';
    dondescription.textContent = 'Essa é uma época de muita manga no meu sítio então estou fazendo mudas para plantiu, já tenho 40 como esta da foto, adubada e enxertada. Entre em contato comigo para envios.';
    id2.innerHTML = 'Acre(AC) <br> 11/11/2025 <br> (50) 10285-8499';
};


if(contagem>=11){
    caixa4[0].addEventListener('click',f1);
    caixa4[1].addEventListener('click',f2);
    caixa4[2].addEventListener('click',f3);
    caixa4[3].addEventListener('click',f4);
    caixa4[4].addEventListener('click',f5);
    caixa4[5].addEventListener('click',f6);
    caixa4[6].addEventListener('click',f7);
    caixa4[7].addEventListener('click',f8);
    caixa4[8].addEventListener('click',f9);
    caixa4[9].addEventListener('click',f10);
    caixa4[10].addEventListener('click',f11);
};




descer = () => {
    andar--;
    console.log('pelo menos o descer tá on');

    if (andar == -1) {
        andar = 4;
    };

    if (andar == 0) {
        cenario1();
    };

    if (andar == 1) {
        cenario2();
    };

    if (andar == 2) {
        cenario3();
    };

    if (andar == 3) {
        cenario4();
    };

    if (andar == 4) {
        cenario5();
    };




}

subir = () => {
    andar++;

    if (andar >= 5) {
        andar = 0;
    };

    if (andar == 0) {
        cenario1();
    };

    if (andar == 1) {
        cenario2();
    };

    if (andar == 2) {
        cenario3();
    };

    if (andar == 3) {
        cenario4();
    };

    if (andar == 4) {
        cenario5();
    };
};

cenario1 = () => {
    ongs.src = 'inec.png';
    titulo.textContent = 'Ajude O Nordeste';
    t2.textContent = 'Fundado em 1993, o Instituto Nordeste Cidadania (Inec) é uma Organização da Sociedade Civil qualificada como Organização da Sociedade Civil de Interesse Público (Oscip) desde 2003, que tem como foco principal o desenvolvimento sustentável de comunidades na região Nordeste do Brasil. Essa qualificação permitiu que o Inec fizesse parcerias com o Banco do Nordeste para criar dois programas de microcrédito: o Crediamigo, para microempreendedores urbanos, até o final do ano de 2022, e o Agroamigo, para agricultores familiares rurais. Com esses programas, o Inec chegou a beneficar cerca de 3,6 milhões de pessoas por ano.';
    paraONG.href = 'https://inec.org.br/';

};
cenario2 = () => {
    ongs.src = 'imazon.png';
    titulo.textContent = 'Ajude O Norte';
    t2.textContent = 'O Instituto do Homem e Meio Ambiente da Amazônia (Imazon) é uma instituição científica brasileira e amazônida, sem fins lucrativos, que realiza pesquisas e projetos para promover o desenvolvimento socioambiental e a justiça climática da região. Nosso propósito é produzir e aplicar soluções baseadas na conservação da floresta para melhorar a qualidade de vida não apenas da população amazônica, mas também brasileira e mundial.';
    paraONG.href = 'https://imazon.org.br/';
};

cenario3 = () => {
    ongs.src = 'apae.svg';
    titulo.textContent = 'Ajude O Centro-Oeste';
    t2.textContent = 'A Federação Nacional das Apaes, ou Apae Brasil, é a maior rede de defesa e garantia de direitos das pessoas com deficiência intelectual e deficiência múltipla da América Latina. O movimento apaeano foi fundado por um grupo pioneiro de pais e profissionais dedicados, motivados pela urgência de promover a desinstitucionalização e garantir o direito à educação e à vida comunitária para pessoas com deficiência intelectual. Esse movimento emergiu no Brasil, um país onde, historicamente, a rejeição, a discriminação e o preconceito eram enfrentados cotidianamente por essas pessoas e suas famílias. Em resposta a esses desafios, as primeiras associações foram criadas com o intuito de oferecer educação, atendimento na área de saúde e lutar pela inclusão social desses indivíduos..';
    paraONG.href = 'https://apaebrasil.org.br/';
};

cenario4 = () => {
    ongs.src = 'ProSaberSP.svg';
    titulo.textContent = 'Ajude O Sudeste';
    t2.textContent = 'O Instituto Pró-Saber SP é uma organização da sociedade civil sem fins lucrativos, que atua na comunidade de Paraisópolis, em São Paulo, desde 2003. Tem como missão fortalecer a educação integral de crianças e jovens por meio de experiências de leitura e brincadeira, transformando suas famílias e suas comunidades. Ao longo desses 21 anos, desenvolveu uma metodologia ancorada em três eixos de trabalho:  a leitura, a brincadeira e o protagonismo.';
    paraONG.href = 'https://prosabersp.org.br/';
};

cenario5 = () => {
    ongs.src = 'ABC.png';
    titulo.textContent = 'Ajude O Sul';
    t2.textContent = 'A página Amigos da Boa Causa reúne todas as ações em prol dos projetos sociais da Santa Casa de Misericórdia de Porto Alegre, bem como as empresas que nos apoiam. Para conseguirmos melhorar nossos serviços à todos que usufruem do nosso ambiente hospitalar, reunimos diferentes possibilidades de incentivos que, com sua contribuição, ajudarão milhares de pessoas. Conheça nossos projetos e faça parte deste time!';
    paraONG.href = 'https://amigos.santacasa.org.br/';
};



let iteminfo = () => {
    produto.style.display = 'flex';
    console.log('deu certo, cara');
};

let sairinfo = () => {
    produto.style.display = 'none';
};






let definido = () => {
    pagina1();
};


alertaA = () => {
    sobre.style.display = 'flex';
};

alertaA0 = () => {
    sobre.style.display = 'none';
};

inter1.addEventListener('click', alertaA);
info1.addEventListener('click', alertaA0);


ida.addEventListener('click', subir);
vinda.addEventListener('click', descer);

window.onload = definido;


check1.addEventListener('change', pagina1);
check2.addEventListener('change', pagina2);
check3.addEventListener('change', pagina3);

sairitem.addEventListener('click', sairinfo);

for (i = 0; i < olhada.length; i++) {
    olhada[i].addEventListener('click',iteminfo);
};
