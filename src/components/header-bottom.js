import React from 'react';
import { useStaticQuery, graphql } from "gatsby";
import { process_menu_datas } from '../functions/process_menu_datas';
import Menu from './menu';

const HeaderBottom = ({ process = false, process_function = {} }) => {

    const datas = useStaticQuery(graphql`
        {
            allMysqlHeaderBottom {
                edges {
                    node {
                        container
                        name
                        position
                        type
                        under
                        url
                        variant
                        mysqlId
                    }
                }
            }
        }
    `).allMysqlHeaderBottom.edges;
    
    const [menus] = React.useState(process && process_function ? process_function(process_menu_datas(datas)) : process_menu_datas(datas));

    return (
        <div id="header-bottom" className="header-bottom">
<<<<<<< Updated upstream
            {menus && menus.map((menu, key) => {
=======
            {menus.map((menu, key) => {
>>>>>>> Stashed changes
                return (<Menu key={key} prop_key={key} menu={menu}/>);
            })}
        </div>
    );
}

HeaderBottom.propTypes = {
}

HeaderBottom.defaultProps = {
}
  
export default HeaderBottom;