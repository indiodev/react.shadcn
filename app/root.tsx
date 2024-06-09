import React from 'react';

import { Button } from '@components/ui/button';
import { Input } from '@components/ui/input';
import './globals.css';

export function Root(): React.ReactElement {
	return (
		<div className="h-screen w-screen flex items-center justify-center">
			<form
				className="p-8 flex gap-2"
				onSubmit={(e) => e.preventDefault()}
			>
				<Input placeholder="Full Name" />
				<Button variant="default">Submit</Button>
			</form>
		</div>
	);
}
