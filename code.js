
let inter1 = document.querySelector('.interrogacao');
let sobre = document.getElementById('sobre');
let info1 = document.getElementById('sentendido');


let ongs = document.getElementById('ongs');
let titulo = document.getElementById('tituloONG');
let t2 = document.getElementById('t2ONG');
let paraONG = document.getElementById('paraONG');

let h1obj = document.getElementById('h1obj');

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
};
let f2 = () => {
    h1obj.innerHTML = 'Casaco';
};
let f3 = () => {
    h1obj.innerHTML = 'Livros';
};
let f4 = () => {
    h1obj.innerHTML = 'Vitrola';
};
let f5 = () => {
    h1obj.innerHTML = 'Sofá';
};
let f6 = () => {
    h1obj.innerHTML = 'Ferramentas';
};
let f7 = () => {
    h1obj.innerHTML = 'Bicicleta';
};
let f8 = () => {
    h1obj.innerHTML = 'Patinete';
};
let f9 = () => {
    h1obj.innerHTML = 'Quadro';
};
let f10 = () => {
    h1obj.innerHTML = 'Câmera Fotográfica';
};
let f11 = () => {
    h1obj.innerHTML = 'Muda de Mangueira';
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
    t2.textContent = 'Fundado em 1993, o Instituto Nordeste Cidadania (Inec) é uma Organização da Sociedade Civil qualificada como Organização da Sociedade Civil de Interesse Público (Oscip) desde 2003, que tem como foco principal o desenvolvimento sustentável de comunidades na região Nordeste do Brasil. Essa qualificação permitiu que o Inec fizesse parcerias com o Banco do Nordeste para criar dois programas de microcrédito: o Crediamigo, para microempreendedores urbanos, até o final do ano de 2022, e o Agroamigo, para agricultores familiares rurais. Com esses programas, o Inec chegou a beneficar cerca de 3,6 milhões de pessoas por ano. Além dos programas de microcrédito, o Inec também investe em projetos culturais, tecnológicos e comunitários para crianças, jovens e adultos. Esses projetos ajudam a desenvolver uma cultura local e regional sustentável, de acordo com os Objetivos do Desenvolvimento Sustentável (ODS). O Inec conta atualmente com mais de dois mil colaboradores nos nove estados do Nordeste e nas regiões norte dos estados de Minas Gerais e Espírito Santo.';
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
