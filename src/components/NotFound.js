import React from 'react';
import { Link } from 'gatsby';

const NotFound = () => (
  <div className="text-center">
    <h1 className="h3">Sorry, this page does not exist.</h1>
    <p>
      You could <Link to="/">go back to the home page</Link>.
    </p>
  </div>
);

export default NotFound;
