import React from 'react';

import './contact.css';

const Contact = (props) => {
    return(
        <div className='form__container'>
            <div onClick={() => {
                props.toggleForm(false);
            }} className='form__container__close'>X</div>
            <form action="https://submit-form.com/RAUZBtHOTWZCx6zuoSsk_" target="_self" className='form'>
                <input 
                    type="text" 
                    name="name" 
                    placeholder="Name" 
                    className='form__input form__name'/>
                <input
                    type="hidden"
                    name="_redirect"
                    value="https://kjcdevelopment.com/"
                />
                <input 
                    type='checkbox' 
                    name='definitelynotfishingforbots' 
                    style={{display: 'none'}} tabIndex='-1' 
                    autoComplete='off'
                />
                <textarea 
                    name="message" 
                    placeholder="Message" 
                    className='form__input form__message'>
                 </textarea>
                <input type="text" name="email" placeholder="Email" className='form__input form__email'/>
                <button type="submit" onSubmit={() => {
                    props.toggleForm(false);
                }} className='form__button'>Submit</button>
            </form>
        </div>
    );
}

export default Contact;