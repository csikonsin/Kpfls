import React from "react"

export default class Menu extends React.Component {
    constructor(props){
        super(props)
    }

    getThisRootMenus() {
        return this.props.menus.filter((el) => el.rootId == this.props.rootId)
    }

    render() {
        return (
            <nav>
                <ul>
                    {this.getThisRootMenus().map((element,inx) => {                
                        return <li key={inx}><a href={element.path}>{element.title}</a></li>  
                    })}
                </ul>
            </nav>
        )
    }
}