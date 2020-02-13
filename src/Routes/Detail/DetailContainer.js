import React from "react";
import DetailPresenter from "./DetailPresenter";
import { moviesApi, tvApi } from "../../api";

export default class extends React.Component {
  constructor(props) {
    super(props);
    const {
      location: { pathname }
    } = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes("/movie/"),
      collection: false,
      season: false
    };
  }

  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;

    const { isMovie } = this.state;
    const parseId = parseInt(id);
    if (isNaN(parseId)) {
      return push("/");
    }

    let result;
    let collection;
    let season;

    try {
      if (isMovie) {
        // const esponse = await moviesApi.movieDetail(parseId);
        // result = response.data;
        ({ data: result } = await moviesApi.movieDetail(parseId)); // ( ... ) == const=

        result.belongs_to_collection
          ? ({ data: collection } = await moviesApi.collection(
              result.belongs_to_collection.id
            ))
          : ({ data: collection } = false);
      } else {
        // const response = await tvApi.tvDetail(parseId);
        // result = response.data;
        ({ data: result } = await tvApi.tvDetail(parseId)); // ( ... _ == const=)
        result.seasons ? (season = result.seasons) : (season = false);
      }
    } catch {
      this.setState({ error: "Can't find Anything." });
    } finally {
      this.setState({
        loading: false,
        result,
        collection,
        season
      });
    }
  }

  render() {
    const { result, error, loading, collection, season, isMovie } = this.state;
    console.log(this.state);
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
        isMovie={isMovie}
        collection={collection}
        season={season}
      />
    );
  }
}
