import { Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.value });
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
      .catch(error => console.log(error));
  }

  render() {
    const { monsters, searchText } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monster Rollodex</h1>
        <SearchBox
          placeholder="search monster"
          value={this.state.searchText}
          handleChange={this.handleSearchTextChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
