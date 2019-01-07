import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled/macro';
import { ListItem } from 'components/Listing';

const List = styled.ul`
  margin-top: 4rem;
  margin-bottom: 4rem;
  list-style-type: none;
  margin-left: 0;
`;

export default class Listing extends Component {
  render() {
    const { posts } = this.props;
    return (
      <List>
        {posts.map(post => {
          let categories = false;
          if (post.node.data.categories[0].category) {
            categories = post.node.data.categories.map(c => c.category.document[0].data.name);
          }
          return <ListItem key={post.node.uid} node={post.node} categories={categories} />;
        })}
      </List>
    );
  }
}

Listing.propTypes = {
  posts: PropTypes.array.isRequired,
};
