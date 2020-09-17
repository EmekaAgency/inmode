import React from "react"

const AddonNavigation = ({ addon }) => {

    const menus = [
        {'name': 'what is it', 'url': '#what-is'},
        {'name': 'before and after\'s', 'url': '#before-after'},
        {'name': 'what can you treat', 'url': '#what-treat'},
        {'name': 'clinical studies', 'url': '#studies'}
    ];

    return (
        <div className="addon-navigation">
            {menus.map((menu, key) => {
                return (
                    <div className="addon-nav">
                        <a key={key} href={menu.url} className="addon-nav">
                            {menu.name}
                        </a>
                    </div>
                );
            })}
        </div>
    );
}

AddonNavigation.defaultProps = {

}

AddonNavigation.propTypes = {

}

export default AddonNavigation;