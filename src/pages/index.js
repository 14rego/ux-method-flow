import React from 'react';
import QuestionFlow from '../components/QuestionFlow';
import MethodCardList from '../components/MethodCardList';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';

class IndexPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      term: this.props.search
    };
  }
  componentDidMount = () => {
    this.setState({
      loading: false
    });
  };
  render() {
    return (
      <PageLayout>
        <PageHeader />
        <PageBody>
          <QuestionFlow />
          <MethodCardList />
        </PageBody>
      </PageLayout>
    );
  }
}
export default IndexPage;
