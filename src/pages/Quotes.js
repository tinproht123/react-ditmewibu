import React, { useState } from 'react';
import button from '../data/button';
import data1 from '../data/data1';

const Quotes = () => {
  const [selected, setSelected] = useState(null);
  const [linkSelected, setLinkSelected] = useState(null);
  const [list, setList] = useState(data1);

  const handleChange = (id) => {
    if (selected === id) {
      return setSelected(null);
    }
    setSelected(id);
  };

  const handleLink = (e) => {
    setList(e);
  };

  const handleChangeLink = (id) => {
    if (linkSelected === id) {
      return;
    }
    setLinkSelected(id);
  };

  return (
    <div>
      <div className="btn-group row my-3 container">
        {button.map((item) => {
          return (
            <button
              className={`type-btn col-md-auto ${
                linkSelected === item.id && 'open'
              }`}
              onClick={() => {
                handleLink(item.data);
                handleChangeLink(item.id);
              }}
            >
              {item.title}
            </button>
          );
        })}
      </div>
      <ul className="quotes-container container">
        {list.map((item) => {
          return (
            <li
              key={item.id}
              className={`quotes-item ${selected === item.id && 'open'}`}
              onClick={() => handleChange(item.id)}
            >
              <h5 className={`quotes-title ${selected === item.id && 'open'}`}>
                {item.title}
              </h5>
              <p className={`quotes-text ${selected === item.id && 'open'}`}>
                {item.desc}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Quotes;
