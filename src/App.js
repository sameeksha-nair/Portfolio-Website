import logo from './logo.svg';
import './App.css';
import LinkedIn from './Photos/LinkedIn.jpeg';
import Clothing from './Photos/clothing.mp4';
import Inventory from './Photos/InvenGame.mp4';
import Room from './Photos/room.jpg';
import Resume from './Photos/Resume_Updated3.pdf'

function App() {
  return (
<div>
        <div class="block">
            <div class = "picture"><img class = "mypic" src = {LinkedIn} alt = "mypic"></img></div>
            <div class = "welcome">Hi! I'm <span style={{color: 'brown'}}>Sameeksha Nair</span>   <br></br> Welcome to my website :)</div>
            <div class="menu">
                <div class = "heading" ><a href='' style={{color: 'inherit', textDecoration: 'inherit'}}>About Me</a></div>
                <div class = "heading"><a href=''style={{color: 'inherit', textDecoration: 'inherit'}}>Projects</a></div>
            </div>
        </div>
        <div class="foot">
                <p class="socials">Find me:</p>
                <a href="https://github.com/sameeksha-nair" target="_blank"><img class="socials links" src="https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png" alt="Github"></img></a>
                <a href="https://www.linkedin.com/in/sameekshaabhijitnair/" target="_blank"><img class="links" src="https://logotaglines.com/wp-content/uploads/2021/11/LinkedIn-Logo-Tagline-Slogan-founder-owner-480x480.jpg" alt="Github"></img></a>
        </div>
        <p class="aboutme">
            I am currently a 4th year Bachelor of Computer Science student at the University of Windsor. I am an aspiring software engineer and 
            have a lot of interest in various tech fields such as Artificial Intelligence, Data Science, Game Development and of course Web Development. Hopefully
            this website can provide a good overview of all my skills. Here's my resume for past work experience and skills :)
        </p>
        <iframe src={Resume}></iframe>
    
        <p class="aboutme">
            Some of the projects I have worked on in the last couple of years:
        </p>
    
        <div class="inven">
                <div class="video">
                    Simple fruits collection game with an Inventory system using Unreal Engine
                    <video class="clothing" controls autoPlay muted>
                    <source src={Inventory} type="video/mp4"></source>
                    </video>
                </div>
                <div class="video">
                    A clothing store website with a working shopping cart system using HTML, CSS and Javascript (<a href="https://github.com/sameeksha-nair/Clothing-Brand-Website" style={{color: 'inherit'}} target="_blank">link</a>)    
                    <video class="clothing" controls autoPlay muted style={{paddingTop: '80px'}}>
                        <source src={Clothing} type="video/mp4"></source>
                        </video>
                </div>
                <div className="video" style={{marginTop: '40px', marginLeft: '90px'}}>
                    A 3D room made using GLUT and OpenGL libraries in C++ (CLassic OpenGL)(<a href="https://github.com/sameeksha-nair/3D-Room" style={{color: 'inherit'}} target="_blank">link</a>)
                    <img src={Room} alt="graphic room" class="room" style={{marginTop: '20px'}}></img>
                </div>
               
        </div>
        </div>
        
  );
}

export default App;
