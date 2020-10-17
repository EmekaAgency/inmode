import { Link } from "gatsby";
import React from "react";
import { useWindowSize } from "../../functions/window-size";
import SelectCountry from "../select-country";

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

const ContactForm = ({ from }) => {

    const size = useWindowSize();

    React.useEffect(() => {
        resize_panel(
            document.getElementById("accordion"),
            !document.getElementById("title-accordion").classList.contains("opened")
        );
    }, [size.width]);

    const [msgLength, setMsgLength] = React.useState(0);
    const [maxHeight, setMaxHeight] = React.useState(0);

    const send_form = ( e ) => {
        e.preventDefault();
    }

    const resolveClick = ( e ) => {
        e.currentTarget.classList.toggle('opened');
        var panel = e.currentTarget.nextElementSibling;
        resize_panel(panel, !e.currentTarget.classList.contains('opened'));
    }

    const resize_panel = ( panel, close = false ) => {
        console.log(panel.classList);
        console.log(close);
        panel.classList.contains('opened') && close && panel.classList.remove('opened');
        !panel.classList.contains('opened') && !close && panel.classList.add('opened');
        if (maxHeight && close) {
            setMaxHeight(null);
        }
        else {
            panel.classList.contains("opened") && setMaxHeight(panel.scrollHeight + "px");
        }
    }
    
    const max_length = 800;

    return (
        <form name="contact" method="post" onSubmit={(e) => {send_form(e);}} className={`contact-form main-container ${from}`}>
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
                    <input type="text" name="company" required/>
                </div>
                <div className="field">
                    <label htmlFor="speciality">Spécialité</label>
                    <select name="speciality" required>
                        <option defaultValue="" disabled selected>Choisir une spécialité</option>
                        <option value="Aesthetic Medecine">Aesthetic Medecine</option>
                        <option value="Anti-Aging">Anti-Aging</option>
                        <option value="Lasers">Lasers</option>
                        <option value="Plastic Surgery">Plastic Surgery</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="ENT">ENT</option>
                        <option value="Family/General Practice">Family/General Practice</option>
                        <option value="Internal Medecine">Internal Medecine</option>
                        <option value="Medical Spa">Medical Spa</option>
                        <option value="OB/GYN">OB/GYN</option>
                        <option value="General Surgery">General Surgery</option>
                        <option value="Weight Loss">Weight Loss</option>
                        <option value="Other">Other</option>
                    </select>
                </div>
                <div className="field">
                    <label htmlFor="mail">Email</label>
                    <input type="email" name="mail" required/>
                </div>
                <div className="field">
                    <label htmlFor="phone_number">Téléphone</label>
                    <input type="tel" name="phone_number" required/>
                </div>
                <div className="field">
                    <label htmlFor="zip">Code postal</label>
                    <input type="text" name="zip" required/>
                </div>
                <div className="field">
                    <label htmlFor="country">Pays</label>
                    <SelectCountry/>
                </div>
            </div>
            <div className="message-zone">
                <textarea
                    id="contact-message"
                    type="contact-message"
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
                    className="title transition"
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
                                    <input type="checkbox" id={tech} name={tech} value={key}/>
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
                <input type="checkbox" id="policy" name="policy" value="policy"/>
                <label htmlFor={"policy"}>J'accepte les <Link href="privacy-policy" target="_blank">conditions générales d'utilisation</Link></label>
            </div>
            <input type="submit" className="transition" placeholder="Envoyer"/>
        </form>
    );
}

ContactForm.propTypes = {

};

ContactForm.defaultProps = {

};

export default ContactForm;