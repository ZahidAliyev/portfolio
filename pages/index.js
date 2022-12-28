import Head from "next/head";
import { useEffect, useReducer, useState } from "react";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import AboutMe from "../Components/AboutMe/AboutMe";
import ProfileSummary from "../Components/ProfileSummary/ProfileSummary";
import WorkList from "../Components/WorkList/WorkList";

import styles from "../styles/Home.module.css";
import reducer, {
  initial_state,
  SHOWROOM_ACTIONS,
} from "../Reducer/showroomreducer";
import Work from "../Components/Work/Work";

export default function Home() {
  const [showRoom, dispatch] = useReducer(reducer, initial_state);

  const [showWorkList, setshowWorkList] = useState(false);

  const defaultStyles = {
    profileContainer: [styles.profile_container],
    aboutmeContainer: [styles.aboutme_container],
  };
  const alteringStyles = {
    profileContainerVanish: styles.profile_container_vanish,
  };

  let room;

  const hideAbout = () => {
    console.log("HIDE ABOUT CONTAINER ");
    defaultStyles.aboutmeContainer.push(alteringStyles.profileContainerVanish);
  };
  const hideProfile = () => {
    console.log("hide profile");
    defaultStyles.profileContainer.push(alteringStyles.profileContainerVanish);
  };
  const changeRoom = (
    hideComponentStylingCallback,
    WhichComponentIsNow,
    WhichComponentShouldBe
  ) => {
    if (showRoom.shouldContentChange === false) {
      hideComponentStylingCallback();
      room = <WhichComponentIsNow defaultStyles={defaultStyles} />;
      setTimeout(() => {
        dispatch({ type: SHOWROOM_ACTIONS.SHOWROOM_CONTENT_UPDATE });
      }, 700);
    } else {
      room = <WhichComponentShouldBe defaultStyles={defaultStyles} />;
    }
  };


  const showAboutOrProfileHandler = () => {
    if (showRoom.showRoom === "About") {
      dispatch({ type: SHOWROOM_ACTIONS.SHOWROOM_PROFILE });
    } else {
      dispatch({ type: SHOWROOM_ACTIONS.SHOWROOM_ABOUT });
    }
    dispatch({ type: SHOWROOM_ACTIONS.SHOWROOM_CONTENT_ISSAME });

    dispatch({ type: SHOWROOM_ACTIONS.SHOWROOM_UPDATES });
  };
  const showWorksHandler = () => {
    setshowWorkList((prevState) => (prevState = true));
  };
  const hideWorksHandler = () => {
    setshowWorkList((prevState) => (prevState = false));
  };
  // SHOW ROOM UPDATING LOGIC
  if (showRoom.roomUpdatingTriggered) {
    switch (showRoom.showRoom) {
      case "About":
        changeRoom(hideProfile, ProfileSummary, AboutMe);
        break;
      case "Profile":
        changeRoom(hideAbout, AboutMe, ProfileSummary);
        break;
        case "Work":
        room = <Work id={showRoom.workId}/>
        break;
      default:
        break;
    }
  } else {
    switch (showRoom.showRoom) {
      case "About":
        room = <AboutMe defaultStyles={defaultStyles} />;
        break;
      case "Profile":
        room = <ProfileSummary defaultStyles={defaultStyles} />;
        break;
      default:
        break;
    }
  }
  const handleClickOnWork = (e) => {
    console.log(e.target.id);
    dispatch({type: SHOWROOM_ACTIONS.SHOWROOM_WORK, payload: {id: e.target.id}})
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
            <h1
              className={styles.about_summary_trigger}
              onMouseDown={() => showAboutOrProfileHandler()}
            >
              {showRoom.showRoom === "Profile" ? "About Me" : "Summary"}
            </h1>
          </div>
          <div
            className={styles.work}
            onMouseEnter={() => showWorksHandler()}
            onMouseLeave={() => hideWorksHandler()}
          >
            {showWorkList ? (
              <WorkList handleClickOnWork={handleClickOnWork}/>
            ) : (
              <h1 className={styles.work_header_text_container}>Works</h1>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
