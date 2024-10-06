import logo from './logo.svg';
import './App.css';

export const App = () => {
	// Декларативный стиль
	return (
		<div className="App">
			{/*Декларативный стиль*/}
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />

				{/*Декларативный стиль*/}
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
				{/* Императивный стиль вызов функции текущего года */}
				<span> {new Date().getFullYear()} year </span>
			</header>
		</div>
	);
};
