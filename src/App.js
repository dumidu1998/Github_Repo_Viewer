import Axios from 'axios';
import { useState, useRef, useCallback } from 'react';
import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Scroll from './components/Scroll';
import useBookSearch from './useBookSearch';
// import { Switch } from '@headlessui/react';



function App() {
  const [repos, setRepos] = useState([]);
  const [input, setinput] = useState('');

  const clickk = (e) => {
    // alert(e.target.value);
    // Axios.get('https://official-joke-api.appspot.com/random_joke').then(
    e.preventDefault();
    setRepos([]);
    Axios.get('https://api.github.com/users/' + input + '/repos').then(
      (res) => {
        if (res.data.length == 0) alert("No data found");
        res.data.map(
          d => {
            setRepos(oldArray => [...oldArray, { name: d.name, avatar: d.owner.avatar_url, url: d.html_url, desc: d.full_name }]);
          }
        )
      })
      .catch(err => {
        alert('User ' + err.response.data.message);
      })
  }

  return (
    <>
      <div className="min-h-screen">
        <div class="flex">
          <form>
            <span class="text-sm border-2 rounded-l px-4 py-2 bg-gray-300 whitespace-no-wrap">Enter Github Username:</span>
            <input name="field_name" class=" ml-4 lg:ml-0 border-2 rounded-r px-4 py-2 w-56" type="text"
              value={input} onChange={event => setinput(event.target.value)} placeholder="dumidu1998" />
            <button onClick={clickk} className="bg-indigo-600 hover:bg-blue-dark ml-1 text-white font-bold py-3 px-6 rounded">Click to Load</button>
          </form>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4 ">
          {repos.map(repo => (<Card h2={repo.name} img={repo.avatar} url={repo.url} desc={repo.desc} />))}
        </div>
      </div>
      <Footer />
    </>

  )
}

export default App;
