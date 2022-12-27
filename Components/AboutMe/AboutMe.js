

const AboutMe = ({ defaultStyles }) => {
    return (
      <>
        <div className={defaultStyles.aboutmeContainer.join(" ")}>
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

  export default AboutMe;