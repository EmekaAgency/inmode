import React from "react"
import { graphql, useStaticQuery } from "gatsby";

const ContactUs = () => {

    const [icons] = React.useState(useStaticQuery(graphql`
        {
            piece: file(relativePath: {eq: "contact_us.png"}) {
                childImageSharp {
                    fluid {
                        srcSet
                        srcSetWebp
                    }
                }
            }
            close: file(relativePath: { eq: "icons/closingcross.png"}) {
                childImageSharp {
                    fluid {
                        srcSet
                        srcSetWebp
                    }
                }
            }
        }
    `));

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
        // if(open) {
        //     if(e.currentTarget.id === 'close') {
        //         !formOpen && close_contact();
        //         formOpen && close_form();
        //         return false;
        //     }
        //     if(e.currentTarget.id === 'piece') {
        //         formOpen && close_form();
        //         close_contact();
        //         return false;
        //     }
        // }
        // document.getElementById('contact-us').classList.add('opened');
        // setOpen(true);
        !formOpen && resolve_contact();
        formOpen && close_form();
        setOpen(!open);
        document.getElementById('contact-us').classList.toggle('opened');
        setFormOpen(!formOpen);
    }

    const resolve_contact = (e) => {
        // e.preventDefault();
        // document.getElementById('contact-type').value = e.currentTarget.id;
        [].forEach.call(document.getElementsByClassName('contact-choice'), function(elem) {
            // elem.style.transform = 'scale(0, 1)';
            // elem.style.display = 'none';
            elem.style.setProperty('width', '0px', 'important');
            elem.style.margin = '0px auto';
            elem.style.transitionDelay = '0s';
        });
        // setTimeout(function () {document.getElementById('contact-form').style.display = 'inline-block';}, 300);
        document.getElementById('contact-form').style.width = '580px';
        document.getElementById('contact-form').style.height = window.innerHeight > 480 ? '470px' : window.innerHeight - 130 + 'px';
        // document.getElementById('contact-form').style.transitionDelay = '0.4s';
        document.getElementById('contact-form').style.transitionDelay = '0s';
        // document.getElementById('contact-form').style.transform = 'scale(1, 1)';
        setFormOpen(true);

    }

    return (
        <div id="contact-us" className={`contact-us transition${open ? ' opened' : ''}`}>
            <div className="stamp transition">
                <img
                    id="piece"
                    className="transition"
                    src={icons.piece.childImageSharp.fluid.srcWebp}
                    srcSet={icons.piece.childImageSharp.fluid.srcSetWebp}
                    alt="contact-us"
                    onClick={(e) => {resolve_click(e)}}
                />
                <div className="content">
                    <div id="close" className="close-contact-us transition" onClick={(e) => {resolve_click(e)}}>
                        <img
                            src={icons.close.childImageSharp.fluid.srcWebp}
                            srcSet={icons.close.childImageSharp.fluid.srcSetWebp}
                            alt="hexa-close"
                        />
                    </div>
                    {/* <div className="contact-choice transition"> */}
                        {/* <div onClick={(e) => {resolve_contact(e);}} id="patient" className="patient transition">Je suis patient</div> */}
                        {/* <div onClick={(e) => {resolve_contact(e);}} id="physician" className="physician transition">Je suis médecin</div> */}
                    {/* </div> */}
                    <div id="contact-form" className="transition neumorphic custom-scrollbar" hidden={!formOpen}>
                        <form onSubmit={(e) => {e.preventDefault()}} className="custom-scrollbar">
                            {/* <input id="contact-type" name="type" style={{display: 'none'}}/> */}
                            <input type="text" placeholder="Nom" name="lastname" required={true}/>
                            <input type="text" placeholder="Prénom" name="firstname" required={true}/>
                            <label htmlFor="subject">Sélectionnez un sujet</label>
                            <select name="subject" required={true}>
                                <option value="" disabled selected>Choisir une spécialité</option>
                                <option value="plastic-surgeon">Chirurgien plasticien</option>
                                <option value="facial-surgeon">Chirurgien maxillo-facial</option>
                                <option value="dermatologist">Dermatologue</option>
                                <option value="cosmetic-doctor">Médecin esthétique</option>
                                <option value="gynecologist">Gynécologue</option>
                                <option value="others">Autres</option>
                            </select>
                            <input type="email" placeholder="Adresse mail" name="mail" spellCheck={false} required={true}/>
                            <input type="phone" placeholder="Téléphone" name="phone" spellCheck={false} required={true}/>
                            <input type="zip" placeholder="Code postal" name="zip" spellCheck={false} required={true}/>
                            <input type="city" placeholder="Ville" name="city" spellCheck={false} required={true}/>
                            <textarea
                                id="contact-message"
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