import React from 'react';
import './App.css';
import IndexPage from './pages/Index';
import Header from './navigation/index';
import { ContextProvider } from './store/state';

function App({ children }) {
	return (
		<ContextProvider>
			<div className="App">
				<Header />
				<IndexPage />
				{children}
			</div>
		</ContextProvider>
	);
}

export default App;
