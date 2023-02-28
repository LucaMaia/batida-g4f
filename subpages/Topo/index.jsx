import Image from "next/image";
import styles from "./Topo.module.css";

import NavbarComponentizado from "../../components/Navbar";

let navbarComponentizado = [
    {
        "name":"Dúvidas Frequentes",
        "href":"#faq",
        "number":"1"
    },
    {
        "name":"Navegação da Plataforma",
        "href":"#nav",
        "number":"2"
    },
]

export default function Topo() {
    return (
        <div >
            <main>
                <NavbarComponentizado link={navbarComponentizado} image="/g4f.svg"/>

                <div id="navBar" className={styles.alinhamento_image}>
                    <Image
                        src="back.svg"
                        width="800"
                        height="500"
                        alt="fundo"
                        priority
                        className={styles.image}
                    />
                </div>
            </main>
        </div >
    )
}
