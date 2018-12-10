import React from "react";
import { withRouter } from 'react-router-dom';
import {Avatar, Input } from 'antd';
const Search = Input.Search;
import Router from "../router";
import "../../../public/css/prud.css";
import "antd/dist/antd.css";
import ErrorBoundry from "../components/errorboundry";

class LayoutContainer extends React.Component {

    handleSearch = (value) => {
        this.props.history.push({pathname :"/search/"+value});
    }

    render() {
        var bodyH = window.innerHeight - 150;
        let layoutcontainerlogoclass = {width: "160px", height: "68px", marginTop: "21px"}

        return (
            <div id="layoutcontainerdiv" className="layoutcontainer">
                <div id="layoutcontainerheaderdiv" className="header">
                    <div id="layoutcontainerlogodiv" className="logo">
                        <Avatar src="/images/prudential-logo.png" shape="square" style={layoutcontainerlogoclass} />
                    </div>
                    <div id="layoutcontainersearchdiv" className="searchinput">
                        <Search
                            style={{ marginTop: "40px", width: "250px" }}
                            onSearch={this.handleSearch}
                            autoFocus
                            placeholder="Input search text"
                        />
                    </div>
                </div>
                <div id="layoutcontainerbodydiv" style={{position: "relative", width: "inherit", height: bodyH}}>
                    <ErrorBoundry>
                        <Router client={this.props.client}/>
                    </ErrorBoundry>
                </div>
                <div id="layoutcontainerfooterdiv" className="footer">
                    <span className="footertext">© Prudential 2018 All rights reserved</span>
                </div>
            </div>
        )  
    }
}

export default withRouter(LayoutContainer);