/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, HeadingProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { FichaCadastral } from "../models";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type FichaCadastralUpdateFormInputValues = {
    razaoSocial_Nome?: string;
    nomeFantasia?: string;
    cnpjCpf?: string;
    ieRg?: string;
    especialidade?: string;
    registroClasse?: string;
    enderecoCompleto?: string;
    bairro?: string;
    cep?: string;
    cidade?: string;
    estado?: string;
    telefoneFixo?: string;
    telefoneCelular?: string;
    emailGeral?: string;
    responsavelCompras?: string;
    telefoneCompras?: string;
    emailCompras?: string;
    responsavelPagamentos?: string;
    telefonePagamenos?: string;
    emailPagamentos?: string;
    dataUltimaCompra?: string;
    valorUltimaCompra?: number;
    statusCliente?: string;
    notas?: string;
};
export declare type FichaCadastralUpdateFormValidationValues = {
    razaoSocial_Nome?: ValidationFunction<string>;
    nomeFantasia?: ValidationFunction<string>;
    cnpjCpf?: ValidationFunction<string>;
    ieRg?: ValidationFunction<string>;
    especialidade?: ValidationFunction<string>;
    registroClasse?: ValidationFunction<string>;
    enderecoCompleto?: ValidationFunction<string>;
    bairro?: ValidationFunction<string>;
    cep?: ValidationFunction<string>;
    cidade?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    telefoneFixo?: ValidationFunction<string>;
    telefoneCelular?: ValidationFunction<string>;
    emailGeral?: ValidationFunction<string>;
    responsavelCompras?: ValidationFunction<string>;
    telefoneCompras?: ValidationFunction<string>;
    emailCompras?: ValidationFunction<string>;
    responsavelPagamentos?: ValidationFunction<string>;
    telefonePagamenos?: ValidationFunction<string>;
    emailPagamentos?: ValidationFunction<string>;
    dataUltimaCompra?: ValidationFunction<string>;
    valorUltimaCompra?: ValidationFunction<number>;
    statusCliente?: ValidationFunction<string>;
    notas?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FichaCadastralUpdateFormOverridesProps = {
    FichaCadastralUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    razaoSocial_Nome?: PrimitiveOverrideProps<TextFieldProps>;
    nomeFantasia?: PrimitiveOverrideProps<TextFieldProps>;
    cnpjCpf?: PrimitiveOverrideProps<TextFieldProps>;
    ieRg?: PrimitiveOverrideProps<TextFieldProps>;
    especialidade?: PrimitiveOverrideProps<TextFieldProps>;
    registroClasse?: PrimitiveOverrideProps<TextFieldProps>;
    enderecoCompleto?: PrimitiveOverrideProps<TextFieldProps>;
    bairro?: PrimitiveOverrideProps<TextFieldProps>;
    cep?: PrimitiveOverrideProps<TextFieldProps>;
    cidade?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SelectFieldProps>;
    telefoneFixo?: PrimitiveOverrideProps<TextFieldProps>;
    telefoneCelular?: PrimitiveOverrideProps<TextFieldProps>;
    emailGeral?: PrimitiveOverrideProps<TextFieldProps>;
    responsavelCompras?: PrimitiveOverrideProps<TextFieldProps>;
    telefoneCompras?: PrimitiveOverrideProps<TextFieldProps>;
    emailCompras?: PrimitiveOverrideProps<TextFieldProps>;
    responsavelPagamentos?: PrimitiveOverrideProps<TextFieldProps>;
    telefonePagamenos?: PrimitiveOverrideProps<TextFieldProps>;
    emailPagamentos?: PrimitiveOverrideProps<TextFieldProps>;
    dataUltimaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    valorUltimaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    statusCliente?: PrimitiveOverrideProps<SelectFieldProps>;
    notas?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type FichaCadastralUpdateFormProps = React.PropsWithChildren<{
    overrides?: FichaCadastralUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    fichaCadastral?: FichaCadastral;
    onSubmit?: (fields: FichaCadastralUpdateFormInputValues) => FichaCadastralUpdateFormInputValues;
    onSuccess?: (fields: FichaCadastralUpdateFormInputValues) => void;
    onError?: (fields: FichaCadastralUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: FichaCadastralUpdateFormInputValues) => FichaCadastralUpdateFormInputValues;
    onValidate?: FichaCadastralUpdateFormValidationValues;
} & React.CSSProperties>;
export default function FichaCadastralUpdateForm(props: FichaCadastralUpdateFormProps): React.ReactElement;
