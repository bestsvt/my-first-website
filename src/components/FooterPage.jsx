import iconFB from "../assets/icon-fb.png"
import iconIN from "../assets/icon-in.png"
import iconGithub from "../assets/icon-github.png"

function FooterPage () {
    
    return (
        <div className="container-footerPage">
                <div>
                    <a href="https://www.facebook.com/Sorachak.Best" target="_blank"><img src={iconFB} alt="facebook-icon" /></a>
                    <a href="https://www.linkedin.com/in/sorachak-vatjanajaroenrat-822b54240/" target="_blank"><img src={iconIN} alt="linkedin-icon" /></a>
                    <a href="https://github.com/bestsvt" target="_blank"><img src={iconGithub} alt="github-icon" /></a>
                </div>
                <p>Copyright © 2023 Sorachak Vatjanajaroenrat.</p>
                <p>Designed by Best</p>

        </div>
    )
}

export default FooterPage;