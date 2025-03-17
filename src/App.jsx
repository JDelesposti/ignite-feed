import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css";

import "./global.css";

const post = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/JDelesposti.png",
      name: "Junior Delesposti",
      role: "CEO @TechnoSH",
    },

    content: [
      { type: 'paragraph' , content: 'Fala galeraa 👋' },
      { type: 'paragraph' , content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no curso de React na plataforma da Rocketseat. O nome do projeto é Ignite Feed 🚀' },
      { type: 'link' , content: 'github.com/JDelesposti/ignite-feed'},
    ],

    publishedAt: new Date ('2025-03-12 15:00:00'),
  },

  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/Wdelesposti.png",
      name: "Wallace Delesposti",
      role: "Full-Stack Developer",
    },

    content: [
      { type: 'paragraph' , content: 'Boa galeraa 👋' },
      { type: 'paragraph' , content: 'Estou aqui para avaliar o exelente trabalho do Junior 👏' },
      { type: 'link' , content: 'github.com/Wdelesposti'},
    ],

    publishedAt: new Date ('2025-03-12 18:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })
          }
        </main>
      </div>
    </div>
  );
}
