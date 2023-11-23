import React from 'react';
import Gallery from './components/Gallery/Gallery';
import { articles } from './articles.js';
import './App.css';



const App = () => {
  const [state, setState] = React.useState(
    {
      'articles': articles
    }
  )
  const decrementeQte=(id)=>{
//state.articles[id.qte--:]
//option 1: 
let articlesTmp = state.articles;
articlesTmp[id].qte--;
setState({
  'articles':articlesTmp
})

  }
  return (
    <>
    <header></header>
    <main>
      <Gallery articles={state.articles}></Gallery>
    </main>
    <footer></footer>
    </>
  );
}

export default App;

