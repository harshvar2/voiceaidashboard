import styles from '../styles/DashboardContents.module.css'
import Image from 'next/image'

const DashboardContents = ({contents}) => {
    return (
        <div className={styles.grid}>
            {
                contents.map((obj,index)=> (
                    <div key={obj.id} className={styles.card}>
                      <div>
                      <img src={obj.imgUrl}  className={styles.image} alt="Avatar"/>
                      </div>
                      <div className={styles.text}>
                        <p>{obj.title} </p>
                        <div>{obj.body}</div>
                      </div>
                    </div>
                )
                )
            }
        </div>
    )
}

export default DashboardContents
