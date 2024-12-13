import React, { useState, useEffect } from "react";
import {
  Button,
  Flex,
  Text,
  Divider,
  Heading,
  Card,
  Image,
  Badge,
  View,
  useTheme,
  SwitchField,
} from "@aws-amplify/ui-react";

import "@fontsource-variable/inter"; // Defaults to wght axis
import "@fontsource-variable/inter/wght.css"; // Specify axis
import "@fontsource-variable/inter/wght-italic.css"; // Specify axis and styl

import { FichaCadastralCreateForm } from "./ui-components";

import { FichaCadastralUpdateForm } from "./ui-components";

import { ListaDadosCollection } from "./ui-components";

import { NewCreateForm1 } from "./ui-components";

import { NewUpdateForm1 } from './ui-components';

import { PerfilMedicoCollection } from "./ui-components";

import { NavBarHeader } from "./ui-components";

function App() {
  const [selection, setSelection] = useState();
  const [isOpen, setOpen] = useState();
  const { tokens } = useTheme();

  //console.log(selection)

  return (
    <div className="App">
      <Flex direction="column">
        <Button
          isFullWidth={true}
          variation="primary"
          size="large"
          onClick={() => setOpen(!isOpen)}
        >
          Novo Cadastro
        </Button>
        <Divider orientation="horizontal" />
      </Flex>

      <Flex
        overflow={"auto"}
        justifyContent="center"
        alignItems="center"
        alignContent="center"
      >
        {!selection && !isOpen && (
          <ListaDadosCollection
            overflow={"auto"}
            overrideItems={({ item }) => ({
              onClick: () => setSelection(item),
            })}
          />
        )}

        {selection && (
          <NewUpdateForm1
            id={selection.id}
            onSubmit={(fields) => {
              // Example function to trim all string inputs
              const updatedFields = {};
              Object.keys(fields).forEach((key) => {
                if (typeof fields[key] === "string") {
                  updatedFields[key] = fields[key].trim();
                } else {
                  updatedFields[key] = fields[key];
                }
              });
              alert("Atualização feita com sucesso!!");
              return updatedFields;
            }}
            onCancel={(fields) => {
              const updatedFields = {};
              alert("Edição cancelada!!");
              return window.location.reload();
            }}
            onSuccess={(fields) => {
              const updatedFields = {};
              return window.location.reload();
            }}
          />
        )}

        {isOpen && !selection && (
          <NewCreateForm1
            onCancel={(fields) => {
              const updatedFields = {};
              alert("Novo cadastro cancelado!!");
              return window.location.reload();
            }}
            onSuccess={(fields) => {
              const updatedFields = {};
              alert("Cadastro registrado com sucesso!!");
              return window.location.reload();
            }}
          />
        )}
      </Flex>

      <Divider orientation="horizontal" />
      <View
        backgroundColor={tokens.colors.background.tertiary}
        padding={tokens.space.medium}
      >
        <Card backgroundColor={tokens.colors.background.secondary}>
          <Flex
            justifyContent="center"
            alignItems="center"
            alignContent="center"
          >
            <Text as="span" color={tokens.colors.blue[40]}>
              Elefante Cadastral: 1.8 by PCILAB Tecnologia LTDA.
            </Text>
          </Flex>
        </Card>
      </View>
    </div>
  );
}

export default App;
