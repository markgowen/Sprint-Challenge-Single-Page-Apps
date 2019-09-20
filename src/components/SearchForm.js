import React, { useState } from 'react';
import { MDBCol, MDBFormInline, MDBIcon } from 'mdbreact';

const SearchForm = (props) => {
  console.log('props', props);
  const [charName, setCharName] = useState({ name: ''})
  const [searchedName, setSearchedName] = useState([]);

  const handleChanges = e => {
    console.log(charName);
    setCharName({ ...charName, [e.target.name]: e.target.value});
  };

  const returnSearchedCharName = name => {
    const searchedCharName = {
      id: ([]),
      name: name.name,
    };
    setSearchedName([...searchedName, searchedCharName]);
  };

  const submitForm = e => {
    e.preventDefault();
    props.returnSearchedCharName(charName);
    setCharName({ name: ''});
  };

  return (
    <MDBCol md="6">
      <MDBFormInline className="md-form">
        <MDBIcon icon="search" />
        <input
          className="form-control form-control-sm ml-3 w-75"
          type="text"
          placeholder="Search"
          aria-label="Search"
        />
      </MDBFormInline>
    </MDBCol>
  );
};

export default SearchForm;
