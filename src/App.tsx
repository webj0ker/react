import { Component } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import Spinner from './components/Spinner/Spinner';
import './App.css';

class App extends Component {
  state = {
    results: [],
    error: undefined,
    loading: false,
  };

  handleSearch = (searchTerm: string) => {
    this.setState({ loading: true, error: null });

    const apiUrl = searchTerm
      ? `https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`
      : 'https://pokeapi.co/api/v2/pokemon?limit=10';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const results = searchTerm ? [data] : data.results;
        this.setState({ results, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message || undefined, loading: false });
      });
  };

  throwError = () => {
    throw new Error('Test error');
  };

  render() {
    const { results, error, loading } = this.state;

    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        {loading ? (
          <Spinner />
        ) : (
          <SearchResults results={results} error={error} />
        )}
        <button onClick={this.throwError}>Throw Error</button>
      </div>
    );
  }
}

export default App;
