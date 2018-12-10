import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import SearchSider from "../components/searchside";
import ViewBook from "../components/viewbook";

class SearchContainer extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            book: undefined
        }
        this.openBook = this.openBook.bind(this);
    }

    openBook(bookdetails) {
        this.setState({book: bookdetails});
    }

    render() {
        return (
            <div id="searchcontainerdiv" className="searchcontainer">
                <div id="searchsiderdiv" className="search-sider">
                    <SearchSider client={this.props.client} history={this.props.history} openBook={this.openBook} />
                </div>
                <div id="searchbodydiv" className="search-body">
                    {
                        this.state.book &&
                        <ViewBook client={this.props.client} book={this.state.book} />
                    }
                </div>
            </div>
        )
    }
}

export default withRouter(SearchContainer);