import { arrow, blog_site_ss, cv_maker_ss, e_commerce_screenshot, todo_project_ss } from '../../../assets';
import './Projects.css';

const Projects = () => {
    return (
        <div id='projects' className="section_padding section_container">
            <div className="header_contaner section_margin">
                <div className="underline"></div>
                <h1 className="section_name">Projects</h1>
                <div className="underline"></div>
            </div>

            <div className='projectsWrapper'>
                <div className='projectWrapper'>
                    <div className='projectPreview'>
                        <img src={e_commerce_screenshot} alt="E commerce website" className='projectPreview'></img>
                        <div className='previewDecorator'></div>
                    </div>
                    <div className='projectDescription'>
                        <h1>E-Commerce</h1>
                        <div className='projectInfo'>My e-commerce website has user authentication and a shop page that displays products from an API. Users can view and add items to their cart, which calculates the total price.<br></br>With user login, API integration, and cart functionality, my e-commerce site provides a seamless shopping experience for customers.</div>
                        <hr></hr>
                        <div>
                            <p className='skillsUsed'>Built using React, Django and CSS.</p>
                            <div className='projectLinks'>
                                <div>
                                    <a className='arrow_link' href='https://shopsmooth.netlify.app'>Live Site</a>
                                    <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                </div>
                                <div>
                                    <a className='arrow_link' href='https://github.com/Wase-Zahin/e-commerce'>Github</a>
                                    <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projectWrapper'>
                    <div className='projectPreview'>
                        <img src={cv_maker_ss} alt="E commerce website" className='projectPreview'></img>
                        <div className='previewDecorator'></div>
                    </div>
                    <div className='projectDescription'>
                        <h1>CV Maker</h1>
                        <div className='projectInfo'>The project is a React-based tool that allows users to create professional resumes by inputting their information. The tool then generates a visually pleasing CV, which can be exported as a PDF.<br></br>Overall, the project provides a convenient and efficient way for users to create professional resumes with minimal effort.</div>
                        <hr></hr>
                        <div>
                            <p className='skillsUsed'>Built using React class components, CSS and react-to-print.</p>
                            <div className='projectLinks'>
                                <div>
                                    <a className='arrow_link' href='https://curriculumvitaemaker.netlify.app'>Live Site</a>
                                    <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                </div>
                                <div>
                                    <a className='arrow_link' href='https://github.com/Wase-Zahin/cv-app' target="_blank">Github</a>
                                    <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projectWrapper'>
                    <div className='projectPreview'>
                        <img src={blog_site_ss} alt="E commerce website" className='projectPreview'></img>
                        <div className='previewDecorator'></div>
                    </div>
                    <div className='projectDescription'>
                        <h1>Blog Site</h1>
                        <div className='projectInfo'>The blog site offers user login, allowing users to add blogs to their own profile and read individual blogs. Users can create their own content and share it with others.<br></br>The site provides a platform for bloggers to connect with their audience and share their ideas and experiences.</div>
                        <hr></hr>
                        <p className='skillsUsed'>Built using VueJs, Flask and CSS </p>
                        <div>
                            <div className='projectLinks'>
                                <div>
                                    <a className='arrow_link' href='https://onlinejournal.netlify.app/home'>Live Site</a>
                                    <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                </div>
                                <div>
                                    <a className='arrow_link' href='https://github.com/Wase-Zahin/full-stack'>Github</a>
                                    <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='projectWrapper'>
                    <div className='projectPreview relative'>
                        <img src={todo_project_ss} alt="Chinese website" className='projectPreview'></img>
                        <div className='previewDecorator'></div>
                    </div>
                    <div className='projectDescription'>
                        <h1>Todo App</h1> 
                        <div className='projectInfo'>a simple yet effective todo app! With the ability to add tasks to your inbox, create new projects, and remove completed tasks, this app helps keep your daily to-dos organized and on track. While it may be a basic app, its functionality and ease of use make it a valuable addition to any productivity toolkit. Check it out for yourself and streamline your task management today!</div>
                        <hr></hr>
                        <div>
                            <div>
                                <p className='skillsUsed'>Built using HTML and CSS</p>
                                <div className='projectLinks'>
                                    <div>
                                        <a className='arrow_link' href='https://todododoto.netlify.app'>Live Site</a>
                                        <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                    </div>
                                    <div>
                                        <a className='arrow_link' href='https://github.com/Wase-Zahin/todo'>Github</a>
                                        <img className='arrow_top_right' src={arrow} alt="Top right arrow"></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Projects;