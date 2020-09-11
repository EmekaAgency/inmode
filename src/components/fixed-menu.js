import React from "react"
import { get_img_path } from "../functions/get_images";
import Menu from "./menu";
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from "../functions/process_menu_datas";
import { is_visible } from "../functions/is_visible";

class FixedMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            menus: process_menu_datas(props.datas, 'fixed-menu'),
            visible: false
        }
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.setState({visible: is_visible()});

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = ev => {
        this.setState({
            visible: window.scrollY > 200
        });
    };

    render () {
        return (
            <div id="fixed-menu" className="transition" style={{top: this.state.visible ? 0 : -50, boxShadow: this.state.visible ? null : 'unset'}}>
                <div className="fixed-menu-container">
                    <div className="fixed-menu-logo">
                        <img src={get_img_path('/icons/header-logo.png')} alt="header-logo"/>
                    </div>
                    <div className="fixed-menus">
                        {this.state.menus && this.state.menus.map((menu, key) => {
                            return (
                                <Menu key={key} prop_key={key} menu={menu} />
                            );
                        })}
                    </div>
                </div>
            </div>
        );
    };
}

FixedMenu.propTypes = {

};

FixedMenu.defaultProps = {

}

export default FixedMenu;