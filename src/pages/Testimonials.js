import React from 'react'
import Main_img from '../images/profile-img.jpg'

function Testimonials(){
    return(
        <section className="testimonials-container">
            <div className="width-100-percent text-center">
                <h3 className="section-header sans-serif uppercase  ">Testimonials</h3>
            </div>
            <div className="container container-adjust">
                <div className="grid test-grid-1-2 test-gap">
                    <div className="flex j-flex-end a-flex-center">
                       <div className="img-container width-100-percent">
                            <img className="width-100-percent" src={Main_img} alt=""/> 
                        </div>
                    </div>
                    <div>
                        <blockquote>
                            <p>
                            Striving for excellence is a virtue. I have watched him 
                            show grit at every stage of his work/learning in Olotu Square as a developer. 
                            He is currently the best around. He is highly recommended and guaranteed from me
                            </p>
                            <div>
                                <h3 className="m-0">BRUCE LUCAS</h3>
                                <span>CEO, Olotu Software Technologies</span>
                            </div>
                        </blockquote>
                        
                    </div>
                    
                    
                </div>
                
            </div>

        </section>
    )
}
export default Testimonials