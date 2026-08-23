document.addEventListener("DOMContentLoaded", () => {

    const menu = document.querySelector(".menu");
    const botao = document.querySelector(".menu-mobile");

    botao.addEventListener("click", () => {

        menu.classList.toggle("ativo");

    });

});

// =========================================
// FORMULÁRIO RECEBA SEU PRESENTE
// =========================================

const formularioPresente = document.querySelector("#formulario-presente");


if (formularioPresente) {

    formularioPresente.addEventListener("submit", function (event) {

        event.preventDefault();


        const nome = document.querySelector("#nome").value;

        const whatsapp = document.querySelector("#whatsapp").value;

        const presente = document.querySelector("select[name='presente']").value;


        const mensagem =
            `Olá, Dra. Edilamar.

Meu nome é ${nome}.
Meu WhatsApp é ${whatsapp}.

Gostaria de receber o presente:
${presente}

Encontrei este material pelo site.`;



        const mensagemFormatada = encodeURIComponent(mensagem);


        const link =
            `https://wa.me/5534991872390?text=${mensagemFormatada}`;


        window.open(link, "_blank");


    });

}