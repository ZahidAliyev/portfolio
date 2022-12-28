import React, { useState } from 'react'

export default function Work({id}) {
    console.log(id)
    const [projects, setProject] = useState([
        {
          id: 0,
          name: "Lsdesign",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["React", "Firebase", "CSS"],
          link: 'lsdesign.me'
        },
        {
          id: 1,
          name: "Geiquiz",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["Js", "NodeJs", "CSS"],
          link: 'geoquiz.study'
        },
        {
          id: 2,
          name: "Geiquiz Mobile",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["React Native", "react-native-paper(UI)"],
          link: 'lsdesign.me'
        },
        {
          id: 3,
          name: "Unity projects",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quisnostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. " ,
          stack: ["C#", "Unity"],
          link: 'lsdesign.me'
        },
      ])
    let project = projects.filter((project)=>{ 
        return project.id == id // Analyze wge === is not working
    });
    console.log(project);
  return (
    <>
        <h2>{project[0].name}</h2>
        <div>Images</div>
        <p>{project[0].desctiption}</p>
        <ul>
        {project[0].stack.map((tech, index)=>{
            return (
                <li key={index}>{tech}</li>
            )
        })}
        </ul>
        <a href={project[0].link}>project[0].link</a>
    </>
  )
}
