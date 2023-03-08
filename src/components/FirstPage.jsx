import iconFB from "../assets/icon-fb.png"
import iconIN from "../assets/icon-in.png"
import iconGithub from "../assets/icon-github.png"
import profileImage from "../assets/profileImage.png"

function FirstPage () {
    
    return (
        <div className="container-firstPage">
            <div className="container-profile">
                <div className="container-profile-leftContent">
                    <p>JUNIOR SOFTWARE DEVELOPER</p>
                    <h1>SORACHAK</h1>
                    <h1>BEST</h1>
                </div>
            
                <div className="container-profile-rightContent">
                    <hr />
                    <div className="profile-aboutMe">
                        <p>I'm a junior software developer based in Bangkok and I particularly enjoy solving problems with code. I also love playing games, watching series & listening to music.</p>
                        <div className="profile-icon">
                            <a href="https://www.facebook.com/Sorachak.Best" target="_blank"><img src={iconFB} alt="facebook-icon" /></a>
                            <a href="https://www.linkedin.com/in/sorachak-vatjanajaroenrat-822b54240/" target="_blank"><img src={iconIN} alt="linkedin-icon" /></a>
                            <a href="https://github.com/bestsvt" target="_blank"><img src={iconGithub} alt="github-icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-profileImage">
                <img src={profileImage} alt="profile-image" className="profileImage"/>
                <div className="half-circle"></div>
                <div className="half-circle2"></div>
            </div>
        </div>
    )
}

export default FirstPage;