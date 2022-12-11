import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';
import './App.css';

export type Monster = {
  id: string;
  name: string;
  email: string;
};

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchTextString = event.target.value.toLocaleLowerCase();
    setSearchText(searchTextString);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      );
      setMonsters(users);
    };

    fetchUsers();
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchText)
    );
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchText]);

  return (
    <div className="App">
      <h1>Monster Rollodex</h1>
      <SearchBox
        placeholder="search monster"
        value={searchText}
        handleChange={handleSearchTextChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;
