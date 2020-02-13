import React from "react";
import SearchPresenter from "./SearchPresenter";
import { moviesApi, tvApi } from "api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchWords: "",
    error: null,
    loading: false
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchWords } = this.state;
    if (searchWords !== "") {
      this.searchByWords();
    }
  };

  updateWords = event => {
    const {
      target: { value }
    } = event;
    this.setState({
      searchWords: value
    });
  };

  searchByWords = async () => {
    const { searchWords } = this.state;
    this.setState({ loading: true });

    try {
      const {
        data: { results: movieResults }
      } = await moviesApi.search(searchWords);

      const {
        data: { results: tvResults }
      } = await tvApi.search(searchWords);

      this.setState({
        movieResults,
        tvResults
      });
    } catch {
      this.setState({
        error: "Can't find results ."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  };

  render() {
    const { movieResults, tvResults, searchWords, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchWords={searchWords}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateWords={this.updateWords}
      />
    );
  }
}
