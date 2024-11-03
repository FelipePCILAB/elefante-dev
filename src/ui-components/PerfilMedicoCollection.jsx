/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { FichaCadastral } from "../models";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import PerfilMedico from "./PerfilMedico";
import { Collection } from "@aws-amplify/ui-react";
export default function PerfilMedicoCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: FichaCadastral,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable="true"
      isPaginated={true}
      searchPlaceholder="Pesquisar"
      itemsPerPage={7}
      direction="column"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "PerfilMedicoCollection")}
      {...rest}
    >
      {(item, index) => (
        <PerfilMedico
          fichaCadastral={item}
          margin="3px 3px 3px 3px"
          height="auto"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></PerfilMedico>
      )}
    </Collection>
  );
}
