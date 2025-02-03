import { Component } from 'react';

interface SearchResultsProps {
  results: { name: string; url?: string }[];
  error?: string;
}

class SearchResults extends Component<SearchResultsProps> {
  render() {
    const { results, error } = this.props;

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <div>
        {results.map((result, index) => (
          <div key={index}>
            <h3>{result.name}</h3>
            {result.url && <p>URL: {result.url}</p>}
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
