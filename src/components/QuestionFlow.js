import React from 'react';
import QuestionList from '../data/questions/questions.json';
import FlowItem from './FlowItem';
import FlowOption from './FlowOption';
import MethodCardList from './MethodCardList';
import { Card } from './Card';

class QuestionFlow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qs: QuestionList,
      currentQuestion: 0,
      selections: [],
      selectionString: '',
      suggestions: []
    };
  }
  componentDidMount = () => {
    this.resetQuestions();
  };
  resetQuestions = () => {
    this.setState({
      currentQuestion: 0,
      selections: [],
      selectionString: '',
      suggestions: []
    });
  };
  handleOptionClick = event => {
    let ans = event.target.dataset.ans,
      val = event.target.dataset.val,
      nextQuestion = event.target.dataset.ans,
      suggest = event.target.dataset.suggest;
    this.buildSelectionArray(ans, val);
    this.buildSelectionString();
    this.setSuggestions(suggest);
    nextQuestion++;

    this.setState({
      currentQuestion: nextQuestion
    });
  };
  setSuggestions = suggest => {
    let suggestionList = [];
    if (suggest) {
      suggestionList = suggest.split(',');
    }
    this.setState({ suggestions: suggestionList });
  };
  buildSelectionArray = (ans, val) => {
    let selectionArr = this.state.selections;
    selectionArr[ans] = val;
    this.setState({ selections: selectionArr });
  };
  buildSelectionString = () => {
    let selectionStr = '';
    this.state.selections.forEach(function(sel) {
      selectionStr += sel.substring(0, 1);
    });
    this.setState({ selectionString: selectionStr });
  };
  filterByID = arr => {
    let id = arr.ID,
      str = this.state.selectionString.substring(0, arr.Level);
    return id === str || arr.Level === 0;
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-10">
            <p>
              Below are 50 user experience and design methods (in no particular
              order) explained in detail from effectiveness to step-by-step
              instructions and resources. It can be intimidating and difficult
              to know where to start. By answering some quick questions, we can
              determine which stage of the user experience research and
              development process your product is in. We can then suggest some
              great methods for your particular situation. If you&rsquo;re still
              not sure, feel free to just start reading them from the top.
            </p>
          </div>
          <div className="col-sm-2">
            {' '}
            <p className="text-right">
              <button
                className="btn btn-outline-danger pull-right"
                onClick={this.resetQuestions}
              >
                Start Over
              </button>
            </p>
          </div>
        </div>
        {/* Previously answered questions: old && Val = selected Val at appropriate Level */}
        {this.state.qs
          .filter(pq => pq.Level < this.state.currentQuestion)
          .filter(
            pq =>
              pq.Val === this.state.selections[pq.Level - 1] || pq.Level === 0
          )
          .filter(this.filterByID)
          .map(pq => {
            return (
              <div key={pq.ID}>
                <Card>
                  <FlowItem itemObj={pq} />
                  <div className="btn btn-outline-success">
                    {this.state.selections[pq.Level]}
                  </div>
                </Card>
              </div>
            );
          })}
        {/* Current question: proper level && Val == last selected && child of last question */}
        {this.state.qs
          .filter(qlist => qlist.Level === this.state.currentQuestion)
          .filter(
            qlist =>
              qlist.Val === this.state.selections[qlist.Level - 1] ||
              this.state.currentQuestion === 0
          )
          .filter(this.filterByID)
          .map(qlist => {
            return (
              <div key={qlist.ID}>
                <Card>
                  <FlowItem itemObj={qlist} />
                  {qlist.Type !== 'Suggestion' ? (
                    <div className="row">
                      {this.state.qs
                        .filter(olist => olist.ID.indexOf(qlist.ID) === 0)
                        .filter(
                          olist =>
                            olist.Level === this.state.currentQuestion + 1
                        )
                        .map(olist => {
                          return (
                            <FlowOption
                              key={olist.ID}
                              ques={qlist.Level}
                              val={olist.Val}
                              suggest={olist.Suggest}
                              handler={this.handleOptionClick}
                            />
                          );
                        })}
                    </div>
                  ) : null}
                </Card>
                {qlist.Type === 'Suggestion' ? (
                  <MethodCardList fSuggest={this.state.suggestions} />
                ) : null}
              </div>
            );
          })}
        {this.state.currentQuestion === 0 ? (
          <MethodCardList fSuggest={this.state.suggestions} />
        ) : null}
      </div>
    );
  }
}
export default QuestionFlow;
