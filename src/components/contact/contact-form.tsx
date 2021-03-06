import React from "react";
import { Link } from "gatsby";
import { useWindowSize } from "../../functions/window-size";
import SelectCountry from "../select-country";
import { AnchorLink } from "gatsby-plugin-anchor-links";

const tech_list = [
    "MORPHEUS8 | FACIAL AND BODY FRACTIONAL REMODELING",
    "ACCUTITE | PRECISION CONTOURING",
    "BODYFX & MINIFX | NON-INVASIVE BODY TREATMENT",
    "BODYTITE/FACETITE | MINIMALLY INVASIVE PROCEDURES",
    "DIOLAZEXL | HAIR REMOVAL",
    "EMBRACERF | FACIAL REFINEMENT",
    "EVOKE | HANDS-FREE FACIAL REMODELING",
    "EVOLVE | HANDS-FREE SKIN AND BODY REMODELING",
    "FORMA | SKIN REMODELING",
    "FRACTORA | FRACTIONAL RESURFACING",
    "LUMECCA | PIGMENT & VASCULAR",
    "PLUS | SKIN REMODELING FOR LARGER AREAS",
    "TRITON | DUOLIGHT/DUODARK | HAIR REMOVAL",
    "VOTIVA | AVIVA | FEMININE WELLNESS"
];

