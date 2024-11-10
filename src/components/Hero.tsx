
import Image from 'next/image';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.textContainer}>
      <h1><b>Hi I am SaudAli Aka XYRON,</b></h1>
        <h1><strong><b>Welcome to My Portfolio</b></strong></h1>
        <p><strong>I'm a Full-Stack Developer, AI Enthusiast, and Athlete</strong></p>
        <div className={styles.buttonContainer}>
          <a href="/my-cv.pdf" download className={styles.button}>
            Download CV
          </a>
          <a href="https://www.linkedin.com/in/saud-muhammad-ali-6b4a222b6/" target="_blank" rel="noopener noreferrer" className={styles.button}>
            LinkedIn
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
       
        <Image 
          src="/img1.jpeg"  
          alt="My Profile" 
          className={styles.profileImage}
          width={400} 
          height={400}
        />
      </div>
    </section>
  );
};

export default Hero;
