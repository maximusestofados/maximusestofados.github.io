// ======================================================
// MÁXIMUS ESTOFADOS
// JAVASCRIPT PRINCIPAL
// ======================================================


// Aguarda o carregamento completo da página

document.addEventListener("DOMContentLoaded", function () {


    // ==================================================
    // MENSAGEM DO SISTEMA
    // ==================================================

    const mensagemSistema = document.querySelector("#mensagem-sistema");


    function mostrarMensagem(texto, tipo = "sucesso") {

        if (!mensagemSistema) {
            return;
        }


        mensagemSistema.textContent = texto;


        if (tipo === "erro") {

            mensagemSistema.style.backgroundColor = "#dc3545";

        } else {

            mensagemSistema.style.backgroundColor = "#198754";

        }


        mensagemSistema.style.display = "block";


        setTimeout(function () {

            mensagemSistema.style.display = "none";

        }, 3000);

    }



    // ==================================================
    // BOTÕES DO CARRINHO
    // Mantido do projeto original
    // ==================================================

    const botoesCarrinho =
        document.querySelectorAll(".adicionar-carrinho");


    botoesCarrinho.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const produto =
                botao.getAttribute("data-produto");


            mostrarMensagem(
                produto + " foi adicionado ao carrinho!"
            );


            botao.textContent = "Adicionado ✓";

            botao.disabled = true;


            setTimeout(function () {

                botao.textContent =
                    "Adicionar ao carrinho";

                botao.disabled = false;

            }, 2500);

        });

    });



    // ==================================================
    // ATENDIMENTO
    // Mantido do projeto original
    // ==================================================

    const botaoAtendimento =
        document.querySelector("#botao-atendimento");


    if (botaoAtendimento) {

        botaoAtendimento.addEventListener("click", function () {

            mostrarMensagem(
                "Solicitação enviada! Nossa equipe entrará em contato."
            );

        });

    }



    // ==================================================
    // FORMULÁRIO DE LOGIN
    // Mantido caso algum dia seja utilizado
    // ==================================================

    const formularioLogin =
        document.querySelector("#form-login");

    const mensagemLogin =
        document.querySelector("#mensagem-login");


    if (formularioLogin) {

        formularioLogin.addEventListener("submit", function (evento) {

            evento.preventDefault();


            const campoEmail =
                document.querySelector("#email");

            const campoSenha =
                document.querySelector("#senha");


            const email =
                campoEmail ? campoEmail.value.trim() : "";

            const senha =
                campoSenha ? campoSenha.value.trim() : "";


            if (email === "" || senha === "") {

                mensagemLogin.textContent =
                    "Preencha o e-mail e a senha.";

                mensagemLogin.style.color =
                    "#ff4a65";

                return;

            }


            if (!email.includes("@")) {

                mensagemLogin.textContent =
                    "Digite um e-mail válido.";

                mensagemLogin.style.color =
                    "#ff4a65";

                return;

            }


            if (senha.length < 6) {

                mensagemLogin.textContent =
                    "A senha deve possuir pelo menos 6 caracteres.";

                mensagemLogin.style.color =
                    "#ff4a65";

                return;

            }


            mensagemLogin.textContent =
                "Login realizado com sucesso!";

            mensagemLogin.style.color =
                "#41d17d";


            setTimeout(function () {

                window.location.href = "index.html";

            }, 1500);

        });

    }



    // ==================================================
    // BOTÃO CRIAR CADASTRO
    // ==================================================

    const botaoCadastro =
        document.querySelector("#botao-cadastro");


    if (botaoCadastro) {

        botaoCadastro.addEventListener("click", function () {

            alert(
                "A área de cadastro será disponibilizada em breve."
            );

        });

    }



    // ==================================================
    // GALERIA DE IMAGENS DOS PRODUTOS
    // ==================================================

    const modalImagem =
        document.querySelector("#modal-imagem");

    const imagemAmpliada =
        document.querySelector("#imagem-ampliada");

    const fecharModal =
        document.querySelector("#fechar-modal");


    // Se o modal não existir, não executa essa parte

    if (!modalImagem || !imagemAmpliada) {

        return;

    }



    // ==================================================
    // FOTOS DE CADA CATEGORIA
    // ==================================================

    const galerias = {

        sofas: [
            "img/sofa-pronta-entrega-1.jpg",
            "img/sofa-pronta-entrega-2.jpg"
        ],


        moveis: [
            "img/banqueta.jpg",
            "img/mesasrustiva.jpg"
        ],


        sobMedida: [
            "img/sofa-sob-medida.jpg"
        ]

    };



    // ==================================================
    // VARIÁVEIS DA GALERIA
    // ==================================================

    let fotosAtuais = [];

    let indiceAtual = 0;



    // ==================================================
    // CRIAR BOTÕES DE NAVEGAÇÃO
    // ==================================================

    const botaoAnterior =
        document.createElement("button");


    botaoAnterior.className =
        "galeria-anterior";


    botaoAnterior.innerHTML =
        "&#10094;";


    botaoAnterior.setAttribute(
        "aria-label",
        "Imagem anterior"
    );



    const botaoProximo =
        document.createElement("button");


    botaoProximo.className =
        "galeria-proximo";


    botaoProximo.innerHTML =
        "&#10095;";


    botaoProximo.setAttribute(
        "aria-label",
        "Próxima imagem"
    );



    modalImagem.appendChild(botaoAnterior);

    modalImagem.appendChild(botaoProximo);



    // ==================================================
    // MOSTRAR IMAGEM
    // ==================================================

    function mostrarImagem() {

        if (fotosAtuais.length === 0) {
            return;
        }


        imagemAmpliada.src =
            fotosAtuais[indiceAtual];


        // Esconde as setas quando existe somente uma foto

        if (fotosAtuais.length <= 1) {

            botaoAnterior.style.display = "none";

            botaoProximo.style.display = "none";

        } else {

            botaoAnterior.style.display = "flex";

            botaoProximo.style.display = "flex";

        }

    }



    // ==================================================
    // ABRIR GALERIA
    // ==================================================

    function abrirGaleria(fotos) {

        if (!fotos || fotos.length === 0) {
            return;
        }


        fotosAtuais = fotos;

        indiceAtual = 0;


        mostrarImagem();


        modalImagem.classList.add("ativo");


        // Impede a página de rolar enquanto a foto está aberta

        document.body.style.overflow = "hidden";

    }



    // ==================================================
    // FECHAR GALERIA
    // ==================================================

    function fecharGaleria() {

        modalImagem.classList.remove("ativo");


        imagemAmpliada.src = "";


        fotosAtuais = [];


        indiceAtual = 0;


        document.body.style.overflow = "";

    }



    // ==================================================
    // BOTÕES DOS CARDS
    // ==================================================

    const imagensProdutos =
        document.querySelectorAll(".produto-imagem");


    imagensProdutos.forEach(function (imagem, numero) {


        imagem.addEventListener("click", function () {


            // Primeiro card = Sofás

            if (numero === 0) {

                abrirGaleria(galerias.sofas);

                return;

            }


            // Segundo card = Móveis

            if (numero === 1) {

                abrirGaleria(galerias.moveis);

                return;

            }


            // Terceiro card = Sob medida

            if (numero === 2) {

                abrirGaleria(galerias.sobMedida);

                return;

            }


            // Caso existam outros cards futuramente,
            // usa o data-imagem normalmente

            const caminho =
                imagem.getAttribute("data-imagem");


            if (caminho) {

                abrirGaleria([caminho]);

            }

        });

    });



    // ==================================================
    // IMAGEM ANTERIOR
    // ==================================================

    botaoAnterior.addEventListener("click", function (evento) {

        evento.stopPropagation();


        if (fotosAtuais.length === 0) {
            return;
        }


        indiceAtual--;


        if (indiceAtual < 0) {

            indiceAtual =
                fotosAtuais.length - 1;

        }


        mostrarImagem();

    });



    // ==================================================
    // PRÓXIMA IMAGEM
    // ==================================================

    botaoProximo.addEventListener("click", function (evento) {

        evento.stopPropagation();


        if (fotosAtuais.length === 0) {
            return;
        }


        indiceAtual++;


        if (indiceAtual >= fotosAtuais.length) {

            indiceAtual = 0;

        }


        mostrarImagem();

    });



    // ==================================================
    // FECHAR PELO X
    // ==================================================

    if (fecharModal) {

        fecharModal.addEventListener("click", function (evento) {

            evento.stopPropagation();

            fecharGaleria();

        });

    }



    // ==================================================
    // FECHAR CLICANDO FORA DA IMAGEM
    // ==================================================

    modalImagem.addEventListener("click", function (evento) {

        if (evento.target === modalImagem) {

            fecharGaleria();

        }

    });



    // ==================================================
    // FECHAR COM ESC
    // ==================================================

    document.addEventListener("keydown", function (evento) {

        if (
            evento.key === "Escape" &&
            modalImagem.classList.contains("ativo")
        ) {

            fecharGaleria();

        }

    });



    // ==================================================
    // TECLADO: SETAS ESQUERDA E DIREITA
    // ==================================================

    document.addEventListener("keydown", function (evento) {

        if (!modalImagem.classList.contains("ativo")) {
            return;
        }


        if (fotosAtuais.length <= 1) {
            return;
        }


        if (evento.key === "ArrowLeft") {

            indiceAtual--;


            if (indiceAtual < 0) {

                indiceAtual =
                    fotosAtuais.length - 1;

            }


            mostrarImagem();

        }


        if (evento.key === "ArrowRight") {

            indiceAtual++;


            if (indiceAtual >= fotosAtuais.length) {

                indiceAtual = 0;

            }


            mostrarImagem();

        }

    });



});



// ======================================================
// JQUERY
// Mantido do projeto original
// ======================================================

$(document).ready(function () {


    // Abre e fecha detalhes dos produtos,
    // caso existam no projeto

    $(".botao-detalhes").click(function () {


        const detalhes =
            $(this).siblings(".detalhes-produto");


        detalhes.slideToggle(300);


        if (
            $(this).text().trim() ===
            "Ver detalhes"
        ) {

            $(this).text("Ocultar detalhes");

        } else {

            $(this).text("Ver detalhes");

        }

    });

});