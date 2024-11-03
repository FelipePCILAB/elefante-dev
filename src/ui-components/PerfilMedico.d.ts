/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FichaCadastral } from "../models";
import { ButtonProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PerfilMedicoOverridesProps = {
    PerfilMedico?: PrimitiveOverrideProps<FlexProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Melinda Marcus"?: PrimitiveOverrideProps<TextProps>;
    "Design Engineer at Cloth Studios"?: PrimitiveOverrideProps<TextProps>;
    Followers?: PrimitiveOverrideProps<FlexProps>;
    Cidade?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type PerfilMedicoProps = React.PropsWithChildren<Partial<FlexProps> & {
    fichaCadastral?: FichaCadastral;
    eventoClique?: (event: SyntheticEvent) => void;
} & {
    overrides?: PerfilMedicoOverridesProps | undefined | null;
}>;
export default function PerfilMedico(props: PerfilMedicoProps): React.ReactElement;
