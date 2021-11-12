import React from 'react'
import { useStateValue } from '../../../contextapi/StateProvider'

import * as classes from './projectsGrid.module.css'

import portfolio2Image from '../../../assets/images/portfolio-v2.jpg'
import blogImage from '../../../assets/images/blogwebsite.jpg'
import burgerBuilderImage from '../../../assets/images/burgerbuilder.jpg'
import derschnackImage from '../../../assets/images/derschnack-mini.jpg'
import documentationPageImage from '../../../assets/images/documentationpage.jpg'
import peekaabookImage from '../../../assets/images/peekaabook-mini.jpg'
import pongImage from '../../../assets/images/pong.jpg'
import portfolio0Image from '../../../assets/images/portfolio-v0.jpg'
import portfolio1Image from '../../../assets/images/portfolio-v1.jpg'
import promotionPageImage from '../../../assets/images/promotionpage.jpg'
import spaceInvadersImage from '../../../assets/images/spaceinvaders.jpg'
import sudokuSolverImage from '../../../assets/images/sudokusolver.jpg'
import surveyFormImage from '../../../assets/images/surveyform.jpg'
import taskManagerApiImage from '../../../assets/images/taskmanagerapi.jpg'
import tributePageImage from '../../../assets/images/tributepage.jpg'
import weatherAppImage from '../../../assets/images/weatherapp.jpg'
import xMemeImage from '../../../assets/images/xmeme-mini.jpg'
import alanaiImage from '../../../assets/images/alanai.png'
import footballDimesMini from '../../../assets/images/footballdimes-mini.png'

