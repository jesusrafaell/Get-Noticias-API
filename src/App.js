import React, { Fragment, useState, useEffect} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListNoticias from './components/ListNoticias';

function App() {

  //def categoria y notica
  const [country, saveCountry] = useState('');
  const [category, saveCategory] = useState('');
  const [noticias, saveNoticias] = useState([]);
  const [load, saveLoad] = useState(false);

  useEffect(() => {
    const consultAPI = async () => {
      const API_KEY = 'f7208ce3f94847328e363c77e642ab42';
      let url = `http://newsapi.org/v2/top-headlines?country=ve&category=${category}&apiKey=${API_KEY}`;
        if(country !== ''){
          url = `http://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`;
      }
      const res = await fetch(url);
      const noticias = await res.json();

      saveLoad(true);
      setTimeout(() => {
        saveLoad(false);
      }, 2000);
      
      saveNoticias(noticias.articles);
    }
    consultAPI();
  }, [category, country])

  return (
    <Fragment>
      <Header 
        title='Notices'
      />

      <div className="container white">
        <Formulario 
          saveCategory={saveCategory}
          saveCountry={saveCountry}
        />
         <ListNoticias
            noticias={noticias}
            load={load}
         />
      </div>
    </Fragment>
  );
}

export default App;
