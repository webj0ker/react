import { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Spinner from '../Spinner/Spinner';
import './Results.css';

interface ResultsProps {
  results: { name: string; description?: string }[];
  error?: string;
  loading: boolean;
  throwError: () => void;
}

interface ResultsState {
  hasError: boolean;
}

class Results extends Component<ResultsProps, ResultsState> {
  state: ResultsState = {
    hasError: false,
  };

  handleThrowError = () => {
    this.setState({ hasError: true });
  };

  handleGoBack = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { results, error, loading } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return (
        <div>
          <p>Something went wrong. Please try again later.</p>
          <button onClick={this.handleGoBack}>Go Back</button>
        </div>
      );
    }

    return (
      <main>
        {loading ? (
          <Spinner />
        ) : (
          <SearchResults results={results} error={error} />
        )}
        <button className="throw-error-button" onClick={this.handleThrowError}>
          Throw Error
        </button>
      </main>
    );
  }
}

export default Results;
