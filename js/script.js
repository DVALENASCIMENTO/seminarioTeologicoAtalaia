/*==================================================
        SEMINÁRIO TEOLÓGICO ATALAIA
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
            ACORDEÃO DOS MÓDULOS
    ==========================================*/

    const modules = document.querySelectorAll(".module");

    modules.forEach(module => {

        const header = module.querySelector(".module-header");
        const content = module.querySelector(".module-content");

        header.addEventListener("click", () => {

            const aberto = module.classList.contains("active");

            modules.forEach(item => {

                item.classList.remove("active");

                item.querySelector(".module-content").style.maxHeight = null;

            });

            if (!aberto) {

                module.classList.add("active");

                content.style.maxHeight =
                    content.scrollHeight + "px";

            }

        });

    });

    /*==========================================
            ACORDEÃO DAS AULAS
    ==========================================*/

    const lessons = document.querySelectorAll(".accordion-item");

    lessons.forEach(item => {

        const header = item.querySelector(".accordion-header");
        const content = item.querySelector(".accordion-content");

        header.addEventListener("click", (e) => {

            e.stopPropagation();

            const aberto = item.classList.contains("active");

            const parent =
                item.closest(".module-content");

            parent.querySelectorAll(".accordion-item")
            .forEach(aula => {

                aula.classList.remove("active");

                aula.querySelector(".accordion-content")
                    .style.maxHeight = null;

            });

            if (!aberto) {

                item.classList.add("active");

                content.style.maxHeight =
                    content.scrollHeight + "px";

                /* Ajusta altura do módulo */

                const modulo =
                    item.closest(".module");

                if (modulo.classList.contains("active")) {

                    setTimeout(() => {

                        modulo.querySelector(".module-content")
                            .style.maxHeight =
                            modulo.querySelector(".module-content")
                            .scrollHeight + "px";

                    }, 300);

                }

            }

        });

    });

    /*==========================================
            APENAS UM ÁUDIO
    ==========================================*/

    const audios =
        document.querySelectorAll("audio");

    audios.forEach(audio => {

        audio.addEventListener("play", () => {

            audios.forEach(outro => {

                if (outro !== audio) {

                    outro.pause();

                }

            });

        });

    });

    /*==========================================
            ANIMAÇÃO DOS MÓDULOS
    ==========================================*/

    const observer =
        new IntersectionObserver(entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        }, {

            threshold:0.15

        });

    document.querySelectorAll(".module")
        .forEach(item => observer.observe(item));

    document.querySelectorAll(".accordion-item")
        .forEach(item => observer.observe(item));

    /*==========================================
            ROLAGEM SUAVE
    ==========================================*/

    document.querySelectorAll('a[href^="#"]')
    .forEach(link => {

        link.addEventListener("click", function(e){

            const destino =
                document.querySelector(
                    this.getAttribute("href")
                );

            if(destino){

                e.preventDefault();

                destino.scrollIntoView({

                    behavior:"smooth"

                });

            }

        });

    });

    /*==========================================
            IMAGEM EM NOVA ABA
    ==========================================*/

    document.querySelectorAll(".accordion-header img")
    .forEach(img => {

        img.addEventListener("click", e => {

            e.stopPropagation();

            window.open(img.src,"_blank");

        });

    });

    /*==========================================
            PDF
    ==========================================*/

    document.querySelectorAll(".pdf")
    .forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.innerHTML =
            '<i class="fa-solid fa-download"></i> Abrir Apostila';

        });

        btn.addEventListener("mouseleave", () => {

            btn.innerHTML =
            "Abrir Apostila";

        });

    });

    /*==========================================
            RODAPÉ
    ==========================================*/

    const footer =
        document.querySelector("footer p");

    if (footer) {

        footer.innerHTML =
        `© ${new Date().getFullYear()} Seminário Teológico Atalaia`;

    }

});