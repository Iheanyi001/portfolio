import React from 'react'
import Default from '../images/default2.jpeg'
import PortP from '../images/portP.jpeg'
import HomeLand from '../images/homelandapp1.jpeg'
import Sms from '../images/sms.jpeg'
import Ifactonews from '../images/ifactonews.jpeg'

function Portfolio(){
    return(
        
        <section className="port-work">
            <div className="section-header-container width-100-percent text-center">
                <h3 className="section-header sans-serif uppercase">Portfolio</h3>
            </div>

            <div className="port-container">
                <div className="item-1">
                    <div className="port-img-container width-100-percent">
                            <div className="port-card height-100-percent relative">
                                <img className="width-100-percent height-100-percent" src={HomeLand} alt=""/>
                                <div className="port-hover-details">
                                    <h3>Abia State HomeLand Security Database Management System</h3>
                                    <div className="project-tools">
                                            <span className="facebook">HTML5</span>
                                            <span className="facebook">CSS3</span>
                                            <span className="facebook">Javascript</span>
                                            <span className="facebook">Laravel</span>
                                            <span className="facebook">MySQL</span>                             
                                    </div>
                                    <span className="applink-container">
                                        <i className="fa fa-lock text-white" aria-hidden="true"></i>
                                        <a href="/">protected</a>
                                    </span>
                                    </div>
                                    <div className="app-name-container">
                                        <span className="app-name">AHSDS Desktop App</span>
                                    </div>
                            </div>
                        </div>
                </div>
                <div className="item-2">
                <div className="port-img-container port-img-container-large width-100-percent height-100-percent" >
                            <div className="port-card height-100-percent relative">
                                <img className="width-100-percent height-100-percent object-fit-cover" src={PortP} alt=""/>
                                <div className="port-hover-details">
                                    <h3>Single Page Website showcasing my Portfolio</h3>
                                    <div className="project-tools">
                                        <span className="facebook">JSX</span>
                                        <span className="facebook">CSS</span>
                                        <span className="facebook">ReactJS</span>
                                    </div>
                                    <span className="applink-container">
                                        <a href="https://iportfolio.vercel.app/" target="_blank">See Project →</a>
                                    </span>
                                    
                                </div>
                                <div className="app-name-container">
                                    <span className="app-name">Portfolio Website</span>
                                </div>
                            </div>
                    </div>
                </div>
                <div className="item-3">
                    <div className="port-img-container width-100-percent">
                            <div className="port-card height-100-percent relative">
                                <img className="width-100-percent height-100-percent" src={Ifactonews} alt=""/>
                                <div className="port-hover-details">
                                    <h3>ifactonews website for information sharing</h3>
                                    <div className="project-tools">
                                            <span className="facebook">CSS3</span>
                                            <span className="facebook">NextJs</span>
                                            <span className="facebook">MongoDB</span>
                                    
                                    </div>
                                        <span className="applink-container">
                                            <a href="https://ifactonews.com/" target="_blank">See Project →</a>
                                        </span>
                                    </div>
                                    <div className="app-name-container">
                                        <span className="app-name">Ifactonews App</span>
                                    </div>
                            </div>
                        </div>
                </div>
                <div className="item-4">
                    <div className="port-img-container width-100-percent">
                            <div className="port-card height-100-percent relative">
                                <img className="width-100-percent height-100-percent" src={Sms} alt=""/>
                                <div className="port-hover-details">
                                    <h3>School Management System for teachers and students</h3>
                                    <div className="project-tools">
                                            <span className="facebook">HTML5</span>
                                            <span className="facebook">CSS3</span>
                                            <span className="facebook">Javascript</span>
                                            <span className="facebook">Laravel</span>
                                            <span className="facebook">MySQL</span>                             
                                    </div>
                                    <span className="applink-container">
                                        <i className="fa fa-lock text-white" aria-hidden="true"></i>
                                        <a href="/">See Project →</a>
                                    </span>
                                    </div>
                                    <div className="app-name-container">
                                        <span className="app-name">Eazizi School App</span>
                                    </div>
                            </div>
                        </div>
                </div>
                <div className="item-5">
                <div className="port-img-container width-100-percent">
                            <div className="port-card height-100-percent relative">
                                <img className="width-100-percent height-100-percent" src={Default} alt=""/>
                                <div className="port-hover-details">
                                    <h3>Telegram Click Bot App </h3>
                                    <div className="project-tools">
                                            
                                            <span className="facebook">NodeJs</span>

                                            <span className="facebook">Puppeteer</span>                             
                                    </div>
                                    <span className="applink-container">
                                    <i className="fa fa-lock text-white" aria-hidden="true"></i>
                                        <a href="/">protected</a>
                                    </span>
                                </div>
                                    <div className="app-name-container">
                                        <span className="app-name">Click Bot App</span>
                                    </div>
                            </div>
                        </div>
                </div>
                
            </div>
        </section>
        
    )
}
export default Portfolio