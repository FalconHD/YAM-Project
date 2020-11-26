
import React ,{ Component, Fragment }  from "react";
import { render } from "react-dom";
import { HashRouter as Router ,Route,Switch , Redirect } from "react-router-dom";
import AddLead from './AddLead';
import Modify from './modifyLead';

export  class Lead extends Component {
    render() {
        return (
            <div>
                <Route exact path="/AddLead" component={AddLead}/>
                <Route exact path="/Modify" component={Modify}/>
            </div>
        )
    }
}

export default Lead;