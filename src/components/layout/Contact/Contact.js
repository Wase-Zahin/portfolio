import React from 'react';
import { linkedin_icon, wechat_icon } from '../../../assets';
import './Contact.css';

export default function Contact() {
    return (
        <div className='section_padding section_container'>
            <div className="header_contaner section_margin">
                <div className="underline"></div>
                <h1 className="section_name">Contact</h1>
                <div className="underline"></div>
            </div>
            <div className='project_contents'>
                <div className='contact_links_wrapper'>
                    <p className='contact_text'>If you have an opportunity to share, or would like to discuss anything, please feel free to contact me.</p>
                    <div className='contact_links'>
                        <img src={wechat_icon}
                            className='wechat'
                            alt='wechat icon'>
                        </img>
                        <a href='https://www.linkedin.com/in/zahin1010101/'>
                            <img src={linkedin_icon} />
                        </a>
                    </div>
                </div>
                
                <form>
                    <input placeholder='Name'></input>
                    <input placeholder='Email'></input>
                    <textarea placeholder='Message' rows="8"></textarea>
                    <button>Send</button>
                </form>
            </div>
        </div>
    )
}
