import styles from "./Post.module.css";

export function Post() {
    return (
      <article className={styles.post}>
        <div className={styles.postContainer}>
          <header>
            <div className={styles.author}>
              <img className={styles.avatar} src="https://github.com/JDelesposti.png" />
              <div className={styles.authorInfo}>
                <strong>Junior Delesposti</strong>
                <span>Web Developer</span>
              </div>
            </div>
            <time title="10 de Março de 2023 às 09:46h" dateTime="10/03/2025 às 09:46">Publicado há 1h</time>
          </header>
          <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no curso de React na plataforma da Rocketseat. O nome do projeto é Ignite Feed 🚀</p>
            <p><a href="https://github.com/JDelesposti/ignite-feed">github.com/JDelesposti/ignite-feed</a></p>
            <p className={styles.hashtags}>
              <a href="#">#ignite</a>
              <a href="#">#novoprojeto</a>
              <a href="#">#react</a>
              <a href="#">#curso</a>
              <a href="#">#rocketseat</a>
            </p>
          </div>
          <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea placeholder="Deixe um comentário" />

            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </form>
        </div>

        <div className={styles.postContainer}>
          <header>
            <div className={styles.author}>
              <img className={styles.avatar} src="https://github.com/Wdelesposti.png" />
              <div className={styles.authorInfo}>
                <strong>Wallace Delesposti</strong>
                <span>Full-Stack Developer</span>
              </div>
            </div>
            <time title="10 de Março de 2023 às 09:46h" dateTime="10/03/2025 às 09:46">Publicado há 2h</time>
          </header>
          <div className={styles.content}>
            <p>Fala galeraa 👋</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates tenetur ipsa dolores magni, quaerat nostrum nesciunt architecto iure illo, sapiente minus ducimus, nam reprehenderit quas ad tempore eos adipisci corporis!</p>
            <p><a href="https://github.com/Wdelesposti">github.com/Wdelesposti</a></p>
            <p className={styles.hashtags}>
              <a href="#">#ignite</a>
              <a href="#">#novoprojeto</a>
              <a href="#">#react</a>
              <a href="#">#curso</a>
              <a href="#">#rocketseat</a>
            </p>
          </div>
          <form className={styles.commentForm}>
            <strong>Deixe seu feedback</strong>

            <textarea placeholder="Deixe um comentário" />
            <footer>
              <button type="submit">Publicar</button>
            </footer>
          </form>
        </div>
      </article>
    );
  }
  