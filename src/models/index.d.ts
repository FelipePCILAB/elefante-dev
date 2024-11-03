import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

export enum Estados {
  ACRE = "ACRE",
  ALAGOAS = "ALAGOAS",
  AMAPA = "AMAPA",
  AMAZONAS = "AMAZONAS",
  BAHIA = "BAHIA",
  CEARA = "CEARA",
  DISTRITO_FEDERAL = "DISTRITO_FEDERAL",
  ESPIRITO_SANTO = "ESPIRITO_SANTO",
  GOIAS = "GOIAS",
  MARANHAO = "MARANHAO",
  MATO_GROSSO_SUL = "MATO_GROSSO_SUL",
  MATO_GROSSO = "MATO_GROSSO",
  MINAS_GERAIS = "MINAS_GERAIS",
  PARA = "PARA",
  PARAIBA = "PARAIBA",
  PARANA = "PARANA",
  PERNAMBUCO = "PERNAMBUCO",
  PIAUI = "PIAUI",
  RIO_DE_JANEIRO = "RIO_DE_JANEIRO",
  RIO_GRANDE_SUL = "RIO_GRANDE_SUL",
  RONDONIA = "RONDONIA",
  RORAIMA = "RORAIMA",
  SANTA_CATARINA = "SANTA_CATARINA",
  SAO_PAULO = "SAO_PAULO",
  SERGIPE = "SERGIPE",
  TOCANTINS = "TOCANTINS"
}

export enum Status {
  ATIVO = "ATIVO",
  INATIVO = "INATIVO",
  NOVO = "NOVO",
  INADIMPLENTE = "INADIMPLENTE",
  ATIVO_MENSAL = "ATIVO_MENSAL"
}



type EagerFichaCadastral = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FichaCadastral, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly razaoSocial_Nome: string;
  readonly nomeFantasia?: string | null;
  readonly cnpjCpf?: string | null;
  readonly ieRg?: string | null;
  readonly especialidade?: string | null;
  readonly registroClasse?: string | null;
  readonly enderecoCompleto: string;
  readonly bairro?: string | null;
  readonly cep?: string | null;
  readonly cidade: string;
  readonly estado: Estados | keyof typeof Estados;
  readonly telefoneFixo: string;
  readonly telefoneCelular?: string | null;
  readonly emailGeral?: string | null;
  readonly responsavelCompras?: string | null;
  readonly telefoneCompras?: string | null;
  readonly emailCompras?: string | null;
  readonly responsavelPagamentos?: string | null;
  readonly telefonePagamenos?: string | null;
  readonly emailPagamentos?: string | null;
  readonly dataUltimaCompra?: string | null;
  readonly statusCliente?: Status | keyof typeof Status | null;
  readonly notas?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyFichaCadastral = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<FichaCadastral, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly razaoSocial_Nome: string;
  readonly nomeFantasia?: string | null;
  readonly cnpjCpf?: string | null;
  readonly ieRg?: string | null;
  readonly especialidade?: string | null;
  readonly registroClasse?: string | null;
  readonly enderecoCompleto: string;
  readonly bairro?: string | null;
  readonly cep?: string | null;
  readonly cidade: string;
  readonly estado: Estados | keyof typeof Estados;
  readonly telefoneFixo: string;
  readonly telefoneCelular?: string | null;
  readonly emailGeral?: string | null;
  readonly responsavelCompras?: string | null;
  readonly telefoneCompras?: string | null;
  readonly emailCompras?: string | null;
  readonly responsavelPagamentos?: string | null;
  readonly telefonePagamenos?: string | null;
  readonly emailPagamentos?: string | null;
  readonly dataUltimaCompra?: string | null;
  readonly statusCliente?: Status | keyof typeof Status | null;
  readonly notas?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type FichaCadastral = LazyLoading extends LazyLoadingDisabled ? EagerFichaCadastral : LazyFichaCadastral

export declare const FichaCadastral: (new (init: ModelInit<FichaCadastral>) => FichaCadastral) & {
  copyOf(source: FichaCadastral, mutator: (draft: MutableModel<FichaCadastral>) => MutableModel<FichaCadastral> | void): FichaCadastral;
}