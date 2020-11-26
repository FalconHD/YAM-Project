import React ,{ Component, Fragment }  from "react";
import { render } from "react-dom";
import Alert from './components/Alerts';
import { Provider } from 'react-redux';
import store from './store';
import { HashRouter as Router ,Route,Switch , Redirect } from "react-router-dom";
import { loadUser } from './actions/auth';
import Registration from './components/accouts/SignInUp'
import mainPage from "./components/mainPage";
import Principale from "./components/Principale";
import leads from "./components/leads"



class App extends Component{
    componentDidMount() {
        store.dispatch(loadUser());
      }

    render(){
        return(
            
            <Router>
                <Fragment>
                    <Route path="/" exact component={mainPage}/>        
                    
                    <Switch >
                        
                        <Route  path="/leads"  component={Principale}/>
                        <Route  path="/registration"   component={Registration}/>
                        
                        
                        
                    </Switch>
                    
                    
                </Fragment>
                <Alert/>
            </Router>

        )
    }
}

export default React.memo(App);
render(<Provider store={store}><App/></Provider>, document.getElementById("app"));
