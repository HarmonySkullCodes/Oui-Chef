import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section className="m-10 border-2 border-yellow-200 border-solid">
      <header>
        <h1 className='capitalize'>sugerencias del chef</h1>
        <h5>La gastronomie est l’art d’utiliser la nourriture pour créer du bonheur</h5>
      </header>
      <section className='w-full flex'>
        <aside className='w-1/2 flex-grow'>
          <legend>Si usted desea degustar algo distinto éste es el lugar indicado.  Le proponemos una cocina de sabores tradicionales franceses, con un toque de modernidad y principalmente adaptada a productos locales en su mayoría orgánicos.</legend>
          <legend>Bienvenidos al bistrot francés Oui. Lo invitamos a disfrutar del momento, de una rica comida en buena compañía.  Bienvenue Chez nous !</legend>
        </aside>
        <aside className='w-1/2 flex-grow'>
          <h1 className='capitalize'>entradas</h1>
          <article>
            <h4 className='capitalize'>sopa de cebolla</h4>
            <strong className=''>Soupe d'oignons</strong>
            <p>Típica sopa de cebollas caramelizadas en un fondo casero, acompañada de crutones y queso. <span>$7</span></p>
          </article>
        </aside>
        <aside>
          <h1 className='capitalize'>platos principales</h1>
          <article>
            <h4 className='capitalize'></h4>
            <strong></strong>
            <p></p>
          </article>
        </aside>
        <aside>
          <h1 className='capitalize'>vegar</h1>
          <article>
            <h4 className='capitalize'></h4>
            <strong></strong>
            <p></p>
          </article>
        </aside>
        <aside>
          <h1 className='capitalize'>postres</h1>
          <article>
            <h4 className='capitalize'></h4>
            <strong></strong>
            <p></p>
          </article>
        </aside>
        <aside>
          <h1 className='capitalize'>platos principales</h1>
          <article>
            <h4 className='capitalize'></h4>
            <strong></strong>
            <p></p>
          </article>
        </aside>
      </section>
    </section>
  );
}

export default App;
