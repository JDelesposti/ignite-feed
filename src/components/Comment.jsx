import styles from "./Comment.module.css";


export function Comment() {
    return (
        <div className={styles.comment}>
            <img src="https://github.com/JDelesposti.png" alt="" />


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header></header>

            </div>
            <footer>
                Aplaudir
            </footer>
            </div>
          </div>
    )
}