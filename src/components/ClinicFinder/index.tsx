import React from 'react';

import { graphql, useStaticQuery } from 'gatsby';
import { InmodePanel_Clinic_Interface } from '../interfaces';

import './index.css';

const ClinicalFinder = ({}:ClinicalFinder_Interface) => {

    const _base_url = typeof window == 'undefined' ? '' : window.location.origin;

    const [clinics]:[any, React.Dispatch<any>] = React.useState(Array.from(useStaticQuery(graphql`
        {
            allStrapiClinicFinders {
                nodes {
                    city
                    doctor
                    mail
                    number
                    street
                    url
                    url_label
                    zip_code
                    treatments {
                        MenuParams {
                            title
                            url
                        }
                    }
                }
            }
        }
    `).allStrapiClinicFinders.nodes));

    const switchTreatmentsOpened = (e:any) => {
        e.currentTarget.parentElement.parentElement.classList.contains('treatments') ?
        e.currentTarget.parentElement.parentElement.classList.remove('treatments') :
        e.currentTarget.parentElement.parentElement.classList.add('treatments');
    }

    return (
        <div className="clinic-finder">
            <div className="container">
                <h2 className="title">Inmode Clinic Finder</h2>
                <h3 className="subtitle">Authorised practioner list</h3>
                {clinics && clinics.map((clinic:InmodePanel_Clinic_Interface) => {
                    if(clinic) {
                        Object.keys(clinic).forEach((elem) => elem ? elem.length < 2 ? undefined : elem : undefined);
                        return (
                            <div className="clinic-item">
                                <div className="left-part">
                                    <div className="clinic-street">
                                        {clinic.street && clinic.street}
                                    </div>
                                    <div className="clinic-address">
                                        {clinic.street && clinic.city && clinic.zip_code && `${clinic.street}, ${clinic.city}, .${clinic.zip_code}`}
                                        {clinic.street && clinic.city && !clinic.zip_code && `${clinic.street}, ${clinic.city}`}
                                        {clinic.street && !clinic.city && clinic.zip_code && `${clinic.street}, ${clinic.zip_code}`}
                                        {clinic.street && !clinic.city && !clinic.zip_code && `${clinic.street}`}
                                        {!clinic.street && clinic.city && clinic.zip_code && `${clinic.city}, ${clinic.zip_code}`}
                                        {!clinic.street && clinic.city && !clinic.zip_code && `${clinic.city}`}
                                        {!clinic.street && !clinic.city && clinic.zip_code && `${clinic.zip_code}`}
                                        {!clinic.street && !clinic.city && !clinic.zip_code && ``}
                                    </div>
                                    <div className="clinic-doctor">
                                        {clinic.doctor && clinic.doctor}
                                    </div>
                                </div>
                                <div className="right-part">
                                    <div className={`clinic-url${!clinic.url && !clinic.url_label ? ' no-data' : ''}`}>
                                        {
                                            clinic.url || clinic.url_label ?
                                            <a target="_blank" href={clinic.url || clinic.url_label} title="Clinic website">
                                                {clinic.url_label || clinic.url && clinic.url.replace('https://', '').replace('http://', '')}
                                            </a>
                                            :
                                            <></>
                                        }
                                    </div>
                                    <div className={`clinic-mail${!clinic.mail ? ' no-data' : ''}`}>
                                        {
                                            clinic.mail != undefined ?
                                            <a href={`mailto:${clinic.mail}`} title="Send a mail">
                                                {clinic.mail}
                                            </a>
                                            :
                                            <a></a>
                                        }
                                    </div>
                                    <div className={`clinic-phone${!clinic.number ? ' no-data' : ''}`}>
                                        {
                                            clinic.number != undefined ?
                                            <a href={`phone:${clinic.number}`} title="Send a mail">
                                                {clinic.number}
                                            </a>
                                            :
                                            <a></a>
                                        }
                                    </div>
                                    <button
                                        className="clinic-switch-treatments"
                                        onClick={switchTreatmentsOpened}
                                    >
                                        Treatments Available
                                    </button>
                                </div>
                                {
                                    clinic.treatments && clinic.treatments.length > 0
                                    &&
                                    <div className="clinic-treatments">
                                        {
                                            clinic.treatments.map((treatment) => {
                                                return (
                                                    <span>
                                                        {treatment.MenuParams.title}
                                                        <a className="zone-link" href={_base_url + treatment.MenuParams.url} title={treatment.MenuParams.title} target="_blank"></a>
                                                    </span>
                                                );
                                            })
                                        }
                                    </div>
                                }
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    );
};

interface ClinicalFinder_Interface {

};

export default ClinicalFinder;