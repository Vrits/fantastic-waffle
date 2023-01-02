import React from "react";

const PenyakitContext = React.createContext({
  penyakit: [{
    code : '',
    name : '',
    premis: ''
  }],
  gejala: [{
    code : '',
    name : ''
  }],
  selectedGejala: [{
    code: '',
    name: ''
  }],
  onSelectGejala : (gejalaId, gejalaName) => {},
  
});

export default PenyakitContext;
