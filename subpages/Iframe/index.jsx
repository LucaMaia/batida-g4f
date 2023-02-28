import styles from "./Iframe.module.css";

export default function Iframe() {
    return (
        <>
            <h4 className={styles.titulo_p} id="nav">
                Navegação na Plataforma
            </h4>

            <div className={styles.alinhamento_iframe}>
                <iframe className={styles.iframe}
                        src="https://www.youtube.com/embed/6o0cv18dEII"
                        title="Criando AUTENTICAÇÃO com React Hooks e TDD - Tutorial Next.js + TypeScript"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                >
                </iframe>
            </div>
        </>
    );
};