import React from 'react';
import '../style/SkillsComponent.css';

import ni from './nine.png';

class SkillsComponent extends React.Component {
    render() {
        return (
            <div className='fcont'>
                <div className="images-container">
                    <img className="nine" src={ni} alt="nine" style={{ width: '1700px', height: '1100px' }} />
                </div>
                <section className="cont-container">
                    <div className="content-ccontainer">
                        <div className="texthead">
                            Great Experience
                        </div>
                        <div className="textdark">
                            Fill appear won’t may make moveth signs. Fourth. Good own. Green you’re moveth us, lesser.
                        </div>
                        <DesigningSkills />
                    </div>
                </section>
            </div>
        );
    }
}

function DesigningSkills() {
    return (
        <section className="col">
            <div className="sub-title">
                <h2>Designing Skills</h2>
            </div>

            <div className="skills-container">
                <div className="skill">
                    <div className="subject">WEB DESIGN</div>
                    <div className="progress-bar" value="82%">
                        <div className="progress-line" style={{ maxWidth: '82%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">FIGMA</div>
                    <div className="progress-bar" value="74%">
                        <div className="progress-line" style={{ maxWidth: '74%' }}></div>
                    </div>
                </div>

                <div className="skill">
                    <div className="subject">WORDPRESS</div>
                    <div className="progress-bar" value="63%">
                        <div className="progress-line" style={{ maxWidth: '63%' }}></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillsComponent;
