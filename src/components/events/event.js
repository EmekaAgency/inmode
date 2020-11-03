import React from "react";

const InmodeEvent = ({ event = {}, prop_key, current_page }) => {

    // console.log(event);

    const has_card = current_page === "upcoming events" || event.type === "webinar";

    return (
        <div className={`inmode-event ${event.type}${has_card ? ' has_card' : ''}`}>
            {has_card && <div className={`top-card ${prop_key === 0 ? 'left' : 'left'}`}>
                {event.type === "congres" && "Congrès"}
                {event.type === "workshop" && "Séminaire"}
                {event.type === "webinar" && event.addons.map(addon => addon.Name).join(', ')}
            </div>}
            <div className={`img-part ${prop_key === 0 ? 'right' : 'left'}`}>
                <img
                    className="event-pic"
                    src={event.picture.childImageSharp.fluid.srcWebp}
                    srcSet={event.picture.childImageSharp.fluid.srcSetWebp}
                />
            </div>
            <div className={`descr-part ${prop_key === 0 ? 'left' : 'right'}`}>
                {event.title && <div className="title">
                    {event.title}
                </div>}
                {event.short_descr && <div className="short_descr">
                    {event.short_descr}
                </div>}
                {event.begin && <div className="dates">
                    {`${event.begin}${event.finish ? ` - ${event.finish}` : ''}`}
                </div>}
                {event.place && <div className="address_link">
                    <a href={event.place_url || "#"}>{event.place}</a>
                </div>}
                {event.address && <div className="address">
                    {event.address}
                </div>}
                {event.map_link && <div className="maps_location">
                    <a href={event.maps_link || "#"}>+ Google Map</a>
                </div>}
            </div>
        </div>
    );
}

InmodeEvent.propTypes = {

};

InmodeEvent.defaultProps = {

};

export default InmodeEvent;