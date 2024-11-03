// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const Estados = {
  "ACRE": "ACRE",
  "ALAGOAS": "ALAGOAS",
  "AMAPA": "AMAPA",
  "AMAZONAS": "AMAZONAS",
  "BAHIA": "BAHIA",
  "CEARA": "CEARA",
  "DISTRITO_FEDERAL": "DISTRITO_FEDERAL",
  "ESPIRITO_SANTO": "ESPIRITO_SANTO",
  "GOIAS": "GOIAS",
  "MARANHAO": "MARANHAO",
  "MATO_GROSSO_SUL": "MATO_GROSSO_SUL",
  "MATO_GROSSO": "MATO_GROSSO",
  "MINAS_GERAIS": "MINAS_GERAIS",
  "PARA": "PARA",
  "PARAIBA": "PARAIBA",
  "PARANA": "PARANA",
  "PERNAMBUCO": "PERNAMBUCO",
  "PIAUI": "PIAUI",
  "RIO_DE_JANEIRO": "RIO_DE_JANEIRO",
  "RIO_GRANDE_SUL": "RIO_GRANDE_SUL",
  "RONDONIA": "RONDONIA",
  "RORAIMA": "RORAIMA",
  "SANTA_CATARINA": "SANTA_CATARINA",
  "SAO_PAULO": "SAO_PAULO",
  "SERGIPE": "SERGIPE",
  "TOCANTINS": "TOCANTINS"
};

const Status = {
  "ATIVO": "ATIVO",
  "INATIVO": "INATIVO",
  "NOVO": "NOVO",
  "INADIMPLENTE": "INADIMPLENTE",
  "ATIVO_MENSAL": "ATIVO_MENSAL"
};

const { FichaCadastral } = initSchema(schema);

export {
  FichaCadastral,
  Estados,
  Status
};