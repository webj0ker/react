import { Component } from 'react';
import Header from './components/Header/Header';
import Results from './components/Results/Results';
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
        <Header />
        <Results
          results={results}
          error={error}
          loading={loading}
          onSearch={this.handleSearch}
          throwError={this.throwError}
        />
      </div>
    );
  }
}

export default App;
