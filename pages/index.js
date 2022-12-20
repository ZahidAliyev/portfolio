import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });
import zahidImg from "../public/zahid.jpg"
export default function Home() {

    const aboutHeader = <div  className={styles.about_header_text_container}><h2>About</h2></div>;
    const workHeader = <div  className={styles.work_header_text_container}><h2>Work</h2></div>;

  return (
    <>
      <Head>
        <title>Zahid</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <nav className={styles.navigation}>
        <ul className={styles.navigation_list}>
          <li>Blog</li>
          <li>Resume</li>
          <li>Work</li>
          <li>About</li>


        </ul>
      </nav>

      <main className={styles.main}>

        <div className={styles.left_container}>
          <div className={styles.profile_container}>
            <div className={styles.profile_container_image}>
              <Image src={zahidImg} quality={100} alt="Picture of the author" fill={true}>
              </Image>
            </div>
            <div className={styles.profile_container_summary}>
              <h4>Hi, i am</h4>
              <h1>Zahid Aliyev</h1>
              <h1>Web Developer</h1>
            <div>Lorem ipsum dolor sit amet, 
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
              labore et dolore magna aliqua. Vel risus commodo viverra maecenas. 
              Amet nulla facilisi morbi tempus.
            </div>
            </div>

          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.about}>

          </div>
          <div className={styles.work}></div>
        </div>
      </main>

    </>
  );
}
