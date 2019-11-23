import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import styles from "./Class.module.css";

/**
 * The root component for the Number API functionality.
 */
function MyNumberApiComponent({ getNumberFromApi, number, text }) {
  const getNumberInfo = (number, searchType) => {
    getNumberFromApi(number, searchType);
  };

  return (
    <>
      <NumberApiSearchForm getNumberInfo={getNumberInfo} />
      <NumberApiSearchResult number={number} text={text} />
    </>
  );
}

MyNumberApiComponent.propTypes = {
  getNumberFromApi: PropTypes.func.isRequired,
  number: PropTypes.number.isRequired,
  text: PropTypes.string
};

// =========== Here the component is wrapped by the HOC ===========
export default withNumberApi(MyNumberApiComponent);
// ================================================================

/**
 * Higher Order Component for wrapping a component that wants Number API search capabilities.
 * Note that a Higher Order Component is actually a function, not a component...
 * However, it wraps (and returns) a component.
 */
function withNumberApi(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = { number: 0, text: null };
      this.baseUrl = `https://cors-everywhere.herokuapp.com/http://numbersapi.com`;
    }

    getUrl = (number, searchType) => {
      if (searchType)
        return `${this.baseUrl}/${number}/${searchType}?json&default=¯\\_(ツ)_/¯`;
      else return `${this.baseUrl}/${number}?json&default=¯\\_(ツ)_/¯`;
    };

    getNumberFromApi = (number, searchType) => {
      const url = this.getUrl(number, searchType);
      axios
        .get(url)
        .then(response => this.setState({ number, text: response.data.text }))
        .catch(error => this.setState({ number, text: "error " + error.response.status }));
    };

    render() {
      return (
        <WrappedComponent
          getNumberFromApi={this.getNumberFromApi}
          {...this.state}
          {...this.props}
        />
      );
    }
  };
}

/**
 * Renders the Number API search form.
 */
class NumberApiSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, searchType: "trivia" };
  }

  updateNumber = howMany => {
    const number = this.state.number + howMany;
    this.setState({ number });
  };

  handleSearchTypeChange = event => {
    this.selectSearchType(event.target.value);
  };

  selectSearchType = searchType => {
    this.setState({ searchType });
  };

  handleSearchClick = () => {
    this.props.getNumberInfo(this.state.number, this.state.searchType);
  };

  render() {
    return (
      <>
        <div className={styles.container}>
          <div>
            <button className={styles.button} onClick={() => this.updateNumber(-100)}>
              -100
            </button>
          </div>
          <div>
            <button className={styles.button} onClick={() => this.updateNumber(-10)}>
              -10
            </button>
          </div>
          <div>
            <button className={styles.button} onClick={() => this.updateNumber(-1)}>
              -1
            </button>
          </div>
          <div className={styles.number}>{this.state.number}</div>
          <div>
            <button className={styles.button} onClick={() => this.updateNumber(1)}>
              +1
            </button>
          </div>
          <div>
            <button className={styles.button} onClick={() => this.updateNumber(10)}>
              +10
            </button>
          </div>
          <div>
            <button className={styles.button} onClick={() => this.updateNumber(100)}>
              +100
            </button>
          </div>
        </div>
        <div>
          <label onClick={() => this.selectSearchType("trivia")}>
            <input
              type="radio"
              value="trivia"
              checked={this.state.searchType === "trivia"}
              onChange={this.handleSearchTypeChange}
            />
            trivia
          </label>
          <label onClick={() => this.selectSearchType("math")}>
            <input
              type="radio"
              value="math"
              checked={this.state.searchType === "math"}
              onChange={this.handleSearchTypeChange}
            />
            math
          </label>
          <label onClick={() => this.selectSearchType("year")}>
            <input
              type="radio"
              value="year"
              checked={this.state.searchType === "year"}
              onChange={this.handleSearchTypeChange}
            />
            year
          </label>
        </div>
        <div>
          <button
            className={styles.button}
            onClick={this.handleSearchClick}
            className={styles.search}
          >
            SEARCH!
          </button>
        </div>
      </>
    );
  }
}

NumberApiSearchForm.propTypes = {
  getNumberInfo: PropTypes.func.isRequired
};

/**
 * Renders the Number API search result.
 */
function NumberApiSearchResult({ number, text }) {
  return (
    <>
      {text ? (
        <div className={styles.text}>
          <h2>{text}</h2>
        </div>
      ) : null}
    </>
  );
}

NumberApiSearchResult.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string
};
