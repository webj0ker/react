import { Component } from 'react';
import Card from '../Card/Card';

interface CardListProps {
  results: { name: string; url?: string }[];
}

class CardList extends Component<CardListProps> {
  render() {
    const { results } = this.props;

    return (
      <div className="card-list">
        {results.map((result, index) => (
          <Card key={index} name={result.name} url={result.url} />
        ))}
      </div>
    );
  }
}

export default CardList;
