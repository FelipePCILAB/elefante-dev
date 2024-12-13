export const schema = {
    "models": {
        "FichaCadastral": {
            "name": "FichaCadastral",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "razaoSocial_Nome": {
                    "name": "razaoSocial_Nome",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "nomeFantasia": {
                    "name": "nomeFantasia",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cnpjCpf": {
                    "name": "cnpjCpf",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ieRg": {
                    "name": "ieRg",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "especialidade": {
                    "name": "especialidade",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "registroClasse": {
                    "name": "registroClasse",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "enderecoCompleto": {
                    "name": "enderecoCompleto",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "bairro": {
                    "name": "bairro",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cep": {
                    "name": "cep",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "cidade": {
                    "name": "cidade",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "estado": {
                    "name": "estado",
                    "isArray": false,
                    "type": {
                        "enum": "Estados"
                    },
                    "isRequired": true,
                    "attributes": []
                },
                "telefoneFixo": {
                    "name": "telefoneFixo",
                    "isArray": false,
                    "type": "String",
                    "isRequired": true,
                    "attributes": []
                },
                "telefoneCelular": {
                    "name": "telefoneCelular",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emailGeral": {
                    "name": "emailGeral",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "responsavelCompras": {
                    "name": "responsavelCompras",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "telefoneCompras": {
                    "name": "telefoneCompras",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emailCompras": {
                    "name": "emailCompras",
                    "isArray": false,
                    "type": "AWSEmail",
                    "isRequired": false,
                    "attributes": []
                },
                "responsavelPagamentos": {
                    "name": "responsavelPagamentos",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "telefonePagamenos": {
                    "name": "telefonePagamenos",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "emailPagamentos": {
                    "name": "emailPagamentos",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "dataVisita": {
                    "name": "dataVisita",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "dataUltimaCompra": {
                    "name": "dataUltimaCompra",
                    "isArray": false,
                    "type": "AWSDate",
                    "isRequired": false,
                    "attributes": []
                },
                "valorUltimaCompra": {
                    "name": "valorUltimaCompra",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "statusCliente": {
                    "name": "statusCliente",
                    "isArray": false,
                    "type": {
                        "enum": "Status"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "notas": {
                    "name": "notas",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "FichaCadastrals",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "Estados": {
            "name": "Estados",
            "values": [
                "ACRE",
                "ALAGOAS",
                "AMAPA",
                "AMAZONAS",
                "BAHIA",
                "CEARA",
                "DISTRITO_FEDERAL",
                "ESPIRITO_SANTO",
                "GOIAS",
                "MARANHAO",
                "MATO_GROSSO_SUL",
                "MATO_GROSSO",
                "MINAS_GERAIS",
                "PARA",
                "PARAIBA",
                "PARANA",
                "PERNAMBUCO",
                "PIAUI",
                "RIO_DE_JANEIRO",
                "RIO_GRANDE_SUL",
                "RONDONIA",
                "RORAIMA",
                "SANTA_CATARINA",
                "SAO_PAULO",
                "SERGIPE",
                "TOCANTINS"
            ]
        },
        "Status": {
            "name": "Status",
            "values": [
                "ATIVO",
                "INATIVO",
                "NOVO",
                "INADIMPLENTE",
                "ATIVO_MENSAL"
            ]
        }
    },
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "02cb2c4b4b425ceee55b055da1420fe9"
};