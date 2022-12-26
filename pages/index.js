import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

import styles from "../styles/Home.module.css";
import zahidImg from "../public/zahid.jpg";

const AboutMe = () => {
  return (
    <>
      <div>
        <div>
          <h3>About Me</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          {/* <h4>Here are few texchologies i have bean working with recentky</h4>
            <ul>
              <li>NextJs</li>
              <li>React Native</li>
              <li> React</li>
              <li>Node js</li>
              <li>Unity & C#</li>
              <li>Redux</li>
            </ul> */}
        </div>
        <button>Resume</button>
      </div>
    </>
  );
};
const ProfileSummary = ({ defaultStyles }) => {
  return (
    <>
      <div className={defaultStyles.profileContainer.join(" ")}>
        <div className={styles.profile_container_image}>
          {" "}
          <Image
            as="image"
            src={zahidImg}
            quality={100}
            alt="Picture of the author"
            fill={true}
            sizes="(max-width: 768px) 100vw,
          (max-width: 1200px) 50vw,
          33vw"
            priority={true}
          ></Image>
        </div>
        <div className={styles.profile_container_summary}>
          <h4>Hi, i am</h4>
          <h1>Zahid Aliyev</h1>
          <h1>Web Developer</h1>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Vel
            risus commodo viverra maecenas. Amet nulla facilisi morbi tempus.
          </div>
        </div>
      </div>
    </>
  );
};
const WorkList = () => {
  return (
    <>
      <ul>
        <li>Work1</li>
        <li>Work1</li>
        <li>Work1</li>
      </ul>
    </>
  );
};

export default function Home() {
  const [showRoom, setShowRoom] = useState("Profile");
  const [showWorkList, setshowWorkList] = useState(false);
  const [isChangeComponent, setChangeComponent] = useState(false);
  const [isShowRoomUpdating, setisShowRoomUpdating] = useState(false);

  const defaultStyles = {
    profileContainer: [styles.profile_container],
  };
  const alteringStyles = {
    profileContainerVanish: styles.profile_container_vanish,
  };

  let room = <ProfileSummary defaultStyles={defaultStyles} />;
  const showAbout = () => {
  };
  const hideAbout = () => {

  }
  const showWorks = () => {
    return <WorkList/>
  };
const hideProfile = () => {
  console.log("hide profile");
  defaultStyles.profileContainer.push(alteringStyles.profileContainerVanish);

}
const showProfile = () => {
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
      room = <AboutMe/>;
    }
      break;
    case "Profile":
      // room = <AboutMe/>;

      if(isChangeComponent === false) {
        hideProfile();
        room = <AboutMe/>;
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
      room = <AboutMe/>

      break;
    case "Profile":
      room = <ProfileSummary defaultStyles={defaultStyles} />;


      break;

    default:
      break;
  }
}


  if (showWorkList) {
    showWorks();
  }

  const showAboutOrProfileHandler = () => {
    if(showRoom === "About") {
      setChangeComponent((prev)=>prev = false);

      setShowRoom((prevState) => (prevState = "Profile"));

    } else {
      setChangeComponent((prev)=>prev = false);

      setShowRoom((prevState) => (prevState = "About"));

    }
    setisShowRoomUpdating((prev)=>prev = true);

  };
  const showWorksHandler = () => {
    setshowWorkList((prevState) => (prevState = true));
  };
  const hideWorksHandler = () => {
    setshowWorkList((prevState) => (prevState = false));

  }
  useEffect(() => {
    console.log(showRoom);
    console.log(showWorkList);
  });
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
          <div className={styles.about}>
            <h1 onMouseDown={() => showAboutOrProfileHandler()}>{showRoom === "Profile" ? 'About Me' : 'Summary'}</h1>
          </div>
          <div className={styles.work} onMouseEnter={() => showWorksHandler()} onMouseLeave={()=>hideWorksHandler()}>
            {showWorkList ? <WorkList/> : <h1 >Works</h1>}
          </div>
        </div>
      </main>
    </>
  );
}
