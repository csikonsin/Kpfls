import React from "react"

export default class Heading extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: this.props.module.Settings.heading,
            type: this.props.module.Settings.headingType
        }
    }

    

    render() {
        let HeadingTag = `h${this.props.module.Settings.headingType}`;
        let content = <HeadingTag>{this.props.module.Settings.heading}</HeadingTag>
        /// #if ADMIN
        if(this.props.cms.adminEdit) {
            content = (
                <div>
                    <input type="text" value={this.state.value} onChange={this.handleHeadingChanged.bind(this)} />
                    <select onChange={this.handleTypeChanged.bind(this)} value={this.state.type} >
                        <option value="1">H1</option>
                        <option value="2">H2</option>
                        <option value="3">H3</option>
                        <option value="4">H4</option>
                        <option value="5">H5</option>
                        <option value="6">H6</option>
                    </select>
                    <button>Save</button>
                </div>
            )
        }
        /// #endif
        return (
            <div>              
                {content}
            </div>
        )
    }

    handleHeadingChanged(e) {
        this.setState({
            value: e.target.value
        })
    }

    handleTypeChanged(e) {
        this.setState({
            type: e.target.value
        })
    }
}