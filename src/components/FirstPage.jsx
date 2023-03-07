import iconFB from "../assets/icon-fb.png"
import iconIN from "../assets/icon-in.png"
import iconGithub from "../assets/icon-github.png"

function FirstPage () {
    
    return (
        <div className="container-firstPage">
            <div className="container-profile">
                <div className="container-profile-leftContent">
                    <p>JUNIOR SOFTWARE DEVELOPER</p>
                    <h1>SORACHAK</h1>
                    <h1>BEST</h1>
                </div>
                <img src="https://cdn.discordapp.com/attachments/526468920123719683/1082524938063314964/goldenBird.png" alt="profile-image" />
                <div className="container-profile-rightContent">
                    <hr />
                    <div className="profile-aboutMe">
                        <p>I'm a junior software developer based in Bangkok and I particularly enjoy solving problems with code. I also love playing games, watching series & listening to music.</p>
                        <div className="profile-icon">
                            <a href="https://www.facebook.com"><img src={iconFB} alt="facebook-icon" /></a>
                            <a href="https://www.linkedin.com"><img src={iconIN} alt="linkedin-icon" /></a>
                            <a href="https://github.com"><img src={iconGithub} alt="github-icon" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FirstPage;