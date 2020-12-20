import React from "react";
import Heading from './Heading';
import Entry from './Entry';
import emojipedia from '../emojipedia';
import Footer from './Footer';

function createEmojiCard(card){

  return <Entry 
             key ={card.id}
             img = {card.emoji}
             name = {card.name}
             meaning = {card.meaning}
         ></Entry>  
}

function App() {
  return (
    <div>
      
      <Heading></Heading>

      <dl className="dictionary">

      {emojipedia.map(createEmojiCard)}

      </dl>

      <Footer></Footer>
    </div>
  );
}

export default App;
