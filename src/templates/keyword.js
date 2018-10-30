import React from 'react';
import MethodCardList from '../components/MethodCardList';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';
import { graphql } from 'gatsby';

export default ({ data }) => {
  const filter = data.filtersJson;
  return (
    <PageLayout>
      <PageHeader />
      <PageBody>
        <MethodCardList fKey={filter.value} />
      </PageBody>
    </PageLayout>
  );
};

export const query = graphql`
  query getKeyword($slug: String!) {
    filtersJson(value: { eq: $slug }) {
      value
    }
  }
`;
