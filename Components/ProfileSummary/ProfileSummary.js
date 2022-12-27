import styles from "./ProfileSummary.module.css";
import zahidImg from "../../public/zahid.jpg"
import Image from "next/image";


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

  export default ProfileSummary;