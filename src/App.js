import React from 'react';
import './App.css';
import { ContextProvider } from './store/state';
import Layout from './layout';
import BaseRouter from './routes';
function App({ children }) {
	return (
		<ContextProvider>
			<div className="App font-poppins">
				<Layout {...children}>
					<BaseRouter />
				</Layout>
			</div>
		</ContextProvider>
	);
}

export default App;
