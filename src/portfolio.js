// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section

const illustration = {
  animated: true
};

const greeting = {
  username: "El Mahdi Darouich",
  title: "Hi, I'm Mahdi",
  subTitle: emoji(
    "Aspiring computer science graduate seeking a challenging position in a dynamic technology environment to leverage strong programming skills, research experience, and system administration knowledge. Aiming to contribute to innovative projects while continuously expanding expertise in the field."
  ),
  resumeLink: "./assets/Doc/CV.pdf",
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/YourGitHubUsername",
  linkedin: "https://www.linkedin.com/in/YourLinkedInUsername/",
  gmail: "MahdiDarouich@gmail.com",
  // Add other social media links if available
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING FULL STACK DEVELOPER WITH A PASSION FOR TECHNOLOGY",
  skills: [
    emoji("⚡ Develop and maintain server infrastructure and network configurations"),
    emoji("⚡ Contribute to research projects in enhancing IoT data"),
    emoji("⚡ Build applications using various programming languages including C++, Java, and Python")
  ],

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Assembly",
      fontAwesomeClassname: "fas fa-microchip"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-linux"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Sharjah",
      logo: require("./assets/images/sharjahLogo.png"), // You'll need to add this logo to your assets
      subHeader: "Bachelor of Computer Science",
      duration: "2020 – Present (Final Semester)",
      desc: "GPA: 3.53 (as of Spring 2021)",
      descBullets: [
        "Contributed to research on Enhancing IoT Data",
        "Gained hands-on experience in server infrastructure management and network configuration"
      ]
    },
    {
      schoolName: "National Charity School",
      logo: require("./assets/images/ncsLogo.png"), // You'll need to add this logo to your assets
      subHeader: "High School Diploma (Advanced Stream)",
      duration: "2008 - 2020",
      desc: "Graduated with an average of 93.38%",
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Programming (C++, Java, Python, Assembly)",
      progressPercentage: "80%"
    },
    {
      Stack: "System Administration",
      progressPercentage: "75%"
    },
    {
      Stack: "Network Configuration",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Research Assistant",
      company: "University of Sharjah",
      companylogo: require("./assets/images/sharjahLogo.png"), // Reuse the university logo
      date: "2024",
      desc: "Contributed to a research paper on Enhancing IoT Data",
      descBullets: [
        "Assisted in data collection and analysis",
        "Collaborated with senior researchers on innovative IoT solutions"
      ]
    },
    {
      role: "Intern",
      company: "Huawei Technologies",
      companylogo: require("./assets/images/huaweiLogo.png"), // You'll need to add this logo to your assets
      date: "2023", // You may want to update this with more specific dates
      desc: "Gained practical experience in server infrastructure management and network troubleshooting",
      descBullets: [
        "Assisted in the management and maintenance of server infrastructure",
        "Gained hands-on experience with network configuration and troubleshooting"
      ]
    },
    {
      role: "Customer Happiness Agent",
      company: "CAFU",
      companylogo: require("./assets/images/cafuLogo.png"), // You'll need to add this logo to your assets
      date: "2023",
      desc: "Provided excellent customer service and support",
    },
    {
      role: "Admission Friend",
      company: "University of Sharjah",
      companylogo: require("./assets/images/sharjahLogo.png"), // Reuse the university logo
      date: "2021",
      desc: "Assisted prospective students with the admission process",
    },
    {
      role: "Crew Member",
      company: "Majid al Futtaim Entertainment",
      companylogo: require("./assets/images/majidAlFuttaimLogo.png"), // You'll need to add this logo to your assets
      date: "2021 – 2022",
      desc: "Provided customer service and ensured smooth operations in entertainment facilities",
    }
  ]
};

// Open Source Section
const openSource = {
  showGithubProfile: "true",
  display: true
};

// Achievement Section
const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Certifications and Cool Stuff that I have achieved!",

  achievementsCards: [
    {
      title: "Red Hat System Administration I (RH124)",
      subtitle: "Completed certification for Red Hat System Administration",
      image: require("./assets/images/redhatLogo.png"), // You'll need to add this logo to your assets
      imageAlt: "Red Hat Logo",
      footerLink: [
        {
          name: "Certification",
          url: "Your certification URL here"
        }
      ]
    },
    {
      title: "Certificate of Appreciation",
      subtitle: "Awarded by University of Sharjah for UOS Innovation Week 2024",
      image: require("./assets/images/sharjahLogo.png"), // Reuse the university logo
      imageAlt: "University of Sharjah Logo",
      footerLink: [
        {
          name: "Award",
          url: "Your award details URL here"
        }
      ]
    },
    // You can add more achievements here
  ],
  display: true
};

// Blogs Section, Big Projects, Talks Section, and Podcast Section
// These can be set to display: false if you don't have content for them yet

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? My Inbox is open for all.",
  number: "+971-50-6940699",
  email_address: "MahdiDarouich@gmail.com"
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable
};