import React from 'react';



function App() {
  function menuIcon(e){
    let obj = document.getElementById('menuIcon');
    let check = obj.classList.toggle('change');
    let nav = document.querySelector('.nav');
    let header_left = document.querySelector('.header-left');
    let header_right = document.querySelector('.header-right');
    console.log(check);
    switch(check){
      case true:
        header_left.style.display = 'none'
        header_right.style.display = 'none'
        nav.style.display = 'flex';
        break;
      case false:
        nav.style.display = 'none';
        header_left.style.display = 'grid'
        header_right.style.display = 'grid'
        break;
      default:
        header_left.style.display = 'none'
        header_right.style.display = 'none'
        nav.style.display = 'flex';
    }
  }
  return (
    <nav className="navigation">
      <div className="dev-name">
        <h3 className="uppercase">Iheanyi</h3>
      </div>
      <div className="menu-icon-container">
        <div id="menuIcon" className="menu-icon" onClick={menuIcon}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
      
      <div className="nav">
        <div>
          <a href="portfolio">Portfolio</a>
        </div>
        <div>
          <a href="skills">Skills</a>
        </div>
        <div>
          <a href="testimonials">Testimonials</a>
        </div>
      </div>
    </nav>
  );
}

export default App;
