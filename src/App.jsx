import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import styles from "./App.module.css";
import ServiceSection from "./components/ServiceSection/ServiceSection";
import ArticleSection from "./components/ArticleSection/ArticleSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.container}>
      <NavBar />
      <Hero />
      <ServiceSection />
      <ArticleSection />
      <Footer />
    </div>
  );
}

export default App;
