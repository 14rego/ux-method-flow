import React from 'react';
import MethodCardList from '../components/MethodCardList';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';

class EffectivePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
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
          <MethodCardList fEffective="4" />
        </PageBody>
      </PageLayout>
    );
  }
}
export default EffectivePage;
