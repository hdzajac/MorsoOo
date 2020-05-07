import React from 'react';
import {Container, Content} from 'native-base';

export const PageLayout = props => {
  return (
    <Container>
      <Content padder>{props.children}</Content>
    </Container>
  );
};

export default PageLayout;
