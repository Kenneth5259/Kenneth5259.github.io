import React from 'react';

import './contact.css';

const Contact = (props) => {
    return(
        <div onClick={() => {
            props.toggleForm(false);
        }} className='form__container'>
            <form action="https://submit-form.com/RAUZBtHOTWZCx6zuoSsk_" target="_self" className='form'>
                <input type="text" name="subject" placeholder="Name" className='form__input form__name'/>
                <input type='checkbox' name='definitelynotfishingforbots' style={{display: 'none'}} tabIndex='-1' autoComplete='off'/>
                <textarea name="message" placeholder="Message" className='form__input form__message'></textarea>
                <input type="text" name="email" placeholder="Email" className='form__input form__email'/>
                <button type="submit" onClick={() => {
                    props.toggleForm(false);
                }} className='form__button'>Submit</button>
            </form>
        </div>
    );
}

export default Contact;