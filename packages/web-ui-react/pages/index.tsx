import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TicTacToeGame from "../components/TicTacToeBoard/TicTacToeGame";
import { PlayerMark} from "@tic-tac-toe/game-state";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tic Tac Toe | Edgardo Carreras</title>
        <meta name="description" content="A tic tac toe done with test driven development" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <TicTacToeGame aiPlayerMark={PlayerMark.X} mainPlayerMark={PlayerMark.O} />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/donedgardo/tic-tac-toe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check the code @donedgardo {' '}
          <span className={styles.logo}>
            <Image src="/github.svg" alt="Vercel Logo" width={25} height={25} />
          </span>
        </a>
      </footer>
    </div>
  )
}
