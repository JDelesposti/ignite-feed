import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";


import styles from "./Comment.module.css";


export function Comment({ content, onDeleteComment}) {

    function handleDeleteComment() {
        onDeleteComment(content);
    }
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/JDelesposti.png" alt="" />


            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Junior Delesposti</strong>
                            <time title="10 de Março de 2023 às 09:46h" dateTime="10/03/2025 às 09:46">Cerca de 3h atrás</time>
                        </div>

                        <button onClick={handleDeleteComment} title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>{content}</p>
                </div>
            <footer>
                <button>
                    <ThumbsUp />
                    Aplaudir <span>28</span>
                </button>
            </footer>
            </div>
          </div>
    )
}