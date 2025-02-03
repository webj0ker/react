import { Component } from 'react';
import SearchBar from './components/SearchBar';
import SearchResults from './components/SearchResults';
import './App.css';

class App extends Component {
  state = {
    results: [],
    error: null,
    loading: false,
  };

  handleSearch = (searchTerm: string) => {
    this.setState({ loading: true, error: null });

    // Замените URL на ваш API
    const apiUrl = searchTerm
      ? `https://api.example.com/search?query=${searchTerm}`
      : 'https://api.example.com/items';

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        this.setState({ results: data.items, loading: false });
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  };

  render() {
    const { results, error, loading } = this.state;

    return (
      <div>
        <SearchBar onSearch={this.handleSearch} />
        {loading ? (
          <div>Loading...</div>
        ) : (
          <SearchResults results={results} error={error || undefined} />
        )}
      </div>
    );
  }
}

export default App;
