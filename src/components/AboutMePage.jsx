import { interestData } from "../raw-data/interest-data";

function AboutMePage () {
    
    return (
        <div className="container-aboutMePage" id="about-me">
            <div className="contanier-aboutme-top">
                <div>
                    <p>Born in</p>
                    <h2>Bangkok</h2>
                </div>
                <div>
                    <p>Experience</p>
                    <h2>0 Year</h2>
                </div>
                <div>
                    <p>Date of Birth</p>
                    <h2>19 June 2000</h2>
                </div>
            </div>
            <h1 className="text-about-me">About Me</h1>
            <div className="container-aboutme">
                <div className="leftContent">
                    <h2>Interested</h2>
                    {interestData.map((item,index)=> {
                        return (
                    <div className="interesting-item" key={index}>
                        <img src={item.image} alt={`${item.name}-image`} />
                        <p>{item.name}</p>
                    </div>
                        )
                    })}
                </div>
                <hr />
                <div className="rightContent">
                    <p>My name is Sorachak Vatjanajaroenrat</p> 
                    <p>As a recent graduate in Imaging and Printing Technology from Chulalongkorn University, I am passionate about graphic design and have completed an internship in a graphic design position. I possess strong skills in graphic design, including proficiency in Adobe Creative Suite.</p>
                    <p>Currently, I am enrolled in a Full-Stack Software Developer Bootcamp to expand my knowledge and skills in programming. I am eager to learn and grow in the field of technology and design.</p>
                    <p className="signature">Sorachak</p>
                </div>
            </div>
        </div>
    )
}

export default AboutMePage;