'use client';
import Image from "next/image";
import styles from "./page.module.css";
import RotatingText from "@/RotatingText/RotatingText";
import Nav from "./components/nav";
import Particles from "@/RotatingText/Particles";
import GlareHover from "@/RotatingText/GlareHover";
import dynamic from "next/dynamic";

export default function Home() {
  const SmoothScroll = dynamic(() => import('./components/SmoothScrollWrapper'), {
  ssr: false,
});
  return (
    <div>
      <Particles
        particleColors={['#00C8FF', '#FF00C8', '#C800FF', '#C8FF00', '#00C8C8']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={300}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className={styles.particles}
      />
      <SmoothScroll />
      <div data-scroll-container>
        <Nav />
        <div className={styles.container}>
        <div id="home" className={styles.home}>
        <div className={styles.textContainer}>
          <p className={styles.hi}>Hi</p>
        
          <h1 className={styles.title}>I&#39;m <span className={styles.name}>Malvin</span> Pradhypta</h1>
            <RotatingText
              texts={["Next Engineer","Frontend Dev", "UI/UX Designer", "Tech Enthusiast"]}
              mainClassName={styles.rotateText}
              splitBy="words"
              splitLevelClassName={styles.splitLevel}
              elementLevelClassName={styles.elementLevel}/>
              
          <p className={styles.description}>
            I like creating simple projects with <br/><span className={styles.tebal}>complex systems</span>
          </p>
          <div className={styles.contact}>
            <a href="https://linktr.ee/kipin.kipon">Get In Touch</a>
          </div>
        </div>
          <Image
            src="/photo/Foto.png"
            width={378}
            height={402}
            alt="Picture of the author"
          />
        </div>
        <div id="about" className={styles.about}>
          <h2 className={styles.aboutTitle}>ABOUT ME</h2>
          <p className={styles.aboutDescription}>
            I&#39;m Malvin Pradhypta Eka Saputra a web developer and UI/UX designer with a strong passion for technology. I began coding in C# when I was in 5th grade and now specialize in building modern web applications using Next.js. Recently, I&#39;ve also started learning Solidity to explore the world of Web 3.0 development. With an educational background from SD Negeri Bhayangkara, SMP Negeri 12 Yogyakarta, and SMK Negeri 2 Yogyakarta, I continuously strive to combine clean code with intuitive, user-friendly design. For me, great digital experiences are built at the intersection of logic and creativity
          </p>
        </div>
        <div id="skills" className={styles.skills}>
          <h2 className={styles.skillsTitle}>SKILLS</h2>
          <p className={styles.category}>Programming Languages</p>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/html.png" width={33} height={38} alt="HTML" />
                <p>HTML</p>
              </GlareHover>
              
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/css.png" width={33} height={38} alt="CSS" />
                <p>CSS</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/js.png" width={38} height={38} alt="JavaScript" />
                <p>JavaScript</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
            <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/CS.png" width={60} height={60} alt="CSharp" />
                <p>CSharp</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Golang.png" width={76} height={38} alt="Golang" />
                <p>Golang</p>
              </GlareHover>
            </div>
          </div>
          <p className={styles.category}>Technology</p>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Node.png" width={38} height={38} alt="Node" />
                <p>NodeJs</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/React.png" width={38} height={38} alt="React" />
                <p>ReactJs</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Tailwind.png" width={63} height={38} alt="Tailwind" />
                <p>Tailwind</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Next.png" width={38} height={38} alt="Next" />
                <p>NextJs</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Nuxt.png" width={38} height={38} alt="Nuxt" />
                <p>NuxtJs</p>
              </GlareHover>
            </div>
          </div>
          <p className={styles.category}>Design</p>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Figma.png" width={38} height={38} alt="Node" />
                <p>Figma</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Photoshop.png" width={38} height={38} alt="React" />
                <p>PhotoShop</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Canva.png" width={38} height={38} alt="Tailwind" />
                <p>Canva</p>
              </GlareHover>
            </div>
          </div>
          <p className={styles.category}>3D</p>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Blender.png" width={38} height={38} alt="Node" />
                <p>Blender</p>
              </GlareHover>
            </div>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Unity.png" width={38} height={38} alt="React" />
                <p>Unity</p>
              </GlareHover>
            </div>
          </div>
          <p className={styles.category}>DataBase</p>
          <div className={styles.skillsList}>
            <div className={styles.skillItem}>
              <GlareHover
                width="100%"
                height="100%"
                glareOpacity={0.5}
                glareAngle={-45}
                transitionDuration={650}
                playOnce={true}
                className={styles.glare}
              >
                <Image src="/skills/Mongo.png" width={38} height={38} alt="Node" />
                <p>MongoDB</p>
              </GlareHover>
            </div>
          </div>
        </div>
        <div id="projects" className={styles.projects}>
          <h2 className={styles.projectsTitle}>PROJECTS</h2>
          <div className={styles.projectList}>
            <div className={styles.projectItem}>
              <Image src="/photo/Group33.png" width={300} height={200} alt="Project 1" />
              <div className={styles.projectDescription}>
                <h3>3D Photo</h3>
                <p>I just opened a 3D car photography service for fun and it turned out that many people ordered it.</p>
              </div>
            </div>
            <div className={styles.projectItem}>
              <Image src="/photo/Group36.png" width={300} height={200} alt="Project 2" />
              <div className={styles.projectDescription}>
                <h3>Frontend</h3>
                <p>I helped Satria Mika Nahendra create his AI web landing page</p>
                <a href="https://brainraid.netlify.app/">https://brainraid.netlify.app</a>
              </div>
            </div>
            <div className={styles.projectItem}>
              <Image src="/photo/Project3.png" width={250} height={250} alt="Project 3" />
              <div className={styles.projectDescription}>
                <h3>UI/UX</h3>
                <p>I am a ui/ux designer in yhoiki team</p>
                <a href="https://yhoiki.site">https://yhoiki.site</a>
              </div>
            </div>
          </div>

        </div>
      </div>
      </div>
      
    </div>
    
  );
}
