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
} from "@aws-amplify/ui-react";

import { FichaCadastralCreateForm } from "./ui-components";

import { FichaCadastralUpdateForm } from "./ui-components";

import { ListaDadosCollection } from "./ui-components";

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
          <FichaCadastralUpdateForm
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
          <FichaCadastralCreateForm
            onCancel={(fields) => {
              const updatedFields = {};
              alert("Novo cadastro cancelado!!");
              return window.location.reload();
            }}
            onSuccess={(fields) => {
              const updatedFields = {};
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
          <Flex direction="row" alignItems="flex-start">
            <Image
              //alt="Road to milford sound"
              src=""
              width="33%"
            />
            <Flex
              direction="column"
              alignItems="flex-start"
              gap={tokens.space.xs}
            >
              <Text as="span" color={tokens.colors.blue[40]}>
                Versão: 1.5 by PCILAB Tecnologia LTDA.
              </Text>
            </Flex>
          </Flex>
        </Card>
      </View>
    </div>
  );
}

export default App;
