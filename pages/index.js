import Head from "next/head";
import { useEffect, useState } from "react";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });


import AboutMe from "../Components/AboutMe/AboutMe";
import ProfileSummary from "../Components/ProfileSummary/ProfileSummary";
import WorkList from "../Components/WorkList/WorkList";

import styles from "../styles/Home.module.css";


export default function Home() {
  const [showRoom, setShowRoom] = useState("Profile");
  const [showWorkList, setshowWorkList] = useState(false);
  const [isChangeComponent, setChangeComponent] = useState(false);
  const [isShowRoomUpdating, setisShowRoomUpdating] = useState(false);

  const defaultStyles = {
    profileContainer: [styles.profile_container],
    aboutmeContainer: [styles.aboutme_container]
  };
  const alteringStyles = {
    profileContainerVanish: styles.profile_container_vanish,

  };

  let room;

  const hideAbout = () => {
    console.log( "HIDE ABOUT CONTAINER ");
    defaultStyles.aboutmeContainer.push(alteringStyles.profileContainerVanish);

  }

const hideProfile = () => {
  console.log("hide profile");
  defaultStyles.profileContainer.push(alteringStyles.profileContainerVanish);

}

if(isShowRoomUpdating) {
  switch (showRoom) {
    case "About":
    if(isChangeComponent === false) {
      hideProfile();
      room = <ProfileSummary defaultStyles={defaultStyles} />;
      setTimeout(() => {
        setChangeComponent((prev)=>prev = true);
      }, 700);
    } else {
      room = <AboutMe defaultStyles={defaultStyles}/>;
    }
      break;
    case "Profile":
      // room = <AboutMe/>;

      if(isChangeComponent === false) {
        hideAbout();
        room = <AboutMe defaultStyles={defaultStyles}/>;
        setTimeout(() => {
          setChangeComponent((prev)=>prev = true);
        }, 700);
      } else {
        room = <ProfileSummary defaultStyles={defaultStyles} />;
      }
      break;

    default:
      break;
  }
} else {
  switch (showRoom) {
    case "About":
      room = <AboutMe defaultStyles={defaultStyles}/>

      break;
    case "Profile":
      room = <ProfileSummary defaultStyles={defaultStyles} />;


      break;

    default:
      break;
  }
}

  const showAboutOrProfileHandler = () => {
    if(showRoom === "About") {

      setShowRoom((prevState) => (prevState = "Profile"));

    } else {

      setShowRoom((prevState) => (prevState = "About"));

    }
    setChangeComponent((prev)=>prev = false);

    setisShowRoomUpdating((prev)=>prev = true);

  };
  const showWorksHandler = () => {
    setshowWorkList((prevState) => (prevState = true));
  };
  const hideWorksHandler = () => {
    setshowWorkList((prevState) => (prevState = false));

  }

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
        <div className={styles.left_container}>{room}</div>
        <div className={styles.right_container}>
          <div className={styles.about_summary_header_container}>
            <h1 className={styles.about_summary_trigger} onMouseDown={() => showAboutOrProfileHandler()}>{showRoom === "Profile" ? 'About Me' : 'Summary'}</h1>
          </div>
          <div className={styles.work} onMouseEnter={() => showWorksHandler()} onMouseLeave={() => hideWorksHandler()}>
            {showWorkList ? <WorkList/> : <h1 className={styles.work_header_text_container}>Works</h1>}
          </div>
        </div>
      </main>
    </>
  );
}
