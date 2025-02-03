import { Component } from 'react';

interface CardProps {
  name: string;
  url?: string;
}

class Card extends Component<CardProps> {
  render() {
    const { name, url } = this.props;

    return (
      <div className="card">
        <h3>{name}</h3>
        {url && <p>URL: {url}</p>}
      </div>
    );
  }
}

export default Card;
