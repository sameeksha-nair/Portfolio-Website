import logo from './logo.svg';
import './App.css';

function App() {
  return (
<div>
        <div class="block">
            <div class = "picture"><img class = "mypic" src = "LinkedIn.jpeg" alt = "mypic"></img></div>
            <div class = "welcome">Hi! I'm <span>Sameeksha Nair</span>   <br></br> Welcome to my website :)</div>
            <div class="menu">
                <div class = "heading" ><a href="about.html">About Me</a></div>
                <div class = "heading"><a href="projects.html">Projects</a></div>
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
        <iframe src="Resume_Updated3.pdf"></iframe>
    
        <p class="aboutme">
            Some of the projects I have worked on in the last couple of years:
        </p>
    
        <div class="inven">
                <div class="video">
                    Simple fruits collection game with an Inventory system using Unreal Engine
                    <video class="clothing" controls autoplay muted>
                    <source src="InvenGame.mp4" type="video/mp4"></source>
                    </video>
                </div>
                <div class="video">
                    A clothing store website with a working shopping cart system using HTML, CSS and Javascript (<a href="https://github.com/sameeksha-nair/Clothing-Brand-Website" target="_blank">link</a>)    
                    <video class="clothing" controls autoplay muted>
                        <source src="clothing.mp4" type="video/mp4"></source>
                        </video>
                </div>
                <div class="video">
                    A 3D room made using GLUT and OpenGL libraries in C++ (CLassic OpenGL)(<a href="https://github.com/sameeksha-nair/3D-Room" target="_blank">link</a>)
                    <img src="Photos/room.jpg" alt="graphic room" class="room"></img>
                </div>
               
        </div>
        </div>
        
  );
}

export default App;
