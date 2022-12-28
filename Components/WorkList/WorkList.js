import { useEffect, useId, useState } from "react";
import styles from "./WorkList.module.css";


const WorkList = ({handleClickOnWork}) => {



    return (
      <>
        <ul className={styles.worklist} onMouseDown={(e)=>handleClickOnWork(e)}>

          <h4>Web</h4>
          <li id="0">Lsdesign</li>
          <li id="1">Geiquiz.study</li>
          <h4>Mobile</h4>
          <li id="2">Geoquiz</li>
          <h4>Hobby</h4>
          <li id="3">Gamedev Unity</li>
        </ul>
      </>
    );
};

  export default WorkList;