import React from 'react';
import PageLayout from '../components/PageLayout';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';
import { Link } from 'gatsby';

const NotFoundPage = () => (
  <PageLayout>
    <PageHeader />
    <PageBody>
      <div className="text-center">
        <h1 className="h3">Sorry, this page does not exist.</h1>
        <p>
          You could <Link to="/">go back to the home page</Link>.
        </p>
      </div>
    </PageBody>
  </PageLayout>
);

export default NotFoundPage;
