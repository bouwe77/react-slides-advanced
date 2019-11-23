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

  //TODO Add state and a toggle button for a conditional render prop? :)
  //(to show the difference between the dynamic render prop and the static HOC.)

  return (
    <>
      <NumberApiSearchForm render={complexSearchForm} getNumberInfo={getNumberInfo} />
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
 * Render prop component for the Number API search form.
 */
class NumberApiSearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, searchType: "trivia" };
  }

  setNumber = number => this.setState({ number });

  setSearchType = searchType => this.setState({ searchType });

  searchNumber = () => this.props.getNumberInfo(this.state.number, this.state.searchType);

  render() {
    return this.props.render({
      number: this.state.number,
      setNumber: this.setNumber,
      searchType: this.state.searchType,
      setSearchType: this.setSearchType,
      searchNumber: this.searchNumber
    });
  }
}

NumberApiSearchForm.propTypes = {
  getNumberInfo: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired
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

/**
 * A simple Number API search form.
 */
function simpleSearchForm({ setNumber, searchNumber }) {
  return (
    <>
      <input onChange={event => setNumber(event.target.value)} />
      <button className={styles.button} onClick={searchNumber}>
        go
      </button>
    </>
  );
}

/**
 * A complex Number API search form.
 */
function complexSearchForm({ number, setNumber, searchType, setSearchType, searchNumber }) {
  const updateNumber = howMany => {
    const newNumber = number + howMany;
    setNumber(newNumber);
  };

  const handleSearchTypeChange = event => {
    setSearchType(event.target.value);
  };

  const selectSearchType = searchType => {
    setSearchType(searchType);
  };

  return (
    <>
      <div className={styles.container}>
        <div>
          <button className={styles.button} onClick={() => updateNumber(-100)}>
            -100
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={() => updateNumber(-10)}>
            -10
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={() => updateNumber(-1)}>
            -1
          </button>
        </div>
        <div className={styles.number}>{number}</div>
        <div>
          <button className={styles.button} onClick={() => updateNumber(1)}>
            +1
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={() => updateNumber(10)}>
            +10
          </button>
        </div>
        <div>
          <button className={styles.button} onClick={() => updateNumber(100)}>
            +100
          </button>
        </div>
      </div>
      <div>
        <label onClick={() => selectSearchType("trivia")}>
          <input
            type="radio"
            value="trivia"
            checked={searchType === "trivia"}
            onChange={handleSearchTypeChange}
          />
          trivia
        </label>
        <label onClick={() => selectSearchType("math")}>
          <input
            type="radio"
            value="math"
            checked={searchType === "math"}
            onChange={handleSearchTypeChange}
          />
          math
        </label>
        <label onClick={() => selectSearchType("year")}>
          <input
            type="radio"
            value="year"
            checked={searchType === "year"}
            onChange={handleSearchTypeChange}
          />
          year
        </label>
      </div>
      <div>
        <button className={styles.button} onClick={searchNumber} className={styles.search}>
          SEARCH!
        </button>
      </div>
    </>
  );
}
