import styles from "./PlanList.module.css"

export default function PlanList({ plan, price, description, topics, typePlan, popular }) {
    return (
        <div className={popular ? styles.border : ""
        }>
            {popular ? <p>RECOMENDADO</p> : ""}
            <div className={styles.card}>
                <div className={popular ? styles.titlePopular : styles.title}>
                    <h2>{plan}</h2>
                    <p>{description}</p>
                </div>
                <div className={styles.pricePlan}>
                    <p>R$ </p>
                    <h3>{price}</h3>
                </div>
                <p className={styles.typePlan}>{typePlan}</p>
                <div>
                    {topics}
                </div>
                <button>ADIQUIRIR</button>
            </div >
        </div >
    )
}