import portfolio from '../assets/project_images/portfolio.png'
import vsCode from '../assets/project_images/vsCode.png'
import mobile from '../assets/project_images/mobile.png'
import photoJournal from '../assets/project_images/photoJournal.jpg'
import todo from '../assets/project_images/todo.jpg'
import calculator from '../assets/project_images/calculator.png'
import blog from '../assets/project_images/blog.jpg'
import qc from '../assets/project_images/qc.png'
import studyspots from '../assets/project_images/studyspots.png'
import figma from '../assets/project_images/figma.png'

const projectsJson = [  
    {
        "title":"My Portfolio Website", 
        "url": "https://github.com/rghosh96/portfolio",
        "description": "This very website! I built this website from scratch using React, HTML, and CSS.",
        "group-project": false,
        "tags": ["react", "javascript", "html", "css", "website"],
        "features": ["dark mode & light mode", "parallax scrolling"],
        "image": portfolio
    },  
    {
        "title":"VS Code Themes", 
        "url": "https://marketplace.visualstudio.com/publishers/Shira",
        "description": "Some VS Code themes I made in my freetime... just for fun?!",
        "group-project": false,
        "tags": ["markup", "themes", "misc"],
        "features": ["light themes"],
        "image": vsCode
    },
    {
        "title":"Client Portal Redesign (Figma)", 
        "url": "https://www.figma.com/file/cxcXRWNBJ6qeG7VQk1Zyp3/rapid-genomics-client-portal?node-id=0%3A1",
        "description": "redesign of a client portal for a company; went through iterative user research/design process for final dynamic prototype",
        "group-project": true,
        "tags": ["figma", "UX design", "user research", "graphic design", "dynamic prototype", "interactive prototype"],
        "features": ["interactive", "dynamic"],
        "image": figma
    },
    {
        "title":"Social DeBug: React Native Social Media App", 
        "url": "https://github.com/rghosh96/MobileAppFrontEnd",
        "description": "a group project for a mobile programming course, where i implemented the front using react native (a friend implemented the backend)",
        "group-project": true,
        "tags": ["mobile", "react native", "cross-platform"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": mobile
    },
    {
        "title":"Quarantine Corner (React-Redux-Firebase)", 
        "url": "https://github.com/rghosh96/quarantine-corner",
        "description": "a website where people can submit kits, which are just little suggestions about things to do during quarantine! Client side is React/Redux, Server side is Firebase (authentication) and Firestore (database)!",
        "group-project": false,
        "tags": ["react", "redux", "firebase", "firestore", "database", "javascript", "website", "html", "css"],
        "features": ["liking posts", "querying posts", "creating profile", "making posts"],
        "image": qc
    },
    {
        "title":"Calculator App (Android)", 
        "url": "https://github.com/rghosh96/Basic-Calculator-Android",
        "description": "simple calculator app with basic calculation functionality",
        "group-project": true,
        "tags": ["mobile", "android", "android studio", "java"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": calculator
    },
    {
        "title":"Blog App (Android)", 
        "url": "https://github.com/rghosh96/Rest-Client-App",
        "description": "android mobile app where users can view posts, profiles, comments, and add comments",
        "group-project": true,
        "tags": ["mobile", "android", "REST", "android studio", "java"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": blog
    },
    {
        "title":"Photo Journal App (Android)", 
        "url": "https://github.com/rghosh96/Photo-Journal-Android",
        "description": "geo-camera photo journal app where users can take and store photos at specific locations",
        "group-project": true,
        "tags": ["mobile", "google maps", "location services", "android", "android studio", "java", "database", "sql", "room database"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": photoJournal
    },
    {
        "title":"To Do List App (Android)", 
        "url": "https://github.com/rghosh96/ToDo-List-Android-Studio",
        "description": "simple to do list app where user can add, edit, and delete to do's as well as set reminders for them",
        "group-project": true,
        "tags": ["mobile", "android", "android studio", "java", "database", "sql", "room database", "model-view presenter (MVP)"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": todo
    },
    {
        "title":"Study Spots (React-Redux-Firebase)", 
        "url": "https://github.com/rghosh96/StudySpotsFrontEnd",
        "description": "responsive web application built to discover local study spots based on certain criteria. i only implemented the front end. sadly, currently isnt working bc billing for google places api isn't enabled ):",
        "group-project": true,
        "tags": ["react", "redux", "firebase", "firestore", "heroku", "google places api", "google popular times api", "database", "javascript", "website", "html", "css"],
        "features": ["search places", "sort places", "favorite places"],
        "image": studyspots
    }

]  

export default projectsJson;