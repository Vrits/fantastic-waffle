import {Button} from '@chakra-ui/react'
import { useContext } from 'react';
import  PenyakitContext  from '../context/PenyakitContext';

const DaftarPenyakit = () => {
  const test = useContext(PenyakitContext)

  return (
    <>
      <h1>Daftar Penyakit Page</h1>
      <Button colorScheme={'blue'} onClick={() => {
        console.log(test)
      }}>
        tekan coek
      </Button>
    </>
  );
};

export default DaftarPenyakit;
