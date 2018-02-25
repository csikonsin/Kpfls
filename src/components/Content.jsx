import React from "react"
//import { connect } from "react-redux";

export default class Content extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.module.Settings.content
        }
    }

    render() {
        let cont = this.props.module.Settings.content

        /// #if ADMIN
            if(this.props.cms.adminEdit){
                cont = (
                    <div>
                        <input type="text" value={this.state.value} onChange={this.handleContentChange.bind(this)}/>
                        <button onClick={this.handleContentSave.bind(this)}>Save</button>
                    </div>
                )
            }
        /// #endif

        return(
            <div>{cont}</div>
        )
    }

    handleContentChange(e){
        this.setState({
            value: e.target.value
        })
    }

    handleContentSave(e){
        if(this.state.value === this.props.module.Settings.content)return;
        console.log("save");

        e.preventDefault();
    }
}

// const mapStateToProps = function(state) {
//     return {
//         modules: state.modules,
//         cms: state.cms
//     }
// }

// export default connect(mapStateToProps)(Content)