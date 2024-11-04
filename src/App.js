import React, { useState, useEffect } from 'react';
import { Button, Flex, Text, Divider, Heading } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import {
  FichaCadastralCreateForm 
 } from './ui-components';

 import {
  FichaCadastralUpdateForm 
 } from './ui-components';

 import {
  ListaDadosCollection 
 } from './ui-components';

 import {
  PerfilMedicoCollection 
 } from './ui-components';


function App() {
  const [selection, setSelection] = useState()
  const [isOpen, setOpen] = useState();

  //console.log(selection)

  return (

    <div className="App">
      <Flex direction="column">
        <Button isFullWidth={false}
            variation="primary"
            colorTheme="info"
            size="large"
            loadingText=""
            onClick={() => setOpen(!isOpen)
            }>
            Novo Cadastro
        </Button>
        <Divider
          orientation="horizontal" />
      </Flex>
      
      <Flex overflow={'auto'} justifyContent="center">
        <PerfilMedicoCollection overflow={'auto'} overrideItems={({item}) => ({onClick: () => setSelection(item)
        })}/>
      </Flex>

      <Flex justifyContent="center">
        <Divider orientation="horizontal" />
        {
          selection && 
          <Heading
              level={5}>
              Edição:
          </Heading> 
        }
        {
          selection &&
          <Divider orientation="horizontal" />
        }
        
      </Flex>
      
      <Flex position={'relative'} overflow={'hidden'} grow={1} justifyContent="center">
        {selection &&
          <FichaCadastralUpdateForm id={selection.id}
                onSubmit={(fields) => {
                  // Example function to trim all string inputs
                  const updatedFields = {}
                  Object.keys(fields).forEach(key => {
                      if (typeof fields[key] === 'string') {
                          updatedFields[key] = fields[key].trim()
                      } else {
                          updatedFields[key] = fields[key]
                      }
                  })
                  alert('Atualização feita com sucesso!!')
                  return updatedFields
              }}
                onCancel={(fields) => {
                  const updatedFields = {}
                  alert('Edição cancelada!!')
                  return window.location.reload();
              }}
                onSuccess={(fields) => {
                const updatedFields = {}
                return window.location.reload();
            }}

          />	 
        }

        {isOpen &&
          <FichaCadastralCreateForm
              onCancel={(fields) => {
                const updatedFields = {}
                alert('Novo cadastro cancelado!!')
                return window.location.reload();
            }}
              onSuccess={(fields) => {
                const updatedFields = {}
                return window.location.reload();
            }}

          />
        }
      </Flex>
    </div>	

  );
}

export default App;
