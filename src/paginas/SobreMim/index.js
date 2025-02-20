import React from 'react';
import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minha_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Rafael!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Rafael sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Desenvolvedor Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
            Sou um desenvolvedor web de 21 anos, comprometido e focado em entregar resultados de alta qualidade. A cada dia me encontro mais na área de desenvolvimento web, onde tenho investido meu tempo e energia para aprimorar minhas habilidades e conhecimentos. Sou uma pessoa atenciosa, responsável e organizada, sempre pronta para encarar novos desafios e evoluir profissionalmente.

            </p>
            <p className={styles.paragrafo}>
            Minha meta é atuar como desenvolvedor web, onde poderei aplicar estratégias eficazes, aprimorar minhas habilidades em programação e continuar a crescer como profissional e estudante. Estou disposto a me dedicar totalmente e a fazer o que for necessário para alcançar resultados excepcionais. Busco oportunidades que me permitam evoluir e contribuir de forma significativa para o sucesso da equipe e dos projetos em que estiver envolvido.
            </p>
            <p className={styles.paragrafo}>
            Estou disposto a me dedicar integralmente, investindo o esforço e tempo necessários para alcançar resultados excepcionais e contribuir de forma significativa para o sucesso da equipe e dos projetos aos quais eu for designado.
            </p>
            <p className={styles.paragrafo}>
            Esse compromisso constante com o aprendizado reflete o quanto valorizo a evolução profissional e a busca por soluções inovadoras.

            </p>
            <p className={styles.paragrafo}>
            lém disso, estou sempre pronto para encarar novos desafios e acredito firmemente que cada projeto é uma oportunidade única de crescimento, tanto profissional quanto pessoal. 
            </p>
        </PostModelo>
    )
}