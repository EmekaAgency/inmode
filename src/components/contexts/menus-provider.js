import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import MenusContext from "./menus-context";
import { header_process } from '../../functions/header_process';
import { footer_process } from '../../functions/footer_process';
import { process_menu_datas } from '../../functions/process_menu_datas';

const MenusProvider = ({ requested = "", children }) => {
    const datas = useStaticQuery(graphql`
        {
            allMysqlHeaderTop {
                nodes {
                    variant
                    url
                    under
                    type
                    position
                    name
                    mysqlId
                    container
                }
            }
            allMysqlHeaderBottom {
                nodes {
                    variant
                    url
                    under
                    type
                    position
                    name
                    mysqlId
                    container
                }
            }
            allMysqlFooter {
                nodes {
                    variant
                    url
                    under
                    type
                    position
                    name
                    mysqlId
                    container
                }
            }
        }
    `);

    // const header_top_request = request_db("SELECT * FROM menus WHERE container = 'header-top';", );
    // const header_bottom_request = request_db("SELECT * FROM menus WHERE container = 'header-bottom';", );
    // const footer_request = request_db("SELECT * FROM menus WHERE container LIKE \'footer%\';", );

    const [menusHeaderTop] = React.useState(process_menu_datas(datas.allMysqlHeaderTop.nodes, 'HeaderTop'));
    const [menusHeaderBottom] = React.useState(process_menu_datas(datas.allMysqlHeaderBottom.nodes, 'HeaderBottom'));
    const [menusFooter] = React.useState(footer_process(process_menu_datas(datas.allMysqlFooter.nodes, 'Footer')));
    
    return (
        <MenusContext.Provider
            value={{
                'header_top': menusHeaderTop,
                'header_bottom': menusHeaderBottom,
                'footer': menusFooter
            }}
        >
            {children}
        </MenusContext.Provider>
    );
}

export default MenusProvider;