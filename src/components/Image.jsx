import React from "react"

export default class Image extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        let edit = null;
        
        /// #if ADMIN
        if(this.props.cms.adminEdit){
            edit = (
                <div>
                    <button>Edit</button>
                </div>
            )
        }
        /// #endif

        return(
            <div>
                 {edit}
                <figure>
                    <img src={this.props.module.Settings.src}/>
                </figure>               
            </div>
        )
    }
}