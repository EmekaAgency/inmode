import React from "react";

const Congres = ({ event = {} }) => {

    // console.log(event);

    return (
        <div className="conference">
            <div className="img-part">
                <img
                    className="event-pic"
                    src={event.picture.childImageSharp.fluid.srcWebp}
                    srcSet={event.picture.childImageSharp.fluid.srcSetWebp}
                />
            </div>
            <div className="descr-part">
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
                    <a href={event.place_url || "#"}>
                        {event.place}
                    </a>
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

Congres.propTypes = {

};

Congres.defaultProps = {

};

export default Congres;