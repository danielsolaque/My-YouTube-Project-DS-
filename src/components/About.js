import "./About.css"
import fototony from "../assets/fototony.png";
import fotopersonal from "../assets/fotopersonal.jpg";

export default function About() {
    
    return (
      <div className="dev-page">
        <div class="myPhotos">
          <img
            src={fotopersonal}
            alt="Daniel's personal foto"
            width="100px"
            className="Jpg1"
          />
          <img
            src={fototony}
            alt="Daniel's personal foto"
            width="100px"
            className="Jpg2"
          />
        </div>
        <main className="content">
          <p>
            <em>
              Fellows <b>Daniel</b> and <b>Tony</b>...
            </em>
          </p>
          <p>
            Javascript Developers in training at the hands of the organization
            Pursuit. We are proud Pursuit Fellows currently in our third module
            of training. We have built several projects/Apps using both vanilla
            Javascript, HTML,CSS, & React.This project is our recreation of
            Youtube.com.
          </p>

          <p>
            Hi! My name is Daniel Solaque After several years of wanting to
            bring tangible solutions to society, I decided to take a leap into
            the profession that has been doing it best: software development. I
            am currently Software Engineer with experience in dynamic flow
            simulation for the oil and gas industry. I’m a dynamic and adaptive
            professional with an international engineering background (1+ years)
            who is currently attending Pursuit Program Fellowship while seeking
            opportunities in Software Engineering and Full Stack Development to
            diversify my engineering experience and contributions in tech areas.
          </p>

          <p>
            {" "}
            Hi! My name is Anthony Taylor, I began a career in technology by
            obtaining a COMPTIA Network+ certification. This led me to become an
            associate at Geek Squad for three years. I eventually steered
            towards the installation Mobile Electronics in vehicles instead of
            applying technological concepts & programming languages with
            computers, which is what I really desired.I found the Pursuit
            Fellowship Organization and began my path to becoming a Javascript
            developer.
          </p>

          <a href="https://github.com/danielsolaque">
            {" "}
            <p>Daniel's GitHub</p>
          </a>
          <a href="https://github.com/SasukeDaTony">
            {" "}
            <p>Tony's GitHub</p>
          </a>
        </main>
      </div>
    );
}