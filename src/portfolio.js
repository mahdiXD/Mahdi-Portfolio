/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "El Mahdi Darouich",
  title: "Hi, I'm Mahdi",
  subTitle: emoji(
    "Aspiring computer science graduate seeking a challenging position in a dynamic technology environment to leverage strong programming skills, research experience, and system administration knowledge. Aiming to contribute to innovative projects while continuously expanding expertise in the field."
  ),
  resumeLink:
    "./assets/Doc/CV.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/saadpasta/",
  gmail: "saadpasta70@gmail.com",
  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: false // Set true to display this section, defaults to false
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

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      desc: "GPA: 3.53",
      descBullets: [
        "Contributed to research on Enhancing IoT Data",
        "Gained hands-on experience in server infrastructure management and network configuration"
      ]
    },
    {
      schoolName: "National Charity School",
      logo: require("./assets/images/ncsLogo.png"), // You'll need to add this logo to your assets
      subHeader: "High School (Advanced Stream)",
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
      companylogo: require("./assets/images/huaweiLogoSQBG.png"), // You'll need to add this logo to your assets
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
      companylogo: require("./assets/images/majidAlFuttaimLogoSQBG.png"), // You'll need to add this logo to your assets
      date: "2021 – 2022",
      desc: "Provided customer service and ensured smooth operations in entertainment facilities",
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

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
          url: "./assets/Doc/RedHat_course_certificate.pdf"
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

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

// Contact Section
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Want to discuss a project or just say hi? My Inbox is open for all.",
  number: "+971-50-6940699",
  email_address: "MahdiDarouich@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
