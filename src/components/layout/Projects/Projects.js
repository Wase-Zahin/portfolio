import './Projects.css';

const Projects = () => {
    return (
        <div className="section_padding">
            <div className="header_contaner section_margin">
                    <div className="underline"></div>
                    <h1 className="section_name">Projects</h1>
                    <div className="underline"></div>
                </div>
            
            <div id='projects'>
                <div className='projectWrapper'>
                    <div className='projectPreview'>
                        <img src={require("../../Icons&Images/Screenshot_1.png")} alt="Chinese website" className='projectPreview'></img>
                        <div className='previewDecorator'></div>
                    </div>
                    <div className='projectDescription'>
                        <h1>Kaixinwang</h1>
                        <div className='projectInfo'>This is a Chinese website created using only HTML and CSS, featuring gaming content and advertising. The project provided the opportunity to develop skills in design, advertising, and project management, and may have also imparted knowledge about website hosting and content curation. Despite its simplicity, the website serves as a valuable learning experience for those interested in web development and content creation.</div>
                        <hr className='descripttionLine'></hr>
                        <p className='skillsUsed'>Built using HTML and CSS</p>
                    </div>
                </div>

                <div className='projectWrapper'>
                    <div className='projectPreview'>
                        <img src={require("../../Icons&Images/Screenshot_2.png")} alt="E commerce website" className='projectPreview'></img>
                        <div className='previewDecorator'></div>
                    </div>
                    <div className='projectDescription'></div>
                </div>
                {/* <div className='projectWrapper'>
                    <div className='projectPreview'></div>
                    <div className='projectDescription'>

                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Projects;