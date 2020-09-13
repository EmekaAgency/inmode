import React from "react"
import { get_img_path } from "../functions/get_images";

const ContactUs = () => {

    const [open, setOpen] = React.useState(false);

    const resolve_click = (e) => {
        e.preventDefault();
        console.log(open);
        if(open) {
            document.getElementById('contact-us').classList.remove('opened');
            setOpen(false);
            return false;
        }
        document.getElementById('contact-us').classList.add('opened');
        setOpen(true);
    }


    return (
        <div id="contact-us" className={`contact-us${open ? ' opened' : ''}`}>
            <div className="stamp transition">
                <img src={get_img_path('/icons/contact_us.png')} alt="contact-us" onClick={(e) => {resolve_click(e)}}/>
                <div className="content">
                    <div className="close-contact-us transition" onClick={(e) => {resolve_click(e)}}>
                        {/* <img href={get_img_path('/icons/hexa-close.svg')} alt="hexa-close"/> */}
                        <img src={get_img_path('/icons/icons/close-white.webp')} alt="hexa-close"/>
                    </div>
                    <div className="patient transition">Je suis patient</div>
                    <div className="physician transition">Je suis médecin</div>
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