import React from "react"
import { get_img_path } from "../functions/get_images";

const PrivacyPolicy = () => {

    const [open, setOpen] = React.useState(false);
    // const [acceptAnalytics, setAcceptAnalytics] = React.useState(false);
    // const [acceptAnalytics] = React.useState(true);
    // const [acceptCookies, setAcceptCookies] = React.useState(false);
    const [acceptCookies, setAcceptCookies] = React.useState(true);

    
    const process_cookies = (e) => {
        if(open) {
            setOpen(false);
            setAcceptCookies(true)
        }
        else if(!open) {
            setOpen(true);
        }
    }
    
    (!acceptCookies && !open) && setTimeout(() => {setOpen(true);}, 1000);

    return (
        <div className={`privacy-policy transition${open ? ' opened' : ''}`}>
            <button className="open-button" onClick={(e) => {process_cookies(e);}}>
                <img className="main" src={get_img_path('privacy-icon.svg')} alt="privacy-triangle"/>
                <img className="content" src={get_img_path('privacy-c.png')} alt="privacy-icon"/>
            </button>
            <div className="panel cookies transition custom-scrollbar">
                <div className="cookies-our-use">
                    <div className="cookies-title">Our use of cookies</div>
                    <div className="cookies-text">We use necessary cookies to make our site work. We'd also like to set optional analytics cookies to help us improve it. We won't set optional cookies unless you enable them. Using this tool will set a cookie on your device to remember your preferences.</div>
                    <div className="cookies-divider"></div>
                </div>
                <div className="cookies-necessaries">
                    <div className="cookies-title">Necessary cookies</div>
                    <div className="cookies-text">Necessary cookies enable core functionality such as security, network management, and accessibility. You may disable these by changing your browser settings, but this may affect how the website functions. For more information please see our <a href="#">cookie policy</a>.</div>
                    <div className="cookies-divider"></div>
                </div>
                <div className="cookies-analytics">
                    <div className="cookies-title">Analytics cookies</div>
                    {/* TODO faire un component SWITCH */}
                    <div className="switch-component">
                        <input type="checkbox" name="onoffswitch" className="switch-checkbox" id="onoffswitch"/>
                        <label className="switch" htmlFor="onoffswitch">
                            <span className="switch-inner"></span>
                            <span className="switch-switch"></span>
                        </label>
                    </div>
                    <div className="cookies-text">We'd like to set Google Analytics cookies to help us to improve our website by collecting and reporting information on how you use it. For more information on how these cookies work please see our <a href="#">'Cookies page'</a>. The cookies collect information in an anonymous form.</div>
                </div>
                <div className="accept-close" onClick={(e) => {process_cookies(e);}}>
                    Accept and close
                </div>
            </div>
        </div>
    );
}

PrivacyPolicy.propTypes = {

}

PrivacyPolicy.defaultProps = {

}

export default PrivacyPolicy;