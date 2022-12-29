import React, { useState } from 'react'

export default function Work({id}) {
    const [projects, setProject] = useState([
        {
          id: 0,
          name: "Lsdesign",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["React", "Firebase", "CSS"],
          link: 'https://lsdesign.me'
        },
        {
          id: 1,
          name: "Geiquiz",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["Js", "NodeJs", "CSS"],
          link: 'https://geoquiz.study'
        },
        {
          id: 2,
          name: "Geiquiz Mobile",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["React Native", "react-native-paper(UI)"],
          link: 'https://lsdesign.me'
        },
        {
          id: 3,
          name: "Unity projects",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["C#", "Unity"],
          link: 'https://lsdesign.me'
        },
      ])
    console.log("🚀 ~ file: Work.js:35 ~ Work ~ projects", projects)
    let project = projects.filter((project)=>{ 
        return project.id === id
    })[0];
  return (
    <>
        <h2>{project.name}</h2>
        <div>Images</div>
        <p>{project.desctiption}</p>
        <ul>
        {project.stack.map((tech, index)=>{
            return (
                <li key={index}>{tech}</li>
            )
        })}
        </ul>
        <a href={project.link} target="_blank">project[0].link</a>
    </>
  )
}
