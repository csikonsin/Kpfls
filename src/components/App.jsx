import React from "react"
import Content from "./Content.jsx"
import Image from "./Image.jsx"
import AdminToggle from "./AdminToggle.jsx"
import Heading from "./Heading.jsx"
import Menu from "./Menu.jsx"

class App extends React.Component {
    constructor(props){
        super(props)
      // console.log(this.props);

    }

    render(){
        let children = []
        for(var i = 0; i < this.props.store.modules.length; i++) {
            let el = null;
            let module = this.props.store.modules[i];
            switch(module.ModuleTypeId){
                case 1: el = <Content key = {i} module={module} cms={this.props.store.cms}  /> 
                break;
                case 2: el= <Image key = {i} module={module} cms={this.props.store.cms}/>
                break;
                case 3: el= <Heading key={i} module={module} cms={this.props.store.cms} />
                break;
            }
            if(el!=null)children.push(el)
        }

        if(this.props.store.cms.adminEdit){
            children.push(<AdminToggle key={-1} cms={this.props.store.cms}  />)
        }

        return (
            <div>
                <header>
                    <Menu rootId="1" menus={this.props.store.menus} />
                </header>
                {children}
                <footer>
                    <Menu rootId="3" menus={this.props.store.menus} />
                </footer>
            </div>
        )
    }
    handleClick(){
        this.setState({
            count: this.state.count+1
        })
    }
}

export default App