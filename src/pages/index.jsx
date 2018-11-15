import React, { Fragment } from 'react';
import styled from 'styled-components';

const Container = styled.div(({ theme }) => ({
	background: theme.colors.palevioletred
}));

const Home = ({ location }) => (
	<Fragment>
		<Container>Test</Container>
	</Fragment>
);

export default Home;
