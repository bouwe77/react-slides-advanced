import React, { Component } from "react";
import axios from "axios";
import styles from "./Class.module.css";

/**
 * The root component for the Number API functionality.
 */
class MyNumberApiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { number: 0, text: null };
  }

  getNumberInfo = (number, searchType) => {
    const url = `https://cors-everywhere.herokuapp.com/http://numbersapi.com/${number}/${searchType}?json&default=¯\\_(ツ)_/¯`;

    axios
      .get(url)
      .then(response => this.setState({ number, text: response.data.text }))
      .catch(error => this.setState({ number, text: "error " + error.response.status }));
  };

  render() {
    return (
      <>
        <NumberApiSearchForm getNumberInfo={this.getNumberInfo} />
        <NumberApiSearchResult number={this.state.number} text={this.state.text} />
      </>
    );
  }
}

export default MyNumberApiComponent;

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
