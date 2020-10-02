import React from 'react'
import Main_img from '../images/myAvatar.svg'
import back_img from '../images/avatar.jpeg'

function Header(){
    return(
        <header className="header">
            
            <div className="header-left">
                <div className="main-img-container">

                <div className="flip-master">
                        <div className="flip-card">
                            <div className="flip-card-front">
                                <img src={Main_img} alt="my"/>   
                            </div>
                            <div className="flip-card-back">
                                <img src={back_img} alt="my"/> 
                            </div>  
                        </div>
                    </div>

                    <div className="orbit">
                        <div className="orbit-space">
                            <div className="orbit-object">
                                <span >❤</span>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>

            <div className="header-right">
                <div className="flex flex-center">
                    <div className="header-right-content-container">
                        <h4 className="relative primary-color uppercase sans-serif">
                        Your Favourite
                            <span role="img" aria-label="" className="attach-love sans-serif">
                                ❤
                            </span>
                        </h4>
                        <h2 className="uppercase sans-serif">
                            Developer
                        </h2>
                        <p className="sans-serif">
                            I enjoy making life easy for users with the help of my developer skills,
                            I realized that every line of code is an opportunity to make a user’s experience better. 
                        </p>
                        <div className="socials-container">
                            <span className="facebook"><i className="fa fa fa-github"></i></span>
                            <span className="facebook"><i className="fa fa-linkedin"></i></span>
                            <span className="facebook"><i className="fa fa-envelope"></i></span>
                            <span className="facebook"><i className="fa fa-twitter"></i></span>
                            <span className="facebook"><i className="fa fa-instagram"></i></span>
                            <span className="facebook"><i className="fa fa-facebook"></i></span>   
                        </div>
                    </div>
                </div>
                
            </div>
        </header>
    )
}

export default Header