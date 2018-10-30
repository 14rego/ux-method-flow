import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import './PageLayout.css';

class PageLayout extends React.Component {
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
    const { children } = this.props;
    return (
      <StaticQuery
        query={graphql`
          query SiteTitleQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={data => (
          <>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: 'charset', charset: 'UTF-8' },
                {
                  name: 'viewport',
                  content: 'width=device-width, initial-scale=1.0'
                },
                {
                  name: 'compatible',
                  'http-equiv': 'X-UA-Compatible',
                  content: 'ie=edge'
                },
                {
                  name: 'description',
                  content:
                    'A question flow to educate and guide you through user experience methods'
                },
                {
                  name: 'keywords',
                  content: 'user experience, methods, education, design'
                }
              ]}
            >
              <html lang="en" />
            </Helmet>

            <div className={`loading-${this.state.loading} container`}>
              {children}
            </div>
          </>
        )}
      />
    );
  }
}

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageLayout;
