import React from 'react';
import MethodCardList from '../components/MethodCardList';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';

class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      term: this.getUrlVars()
    };
  }
  componentDidMount = () => {
    this.setState({
      loading: false,
      term: this.getUrlVars()
    });
  };
  getUrlVars = () => {
    let vars = {},
      thisParam = '';
    try {
      thisParam = window.location.href.replace(
        /[?&]+([^=&]+)=([^&]*)/gi,
        function(m, key, value) {
          vars[key] = value;
        }
      );
      if (vars.q.length > 0) {
        thisParam = vars.q;
      }
    } catch (err) {
      thisParam = '';
    }
    return thisParam;
  };
  render() {
    return (
      <PageLayout>
        <PageHeader showSearch="false" />
        <PageBody>
          <p>
            Searched all methods for: <strong>{this.state.term}</strong>.
          </p>
          <MethodCardList fSearch={this.state.term} />
        </PageBody>
      </PageLayout>
    );
  }
}
export default SearchPage;
