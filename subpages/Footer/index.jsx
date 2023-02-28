import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <>
            <div className={styles.alinhamento_ajuda}>
                <h4 className={styles.titulo_menor} >
                    Ainda Precisa de ajuda ?
                </h4>
                <p>Entre em contato através do E-mail:</p>
                <p>maisumpontopositivo@g4f.com.br</p>
            </div>

            <div className={styles.footer}>
            </div>
        </>
    );
};