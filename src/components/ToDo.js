import React from 'react'
import ProjectPage from './ProjectPage'
import img1 from "../images/TaskManager/Main.png"
import vid1 from "../images/TaskManager/Complete.mov"
import vid2 from "../images/TaskManager/Delete.mov"
import vid3 from "../images/TaskManager/Edit.mov"
import vid4 from "../images/TaskManager/Create.mov"
export default function ToDo() {
    const images = [ 
        {
            src: img1, 
            type: 'img'
        },
        {
            src: vid4, 
            type: 'video'
        },
        {
            src: vid1, 
            type: 'video'
        },
        {
            src: vid3, 
            type: 'video'
        }, 
        {
            src: vid2, 
            type: 'video'
        }
    ]
    const about = 
    <div>
    <h3>About</h3>
    <h5>Tech Stack: Javascript | HTML | CSS | Chrome Extensions API</h5>
    <p>The motivation behind this project was to create a task manager browser extension with an interactive UI that was easily accesible from inside the browser, allowing users to 
        quickly and effortlessly create, edit, delete and complete their tasks throughout the day. This solved issues I had with other task managing applications which would require
        me to open up additional applications/windows. Task Manager syncs tasks between chrome devices allowing users to have accesss to their tasks from multiple devices, tracks their
        progress using an app icon badge and allows users to review their completed tasks at the end of the day. 
    </p>
    </div>
    return (
        <ProjectPage Title = 'Task Manager' images = {images} description = "Task Manager Chrome Extension" about = {about} color="#ff7f7f" link = "https://github.com/Krishan-Patel/TaskManager-Browser-Extension"></ProjectPage>
    )
}
