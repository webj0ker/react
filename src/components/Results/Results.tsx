import { Component } from 'react';
import SearchResults from '../SearchResults/SearchResults';
import Spinner from '../Spinner/Spinner';

interface ResultsProps {
  results: { name: string; url?: string }[];
  error?: string;
  loading: boolean;
  onSearch: (searchTerm: string) => void;
  throwError: () => void;
}

class Results extends Component<ResultsProps> {
  render() {
    const { results, error, loading, throwError } = this.props;

    return (
      <main>
        {loading ? (
          <Spinner />
        ) : (
          <SearchResults results={results} error={error} />
        )}
        <button onClick={throwError}>Throw Error</button>
      </main>
    );
  }
}

export default Results;
