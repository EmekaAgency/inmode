import React from "react";

const ProfessionalContact = ({ from }) => {
    return (
        <div className={`professional-contact main-container ${from}`}>
            <div className="opportunities">
                <div className="title">
                    Opportunités professionnelles
                </div>
                <hr/>
                <div className="descr">
                    InMode is a fast paced innovative company with continuous growth opportunities. We are always looking for good candidates to join our team. If you are interested in working for InMode please submit a cover letter and resume to hr@inmodemd.com
                </div>
            </div>
            <div className="around-the-world">
                <div className="title">
                    Inmode dans le monde
                </div>
                <hr/>
                <div className="distributors">
                    {
                        [
                            {
                                'place': 'Amérique latine',
                                'mail': 'latam@inmodemd.com'
                            },
                            {
                                'place': 'Europe, Moyen-Orient, Afrique du Sud',
                                'mail': 'emea@inmodemd.com'
                            },
                            {
                                'place': 'Asie et Pacifique (APAC)',
                                'mail': 'apac@inmodemd.com'
                            }
                        ].map((distributor, key) => {
                            return (
                                <div className="distributor" key={key}>
                                    <div className="place">{distributor.place}</div>
                                    <div className="mail">{distributor.mail}</div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

ProfessionalContact.propTypes = {

};

ProfessionalContact.defaultProps = {

};

export default ProfessionalContact;