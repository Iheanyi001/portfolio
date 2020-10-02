import React from 'react'
import Default from '../images/default2.jpeg'
import PortP from '../images/portP.jpeg'
import HomeLand from '../images/homelandapp1.jpeg'

function Portfolio(){
    return(
        <section className="container">
            <div className="section-header-container width-100-percent text-center">
                <h3 className="section-header sans-serif uppercase">Portfolio</h3>
            </div>
            <div className="portfolios-container width-100-percent grid grid-2-1 grid-ms-1">
                <div className="port-sub grid grid-2">
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
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                    <a href="/">protected</a>
                                </span>
                            </div>
                            <div className="app-name-container">
                                <span className="app-name">Management App</span>
                            </div>
                        </div>
                    </div>
                    <div className="port-img-container width-100-percent">
                        <div className="port-card height-100-percent relative">
                            <img className="width-100-percent height-100-percent" src={Default} alt=""/>
                            <div className="port-hover-details">
                                <h3>NodeJS/Mongodb API for the Salad Freak Application (Beta).</h3>
                                <div className="project-tools">
                                    <span className="facebook">NodeJS</span>
                                    <span className="facebook">Express</span>
                                    <span className="facebook">ReactJS</span>
                                    <span className="facebook">MongoDB</span>
                                </div>
                                <span className="applink-container">
                                    <i className=""></i>
                                    <a href="/">protected</a>
                                </span>  
                            </div>
                            <div className="app-name-container">
                                <span className="app-name">Management APP</span>
                            </div>
                        </div>
                    </div>
                    <div className="port-img-container width-100-percent">
                        <div className="port-card height-100-percent relative">
                            <img className="width-100-percent height-100-percent" src={Default} alt=""/>
                            <div className="port-hover-details">
                                <h3>NodeJS/Mongodb API for the Salad Freak Application (Beta).</h3>
                                <div className="project-tools">
                                    <span className="facebook">NodeJS</span>
                                    <span className="facebook">Express</span>
                                    <span className="facebook">ReactJS</span>
                                    <span className="facebook">MongoDB</span>
                                </div>
                                <span className="applink-container">
                                    <i className=""></i>
                                    <a href="/">protected</a>
                                </span>
                            </div>
                            <div className="app-name-container">
                                <span className="app-name">Management App</span>
                            </div>
                        </div>
                    </div>
                    <div className="port-img-container width-100-percent">
                        <div className="port-card height-100-percent relative">
                            <img className="width-100-percent height-100-percent" src={Default} alt=""/>
                            <div className="port-hover-details">
                                <h3>NodeJS/Mongodb API for the Salad Freak Application (Beta).</h3>
                                <div className="project-tools">
                                    <span className="facebook">NodeJS</span>
                                    <span className="facebook">Express</span>
                                    <span className="facebook">ReactJS</span>
                                    <span className="facebook">MongoDB</span>
                                </div>
                                <span className="applink-container">
                                    <i className=""></i>
                                    <a href="/">protected</a>
                                </span>
                            </div>
                            <div className="app-name-container">
                                <span className="app-name">Management App</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="" >
                    <div className="port-img-container width-100-percent height-100-percent" >
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
                                    <i className=""></i>
                                    <a href="/">protected</a>
                                </span>
                            </div>
                            <div className="app-name-container">
                                <span className="app-name">Management App</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}
export default Portfolio