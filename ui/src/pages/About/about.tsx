import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

function About () {
    return (
        <div className="flex">
            <div className="about text-black lg:ml-72 lg:mt-24">
                <h1 className="text-4xl font-mono font-bold mb-8 text-center">About</h1>
                <div className="flex items-center justify-center">
                    <p className="text-sm lg:ml-32 lg:mr-32 lg:text-lg font-mono leading-relaxed">
                        Eden is a web application that helps you to focus on your goals. 
                        The main point of application is to help you reach your goals by
                        forcing you to add tasks that will help you reach your goals.
                    </p>
                </div>
                <p className="text-center ml-4 mr-4 text-lg leading-relaxed font-mono mt-8">Feel free to contact me via social media</p>
                <div className="social-media-link text-center">
                    <a href="https://github.com/KostLinux">
                        <FontAwesomeIcon icon={faGithub} className="text-black mr-4 h-10 mt-8" />
                    </a>
                    <a href="https://www.linkedin.com/in/christofher-kost-04b9791a2/">
                        <FontAwesomeIcon icon={faLinkedin} className="text-black mr-4 h-10 mt-8" />
                    </a>
                    <a href="https://kostlinux.github.io/Portfolio/">
                        <FontAwesomeIcon icon={faBriefcase} className="text-black h-10 mt-8" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;