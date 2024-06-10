import { Layout } from '@layouts/index';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export function Root(): React.ReactElement {
	return (
		<React.Suspense>
			<Routes>
				<Route
					path="/"
					element={<Layout.Root />}
				/>
			</Routes>
		</React.Suspense>
	);
}
