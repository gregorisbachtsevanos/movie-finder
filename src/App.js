import { Component } from 'react';

// import logo from './logo.svg';
import './App.css';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: []
		};
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then((data) => this.setState(() => {
				return { monsters: data }
			},
				() => {
					console.log(this.state)
				}
			))
			.catch((err) => console.log(err));
	};

	render() {
		return (
			<div className="App">
				<input />
				{
					this.state.monsters.map((monster) => {
						return (
							<div key={monster.id}>
								<h1>{monster.name}</h1>
							</div>
						)
					})
				}
			</div>
		);
	}
}

export default App;