/* eslint-disable react/prop-types */

import { Currency, Restaurant, Plane, Confetti } from "../../assets";
import styles from "./ArticleSection.module.css";

const articles = [
  {
    coverImg: Currency,
    author: "Claire Robinson",
    title: "Receive money in any currency with no fees",
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
  },
  {
    coverImg: Restaurant,
    author: "Wilson Hutton",
    title: "Treat yourself without worrying about money",
    content:
      "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...",
  },
  {
    coverImg: Plane,
    author: "Wilson Hutton",
    title: "Take your Easybank card wherever you go",
    content:
      "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
  },
  {
    coverImg: Confetti,
    author: "Claire Robinson",
    title: "Our invite-only Beta accounts are now live!",
    content:
      "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...",
  },
];

export default function ArticleSection() {
  return (
    <div className={styles.articleSection}>
      <h4>Latest Articles</h4>
      <div className={styles.articlesContainer}>
        {articles.map((item) => (
          <Article
            key={item.title}
            coverImg={item.coverImg}
            author={item.author}
            title={item.title}
            content={item.content}
          ></Article>
        ))}
      </div>
    </div>
  );
}

function Article({ coverImg, author, title, content }) {
  return (
    <div className={styles.article}>
      <div className={styles.articleImg}>
        <img src={coverImg}></img>
      </div>
      <div className={styles.articleDetails}>
        <h6 className={styles.articleAuthor}>By {author}</h6>
        <h5 className={styles.articleTitle}>{title}</h5>
        <p className={styles.articleContent}>{content}</p>
      </div>
    </div>
  );
}
