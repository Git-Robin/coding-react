import React from "react";
import { Switch, Route, withRouter } from 'react-router-dom';
import NoMatchPage from "./containers/404";
import Welcome from "./components/welcome";
import SearchContainer from "./containers/searchcontainer";

class Router extends React.Component {
    render() {
        return (
            <Route>
                <Switch>
                    <Route
                        exact
                        path="/search/:query"
                        render={props =>
                            <SearchContainer client={this.props.client} history={this.props.history}/>
                        }
                    />
                    <Route
                        exact
                        path="/"
                        render={props =>
                            <Welcome />
                        }
                    />
                    <Route component={NoMatchPage} />
                </Switch>
            </Route>
        )
    }
}

export default withRouter(Router);