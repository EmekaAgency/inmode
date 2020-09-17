import React, { createContext, Component } from "react";
export const MenusContext = createContext({
    
});

class MenusProvider extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        this.handleSetState = this.handleSetState.bind(this);
    }

    handleSetState = (datas) => {
        if(Array.isArray(datas)) {
            //
        }
        else if(typeof datas == 'object') {
            //
        }
        else {
            //
        }
    }

    render() {
        return (
            <MenusContext.Provider value={this.state}>
                {this.props.children}
            </MenusContext.Provider>
        );
    }
}

export default MenusProvider;