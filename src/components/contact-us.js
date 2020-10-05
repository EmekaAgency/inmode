import React from "react"
import { get_img_path } from "../functions/get_images";

const ContactUs = () => {

    // TODO enlever bottom 70px et mettre toute la height, puis overflow scroll

    const [open, setOpen] = React.useState(false);
    const [formOpen, setFormOpen] = React.useState(false);
    const [msgLength, setMsgLength] = React.useState(0);

    const max_length = 300;

    const close_form = () => {
        setFormOpen(false);
        [].forEach.call(document.getElementsByClassName('contact-choice'), function(elem) {
            // elem.style.display = 'inline-block';
            // elem.style.transform = 'scale(1, 1)';
            elem.style.width = '250px';
            elem.style.margin = '0px auto';
            elem.style.transitionDelay = '0.4s';
        });
        document.getElementById('contact-form').style.width = '0px';
        document.getElementById('contact-form').style.height = '0px';
        document.getElementById('contact-form').style.transitionDelay = '0s';
        // document.getElementById('contact-form').style.transform = 'scale(0, 1)';
        // setTimeout(function () {document.getElementById('contact-form').style.display = 'none';}, 300);
    }

    const close_contact = () => {
        setOpen(false);
        document.getElementById('contact-us').classList.remove('opened');
    }

    const resolve_click = (e) => {
        e.preventDefault();
        console.log('e.currentTarget.id : ', e.currentTarget.id);
        console.log('open : ', open);
        console.log('formOpen : ', formOpen);
        if(open) {
            if(e.currentTarget.id === 'close') {
                !formOpen && close_contact();
                formOpen && close_form();
                return false;
            }
            if(e.currentTarget.id === 'piece') {
                formOpen && close_form();
                close_contact();
                return false;
            }
        }
        document.getElementById('contact-us').classList.add('opened');
        setOpen(true);
    }

    const resolve_contact = (e) => {
        e.preventDefault();
        document.getElementById('contact-type').value = e.currentTarget.id;
        [].forEach.call(document.getElementsByClassName('contact-choice'), function(elem) {
            // elem.style.transform = 'scale(0, 1)';
            // elem.style.display = 'none';
            elem.style.setProperty('width', '0px', 'important');
            elem.style.margin = '0px auto';
            elem.style.transitionDelay = '0s';
        });
        // setTimeout(function () {document.getElementById('contact-form').style.display = 'inline-block';}, 300);
        document.getElementById('contact-form').style.width = '500px';
        document.getElementById('contact-form').style.height = window.innerHeight > 480 ? '470px' : window.innerHeight - 130 + 'px';
        document.getElementById('contact-form').style.transitionDelay = '0.4s';
        // document.getElementById('contact-form').style.transform = 'scale(1, 1)';
        setFormOpen(true);

    }

    return (
        <div id="contact-us" className={`contact-us transition${open ? ' opened' : ''}`}>
            <div className="stamp transition">
                <img id="piece" className="transition" src={get_img_path('contact_us.png')} alt="contact-us" onClick={(e) => {resolve_click(e)}}/>
                <div className="content custom-scrollbar">
                    <div id="close" className="close-contact-us" onClick={(e) => {resolve_click(e)}}>
                        <img src={get_img_path('icons/closingcross.png')} alt="hexa-close"/>
                    </div>
                    <div className="contact-choice transition">
                        <div onClick={(e) => {resolve_contact(e);}} id="patient" className="patient transition">Je suis patient</div>
                        <div onClick={(e) => {resolve_contact(e);}} id="physician" className="physician transition">Je suis médecin</div>
                    </div>
                    <div id="contact-form" className="transition neumorphic custom-scrollbar" hidden={!formOpen}>
                        <form onSubmit={(e) => {e.preventDefault()}}>
                            <input id="contact-type" name="type" style={{display: 'none'}}/>
                            <input type="email" placeholder="Adresse mail" name="mail" spellCheck={false} required={true}/>
                            <label htmlFor="subject">Sélectionnez un sujet</label>
                            <select name="subject" required={true}>
                                <option value="subject-1">Sujet 1</option>
                                <option value="subject-2">Sujet 2</option>
                                <option value="subject-3">Sujet 3</option>
                            </select>
                            <textarea
                                id="contact-message"
                                type="textarea"
                                placeholder="Entrez votre message ici"
                                name="message"
                                maxLength={max_length}
                                rows={5}
                                onKeyDown={(e) => {setMsgLength(e.currentTarget.value.length);}}
                                spellCheck={false}
                                required={true}
                            ></textarea>
                            <div className="current-length" style={{color: msgLength === max_length ? '#f00' : '#fff'}}>{`${msgLength} / ${max_length}`}</div>
                            <input type="submit" placeholder="Envoyer"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

ContactUs.propTypes = {

}

ContactUs.defaultProps = {
    
}

export default ContactUs;