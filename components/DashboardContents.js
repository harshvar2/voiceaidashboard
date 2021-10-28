import styles from '../styles/DashboardContents.module.css'

const DashboardContents = ({dashboardContent}) => {
    return (
        <>
            {
                dashboardContent.data.map((obj,index)=> (
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
            </>
    )
}

export default DashboardContents
