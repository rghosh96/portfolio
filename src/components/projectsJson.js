import portfolio from '../assets/project_images/portfolio.png'
import vsCode from '../assets/project_images/vsCode.png'
import mobile from '../assets/project_images/mobile.png'
import photoJournal from '../assets/project_images/photoJournal.jpg'
import todo from '../assets/project_images/todo.jpg'
import calculator from '../assets/project_images/calculator.png'
import blog from '../assets/project_images/blog.jpg'

const projectsJson = [  
    {
        "title":"My Portfolio Website", 
        "description": "This very website! I built this website from scratch using React, HTML, and CSS.",
        "group-project": false,
        "tags": ["react", "javascript", "html", "css"],
        "features": ["dark mode & light mode", "parallax scrolling"],
        "image": portfolio
    },  
    {
        "title":"VS Code Themes", 
        "description": "Some VS Code themes I made in my freetime... just for fun?!",
        "group-project": false,
        "tags": ["markup", "themes", "misc"],
        "features": ["light themes"],
        "image": vsCode
    },
    {
        "title":"React Native Social Media App", 
        "description": "a group project for a mobile programming course, where i implemented the front using react native (a friend implemented the backend)",
        "group-project": true,
        "tags": ["mobile", "react native", "cross-platform"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": mobile
    },
    {
        "title":"Calculator App (Android)", 
        "description": "simple calculator app with basic calculation functionality",
        "group-project": true,
        "tags": ["mobile", "android", "android studio", "java"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": calculator
    },
    {
        "title":"Blog App (Android)", 
        "description": "android mobile app where users can view posts, profiles, comments, and add comments",
        "group-project": true,
        "tags": ["mobile", "android", "REST", "android studio", "java"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": blog
    },
    {
        "title":"Photo Journal App (Android)", 
        "description": "geo-camera photo journal app where users can take and store photos at specific locations",
        "group-project": true,
        "tags": ["mobile", "google maps", "location services", "android", "android studio", "java", "database", "sql", "room database"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": photoJournal
    },
    {
        "title":"To Do List App (Android)", 
        "description": "simple to do list app where user can add, edit, and delete to do's as well as set reminders for them",
        "group-project": true,
        "tags": ["mobile", "android", "android studio", "java", "database", "sql", "room database", "model-view presenter (MVP)"],
        "features": ["light themes", "dark themes", "social network functionalities", "chat functionality"],
        "image": todo
    }
]  

export default projectsJson;