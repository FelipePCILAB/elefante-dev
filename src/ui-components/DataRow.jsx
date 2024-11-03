/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useNavigateAction } from "./utils";
import { Button, Flex, Text } from "@aws-amplify/ui-react";
export default function DataRow(props) {
  const { fichaCadastral, overrides, ...rest } = props;
  const buttonOnClick = useNavigateAction({
    target: "_blank",
    type: "url",
    url: fichaCadastral?.updatedAt,
  });
  return (
    <Flex
      gap="16px"
      direction="row"
      width="991px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="16px 0px 16px 0px"
      {...getOverrideProps(overrides, "DataRow")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="300px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={fichaCadastral?.razaoSocial_Nome}
        {...getOverrideProps(overrides, "label")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${fichaCadastral?.cidade}${fichaCadastral?.enderecoCompleto}`}
        {...getOverrideProps(overrides, "value")}
      ></Text>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="Editar"
        onClick={() => {
          buttonOnClick();
        }}
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