const ContactForm = ({ from }:ContactForm) => {

    const size = useWindowSize();

    const resize_panel = (panel:Element | null, close:HTMLElement | null) => {
        let closed:boolean = close != null ? close.classList.contains("opened") : false;
        panel && panel.classList.contains('opened') && closed && panel.classList.remove('opened');
        panel && !panel.classList.contains('opened') && !closed && panel.classList.add('opened');
        if (maxHeight && close) {
            setMaxHeight(0);
        }
        else {
            panel && panel.classList.contains("opened") && setMaxHeight(parseInt(panel.scrollHeight + "px", 10));
        }
    }

    React.useEffect(() => {
        resize_panel(
            document.getElementById("accordion"),
            document.getElementById("title-accordion")
        );
    }, [size.width]);

    const [msgLength, setMsgLength] = React.useState(0);
    const [maxHeight, setMaxHeight] = React.useState(0);

    const [submitText, setSubmitText] = React.useState('Envoyer');

    function send_form (e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        document.querySelector('#full-contact-form .req-return.success').innerHTML = "";
        document.querySelector('#full-contact-form .req-return.error').innerHTML = "";
        document.querySelector('#full-contact-form .submit').setAttribute('disabled', true);
        let body:any = new Object({});
        if(document.forms["full-contact-form"] == null) {
            return false;
        }
        Array.from(document.forms["full-contact-form"].elements).map((elem:HTMLInputElement | any) => {
            body[elem.name] = elem.checked || elem.value;
        });
        body.action = "full-contact";
        var myHeaders = new Headers();
        const request_init:RequestInit = {
            method: 'POST',
            headers: myHeaders,
            mode: 'cors',
            cache: 'default',
            body: JSON.stringify(body),
        };
        fetch(
            `https://inmodemd.fr/back/app.php`,
            request_init,
        )
        .then((promise) => {
            return promise.json();
            }
        )
        .then((response) => {
            if(response.status === 'success' && response.type === 'client') {
                document.querySelector('#full-contact-form .submit').removeAttribute('disabled');
                document.querySelector('#full-contact-form .req-return.success').innerHTML = response.message;
                document.forms['full-contact-form'].reset();
            }
            if(response.status === 'fail' && response.type === 'client') {
                setSubmitText(response.message);
                document.querySelector('#full-contact-form .submit').setAttribute('disabled', true);
                document.querySelector('#full-contact-form .req-return.success').innerHTML = "Une erreur d'envoi du message est survenu. Essayez de raffraîchir la page ou de contacter un administrateur.";
            }
            if(response.status === 'fail' && response.type === 'server') {
                document.querySelector('#full-contact-form .submit').setAttribute('disabled', true);
                document.querySelector('#full-contact-form .req-return.error').innerHTML = response.message;
            }
        })
        .catch(function(error) {
            console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
          });;
    }

    const resolveClick = (e:React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
        e.currentTarget.classList.toggle('opened');
        var panel = e.currentTarget.nextElementSibling;
        resize_panel(panel, e.currentTarget);
    }
    
    const max_length = 800;

    return (
        <form id="full-contact-form" name="contact" onSubmit={(e) => {send_form(e);}} className={`contact-form main-container ${from}`}>
            <div className="mailer-datas">
                <div className="field">
                    <label htmlFor="lastname">Nom</label>
                    <input type="text" name="lastname" required/>
                </div>
                <div className="field">
                    <label htmlFor="firstname">Prénom</label>
                    <input type="text" name="firstname" required/>
                </div>
                <div className="field">
                    <label htmlFor="company">Société</label>
                    <input type="text" name="company"/>
                </div>
                <div className="field">
                    <label htmlFor="speciality">Choisir une spécialité</label>
                    <select name="speciality" required={true}>
                        <option value="plastic-surgeon" selected>Chirurgien plasticien</option>
                        <option value="facial-surgeon">Chirurgien maxillo-facial</option>
                        <option value="dermatologist">Dermatologue</option>
                        <option value="cosmetic-doctor">Médecin esthétique</option>
                        <option value="gynecologist">Gynécologue</option>
                        <option value="others">Autres</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="mail">Email</label>
                    <input spellCheck={false} type="email" name="mail" required/>
                </div>
                <div className="field">
                    <label htmlFor="phone_number">Téléphone</label>
                    <input spellCheck={false} type="tel" name="phone_number" required pattern="^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$"/>
                </div>
                <div className="field">
                    <label htmlFor="address">Adresse</label>
                    <input spellCheck={false} type="text" name="address" required/>
                </div>
                <div className="field">
                    <label htmlFor="zip">Code postal</label>
                    <input spellCheck={false} type="text" name="zip" required/>
                </div>
                <div className="field">
                    <label htmlFor="city">Ville</label>
                    <input spellCheck={false} type="text" name="city" required/>
                </div>
                <div className="field">
                    <label htmlFor="country">Pays</label>
                    <SelectCountry/>
                </div>
            </div>
            <div className="message-zone">
                <textarea
                    id="contact-message"
                    placeholder="Entrez votre message ici"
                    name="message"
                    className="custom-scrollbar"
                    maxLength={max_length}
                    rows={15}
                    onKeyUp={(e) => {setMsgLength(e.currentTarget.value.length);}}
                    onKeyDown={(e) => {setMsgLength(e.currentTarget.value.length);}}
                    spellCheck={false}
                    required
                >
                </textarea>
                <div
                    className="current-length"
                    style={{color: msgLength === max_length ? '#f00' : '#59b7b3'}}
                >
                    {`${msgLength} / ${max_length}`}
                </div>
            </div>
            <div className="tech-list">
                <span
                    id="title-accordion"
                    className="title title-accordion transition"
                    onClick={(e) => {resolveClick(e);}}
                >
                    Quelles technologies vous intéressent ?
                </span>
                <div
                    id="accordion"
                    className="accordion transition"
                    style={{maxHeight: maxHeight}}
                >
                    {tech_list.map((tech, key) => {
                        return (
                            <div key={key} className="key-check">
                                <label htmlFor={tech}>
                                    <input type="checkbox" id={tech} name={tech}/>
                                    {tech}
                                </label>
                            </div>
                        );
                    })}
                    <hr/>
                </div>
            </div>
            {/* <div className="newsletter">
                <input type="checkbox" id="mail_list" name="mail_list" value="mail_list"/>
                <label htmlFor={"mail_list"}>S'abonner à la newsletter</label>
            </div> */}
            <div className="policy">
                <input type="checkbox" id="policy" name="policy" value="policy" required/>
                <label htmlFor={"policy"}>J'accepte les <a href="/mentions-legales#cgu" target="_blank" title="Conditions générales d'utilisation">conditions générales d'utilisation</a></label>
            </div>
            <div className="req-return success" style={{color: '#59b7b3', fontSize: 15, fontWeight: 400}}></div>
            <div className="req-return error" style={{color: 'red', fontSize: 15, fontWeight: 400}}></div>
            <input type="submit" className="submit transition" placeholder={submitText}/>
        </form>
    );
};

interface ContactForm {
    from: string;
};

export default ContactForm;