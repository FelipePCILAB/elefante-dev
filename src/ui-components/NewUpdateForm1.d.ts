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
export declare type NewUpdateForm1InputValues = {
    razaoSocial_Nome?: string;
    nomeFantasia?: string;
    especialidade?: string;
    registroClasse?: string;
    enderecoCompleto?: string;
    cidade?: string;
    estado?: string;
    telefoneFixo?: string;
    telefoneCelular?: string;
    emailGeral?: string;
    responsavelCompras?: string;
    responsavelPagamentos?: string;
    dataVisita?: string;
    dataUltimaCompra?: string;
    valorUltimaCompra?: number;
    statusCliente?: string;
    notas?: string;
};
export declare type NewUpdateForm1ValidationValues = {
    razaoSocial_Nome?: ValidationFunction<string>;
    nomeFantasia?: ValidationFunction<string>;
    especialidade?: ValidationFunction<string>;
    registroClasse?: ValidationFunction<string>;
    enderecoCompleto?: ValidationFunction<string>;
    cidade?: ValidationFunction<string>;
    estado?: ValidationFunction<string>;
    telefoneFixo?: ValidationFunction<string>;
    telefoneCelular?: ValidationFunction<string>;
    emailGeral?: ValidationFunction<string>;
    responsavelCompras?: ValidationFunction<string>;
    responsavelPagamentos?: ValidationFunction<string>;
    dataVisita?: ValidationFunction<string>;
    dataUltimaCompra?: ValidationFunction<string>;
    valorUltimaCompra?: ValidationFunction<number>;
    statusCliente?: ValidationFunction<string>;
    notas?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type NewUpdateForm1OverridesProps = {
    NewUpdateForm1Grid?: PrimitiveOverrideProps<GridProps>;
    SectionalElement0?: PrimitiveOverrideProps<HeadingProps>;
    razaoSocial_Nome?: PrimitiveOverrideProps<TextFieldProps>;
    nomeFantasia?: PrimitiveOverrideProps<TextFieldProps>;
    especialidade?: PrimitiveOverrideProps<TextFieldProps>;
    registroClasse?: PrimitiveOverrideProps<TextFieldProps>;
    enderecoCompleto?: PrimitiveOverrideProps<TextFieldProps>;
    cidade?: PrimitiveOverrideProps<TextFieldProps>;
    estado?: PrimitiveOverrideProps<SelectFieldProps>;
    telefoneFixo?: PrimitiveOverrideProps<TextFieldProps>;
    telefoneCelular?: PrimitiveOverrideProps<TextFieldProps>;
    emailGeral?: PrimitiveOverrideProps<TextFieldProps>;
    responsavelCompras?: PrimitiveOverrideProps<TextFieldProps>;
    responsavelPagamentos?: PrimitiveOverrideProps<TextFieldProps>;
    dataVisita?: PrimitiveOverrideProps<TextFieldProps>;
    dataUltimaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    valorUltimaCompra?: PrimitiveOverrideProps<TextFieldProps>;
    statusCliente?: PrimitiveOverrideProps<SelectFieldProps>;
    notas?: PrimitiveOverrideProps<TextAreaFieldProps>;
} & EscapeHatchProps;
export declare type NewUpdateForm1Props = React.PropsWithChildren<{
    overrides?: NewUpdateForm1OverridesProps | undefined | null;
} & {
    id?: string;
    fichaCadastral?: FichaCadastral;
    onSubmit?: (fields: NewUpdateForm1InputValues) => NewUpdateForm1InputValues;
    onSuccess?: (fields: NewUpdateForm1InputValues) => void;
    onError?: (fields: NewUpdateForm1InputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: NewUpdateForm1InputValues) => NewUpdateForm1InputValues;
    onValidate?: NewUpdateForm1ValidationValues;
} & React.CSSProperties>;
export default function NewUpdateForm1(props: NewUpdateForm1Props): React.ReactElement;