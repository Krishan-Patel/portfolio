import React from 'react'
import DisplayTile from './DisplayTile'
import '../styles/Body.css'
import img1 from '../images/new_tab/thumbnailmain.png'
import taskthumb from '../images/TaskManager/Thumbnail.png'
import newTabImg from '../images/new_tab/Thumbnail_small.png'
import stockImg from '../images/StockNow/Thumbnail.png'
import tasklogo from '../images/TaskManager/Logo.gif'
import stocklogo from '../images/StockNow/StockLogo.jpeg'
import facelogo from '../images/FaceID/FaceLogo.jpeg'
import facethumb from '../images/FaceID/question.png'

export default function Body() {
    return (
        <div className="BodyContainer">
            <div className='TileContainer'>
                <DisplayTile 
                source = {img1}
                thumbnail = {newTabImg}
                title = 'GameCenter'
                description = 'Customizable New Tab Override page that displays live scores, odds and statistics for games from 7 of the most popular sports leagues.'
                link = '/New-Tab' />
                <DisplayTile 
                source = {tasklogo} 
                thumbnail = {taskthumb}
                title = 'Task Manager'
                description = 'Task Manager extension that allows users to create, edit, complete, and delete tasks. Features a task counter, and syncs between chrome devices.'
                link = '/Todo-list' />
                <DisplayTile 
                source = {stocklogo}  
                thumbnail = {stockImg}
                title = 'StockNow'
                description = 'Full Stack Website that provides users with live statistics for 500+ stocks from the NYSE.'
                link = '/StockNow'/>
                <DisplayTile 
                source = {facelogo}  
                thumbnail = {facethumb}
                title = 'Facial Recognition App'
                description = 'Comming Soon...'
                link = '/portfolio/'/>
            </div>
        </div>
    )
}
