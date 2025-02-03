import { Component } from 'react';

interface SearchResultsProps {
  results: { name: string; description: string }[];
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
        {results.map((result: any, index: number) => (
          <div key={index}>
            <h3>{result.name}</h3>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default SearchResults;
