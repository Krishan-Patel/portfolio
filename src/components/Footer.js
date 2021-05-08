import React from 'react'
import github_img from '../images/github2.png'
import linkdin_img from '../images/linkdin2.png'
import '../styles/Footer.css'
import MenuBtn from './MenuBtn'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterLinks'>
            <MenuBtn text='Home' styles='Desktop' path='/portfolio/'/>
            <MenuBtn text='GameCenter' styles='Desktop' path='/GameCenter'/>
            <MenuBtn text='StockNow' styles='Desktop' path='/StockNow'/>
            <MenuBtn text='Task Manager' styles='Desktop' path='/Task-Manager'/>
            </div>
            <div className='FooterIcons'>
               <a href="https://github.com/Krishan-Patel"><img src={github_img} alt='github logo'></img></a> 
               <a href="https://www.linkedin.com/in/krishanpatel2002"> <img src={linkdin_img}alt='linkdin logo'></img></a>
            </div>
        </div>
    )
}
