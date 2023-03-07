import React, { useEffect, useState } from 'react';
import { arrow, linkedin_icon, wechat_icon } from '../../../assets';
import './Contact.css';
import WechatQR from './WechatQR';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
    const [popupOpen, setPopupOpen] = useState(false);
    const [state, handleSubmit] = useForm("mayzjayr");

    useEffect(() => {
        if (state.succeeded) {
            alert('Your message has been sent. Thank you!');
        }
    }, [state.succeeded]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        handleSubmit(event);
        event.target.reset(); // Reset the form
    };

    const togglePopup = () => {
        setPopupOpen(!popupOpen);
    }

    useEffect(() => {
        const overlay = document.querySelector(".overlay");

        const closePopup = () => {
            setPopupOpen(false);
            overlay.style.display = "none";
        };

        if (popupOpen) {
            overlay.style.display = "block";
            overlay.addEventListener("click", closePopup);
        } else {
            overlay.style.display = "none";
            overlay.removeEventListener("click", closePopup);
        }
    }, [popupOpen]);

    return (
        <div id="contact" className='section_padding'>
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
                            onClick={togglePopup}
                            className='wechat'
                            alt='wechat icon'>
                        </img>
                        <a href='https://www.linkedin.com/in/zahin1010101/'>
                            <img className='linkedIn' src={linkedin_icon} alt="LinkedIn Icon">

                            </img>
                        </a>
                    </div>
                </div>

                <form onSubmit={handleFormSubmit}>
                    <input
                        placeholder='Name'
                        id='name'
                        type='name'
                        name='name'
                    />
                    <ValidationError
                        prefix='Name'
                        field='name'
                        errors={state.errors}
                    />
                    <input
                        placeholder='Email'
                        id="email"
                        type="email"
                        name="email"
                    />
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                    <textarea
                        rows="8"
                        placeholder='Message'
                        id="message"
                        name="message"
                    />
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                    <div className='submitDiv'>
                        <button className='arrow_link' type="submit" disabled={state.submitting}>
                            Submit
                        </button>
                        <img className='arrow_top_right send' src={arrow} alt="Top right arrow"></img>
                    </div>
                </form>
            </div>
            <WechatQR popupOpen={popupOpen}></WechatQR>
        </div>
    )
}