export const allProjects = [{
    name: 'Football-themed Social Media Webapp',
    imageSrc: footballDimesMini,
    tags: 'REACT.JS | REDUX | MONGODB | NODE.JS | EXPRESS.JS',
    description: 'Football Dimes is a football-themed social media web application built upon the MERN stack. It allows users to post about their favourite football players, like posts made by other users, get player-specific news, and create sections for discussing players, leagues, and clubs.',
    time: 'September 2021',
    github: 'https://github.com/Aihab1/Football-Dimes',
    link: 'https://football-dimes.herokuapp.com/'
}, {
    name: 'Virtual Assistant Webapp',
    imageSrc: alanaiImage,
    tags: 'REACT.JS | PUBLIC APIs | ALAN AI',
    description: 'A multipurpose website built with React and integrated with Alan AI (Virtual Assistant). It allows users to perform specific tasks using voice commands. With the power of Alan AI API and 5+ other APIs, one can search for news, get solutions to basic math queries, search for bitcoin price fluctuations, get weather forecasts and more.',
    time: 'June 2021',
    github: 'https://github.com/Aihab1/Virtual-Assistant-Webapp',
    link: 'https://yourdonna.herokuapp.com/'
}, {
    name: 'Portfolio v2',
    imageSrc: portfolio2Image,
    tags: 'GATSBY | REACT.JS | CSS',
    description: 'This is the third iteration of my personal website (after portfolio-v0 and portfolio-v1). It is built using Gatsby which is an open source frontend framework. The project helped me in polishing my react.js, html and css skills.',
    time: 'April 2021',
    github: 'https://github.com/Aihab1/Portfolio-v2'
}, {
    name: 'Task Manager API',
    imageSrc: taskManagerApiImage,
    tags: 'NODE.JS | EXPRESS.JS | MONGODB',
    description: 'A classic task manager API (RESTful) which enables users to create an account, store tasks in the database, perform CRUD operations etc. all while making a few HTTP requests. The API uses JWT web tokens for logging in and out and is built with the help of node.js together with express.js, mongodb and mongoose models. Documentation of the API is yet to be done.',
    time: 'March 2021',
    github: 'https://github.com/Aihab1/Task-Manager-API'
}, {
    name: 'Burger Builder',
    imageSrc: burgerBuilderImage,
    tags: 'REACT.JS | REDUX | FIREBASE',
    description: 'This was not an independent project but a course project under Maximilian Schwarzmüller, the instructor of the course: React - The Complete Guide(incl Hooks, React Router, Redux). It allows a user to build a burger using a very nicely built UI. The web application supports authentication and handles order details using firebase cloud database.',
    time: 'March 2021',
    github: 'https://github.com/Aihab1/Burger-Builder',
    link: 'https://react-burger-builder-80d1a.firebaseapp.com/'
}, {
    name: 'Meme Sharing Website & API',
    imageSrc: xMemeImage,
    tags: 'AJAX | REST | SWAGGER (OPEN API)',
    description: 'Built for the Crio Winter of Doing 2021, Stage 2, this website acts as a meme sharing platform for meme lovers. The memes are updated in real-time using AJAX which follows the MVC model. The REST API was developed using swagger (open api) and the website also made use of connexion and flask.',
    time: 'February 2021',
    github: 'https://github.com/Aihab1/xMeme',
    link: 'https://x-meme.herokuapp.com/'
}, {
    name: 'Blog Website',
    imageSrc: blogImage,
    tags: 'DJANGO | PYTHON | SASS',
    description: 'Built a blog website template which helps users to write personal blogs. The blogs can be accessed by the general public and anyone can add comments which are then approved/rejected by the owner. The website supports images, links, text styling, emoticons etc. It is built on django and has made use of html, (s)css and javascript.',
    time: 'September 2020',
    github: 'https://github.com/Aihab1/Blog-Website',
    link: 'https://aihablog.herokuapp.com/'
}, {
    name: 'Messaging Web App',
    imageSrc: derschnackImage,
    tags: 'SOCKET.IO | JAVASCRIPT | SASS | FLASK',
    description: 'Developed a real-time chat web application named \'derschnack\' which, in German, means \'to chat\'. It helps users to chat in a slack-like environment by creating public and private chat rooms. The application requires only a username to start chatting and it can be changed anytime. The web application uses only the basics of socket-io, flask and javascript.',
    time: 'August 2020',
    github: 'https://github.com/Aihab1/Schnack',
    link: 'https://derschnack.herokuapp.com/'
}, {
    name: 'Portfolio v1',
    imageSrc: portfolio1Image,
    tags: 'HTML | CSS | SASS | JAVASCRIPT',
    description: 'This is the second iteration of my personal website after portfolio-v0. This static webpage was built using html, css and javascript and it also made use of external libraries like AOS for certain animations. It is hosted online using Github Pages. The source code can be found on my github.',
    time: 'August 2020',
    github: 'https://github.com/Aihab1/Portfolio-v1',
    link: 'https://aihab1.github.io/Portfolio-v1/'
}, {
    name: 'Book Review Website',
    imageSrc: peekaabookImage,
    tags: 'FLASK | POSTGRESQL | AUTHENTICATION',
    description: 'This was the first full fledged project which I made as an independent developer. It uses flask sessions for authentication and postgresql, flask sqlalchemy for keeping various data fields in place. Users can browse books by genre, search a book by its author(s), isbn or name, read & write reviews and also see ratings given by community members. It was initially integrated with Goodreads API which was later replaced by GoogleBooks API to improve functionality.',
    time: 'July 2020',
    github: 'https://github.com/Aihab1/Peekaabook',
    link: 'https://peek-aa-book.herokuapp.com/'
},  {
    name: 'Sudoku Solver',
    imageSrc: sudokuSolverImage,
    tags: 'PYTHON | PYGAME | BACKTRACKING',
    description: 'This is a GUI based sudoku solver application which enables a user to input a sudoku board and find its solution in seconds. The application also allows the user to solve the sudoku board manually. Behind the scenes, the application uses backtracking to solve the sudoku board. The source code can be found on my github.',
    time: 'May 2020',
    github: 'https://github.com/Aihab1/Sudoku-Solver'
}, {
    name: 'Weather App',
    imageSrc: weatherAppImage,
    tags: 'NODE.JS | WEATHERSTACK API',
    description: 'This is a basic weather checking web application which makes use of the weatherstack api to convert coordinates into actual weather. The weather is then displayed on the screen. The website is hosted on heroku and the source code of the project is available on my github.',
    time: 'May 2020',
    link: 'https://raindear.herokuapp.com/'
}, {
    name: 'Promotional Web Page',
    imageSrc: promotionPageImage,
    tags: 'HTML | CSS | BOOTSTRAP',
    description: 'Built a promotional web page for tanki online talking about the game, its history and also about the quality time I spent there as a member of the tanki online community. It makes use of vanilla html, css and javascript.',
    time: 'July 2020',
    github: 'https://github.com/Aihab1/Tankistrodon',
    link: 'https://aihab1.github.io/Tankistrodon/'
}, {
    name: 'Space Invaders',
    imageSrc: spaceInvadersImage,
    tags: 'PYTHON | PYGAME',
    description: 'A clone application of the space invaders game developed using pygame, written in python, built with the intention to learn the basics of pygame. The files and source code are available on my github.',
    time: 'June 2020',
    github: 'https://github.com/Aihab1/Space-Invader'
}, {
    name: 'Pong',
    imageSrc: pongImage,
    tags: 'PYTHON | PYGAME',
    description: 'This was the first game which I developed using pygame. It helped me learn the very basics of pygame and get confident with the dynamics and the objects used in the game.',
    time: 'May 2020',
    github: 'https://github.com/Aihab1/Pong'
}, {
    name: 'JS Documentation Page',
    imageSrc: documentationPageImage,
    tags: 'HTML | CSS | VANILLA JS',
    description: 'A basic web page built using only html, css and javascript. This project was a part of the freecodecamp\'s responsive web design tutorial challenge and it focused mainly on the aspects of making the web page responsive and appeasing. The web page is available on codepen.io.',
    time: 'April 2020',
    link: 'https://codepen.io/aihab-umair/full/NWGvmRY'
}, {
    name: 'Portfolio v0',
    imageSrc: portfolio0Image,
    tags: 'HTML | CSS',
    description: 'The very first iteration of my personal website. Built for the freecodecamp\'s response web design tutorial challenge, it helped me grasp the concepts and usage of html, css and responsive design. The web page is available on codepen.io.',
    time: 'May 2020',
    link: 'https://codepen.io/aihab-umair/full/BaoYbmv'
}, {
    name: 'Survey Form Template',
    imageSrc: surveyFormImage,
    tags: 'HTML | CSS',
    description: 'A basic survey form template created for the freecodecamp\'s responsive web design tutorial challenge. This was one of the first few projects which got me started with html and css.',
    time: 'April 2020',
    link: 'https://codepen.io/aihab-umair/full/MWaaVYQ'
}, {
    name: 'Tribute Page',
    imageSrc: tributePageImage,
    tags: 'HTML | CSS',
    description: 'This was the very first html and css only web page which I made for the freecodecamp\'s responsive web design tutorial challenge. It pays tribute to the Indian actor, Mr. Shahrukh Khan and presents a timeline of his life before and after entering the film industry.',
    time: 'March 2020',
    link: 'https://codepen.io/aihab-umair/full/PoPYEJw'
}]

