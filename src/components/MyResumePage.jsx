import {
  skillDataGraphic,
  skillDataProgramming,
  skillDataSoft,
} from "../raw-data/skill-data";
import { educationData } from "../raw-data/education-data";
import { experienceData } from "../raw-data/experience-data";
import { hobbiesData } from "../raw-data/hobbies-data";
import { useState } from "react";

function MyResumePage() {
  const [toggleGraphic, setToggleGraphic] = useState(false);
  const [toggleProgramming, setToggleProgramming] = useState(false);
  const [toggleSoft, setToggleSoft] = useState(false);
  const [toggleEducation, setToggleEducation] = useState(false);
  const [toggleExp, setToggleExp] = useState(false);

  return (
    <div className="container-myResumePage" id="resume">
      <h1 className="text-myResume">My Resume</h1>
      <div className="container-myResume">
        <div className="leftContent">
          {hobbiesData.map((item, index) => {
            return (
              <div className="hobbies" key={index}>
                <p>{item.name}</p>
                <img src={item.image} alt="" />
              </div>
            );
          })}
        </div>
        <hr className="hr-middle" />
        <div className="rightContent">
          <p className="text-resume-aboutme">
            Although I have experience in graphic design, I am interested in
            transitioning to the tech industry. Currently, I am pursuing a
            Full-Stack Software Developer Bootcamp to gain skills in programming
            and eventually evolve into a UI/UX design role. I am excited to
            continue learning and growing professionally in this dynamic field.
          </p>
          <div className="skills-header-container">
            <h2 className="text-h2">SKILLS</h2>
            <div className="skills-container-header">
              <div className="graphic-softskill">
                <div className="skills-container graphic">
                  <div className="btn">
                    <button
                      className="btn-skills-1"
                      onClick={() => {
                        setToggleGraphic(!toggleGraphic);
                      }}
                    >
                      Graphic
                    </button>
                    {toggleGraphic == false ? (
                      <button
                        className="btn-skills-2"
                        onClick={() => {
                          setToggleGraphic(!toggleGraphic);
                        }}
                      >
                        +
                      </button>
                    ) : (
                      <button
                        className="btn-skills-2"
                        onClick={() => {
                          setToggleGraphic(!toggleGraphic);
                        }}
                      >
                        -
                      </button>
                    )}
                  </div>
                  {toggleGraphic == true
                    ? skillDataGraphic.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="skills">
                              <div className="skills-title">
                                <img
                                  src={item.image}
                                  alt={`${item.name}-logo`}
                                />
                                <h2>{item.name}</h2>
                              </div>
                              <h2>{item.rating}</h2>
                            </div>
                            <hr />
                          </div>
                        );
                      })
                    : null}
                </div>
                <div className="skills-container softskill">
                  <div className="btn">
                    <button
                      className="btn-skills-1"
                      onClick={() => {
                        setToggleProgramming(!toggleProgramming);
                      }}
                    >
                      Soft Skills
                    </button>
                    {toggleProgramming == false ? (
                      <button
                        className="btn-skills-2"
                        onClick={() => {
                          setToggleProgramming(!toggleProgramming);
                        }}
                      >
                        +
                      </button>
                    ) : (
                      <button
                        className="btn-skills-2"
                        onClick={() => {
                          setToggleProgramming(!toggleProgramming);
                        }}
                      >
                        -
                      </button>
                    )}
                  </div>
                  {toggleProgramming == true
                    ? skillDataSoft.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="skills">
                              <div className="skills-title">
                                <img
                                  src={item.image}
                                  alt={`${item.name}-logo`}
                                />
                                <h2>{item.name}</h2>
                              </div>
                            </div>
                            <hr />
                          </div>
                        );
                      })
                    : null}
                </div>
              </div>
              <div className="skills-container programming">
                <div className="btn">
                  <button
                    className="btn-skills-1"
                    onClick={() => {
                      setToggleSoft(!toggleSoft);
                    }}
                  >
                    Programming Languages
                  </button>
                  {toggleSoft == false ? (
                    <button
                      className="btn-skills-2"
                      onClick={() => {
                        setToggleSoft(!toggleSoft);
                      }}
                    >
                      +
                    </button>
                  ) : (
                    <button
                      className="btn-skills-2"
                      onClick={() => {
                        setToggleSoft(!toggleSoft);
                      }}
                    >
                      -
                    </button>
                  )}
                </div>
                {toggleSoft == true
                  ? skillDataProgramming.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="skills">
                            <div className="skills-title">
                              <img src={item.image} alt={`${item.name}-logo`} />
                              <h2>{item.name}</h2>
                            </div>
                            <h4>{item.rating}</h4>
                          </div>
                          <hr />
                        </div>
                      );
                    })
                  : null}
              </div>
            </div>
          </div>
          <div className="education-experience-container">
            <div className="education-header-container">
              <div className="btn">
                <button
                  className="btn-topic-1"
                  onClick={() => {
                    setToggleEducation(!toggleEducation);
                  }}
                >
                  EDUCATION
                </button>
                {toggleEducation == false ? (
                  <button
                    className="btn-topic-2"
                    onClick={() => {
                      setToggleEducation(!toggleEducation);
                    }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    className="btn-topic-2"
                    onClick={() => {
                      setToggleEducation(!toggleEducation);
                    }}
                  >
                    -
                  </button>
                )}
              </div>
              {toggleEducation == true
                ? educationData.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="education-item">
                          <p>{item.date}</p>
                          <h4>{item.degree}</h4>
                          {item.department !== null ? (
                            <h3>({item.department})</h3>
                          ) : null}
                          <p>{item.name}</p>
                        </div>
                        <hr />
                      </div>
                    );
                  })
                : null}
            </div>
            <div className="experience-header-container">
              <div className="btn">
                <button
                  className="btn-topic-1"
                  onClick={() => {
                    setToggleExp(!toggleExp);
                  }}
                >
                  EXPERIENCE
                </button>
                {toggleExp == false ? (
                  <button
                    className="btn-topic-2"
                    onClick={() => {
                      setToggleExp(!toggleExp);
                    }}
                  >
                    +
                  </button>
                ) : (
                  <button
                    className="btn-topic-2"
                    onClick={() => {
                      setToggleExp(!toggleExp);
                    }}
                  >
                    -
                  </button>
                )}
              </div>
              {toggleExp == true
                ? experienceData.map((item, index) => {
                    return (
                      <div key={index}>
                        <div className="experience-item">
                          <p>{item.date}</p>
                          <h4>{item.name}</h4>
                          <p>{item.position}</p>
                          <div>
                            <p>• {item.aboutwork1}</p>
                            {item.aboutwork2 !== null ? (
                              <p>• {item.aboutwork2}</p>
                            ) : null}
                          </div>
                        </div>
                        <hr />
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
          <a
            href="https://drive.google.com/file/d/1AcyrX92wUuW1W5xIHphSx-Wm3SpFj8Cg/view?usp=share_link"
            target="_blank"
          >
            <button className="btn-download-resume">Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyResumePage;
