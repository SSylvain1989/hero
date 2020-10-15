import React from 'react';

import './end.scss';

const End = () => (
  <div className="end">
    <div className="end__scene">
      <h1>Image de fin</h1>
      <div className="end__scene--modal">
        <p>Fin de l'histoire</p>
        <p>Notation de l'histoire</p>
        <div className="end__scene--modalbuttons">
          <button type="button">Rejouer</button>
          <button type="button">Menu principal</button>
        </div>
      </div>
    </div>
  </div>
);

export default End;
