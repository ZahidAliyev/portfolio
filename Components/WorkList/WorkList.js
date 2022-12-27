import styles from "./WorkList.module.css";


const WorkList = () => {
    return (
      <>
        <ul className={styles.worklist}>
          <h4>Web</h4>
          <li>Lsdesign</li>
          <li>Geiquiz.study</li>
          <h4>Mobile</h4>
          <li>Geoquiz</li>
          <h4>Hobby</h4>
          <li>Gamedev Unity</li>
        </ul>
      </>
    );
};

  export default WorkList;