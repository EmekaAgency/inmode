import React from "react"

const WorkstationMenu = ({ tag_families, technologies, allResolve, resolveClick, checkbox_resolve_checked_selector, resolve_technology }) => {

    return (
        <>
            {tag_families.map((tag, key) => {
            return (
            <ul key={key} className="menu-title menu-text transition">
                <span
                    className="menu-title menu-text"
                >
                    {tag.FamilyName}
                </span>
                <ul className="dropdown-menu custom-scrollbar">
                    <div className="selection transition">
                    <input
                        id={`${key}-all`}
                        type="checkbox"
                        onClick={(e) => {allResolve(e);}}
                        value="cure-choice"
                        className="cure-choice-all"
                        defaultChecked={true}
                    />
                    <label htmlFor={`${key}-all`}>Tout afficher</label>
                    </div>
                    {tag.tags && tag.tags.map((sub_tag, key_sub) => {
                        return (
                        <div key={key_sub} className="selection transition">
                            <input
                            id={`${key}-${key_sub}`}
                            type="checkbox"
                            key={key}
                            onClick={(e) => {resolveClick(e);}}
                            value={sub_tag.tag}
                            className={`${checkbox_resolve_checked_selector} cure-choice`}
                            />
                            <label htmlFor={`${key}-${key_sub}`}>{sub_tag.tag}</label>
                        </div>
                        );
                    })}
                </ul>
            </ul>
            );
        })}
            <ul className="menu-title menu-text transition">
            <span
                className="menu-title menu-text"
            >
                technologies
            </span>
            <ul className="dropdown-menu custom-scrollbar">
                {technologies.map((techno, key) => {
                    return (
                        <div key={key} className="selection transition">
                        <input
                            id={`tech-${key}`}
                            type="checkbox"
                            key={key}
                            className={`tech-choice`}
                            onClick={(e) => resolve_technology(e)}
                            value={techno.Name}
                        />
                        <label htmlFor={`tech-${key}`}>{techno.Name}</label>
                        </div>
                    );
                })}
            </ul>
            </ul>
        </>
    );
}

WorkstationMenu.propTypes = {

};

WorkstationMenu.defaultProps = {

};

export default WorkstationMenu;