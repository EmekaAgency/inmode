import React from "react";
import { useWindowSize } from "../functions/window-size";
import { disableMainScroll, enableMainScroll } from "../functions/disable-scroll";
import { useImages } from './contexts/images-provider';

const ContactUs = () => {

    const images = useImages();

    const [open, setOpen] = React.useState(false);
    const [formOpen, setFormOpen] = React.useState(false);
    const [msgLength, setMsgLength] = React.useState(0);
    const size = useWindowSize();

    const max_length = 300;

    const close_form = () => {
        setFormOpen(false);
        [].forEach.call(document.getElementsByClassName('contact-choice'), function(elem) {
            elem.style.width = '250px';
            elem.style.margin = '0px auto';
            elem.style.transitionDelay = '0.4s';
        });
        document.getElementById('contact-form').classList.remove('custom-scrollbar');
        document.querySelector('#contact-form .req-return.success').innerHTML = "";
        document.querySelector('#contact-form .req-return.error').innerHTML = "";
    }

    const resolve_click = (e) => {
        e.preventDefault();
        // WILL OPEN
        !formOpen && resolve_contact();
        !formOpen && size.width <= 480 && disableMainScroll();
        // WILL CLOSE
        formOpen && close_form();
        formOpen && size.width <= 480 && enableMainScroll();
        setOpen(!open);
        document.getElementById('contact-us').classList.toggle('opened');
        setFormOpen(!formOpen);
    }

    const resolve_contact = (e) => {
        [].forEach.call(document.getElementsByClassName('contact-choice'), function(elem) {
            elem.style.setProperty('width', '0px', 'important');
            elem.style.margin = '0px auto';
            elem.style.transitionDelay = '0s';
        });
        document.getElementById('contact-form').classList.add('custom-scrollbar');
        setFormOpen(true);
    }

    const [submitText, setSubmitText] = React.useState('Envoyer');

    function send_form ( e ) {
        e.preventDefault();
        let body = new Object({});
        Array.from(document.forms['contact-mini'].elements).map((elem) => {
            body[elem.name] = elem.checked || elem.value;
        });
        body.action = "contact-us";
        var myHeaders = new Headers();
        const fetch_post = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default'
        };
        fetch(
            `https://inmodemd.fr/back/app.php`,
            {
                ...fetch_post,
                body: JSON.stringify(body)
            }
        )
        .then((promise) => {
            return promise.json();
            }
        )
        .then((response) => {
            if(response.status === 'success' && response.type === 'client') {
                document.querySelector('#contact-mini .req-return.success').innerHTML = response.message;
                document.forms['contact-mini'].reset();
            }
            if(response.status === 'fail' && response.type === 'client') {
                setSubmitText(response.message);
                document.querySelector('#contact-mini .submit').setAttribute('disabled', true);
                document.querySelector('#contact-mini .req-return.success').innerHTML = "Une erreur d'envoi du message est survenu. Essayez de raffraîchir la page ou de contacter un administrateur.";
            }
            if(response.status === 'fail' && response.type === 'server') {
                document.querySelector('#contact-mini .submit').setAttribute('disabled', true);
                document.querySelector('#contact-mini .req-return.error').innerHTML = response.message;
            }
        })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
          });;
    }

    return (
        <div id="contact-us" className={`contact-us transition${open ? ' opened' : ''}`}>
            <div className="stamp transition">
                <img
                    id="piece"
                    className="transition"
                    src={images.getOne('contactUsPiece').childImageSharp.fluid.srcWebp}
                    srcSet={images.getOne('contactUsPiece').childImageSharp.fluid.srcSetWebp}
                    alt="contact-us"
                    onClick={(e) => {resolve_click(e)}}
                />
                <div className="content">
                    <div id="close" className="close-contact-us transition" onClick={(e) => {resolve_click(e)}}>
                        <img
                            src={images.getOne('hexagonalCross').childImageSharp.fluid.srcWebp}
                            srcSet={images.getOne('hexagonalCross').childImageSharp.fluid.srcSetWebp}
                            alt="hexa-close"
                        />
                    </div>
                    <div id="contact-form" className="transition neumorphic custom-scrollbar" hidden={!formOpen}>
                        <form id="contact-mini" onSubmit={(e) => {send_form(e)}} className="custom-scrollbar">
                            <input type="text" placeholder="Nom" name="lastname" required={true}/>
                            <input type="text" placeholder="Prénom" name="firstname" required={true}/>
                            <select name="subject" required={true}>
                                <option value="" selected disabled>Choisir une spécialité</option>
                                <option value="plastic-surgeon">Chirurgien plasticien</option>
                                <option value="facial-surgeon">Chirurgien maxillo-facial</option>
                                <option value="dermatologist">Dermatologue</option>
                                <option value="cosmetic-doctor">Médecin esthétique</option>
                                <option value="gynecologist">Gynécologue</option>
                                <option value="others">Autres</option>
                            </select>
                            <input type="email" placeholder="Adresse mail" name="mail" spellCheck={false} required={true}/>
                            <input type="phone" placeholder="Téléphone" name="phone" spellCheck={false} required={true} pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"/>
                            <input type="text" placeholder="Code postal" name="zip" spellCheck={false} required={true}/>
                            <input type="text" placeholder="Ville" name="city" spellCheck={false} required={true}/>
                            <textarea
                                id="contact-message-mini"
                                type="textarea"
                                placeholder="Entrez votre message ici"
                                name="message"
                                maxLength={max_length}
                                rows={5}
                                onKeyUp={(e) => {setMsgLength(e.currentTarget.value.length);}}
                                onKeyDown={(e) => {setMsgLength(e.currentTarget.value.length);}}
                                spellCheck={false}
                                required={true}
                                className="custom-scrollbar"
                            ></textarea>
                            <div className="current-length" style={{color: msgLength === max_length ? '#f00' : '#59b7b3'}}>{`${msgLength} / ${max_length}`}</div>
                            <div className="req-return success" style={{color: '#59b7b3', fontSize: 15, fontWidth: 400}}></div>
                            <div className="req-return error" style={{color: 'red', fontSize: 15, fontWidth: 400}}></div>
                            <input type="submit" className="submit" placeholder={submitText}/>
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