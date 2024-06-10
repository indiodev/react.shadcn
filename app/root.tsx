import { Route } from '@routes/index';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
export function Root(): React.ReactElement {
	return (
		<BrowserRouter>
			<Route.Root />
		</BrowserRouter>
	);
}
