import React from 'react';
import MethodCard from './MethodCard';
import MethodList from '../data/methods/methods.json';

class MethodCardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fCat: this.props.fCat,
      fEffective: this.props.fEffective,
      fKey: this.props.fKey,
      fRole: this.props.fRole,
      fSearch: this.props.fSearch,
      fSimple: this.props.fSimple,
      fSuggest: this.props.fSuggest,
      fUnique: this.props.fUnique,
      theseCards: MethodList
    };
  }
  componentDidMount = () => {
    this.filterCards();
  };
  shuffleCards = arr => {
    var i, j, temp;
    for (i = arr.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    return arr;
  };
  filterCards = () => {
    this.setState({ theseCards: MethodList });
    let filtered = this.state.theseCards;
    if (this.state.fEffective !== undefined) {
      filtered = this.state.theseCards.filter(card => {
        return card.ratings.effectiveness >= this.state.fEffective;
      });
    } else if (this.state.fKey !== undefined) {
      filtered = this.state.theseCards.filter(card => {
        return card.keywords.indexOf(this.state.fKey) >= 0;
      });
    } else if (this.state.fRole !== undefined) {
      filtered = this.state.theseCards.filter(card => {
        let replaced = this.state.fRole.replace('-', ' ');
        return card.participants.indexOf(replaced) >= 0;
      });
    } else if (this.state.fSearch !== undefined) {
      filtered = this.state.theseCards.filter(card => {
        let flag = false,
          title = card.title.toLowerCase(),
          desc = card.description.toLowerCase(),
          term = this.state.fSearch.toLowerCase();
        if (title.indexOf(term) > -1) {
          flag = true;
        } else if (desc.indexOf(term) > -1) {
          flag = true;
        }
        return flag;
      });
    } else if (this.state.fSimple !== undefined) {
      filtered = this.state.theseCards.filter(card => {
        return card.ratings.simplicity <= this.state.fSimple;
      });
    } else if (this.state.fCat !== undefined) {
      filtered = this.state.theseCards.filter(card => {
        return card.category === this.state.fCat;
      });
    } else if (
      this.state.fSuggest !== undefined &&
      this.state.fSuggest.length > 1
    ) {
      filtered = [];
      this.state.theseCards.forEach((card, index) => {
        if (this.state.fSuggest.indexOf(card.unique) !== -1) {
          filtered.push(this.state.theseCards[index]);
        }
      });
    } else if (this.state.fUnique !== undefined) {
      filtered = this.state.theseCards.filter(card => {
        return card.unique === this.state.fUnique;
      });
    }
    filtered = this.shuffleCards(filtered);
    this.setState({ theseCards: filtered });
  };
  render() {
    return (
      <div className="method-list">
        <br />
        {this.state.theseCards.length === 1 ? null : (
          <h1>{this.state.theseCards.length} Methods</h1>
        )}

        {this.state.theseCards.length < 1 ? (
          <p>No methods match this criteria.</p>
        ) : null}
        {this.state.theseCards.map(uxm => {
          return (
            <MethodCard
              key={uxm.unique}
              id={uxm.id}
              unique={uxm.unique}
              title={uxm.title}
              description={uxm.description}
              category={uxm.category}
              ratings={uxm.ratings}
              time={uxm.time}
              ms={uxm.ms}
              participants={uxm.participants}
              basics={uxm.basics}
              keywords={uxm.keywords}
              instructions={uxm.instructions}
              documents={uxm.documents}
            />
          );
        })}
      </div>
    );
  }
}
export default MethodCardList;
