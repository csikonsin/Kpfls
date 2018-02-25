import React from "react"
//import { connect } from "react-redux"

class AdminToggle extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="admin-toggle">
                <label htmlFor="admint">Admin mode</label>
                <input type="checkbox" name="admint" checked={this.props.cms.adminEdit} onChange={this.handleChange.bind(this)}/>
            </div>
        )        
    }

    handleChange(){
        
    }
}

// const mapStateToProps = function(state) {
//     return {
//         cms: state.cms
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         onAdminToggle: () => {
//             dispatch(toggleAdmin())
//         }
//     }
// }

export default AdminToggle// connect(mapStateToProps, mapDispatchToProps)(AdminToggle)