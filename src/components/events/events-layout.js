import React from "react";
import { Link } from "gatsby";

import Conference from "./conference";
import Eseminar from "./eseminar";
import Seminar from "./seminar";

import { resolve_tab_link_selected } from "../../functions/resolve_mini_menu_opened";
import { useWindowSize } from "../../functions/window-size";

const EventsLayout = ({ children, current_page, events }) => {

    const sortBy = (function(){
        if (typeof Object.defineProperty === 'function'){
          try{Object.defineProperty(Array.prototype,'sortBy',{value:sb}); }catch(e){}
        }
        if (!Array.prototype.sortBy) Array.prototype.sortBy = sb;
      
        function sb(f){
          for (var i=this.length;i;){
            var o = this[--i];
            this[i] = [].concat(f.call(o,o,i),o);
          }
          this.sort(function(a,b){
            for (var i=0,len=a.length;i<len;++i){
              if (a[i]!=b[i]) return a[i]>b[i]?-1:1;
            }
            return 0;
          });
          for (var i=this.length;i;){
            this[--i]=this[i][this[i].length-1];
          }
          return this;
        }
      })();

    // console.log([...events.seminars, ...events.conferences, ...events.eseminars].sortBy(function(o){return o.begin || o.created_at}));

    const accordion_width = 760;

    const size = useWindowSize();

    const tabs = [
        {
            'name': 'upcoming events',
            'url': '/events'
        },
        {
            'name': 'congrès',
            'url': '/events/conferences'
        },
        {
            'name': 'webinars',
            'url': '/events/webinar'
        },
        {
            'name': 'workshops',
            'url': '/events/seminars'
        }
    ];

    const [maxHeight, setMaxHeight] = React.useState(0);
    const [openedAccordion, setOpenedAccordion] = React.useState(false);

    const resolveClick = (e) => {
        e.preventDefault();
        resolve_tab_link_selected();
        e.currentTarget.classList.add('current');
    }

    const resolveAccordion = ( e ) => {
        e.currentTarget.classList.toggle('opened');
        var panel = e.currentTarget.nextElementSibling;
        panel.classList.toggle('opened');
        if (maxHeight) {
            setMaxHeight(null);
        }
        else {
            panel.classList.contains("opened") && setMaxHeight(`${panel.children.length * 60}px`);
        }
        setOpenedAccordion(true);
    }

    return (
        <div className="events-layout">
            <div className="main-container">
                <div className="tab-navigation transition">
                    {size.width < accordion_width && tabs.map((tab, key) => {
                        if(tab.name == current_page) {
                            return (
                                <span
                                    id="title-accordion"
                                    className="title-accordion title transition"
                                    onClick={(e) => {resolveAccordion(e);}}
                                    key={key}
                                >
                                    {tab.name}
                                </span>
                            );
                        }
                    })}
                    <div
                        id="accordion"
                        className="accordion transition"
                        style={{
                            maxHeight: size.width < accordion_width ? openedAccordion ? maxHeight : 0 : 'unset',
                            width: '100%'
                        }}
                    >
                        {tabs.map((tab, key) => {
                            if(tab.name != current_page || size.width >= accordion_width) {
                                return (
                                    <Link
                                        className={`tab-link${tab.name == current_page ? ' current' : ''}`}
                                        to={tab.url}
                                        // to="#"
                                        // onClick={(e) => {resolveClick(e);}}
                                        key={key}
                                    >
                                        {tab.name}
                                    </Link>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="events-content">
                    {events.conferences && events.conferences.map((conference, key) => {
                        return (
                            <Conference key={key} event={conference}/>
                        );
                    })}
                    {events.seminars && events.seminars.map((seminar, key) => {
                        return (
                            <Seminar key={key} event={seminar}/>
                        );
                    })}
                    {events.eseminars && events.eseminars.map((eseminar, key) => {
                        return (
                            <Eseminar key={key} event={eseminar}/>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

EventsLayout.propTypes = {

};

EventsLayout.defaultProps = {

};

export default EventsLayout;