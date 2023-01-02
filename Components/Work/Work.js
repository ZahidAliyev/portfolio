import Image from "next/image";
import React, { useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/splide/css/core';
import styles from "./Work.module.css"
export default function Work({ id }) {
  const [projects, setProject] = useState([
    {
      id: 0,
      name: "Lsdesign",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      stack: ["React", "Firebase", "CSS"],
      link: "https://lsdesign.me",
      images: [
        "/lsdesign.PNG",
        "/zahid.jpg",
        "/zahid.jpg",
      ],
    },
    {
      id: 1,
      name: "Geiquiz",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      stack: ["Js", "NodeJs", "CSS"],
      link: "https://geoquiz.study",
      images: [
        "/geoquiz.PNG",
        "/public/zahid.jpg",
        "/public/zahid.jpg",
      ],
    },
    {
      id: 2,
      name: "Geiquiz Mobile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      stack: ["React Native", "react-native-paper(UI)"],
      link: "https://lsdesign.me",
      images: [
        "/geoquizmobile.jpeg",
        "/public/zahid.jpg",
        "/public/zahid.jpg",
      ],
    },
    {
      id: 3,
      name: "Unity projects",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
      stack: ["C#", "Unity"],
      link: "https://lsdesign.me",
      images: [
        "/unity.PNG",
        "/public/zahid.jpg",
        "/public/zahid.jpg",
      ],
    },
  ]);
  let project = projects.filter((project) => {
    return project.id === id;
  })[0];
  return (
    <>
    <div className={styles.work_container}>

    <h2>{project.name}</h2>
      <div className={styles.image_container}>      <Image
      className={styles.work_image}
              as="image"
              src={project.images[0]}
              quality={100}
              alt="Picture of the author"
              fill={true}
              sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
              priority={true}
              objectFit={'contain'}
            ></Image>
            </div>

      <p className={styles.description}>{project.description}</p>
      <ul className={styles.stack_list}>
        {project.stack.map((tech, index) => {
          return <li key={index}>{tech}</li>;
        })}
      </ul>
      <a className={styles.visit_button} href={project.link} target="_blank">
        Visit
        
      </a>
    </div>

    </>
  );
}