const ProjectsGrid = () => {
    const [{ lightMode }] = useStateValue();
    const all = []
    for (let project of allProjects) {
        all.push(
            <div key={project.name} className={classes.box}>
                <div className={classes.content}>
                    <div className={classes.contentInner}>
                        <p style={{ marginBottom: '10px', fontSize: '1.2rem' }}>{project.name}</p>
                        <p style={{ marginBottom: '10px', fontSize: '0.8rem' }}>{project.tags}</p>
                        <p>{project.description}</p>

                        {/* Links for github and website */}
                        {project.github &&
                            <a href={project.github} target="_blank" rel="noreferrer">
                                <p className={classes.projectLinks}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                            GITHUB
                        </p>
                            </a>}

                        {project.link &&
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <p className={classes.projectLinks}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <path
                                            d="M13.723 18.654l-3.61 3.609c-2.316 2.315-6.063 2.315-8.378 0-1.12-1.118-1.735-2.606-1.735-4.188 0-1.582.615-3.07 1.734-4.189l4.866-4.865c2.355-2.355 6.114-2.262 8.377 0 .453.453.81.973 1.089 1.527l-1.593 1.592c-.18-.613-.5-1.189-.964-1.652-1.448-1.448-3.93-1.51-5.439-.001l-.001.002-4.867 4.865c-1.5 1.499-1.5 3.941 0 5.44 1.517 1.517 3.958 1.488 5.442 0l2.425-2.424c.993.284 1.791.335 2.654.284zm.161-16.918l-3.574 3.576c.847-.05 1.655 0 2.653.283l2.393-2.389c1.498-1.502 3.94-1.5 5.44-.001 1.517 1.518 1.486 3.959 0 5.442l-4.831 4.831-.003.002c-1.438 1.437-3.886 1.552-5.439-.002-.473-.474-.785-1.042-.956-1.643l-.084.068-1.517 1.515c.28.556.635 1.075 1.088 1.528 2.245 2.245 6.004 2.374 8.378 0l4.832-4.831c2.314-2.316 2.316-6.062-.001-8.377-2.317-2.321-6.067-2.313-8.379-.002z" />
                                    </svg>
                            WEBSITE
                        </p>
                            </a>}
                    </div>
                </div>
                <img src={project.imageSrc} alt="Project Thumbnail"></img>
            </div>
        )
    }

    return (
        <div className={`${classes.projectsOuter} ${(lightMode && classes.light)}`}>
            <div className={classes.subheading2}>
                <hr></hr><p>PROJECTS ARCHIVE</p>
            </div>
            <h1 style={{ marginBottom: '20px' }}>Portfolio</h1>
            <div className={classes.projectsContainer}>
                {all}
            </div>
        </div>
    )
}

export default ProjectsGrid