import React from 'react'
import Nav from './pages/Nav'
import Header from './pages/Header'
import Portfolio from './pages/Portfolio'
import Skills from './pages/Skills'
import Testimonials from './pages/Testimonials'
import Footer from './pages/Footer'


function Main(){
		return(
			<div style={{margin:'0', padding:'0', border:'0'}}>
				<Nav/>
				<Header/>
				<Portfolio/>
				<Skills/>
				<Testimonials/>
				<Footer/>
			</div>
			


		)
		
	}

export default Main