import React from 'react'
import github_img from '../images/github2.png'
import linkdin_img from '../images/linkdin2.png'
import '../styles/Footer.css'
import MenuBtn from './MenuBtn'
//import '../styles/Gallery.css'

export default function Footer() {
    return (
        <div className='Footer'>
            <div className='FooterLinks'>
            <MenuBtn text='Home' styles='Desktop' path='/'/>
            <MenuBtn text='GameCenter' styles='Desktop' path='/New-Tab'/>
            <MenuBtn text='StockNow' styles='Desktop' path='/StockNow'/>
            <MenuBtn text='Task Manager' styles='Desktop' path='/Todo-list'/>
            </div>
            <div className='FooterIcons'>
               <a href="http://"><img src={github_img} alt='github logo'></img></a> 
               <a href="http://"><img src={linkdin_img}alt='linkdin logo'></img></a>
            </div>
        </div>
    )
}
