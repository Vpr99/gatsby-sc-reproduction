import React from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {
	colors: {
		palevioletred: 'palevioletred'
	}
};

const BaseLayout = ({ children }) => (
	<ThemeProvider theme={theme}>
		<main>{children}</main>
	</ThemeProvider>
);

export default BaseLayout;
