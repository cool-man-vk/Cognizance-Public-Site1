import React from "react";
import Card from "./Card.js";
import "./Team.css";
import img1 from "../Images/DisplayPics/1.jpg";
import img2 from "../Images/DisplayPics/2.jpg";
import img4 from "../Images/DisplayPics/4.jpg";
import img5 from "../Images/DisplayPics/5.JPG";
import img6 from "../Images/DisplayPics/6.jpg";
import img7 from "../Images/DisplayPics/7.jpg";
import img8 from "../Images/DisplayPics/8.jpg";
import img9 from "../Images/DisplayPics/9.jpg";
import img10 from "../Images/DisplayPics/10.jpg";
import img11 from "../Images/DisplayPics/11.jpg";
import img12 from "../Images/DisplayPics/12.jpg";
import img13 from "../Images/DisplayPics/13.jpg";
import img14 from "../Images/DisplayPics/14.jpg";
import img15 from "../Images/DisplayPics/15.jpg";
import img16 from "../Images/DisplayPics/16.jpg";
import img17 from "../Images/DisplayPics/17.jpg";
import img18 from "../Images/DisplayPics/18.jpg";
import img19 from "../Images/DisplayPics/19.jpg";
import img20 from "../Images/DisplayPics/20.jpg";
import img21 from "../Images/DisplayPics/21.jpg";
import img22 from "../Images/DisplayPics/22.jpg";
import img23 from "../Images/DisplayPics/23.jpg";
import img24 from "../Images/DisplayPics/24.jpg";
import img25 from "../Images/DisplayPics/25.jpg";
import img26 from "../Images/DisplayPics/26.jpg";
import img27 from "../Images/DisplayPics/27.jpg";
import img28 from "../Images/DisplayPics/28.jpg";
import img29 from "../Images/DisplayPics/29.jpg";
import img30 from "../Images/DisplayPics/30.jpg";
import img31 from "../Images/DisplayPics/31.jpg";
import img33 from "../Images/DisplayPics/33.jpg";
import img34 from "../Images/DisplayPics/34.jpeg";
import img35 from "../Images/DisplayPics/35.jpg";
import img36 from "../Images/DisplayPics/36.jpg";
import img37 from "../Images/DisplayPics/37.jpg";
import img38 from "../Images/DisplayPics/38.jpg";
import img39 from "../Images/DisplayPics/39.jpg";
import img40 from "../Images/DisplayPics/40.jpg";
import img41 from "../Images/DisplayPics/41.jpg";
import img42 from "../Images/DisplayPics/42.jpg";
import img43 from "../Images/DisplayPics/43.png";
import img44 from "../Images/DisplayPics/44.jpg";
import img45 from "../Images/DisplayPics/45.jpg";
import img46 from '../Images/DisplayPics/46.jpg';
import img47 from '../Images/DisplayPics/47.jpg';
import img48 from '../Images/DisplayPics/48.jpg';
import img49 from '../Images/DisplayPics/49.jpg';
import img50 from '../Images/DisplayPics/50.jpg';
import Navbar from './../navbar/Navbar';
import Footer from "../Footer/Footer";
const Team = () => {

  // Team Members Data list

  let content = [
    {
      id: 1,
      src: img1,
      name: "Dr. A G Sreedevi",
      post: " Club Advisor ",
      // dom: "",
      desc: "Dr. Sreedevi A. G. currently serves as Program Head of Cyber Security in the Department of Computer Science and Engineering, Amrita School of Computing, Amrita Vishwa Vidyapeetham, Chennai Campus.",
      mail: "",
      gitHub: "",
      linkIn: "",
      insta: "",
    },
    {
      id: 2,
      src: img2,
      name: "Dr. S Veeramani",
      post: "Advisor",
      dom: "Open Source Domain",
      desc: "Dr. Veeramani S. currently serves as Assistant Professor (Sr. Gr.) at the Department of Computer Science and Engineering, School of Computing, Amrita Vishwa Vidyapeetham, Chennai Campus. \n",
      mail: "mailto:s_veeramani@ch.amrita.edu",
      // gitHub: "",
      linkIn: "https://www.linkedin.com/in/dr-veeramani-sonai-77813028/",
      // insta: "",
    },
    {
      id: 17,
      src: img15,
      name: "Rohith ND",
      post: "President",
      // dom: "Artificial Intelligence Domain",
      desc: "I have been the AI domain coordinator for almost 2 years, and I am passionate about deep learning, Devops, and full stack development. I quite often write blogs on Hashnode and Dev Community. I have participate in many hackthons for the past 2 years. Having a vision of changing the future motivates and inspires me to do more in the coming days.",
      mail: "mailto:ndrohith09@gmail.com",
      gitHub: "https://github.com/ndrohith09",
      linkIn: "https://www.linkedin.com/in/rohith-nd/",
      insta: "https://www.instagram.com/rohithnd_09_09/",
    },
    {
      id: 16,
      src: img19,
      name: "Mukesh K",
      post: "Vice-President",
     // dom: "Open Source Domain",
      desc: "One of the coordinators in Open-Source domain. My area of expertise includes machine learning and back-end development. I have worked with libraries and frameworks like TensorFlow, PyTorch, Flask, and Django. Currently working on computer vison and NLP based projects.",
      mail: "mailto:mukeshkvmj@gmail.com",
      gitHub: "https://github.com/mukesh663",
      linkIn: "https://www.linkedin.com/in/mukesh-k-4a4a0b1ba/",
      insta: "https://www.instagram.com/mukesh_k.13/",
    },
    {
      id: 30,
      src: img18,
      name: "Sudiptha A",
      post: "Co-ordinator",
      dom: "Open Source Domain",
      desc: "Hello!  I have been part of the Open Source domain of Cognizance for more than a year now.  Completing the tasks on various topics outside of the curriculum helps me upskill myself. Being a mentor gives me the pleasure of guiding my fellow club members. ",
      mail: "mailto:sudipthawilma@gmail.com",
      gitHub: "https://github.com/sudipthaa",
      linkIn: "https://www.linkedin.com/in/sudiptha-athmaraman-060135202",
      insta: "https://www.instagram.com/sudiptha_reddy",
    },
    {
      id: 17,
      src: img22,
      name: "Abhinandhan S",
      post: "Co-ordinator",
      dom: "Open Source Domain",
      desc: "An experienced peer advisor with a demonstrated history of working in the higher education field. Skilled in Full Stack Development, Animation, 3D Design, Analytical Skills, User Experience (UX), User Interface Design, Strategy, and Graphic Design. A Mentor In Open Source Domain. Have Participated in various Open Source Events and Hackathons. Also Have Interest and Experience In Web Exploitation and Secure Coding. ",
      mail: "mailto:abhi.varadan@gmail.com",
      gitHub: "https://github.com/STRIZERORTIX",
      linkIn: "https://www.linkedin.com/in/strizerortix/",
      insta: "https://www.instagram.com/strizer_ortix/",
    },
    {
      id: 100,
      src: img37,
      name:" Skandha VS",
      post: 'Co-ordinator',
      dom: 'Open Source Domain',
      desc : 'I am one of the junior coordinators of the Open Source Domain. I have been a member of Cognizance in both the AI and OS domains before becoming a coordiantor. My interests include Web Development and Machine Learning.',
      mail: " ",
      gitHub: '',
      linkIn: '',
      insta: '',
    },
    {
      id:99,
      src:img38,
      name:"Umme Roman",
      post:"Co-ordinator",
      dom:"Open Source Domain",
      desc: "Hi! I am Umme. I have been a part of the cyber security domain for a year and the open source domain for 3 months. My experience as a mentor in the open source domain has developed my organisational skills and has increased my curiousity in the evergrowing field of web development. My other domains of interest include web security and data analysis.",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id:98,
      src:img39,
      name:"Dhruv Millu.T",
      post:"Mentor",
      dom:"Open Source Domain",
      desc: "I am Dhruv Millu of CSE-3rd Year. I am a mentor for the Open source domain in Cognizance. My area of interest includes Web Development, App Development, Designing, Data Structures, Competitive Coding and Machine Learning. My duties as a mentor includes giving tasks to members in the domain, maintain a good relation with the members and to help them with their doubts.",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id: 32,
      src: img34,
      name: "priyanka saraf",
      post: "Mentor",
      dom: "Open Source Domain",
      desc: "I am Priyanka Saraf from CSE, who is always excited to work and learn new things. I am into Open source Domain. This domain match my interest and helps me to explore new things and learn exciting things. I enjoy the participation into open mic session which is organized in cognizance  as it helps me to grab technical and non technical aspects of world. Before joining to the club, I was knowing not much about technology and programming but this club provided me the platform to learn and explore so many things in tech.a",
      mail: "mailto:sarafpriyanka73737@gmail.com",
      gitHub: "https://github.com/Priyanka7777777",
      linkIn: "http://www.linkedin.com/in/priyanka-saraf-10116a235",
      insta: "https://www.instragram.com/priyanka.saraf.7583",
    },
    {
      id: 29,
      src: img31,
      name: "Vignesh Kumar R",
      post: "Mentor",
      dom: "Open Source Domain",
      desc: "I am Vignesh kumar from Cseb 2nd year(completed) and I am in the opensource domain ,since April 2021 . It's been a wonderful journey in this club . Now I am the mentor of Opensource club from the May month . I'm more interested in opensource contributions,developing mobile and also web apps.",
      mail: "mailto:rrvigneshkumar2002@gmail.com",
      gitHub: "https://github.com/cool-man-vk",
      linkIn: "https://www.linkedin.com/in/vignesh-kumar-8101581b0/",
      insta: "https://www.instagram.com/cool_man_vk/",
    },
    {
      id: 90,
      src: img40,
      name: "Manasa",
      post: "Mentor",
      dom: "Open Source Domain",
      desc: "I have been a member of the cognizance club for about a year now. I am a curious person and I like experimenting with stuff apart from the curriculum. I have a little exposure to libraries and frameworks. This club has kindled my interest in various areas in my domain and being a mentor impels me to learn more.",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",      
    },
    {
      id: 26,
      src: img29,
      name: "Rishabh Rajput",
      post: "Mentor",
      dom: "Open Source Domain",
      desc: "I am a mentor for the Open Source Domain. My areas of expertise include Machine Learning and Backend Development (Python). Our goal at Open Source Domain is to improve our Web and App Development skills. Please contact me if you require any assistance with this.",
      mail: "mailto:rajputrishabh608@gmail.com",
      gitHub: "https://github.com/rishabh1402",
      linkIn: "https://www.linkedin.com/in/rishabh-rajput-714a31208/",
      insta: "https://www.instagram.com/rishabh_rajput_02",
    },
    {
      id: 24,
      src: img33,
      name: "Yurekan R V",
      post: "Co-ordinator",
      dom: "Artificial Intelligence Domain",
      desc: "I'm member of cognizance club since 2020 and mentor of AI domain. My area of interests are Data Science, Deep Learning and Cloud Computing. I have created tasks based on ML, which helps students to have a basic understanding of ML. I've also given open mic session on topic \"Robotic Process Automation\".  ",
      mail: "mailto:yurekanramasamy@gmail.com",
      gitHub: "https://github.com/yurekan",
      linkIn: "https://www.linkedin.com/in/yurekan-ramasamy-b30397220/",
      insta: "https://www.instagram.com/yukes_21/",
    },
    {
      id:85,
      src:img41,
      name:"Sahana",
      post:"Co-ordinator",
      dom:"Artificial Intelligence Domain",
      desc:"I am one of the coordinators of AI domain. My areas of interest include blockchain, quantum computing and AI.I am also working on solidity and smart contracts.I have recently worked on a project with quantum noise models using qiskit which is about finding the best test accuracy using one or more QML algorithms under the effect of noise.",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:""
    },
    {
      id:84,
      src:img42,
      name: "Jayaprakash",
      post:"Co-ordinator",
      dom:"Artificial Intelligence Domain",
      desc:"Artificial intelligence Enthusiast and one of the coordinators in AI domain. I'm passionate about incorporating Artificial Intelligence into software applications and I have worked on several end to enda Machine Learning and Deep Learning powerd  Applications in sub domains such as NLP, Computer Vision and Reinforcement Learning. I'm actively contributing to open source projects and learning full stack development.",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id: 32,
      src: img36,
      name: "Viswanathan V",
      post: "Co-ordinator",
      dom: "Artificial Intelligence Domain",
      desc: "Hi, I'm Viswanathan, Coordinator and mentor of the Artificial Intelligence domain in Cognizance. I'm studying Btech Computer Science (Artificial Intelligence specialization). I'm a very fun and curious person and I like to explore the field of computer science far and wide ! I'm passionate about ML, automations, NLP and game development.",
      mail: "mailto:strawberryshakelite@gmail.com",
      gitHub: "https://github.com/LiteShake",
      linkIn: "https://www.linkedin.com/in/viswanathan-v-880427222/",
      insta: "https://www.instagram.com/liteshake",
    },
    {
      id: 87,
      src:img43,
      name:"Aniket Gupta",
      post:"Mentor",
      dom:"Artificial Intelligence Domain",
      desc:"I am a mentor for the Artificial intelligence domain in Cognizance. My area of interest includes Machine Learning, Web Development, Designing, Data Structures and Competitive Coding. My duties as a mentor includes giving tasks to members in the domain, maintain a good relation with the members and to help them with their doubts.",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id: 88,
      src:img44,
      name:"Geethika",
      post:"Mentor",
      dom:"Artificial Intelligence Domain",
      desc:"I am Geethika of AIE 2nd year .I am interested in projects related to ML and deep learning, web development etc. My technical skills include C, JAVA, PYTHON and front end development. I have recently participated in some of the hackathons like smart digital hackathon",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id: 23,
      src: img21,
      name: "Shandiladitya Ma",
      post: "Mentor",
      dom: "Artificial Intelligence Domain",
      desc: "I have been a member of the cognizance club since 2020 and have gained a lot of experience and a great deal of knowledge through various tasks and events. Currently I am one of the coordinators of Artificial Intelligence domain of the club since August 2022. I have helped my peers with their doubts and helped in framing tasks for the members and the newcomers of the club and helped them with the basics of the domain of AI and Data Science.",
      mail: "mailto:shandilyathithyaa@gmail.com",
      gitHub: "https://github.com/Shandilyathithyaa",
      linkIn: "https://www.linkedin.com/in/shandilyathithyaa-manivannan-a760401bb/",
      insta: "https://www.instagram.com/_shandilyathithyaa_/",
    },
    {
      id: 91,
      src:img45,
      name:"Sruthik Reddy",
      post:"Mentor",
      dom:"Artificial Intelligence Domain",
      desc:"Hello I'm Sruthik Reddy from aie 2nd year.I'm so passionate about  coding and other technical stuff and have got them improved a lot  through cognizance club",
      mail:"",
      gitHub:"",
      linkIn:"",
      insta:"",
    },
    {
      id: 20,
      src: img20,
      name: "Aparna J",
      post: "Co-ordinator",
      dom: "Artificial Intelligence Domain",
      desc: "I have been a member of Cognizance since 2020. I am currently a coordinator of AI domain of the club. My area of interests includes Data Science and Machine Learning. I've published tasks in ML for the members to understand and learn the basics. I have also had the privilege to give an open mic session on \"Robotic Process Automation\". The club has played a predominant role in inculcating peer learning and leadership skills.",
      mail: "mailto:aparnajay02@gmail.com ",
      gitHub: "https://github.com/aparna8902",
      linkIn: "https://www.linkedin.com/in/aparna-jayathirth-4b45261b4/",
      insta: "https://www.instagram.com/aparna_jayathirth/",
    },
    {
      id: 21,
      src: img28,
      name: "Rakshana C",
      post: "Mentor",
      dom: "Artificial Intelligence Domain",
      desc: "I am Rakshana and I am a member and mentor in the AI domain. Our AI domain provides many informative resources , Technical hackathon which will help you to gain some experience and knowledge on the technical side.We will engage our club members by giving tasks so that they can be familiar with self learning. Our club also provides resources for technical topics which you ask for.Our co-ordinators and mentors are always there for you to clear your doubts and, if there are any issues, we are ready to solve them. I hope you will have a great time learning with us",
      mail: "mailto:rakshanagiri@gmail.com",
      gitHub: "https://github.com/Rakshana2002",
      // linkIn: "",
      insta: "https://www.instagram.com/rakshana_giri",
    },
    {
      id: 31,
      src: img24,
      name: "Aniket Mishra",
      post: "Co-ordinator",
      dom: "CP Domain",
      desc: "Heya! As a member of the CSE - Cyber Security department and a mentor in the Open Source Domain, I work in the areas of Web Development, Competitive Programming and Machine Learning. I have participated in many hackathons including the prestigious HackMIT and Hack The North and am currently working as a junior researcher in power systems for IIT’Delhi. I am open to exchanging knowledge and seeking challenges that would eventually make me better.",
      mail: "mailto:mishraaniket522@gmail.com",
      gitHub: "https://github.com/AnIkeT126",
      linkIn: "https://www.linkedin.com/in/aniket-mishra-125ab421b",
      insta: "https://www.instagram.com/_mishra_aniket/",
    },
    {
      id:100,
      src:img46,
      name:'Kavi Kumar',
      post:'Co-ordinator',
      dom:'CP Domain',
      desc:'Hey there, I am Kavikumar 2nd year CSE. I am a full stack developer, also coordinator of cp domain. I am also a ML Enthusiast and a open source contributor. I am currently building community to help and contribute to the society and world wide.',
      mail:'mailto:kavikumarceo@gmail.com',
      gitHub:'https://github.com/thekavikumar',
      linkIn:'https://www.linkedin.com/in/thekavikumar/',
      insta:'https://www.instagram.com/mr.cyber_ninja/'
      
    },
    {
      id:101,
      src:img48,
      name:'Jaswanth Sai',
      post:'Co-ordinator',
      dom:'CP Domain',
      desc:'I oversee Cognizance\'s competitive programming domain as the senior coordinator. My primary responsibility is to plan and coordinate events for the cp domain. organizing coding contests, seminars, and practical sessions on the necessary programming concepts. My passion in programming, along with my decent level of understanding in languages like Python and C++, is what led me to this field. Web design and development , machine learning are a couple of my other interests.',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id: 32,
      src: img26,
      name: "Paritosh Joshi",
      post: "Mentor",
      dom: "CP Domain",
      desc: "I'm a constant-fast-paced learner who believes in teamwork and keen to work in team. My current domain of work is Open Source.",
      mail: "mailto:paritoshj2001@gmail.com",
      gitHub: "https://github.com/Paritosh-J",
      linkIn: "https://www.linkedin.com/in/paritosh-j",
      insta: "https://www.instagram.com/paritoshj_/",
    },
    {
      id:107,
      src:img47,
      name:'Sona',
      post:'Mentor',
      dom:'CP domain',
      desc:'Hello, I am Sona from AIE 2nd year. I am a junior mentor for the CP (Competitive program) domain of the Cognizance club. My role in this domain is to mentor the juniors joining the club. I guide them on how the domain works. I also prepare questions for the weekly tasks.',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:108,
      src:'',
      name:'Abhiram.J',
      post:'Mentor',
      dom:'CP domain',
      desc:'Hello! I am Abhiram, One of the mentors in Competitive Programming Domain. My area of intrests includes machine learning and dsa battle. I have experience in Competitive Programming and also worked as mentor at codechef. I am currently working on deep learning models and improving my programming skills.',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:109,
      src:img49,
      name:'Priyanshu Agarwal',
      post:'Mentor',
      dom:'CP domain',
      desc:'I am a Mentor in the Competitive Programming domain in Cognizance. I am interested in Competitions of all kinds and have participated in many of them in my time here. I am a keen learner and explorer, very interested to get to know about new things. As a mentor, I would love to help you to my best of capabilities regarding any problems you approach me with, while any friendly conversations are also welcome.',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },
    {
      id:110,
      src:img50,
      name:'Tarun R.G',
      post:'Mentor',
      dom:'CP domain',
      desc:'Hey y\'all I\'m Tarun from CSE department. Im the jr mentor for competitive programming. I\'m a Devops and AI enthusiast. I love to learn new things and to read.',
      mail:'',
      gitHub:'',
      linkIn:'',
      insta:''
    },




    {
      id: 4,
      src: img4,
      name: "Sanjay T",
      dom: "President",
      post: "Alumni ",
      desc: "Mitacs '22 Globalink Research Intern | Deep Learning Enthusiast | App Developer | AWS Graviton Winner | CalHacks '21 Winner | Toycathon Evaluator | President - Cognizance Club, Amrita School of Engineering, Chennai",
      mail: "sanjaythiyagarajan2002@gmail.com",
      gitHub: "https://github.com/sanjay-thiyagarajan",
      linkIn: "https://linkedin.com/in/sanjay-t2002",
      insta: "https://instagram.com/sj_codez",
    },
    {
      id: 5,
      src: img5,
      name: "V M Pranavan",
      post: "Alumni",
      dom: "Open Source Domain",
      desc: "One of the co-ordinators of Open Source domain. Organizing and coordinating guest lectures, workshops, and hands-on sessions on cutting-edge Open Source technologies. Freshmen are given training in various competitions such as Hackathons and other Open Source competitions. Cross-platform development is something that has attracted me to Open Source.",
      mail: "mailto:pranavanmuraligai@gmail.com",
      gitHub: "https://github.com/Techipeeyon",
      linkIn: "https://www.linkedin.com/in/vadivelu-murali-pranavan-1b82551b3/",
      insta: "",
    },
    {
      id: 6,
      src: img6,
      name: "Naresh Kumar B",
      post: "Alumni",
      dom: "Artificial Intelligence Domain",
      desc: "I am Naresh Kumar, Co-ordinator of Artificial Domain in Cognizance. With the help of my mentors and coordinators, we were able to organize ML challenges, domain specific tasks, open-mic sessions. ",
      mail: "mailto:nk2indian@gmail.com",
      gitHub: "https://github.com/TechieNK",
      linkIn: "https://www.linkedin.com/in/naresh-kumar-1082b31ba/",
      insta: "",
    },
    {
      id: 7,
      src: img9,
      name: "Sanjai Siddharthan M",
      post: "Alumni",
      dom: "Cybersecurity Domain",
      desc: "I am Sanjai Siddharthan, i have been in part of the Cognizance club as Co-ordinator in the domain of CyberSecurity.  My team and I took significant strides to instil knowledge and abilities by organizing various guest lectures, open-mic, domain specific tasks, competitions, workshops for the members of the club.",
      mail: "mailto:sanjaisiddharth2002@gmail.com",
      gitHub: "https://github.com/SSpirate",
      linkIn: "https://www.linkedin.com/in/sanjai-siddharthan-m-8126091b3/",
      insta: "https://www.instagram.com/sanjai_siddharth/",
    },
    {
      id: 8,
      src: img10,
      name: "Xavier Emmanuel E",
      post: "Alumni",
      dom: "Artificial Intelligence Domain",
      desc: "I was the CO-ORDINATOR of AI Domain. I have been part of this club since 2020. I had mentored many students regarding this domain and created tasks which helps students to outshine in the field. Conducted ML challenges in various club activities. Gave an Open Mic Session on the topic 'What it takes to become Data Scientists'.",
      mail: "mailto:xavier12emmanuel@gmail.com",
      gitHub: "https://github.com/Xavier-Alfred",
      linkIn: "https://www.linkedin.com/in/xavier-emmanuel-287280201/",
      insta: "",
    },
    {
      id: 9,
      src: img7,
      name: "Jayanth Vikash S",
      post: "Alumni",
      dom: "Artificial Intelligence Domain",
      desc: "I am one of the mentors of the AI Domain, and I'm interested in Computer Vision, Pattern Recognition.",
      mail: "mailto:jayanth082001@gmail.com",
      gitHub: "https://github.com/JayanthVikashS",
      linkIn: "https://www.linkedin.com/in/jayanth-vikash-s-2363221a8/",
      insta: "",
    },
    {
      id: 10,
      src: img13,
      name: "Vishal Perumal",
      post: "Alumni",
      dom: "Artificial Intelligence Domain",
      desc: "I am one of the mentors of the AI Domain, and I'm interested in Machine Learning",
      mail: "mailto:vishal.pv22112@gmail.com",
      gitHub: "https://github.com/VishalPeruma1",
      linkIn: "https://www.linkedin.com/in/vishal-perumal/",
      insta: "https://www.instagram.com/vishal_22112/",
    },
    {
      id: 11,
      src: img12,
      name: "Aravind S",
      post: "Alumni",
      dom: "Open Source Domain",
      desc: "One of the mentors of Open Source Domain and have been in the club since its start. A lively person with interest in web development and Data Science. Have worked in many front end web developments and some back end works too. Learning more about data science and have done some projects in Machine Learning to broaden the horizons. I have also given an open mic talk on \"Importance of Visualization in Data Science\"",
      mail: "mailto:sivasubramanianaravin@gmail.com",
      gitHub: "https://github.com/Aarvi001",
      linkIn: "https://www.linkedin.com/in/aravind-s-648ab0222/",
      insta: "https://www.instagram.com/aravind_the_kind/",
    },
    {
      id: 12,
      src: img11,
      name: "Abhishek M K",
      post: "Alumni",
      dom: "Cybersecurity Domain",
      desc: "I've been part of cognizance since the discussion of the club had started. This club is close to my heart as I started with the basics of LINUX and now I'm actually into the domain of OSINT, Digital Forensics and Ethical Hacking. And I would like to contribute more to the CYS domain.",
      mail: "mailto:abishekkodi@gmail.com",
      gitHub: "https://github.com/ak-oz007",
      linkIn: "https://www.linkedin.com/in/abishek-m-k-a083861b1",
      insta: "https://www.instagram.com/frankenstein_of_all_time_v2/",
    },
    {
      id: 13,
      src: img8,
      name: "A.S.L Manasa",
      post: "Alumni",
      dom: "Artificial Intelligence Domain",
      desc: "My area of interest is front-end Development and Machine Learning. " +
          "I like to explore things. I am passionate about designing, " +
          "developing, and implementing software programs for " +
          "organizational effectiveness. I seek challenging " +
          "opportunities to enhance my programming and coding " +
          "skills in emerging technologies.  I am someone with " +
          "patience and superior communication skills.",
      mail: "mailto:aslmanasa3@gmail.com",
      gitHub: "https://github.com/ASLManasa",
      linkIn: "https://www.linkedin.com/in/a-s-l-manasa-ba8b371bb/",
      insta: "",
    },
    {
      id: 14,
      src: img14,
      name: "Rohith Kumar Sah",
      post: "Alumni",
      dom: "Open Source Domain",
      desc: "I am a computer enthusiast that focuses on front end design , UI/UX design , and data science, but I have been expanding my knowledge to include backend architecture.",
      mail: "mailto:sahrohit9586@gmail.com",
      gitHub: "https://github.com/sahrohit",
      linkIn: "https://www.linkedin.com/in/sahrohit/",
      insta: "https://www.instagram.com/sah_rohite/",
    },
    
    {
      id: 15,
      src: img16,
      name: "Tejendra Saradhi",
      post: "Co-ordinator",
      dom: "Cybersecurity Domain",
      desc: "I am Cybersecurity Coordinator. " +
          "I have been actively helping my peers " +
          "to gain knowledge in various domains in Cybersecurity. " +
          "I'm ranked Elite in Hack The Box and also Hack The " +
          "Box discord server moderator. I take part in CTFs often, " +
          "and part of team Cyber0ids formerly ParallelFlags. I work in " +
          "various cybersecurity fields - Web Exploitation, " +
          "Digital Forensics (Memory Forensics), " +
          "Penetration Testing (Black Box, Cloud - Azure, Active Directory). ",
      mail: "",
      gitHub: "https://github.com/tejas15802",
      linkIn: "https://www.linkedin.com/in/tejendra-saradhi/",
      insta: "https://www.instagram.com/y_tejas_y/",
    },
    
    {
      id: 18,
      src: img17,
      name: "Dhanvinesh K",
      post: "Co-ordinator",
      dom: "Cybersecurity Domain",
      desc: "I am Dhanvinesh pursuing BTech Computer Science with Cybersecurity " +
          "specialization (3rd year). I am one of the Co-ordinators of CYS domain " +
          "and also a member of Opensource. I have experience in UI design and " +
          "I am a backend developer. I've experience in working with frameworks " +
          "like Django, Vue, Flask, Firebase and some more frameworks which " +
          "helped me participating in some hackathons and related workshops. " +
          "I have been participating in a lot of CTFs and related conferences " +
          "for the past two years. I've experience in Web exploitation, " +
          "Forensics, Networking, OSINT and some Cryptography and " +
          "Penetration testing.",
      mail: "mailto:dhanvineshk2003@gmail.com",
      gitHub: "https://github.com/Reaper-Dhan",
      linkIn: "https://www.linkedin.com/in/reaperdhan",
      insta: "https://www.instagram.com/_.r34p3r_dhan._/",
    },  
    
    {
      id: 19,
      src: img23,
      name: "Aghilan A",
      post: "Mentor",
      dom: "Cybersecurity Domain",
      desc: "I joined the club when I was in first year and has been actively participating in the tasks and competitions related to Cybersecurity. Was given the mentor role and to my best knowledge provide support to the coordinators and the club. Interested to work in reverse engineering, cryptography, embedded security.",
      mail: "mailto:aghilan.cuber@gmail.com",
      gitHub: "https://github.com/Aghilan-A",
      linkIn: "https://www.linkedin.com/in/aghilan-a-716521230/",
      insta: "",
    },

    
    {
      id: 22,
      src: img30,
      name: "Shraddha Chopra",
      post: "Mentor",
      dom: "Cybersecurity Domain",
      desc: "Image Forensics intrigued me in CTFs. Henceforth, started contributing to the cybersecurity domain as a mentor. Also a part of the CTF team Cyber0ids, previously known as Parallel Flag. My interests include Artificial Intelligence, Image Processing & Cyber Forensics. Happy to impart and gain knowledge thru this club:)",
      mail: "mailto:shraddha5chopra@gmail.com",
      gitHub: "https://github.com/shraddha5chopra",
      linkIn: "https://www.linkedin.com/in/shraddha-chopra-57978b1b0/",
      insta: "https://www.instagram.com/_.__shraddha/",
    },

    
    {
      id: 25,
      src: img27,
      name: "Rahul Sreenivasan",
      post: "Mentor",
      dom: "Cybersecurity Domain",
      desc: "I am Rahul Sreenivasan from Cybersecurity - Batch 2020, mentor of Cognizance (Cybersecurity domain). I work in various cybersecurity fields - Networking, Penetration testing, Reverse Engineering, Web Exploitation, Digital Forensics and Cryptography. I have been participating in lots of CTFs and conferences for past 4-5 years. Also I am part of team Cyber0ids and ParallelFlags. ",
      mail: "mailto:rahulnov26@gmail.com",
      gitHub: "https://github.com/Tr0j4n1",
      linkIn: "https://www.linkedin.com/in/rahul-sreenivasan-aa9293215",
      insta: "https://instagram.com/__.r4hul___",
    },
    
    // {
    //   id: 27,
    //   src: img32,
    //   name: "Bhagavatula Yogiraj",
    //   post: "Mentor",
    //   dom: "Artificial Intelligence Domain",
    //   desc: "This is Bhagavatula Yogiraj, currently in AI Domain as a student " +
    //       "mentor. I have passion in learning AI, Data Structures, Full-Stack " +
    //       "web development. I also participate in hackathons often. " +
    //       "I have given tasks related to AI to the club members which " +
    //       "help them to give a push in learning concepts in AI. ",
    //   mail: "mailto:yogi28bhagavatula@gmail.com",
    //   gitHub: "https://github.com/Yogiraj587",
    //   linkIn: "https://www.linkedin.com/in/yogiraj-bhagavatula-741159213/",
    //   insta: "https://www.instagram.com/yogirajbhagavatula/",
    // },
    {
      id: 28,
      src: img25,
      name: "Y Charan Krishna",
      post: "Mentor",
      dom: "Artificial Intelligence Domain",
      desc: "",
      mail: "mailto:yellapragadacharankrishna1234@gmail.com",
      gitHub: "https://github.com/ycharankrishna",
      linkIn: "www.linkedin.com/in/yellapragada-charan-krishna",
      insta: "",
    },

   
    
    {
      id: 32,
      src: img35,
      name: "Siddhant Kundargi",
      post: "Jr. Co-ordinator",
      dom: "Cybersecurity Domain",
      desc: "Driven by SHEER curiosity and Impatience, with god gifted energy and enthusiasm I like to get people involved. Involved to a point that they no more need me to keep them going deeper. I am a part of the CyberSec and Open Source branch of Cognizance, and with passion I enjoy and will make you enjoy everything there is that we learn through this club",
      mail: "mailto:sidkundargi@gmail.com ",
      gitHub: "https://github.com/Siddhant-Kundargi",
      linkIn: "https://www.linkedin.com/in/siddhant-kundargi-572152177",
      insta: "https://www.instagram.com/kundargi_siddhant_official",
    },
    
  ];


  // Teams Members Component

  return (
    <>
      <div className="contbg">
        <Navbar />

        <div className="team">
          {content.map((con) => (
            <Card
              key={con.id}
              src={con.src}
              name={con.name}
              post={con.post}
              dom={con.dom}
              desc={con.desc}
              mail={con.mail}
              gitHub={con.gitHub}
              linkedIn={con.linkIn}
              instagram={con.insta}
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Team;
