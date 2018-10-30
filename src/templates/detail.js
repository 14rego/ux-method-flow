import React from 'react';
import MethodCardList from '../components/MethodCardList';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';

import { graphql } from 'gatsby';

export default ({ data }) => {
  const method = data.methodsJson;
  return (
    <PageLayout>
      <PageHeader />
      <PageBody>
        <MethodCardList fUnique={method.unique} />
      </PageBody>
    </PageLayout>
  );
};

export const query = graphql`
  query getUniqueMethod($slug: String!) {
    methodsJson(unique: { eq: $slug }) {
      unique
    }
  }
`;
