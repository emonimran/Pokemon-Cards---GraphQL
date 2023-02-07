import styles from "@/styles/Home.module.css";
import PokemonContainer from "../components/PokemonContainer";
import PokemonBlog from "../components/PokemonBlog";

export default function Home() {
  return (
    <>
      <main>
        <PokemonContainer />
        <PokemonBlog />
      </main>
    </>
  );
}
