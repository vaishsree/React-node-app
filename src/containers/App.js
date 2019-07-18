import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Stock from "../components/Stock";
import StockLog from "../components/StockLog";
import { fetchStockDetails } from "../actions";

class App extends Component {
  state = {};
  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.fetchStockDetails();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    let now = new Date();
    //append datetime
    now = now.toDateString() + " " + now.toLocaleTimeString();

    console.log(this.props.data, now);
    return (
      <div className="container">
        <div className="aside">
          <StockLog time={now} paragraphs={this.props.data} />
        </div>
        <div className="main">
          {this.props.isLoadingData ? (
            "Loading . . ."
          ) : (
            <Stock paragraphs={this.props.data} />
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ data = {}, isLoadingData = false }) => ({
  data,
  isLoadingData
});
export default connect(
  mapStateToProps,
  {
    fetchStockDetails
  }
)(App);
