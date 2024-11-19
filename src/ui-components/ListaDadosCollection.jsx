/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { FichaCadastral } from "../models";
import { SortDirection } from "@aws-amplify/datastore";
import { getOverrideProps, useDataStoreBinding } from "./utils";
import DataRow from "./DataRow";
import { Collection } from "@aws-amplify/ui-react";
export default function ListaDadosCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const itemsPagination = {
    sort: (s) =>
      s
        .cidade(SortDirection.ASCENDING)
        .razaoSocial_Nome(SortDirection.ASCENDING),
  };
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: FichaCadastral,
    pagination: itemsPagination,
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
      searchPlaceholder="Pesquisa"
      itemsPerPage={6}
      direction="column"
      alignItems="stretch"
      justifyContent="center"
      items={items || []}
      {...getOverrideProps(overrides, "ListaDadosCollection")}
      {...rest}
    >
      {(item, index) => (
        <DataRow
          fichaCadastral={item}
          height="auto"
          width="auto"
          margin="0 0 0 0px"
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></DataRow>
      )}
    </Collection>
  );
}
