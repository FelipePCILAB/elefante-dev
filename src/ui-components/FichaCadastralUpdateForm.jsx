/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Heading,
  SelectField,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { FichaCadastral } from "../models";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { DataStore } from "aws-amplify/datastore";
export default function FichaCadastralUpdateForm(props) {
  const {
    id: idProp,
    fichaCadastral: fichaCadastralModelProp,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    razaoSocial_Nome: "",
    nomeFantasia: "",
    cnpjCpf: "",
    ieRg: "",
    especialidade: "",
    registroClasse: "",
    enderecoCompleto: "",
    bairro: "",
    cep: "",
    cidade: "",
    estado: "",
    telefoneFixo: "",
    telefoneCelular: "",
    emailGeral: "",
    responsavelCompras: "",
    telefoneCompras: "",
    emailCompras: "",
    responsavelPagamentos: "",
    telefonePagamenos: "",
    emailPagamentos: "",
    dataUltimaCompra: "",
    valorUltimaCompra: "",
    statusCliente: "",
    notas: "",
  };
  const [razaoSocial_Nome, setRazaoSocial_Nome] = React.useState(
    initialValues.razaoSocial_Nome
  );
  const [nomeFantasia, setNomeFantasia] = React.useState(
    initialValues.nomeFantasia
  );
  const [cnpjCpf, setCnpjCpf] = React.useState(initialValues.cnpjCpf);
  const [ieRg, setIeRg] = React.useState(initialValues.ieRg);
  const [especialidade, setEspecialidade] = React.useState(
    initialValues.especialidade
  );
  const [registroClasse, setRegistroClasse] = React.useState(
    initialValues.registroClasse
  );
  const [enderecoCompleto, setEnderecoCompleto] = React.useState(
    initialValues.enderecoCompleto
  );
  const [bairro, setBairro] = React.useState(initialValues.bairro);
  const [cep, setCep] = React.useState(initialValues.cep);
  const [cidade, setCidade] = React.useState(initialValues.cidade);
  const [estado, setEstado] = React.useState(initialValues.estado);
  const [telefoneFixo, setTelefoneFixo] = React.useState(
    initialValues.telefoneFixo
  );
  const [telefoneCelular, setTelefoneCelular] = React.useState(
    initialValues.telefoneCelular
  );
  const [emailGeral, setEmailGeral] = React.useState(initialValues.emailGeral);
  const [responsavelCompras, setResponsavelCompras] = React.useState(
    initialValues.responsavelCompras
  );
  const [telefoneCompras, setTelefoneCompras] = React.useState(
    initialValues.telefoneCompras
  );
  const [emailCompras, setEmailCompras] = React.useState(
    initialValues.emailCompras
  );
  const [responsavelPagamentos, setResponsavelPagamentos] = React.useState(
    initialValues.responsavelPagamentos
  );
  const [telefonePagamenos, setTelefonePagamenos] = React.useState(
    initialValues.telefonePagamenos
  );
  const [emailPagamentos, setEmailPagamentos] = React.useState(
    initialValues.emailPagamentos
  );
  const [dataUltimaCompra, setDataUltimaCompra] = React.useState(
    initialValues.dataUltimaCompra
  );
  const [valorUltimaCompra, setValorUltimaCompra] = React.useState(
    initialValues.valorUltimaCompra
  );
  const [statusCliente, setStatusCliente] = React.useState(
    initialValues.statusCliente
  );
  const [notas, setNotas] = React.useState(initialValues.notas);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = fichaCadastralRecord
      ? { ...initialValues, ...fichaCadastralRecord }
      : initialValues;
    setRazaoSocial_Nome(cleanValues.razaoSocial_Nome);
    setNomeFantasia(cleanValues.nomeFantasia);
    setCnpjCpf(cleanValues.cnpjCpf);
    setIeRg(cleanValues.ieRg);
    setEspecialidade(cleanValues.especialidade);
    setRegistroClasse(cleanValues.registroClasse);
    setEnderecoCompleto(cleanValues.enderecoCompleto);
    setBairro(cleanValues.bairro);
    setCep(cleanValues.cep);
    setCidade(cleanValues.cidade);
    setEstado(cleanValues.estado);
    setTelefoneFixo(cleanValues.telefoneFixo);
    setTelefoneCelular(cleanValues.telefoneCelular);
    setEmailGeral(cleanValues.emailGeral);
    setResponsavelCompras(cleanValues.responsavelCompras);
    setTelefoneCompras(cleanValues.telefoneCompras);
    setEmailCompras(cleanValues.emailCompras);
    setResponsavelPagamentos(cleanValues.responsavelPagamentos);
    setTelefonePagamenos(cleanValues.telefonePagamenos);
    setEmailPagamentos(cleanValues.emailPagamentos);
    setDataUltimaCompra(cleanValues.dataUltimaCompra);
    setValorUltimaCompra(cleanValues.valorUltimaCompra);
    setStatusCliente(cleanValues.statusCliente);
    setNotas(cleanValues.notas);
    setErrors({});
  };
  const [fichaCadastralRecord, setFichaCadastralRecord] = React.useState(
    fichaCadastralModelProp
  );
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(FichaCadastral, idProp)
        : fichaCadastralModelProp;
      setFichaCadastralRecord(record);
    };
    queryData();
  }, [idProp, fichaCadastralModelProp]);
  React.useEffect(resetStateValues, [fichaCadastralRecord]);
  const validations = {
    razaoSocial_Nome: [{ type: "Required" }],
    nomeFantasia: [],
    cnpjCpf: [],
    ieRg: [],
    especialidade: [],
    registroClasse: [],
    enderecoCompleto: [{ type: "Required" }],
    bairro: [],
    cep: [],
    cidade: [{ type: "Required" }],
    estado: [{ type: "Required" }],
    telefoneFixo: [{ type: "Required" }],
    telefoneCelular: [],
    emailGeral: [{ type: "Email" }],
    responsavelCompras: [],
    telefoneCompras: [],
    emailCompras: [{ type: "Email" }],
    responsavelPagamentos: [],
    telefonePagamenos: [],
    emailPagamentos: [],
    dataUltimaCompra: [],
    valorUltimaCompra: [],
    statusCliente: [],
    notas: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="10px"
      columnGap="10px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          razaoSocial_Nome,
          nomeFantasia,
          cnpjCpf,
          ieRg,
          especialidade,
          registroClasse,
          enderecoCompleto,
          bairro,
          cep,
          cidade,
          estado,
          telefoneFixo,
          telefoneCelular,
          emailGeral,
          responsavelCompras,
          telefoneCompras,
          emailCompras,
          responsavelPagamentos,
          telefonePagamenos,
          emailPagamentos,
          dataUltimaCompra,
          valorUltimaCompra,
          statusCliente,
          notas,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(
            FichaCadastral.copyOf(fichaCadastralRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "FichaCadastralUpdateForm")}
      {...rest}
    >
      <Heading
        children="Formulário de Edição de Cadastro"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Razão Social / Nome:</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={razaoSocial_Nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome: value,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.razaoSocial_Nome ?? value;
          }
          if (errors.razaoSocial_Nome?.hasError) {
            runValidationTasks("razaoSocial_Nome", value);
          }
          setRazaoSocial_Nome(value);
        }}
        onBlur={() => runValidationTasks("razaoSocial_Nome", razaoSocial_Nome)}
        errorMessage={errors.razaoSocial_Nome?.errorMessage}
        hasError={errors.razaoSocial_Nome?.hasError}
        {...getOverrideProps(overrides, "razaoSocial_Nome")}
      ></TextField>
      <TextField
        label="Nome Fantasia:"
        isRequired={false}
        isReadOnly={false}
        value={nomeFantasia}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia: value,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.nomeFantasia ?? value;
          }
          if (errors.nomeFantasia?.hasError) {
            runValidationTasks("nomeFantasia", value);
          }
          setNomeFantasia(value);
        }}
        onBlur={() => runValidationTasks("nomeFantasia", nomeFantasia)}
        errorMessage={errors.nomeFantasia?.errorMessage}
        hasError={errors.nomeFantasia?.hasError}
        {...getOverrideProps(overrides, "nomeFantasia")}
      ></TextField>
      <TextField
        label="CNPJ / CPF:"
        isRequired={false}
        isReadOnly={false}
        value={cnpjCpf}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf: value,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.cnpjCpf ?? value;
          }
          if (errors.cnpjCpf?.hasError) {
            runValidationTasks("cnpjCpf", value);
          }
          setCnpjCpf(value);
        }}
        onBlur={() => runValidationTasks("cnpjCpf", cnpjCpf)}
        errorMessage={errors.cnpjCpf?.errorMessage}
        hasError={errors.cnpjCpf?.hasError}
        {...getOverrideProps(overrides, "cnpjCpf")}
      ></TextField>
      <TextField
        label="I.E / RG:"
        isRequired={false}
        isReadOnly={false}
        value={ieRg}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg: value,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.ieRg ?? value;
          }
          if (errors.ieRg?.hasError) {
            runValidationTasks("ieRg", value);
          }
          setIeRg(value);
        }}
        onBlur={() => runValidationTasks("ieRg", ieRg)}
        errorMessage={errors.ieRg?.errorMessage}
        hasError={errors.ieRg?.hasError}
        {...getOverrideProps(overrides, "ieRg")}
      ></TextField>
      <TextField
        label="Especialidade:"
        isRequired={false}
        isReadOnly={false}
        value={especialidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade: value,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.especialidade ?? value;
          }
          if (errors.especialidade?.hasError) {
            runValidationTasks("especialidade", value);
          }
          setEspecialidade(value);
        }}
        onBlur={() => runValidationTasks("especialidade", especialidade)}
        errorMessage={errors.especialidade?.errorMessage}
        hasError={errors.especialidade?.hasError}
        {...getOverrideProps(overrides, "especialidade")}
      ></TextField>
      <TextField
        label="Registro Classe:"
        isRequired={false}
        isReadOnly={false}
        value={registroClasse}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse: value,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.registroClasse ?? value;
          }
          if (errors.registroClasse?.hasError) {
            runValidationTasks("registroClasse", value);
          }
          setRegistroClasse(value);
        }}
        onBlur={() => runValidationTasks("registroClasse", registroClasse)}
        errorMessage={errors.registroClasse?.errorMessage}
        hasError={errors.registroClasse?.hasError}
        {...getOverrideProps(overrides, "registroClasse")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Endereco Completo:</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={enderecoCompleto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto: value,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.enderecoCompleto ?? value;
          }
          if (errors.enderecoCompleto?.hasError) {
            runValidationTasks("enderecoCompleto", value);
          }
          setEnderecoCompleto(value);
        }}
        onBlur={() => runValidationTasks("enderecoCompleto", enderecoCompleto)}
        errorMessage={errors.enderecoCompleto?.errorMessage}
        hasError={errors.enderecoCompleto?.hasError}
        {...getOverrideProps(overrides, "enderecoCompleto")}
      ></TextField>
      <TextField
        label="Bairro:"
        isRequired={false}
        isReadOnly={false}
        value={bairro}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro: value,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.bairro ?? value;
          }
          if (errors.bairro?.hasError) {
            runValidationTasks("bairro", value);
          }
          setBairro(value);
        }}
        onBlur={() => runValidationTasks("bairro", bairro)}
        errorMessage={errors.bairro?.errorMessage}
        hasError={errors.bairro?.hasError}
        {...getOverrideProps(overrides, "bairro")}
      ></TextField>
      <TextField
        label="CEP:"
        isRequired={false}
        isReadOnly={false}
        value={cep}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep: value,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.cep ?? value;
          }
          if (errors.cep?.hasError) {
            runValidationTasks("cep", value);
          }
          setCep(value);
        }}
        onBlur={() => runValidationTasks("cep", cep)}
        errorMessage={errors.cep?.errorMessage}
        hasError={errors.cep?.hasError}
        {...getOverrideProps(overrides, "cep")}
      ></TextField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Cidade:</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={cidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade: value,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.cidade ?? value;
          }
          if (errors.cidade?.hasError) {
            runValidationTasks("cidade", value);
          }
          setCidade(value);
        }}
        onBlur={() => runValidationTasks("cidade", cidade)}
        errorMessage={errors.cidade?.errorMessage}
        hasError={errors.cidade?.hasError}
        {...getOverrideProps(overrides, "cidade")}
      ></TextField>
      <SelectField
        label="Estado:"
        placeholder="Selecione estado"
        isDisabled={false}
        value={estado}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado: value,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.estado ?? value;
          }
          if (errors.estado?.hasError) {
            runValidationTasks("estado", value);
          }
          setEstado(value);
        }}
        onBlur={() => runValidationTasks("estado", estado)}
        errorMessage={errors.estado?.errorMessage}
        hasError={errors.estado?.hasError}
        {...getOverrideProps(overrides, "estado")}
      >
        <option
          children="Acre"
          value="ACRE"
          {...getOverrideProps(overrides, "estadooption0")}
        ></option>
        <option
          children="Alagoas"
          value="ALAGOAS"
          {...getOverrideProps(overrides, "estadooption1")}
        ></option>
        <option
          children="Amapa"
          value="AMAPA"
          {...getOverrideProps(overrides, "estadooption2")}
        ></option>
        <option
          children="Amazonas"
          value="AMAZONAS"
          {...getOverrideProps(overrides, "estadooption3")}
        ></option>
        <option
          children="Bahia"
          value="BAHIA"
          {...getOverrideProps(overrides, "estadooption4")}
        ></option>
        <option
          children="Ceara"
          value="CEARA"
          {...getOverrideProps(overrides, "estadooption5")}
        ></option>
        <option
          children="Distrito federal"
          value="DISTRITO_FEDERAL"
          {...getOverrideProps(overrides, "estadooption6")}
        ></option>
        <option
          children="Espirito santo"
          value="ESPIRITO_SANTO"
          {...getOverrideProps(overrides, "estadooption7")}
        ></option>
        <option
          children="Goias"
          value="GOIAS"
          {...getOverrideProps(overrides, "estadooption8")}
        ></option>
        <option
          children="Maranhao"
          value="MARANHAO"
          {...getOverrideProps(overrides, "estadooption9")}
        ></option>
        <option
          children="Mato grosso sul"
          value="MATO_GROSSO_SUL"
          {...getOverrideProps(overrides, "estadooption10")}
        ></option>
        <option
          children="Mato grosso"
          value="MATO_GROSSO"
          {...getOverrideProps(overrides, "estadooption11")}
        ></option>
        <option
          children="Minas gerais"
          value="MINAS_GERAIS"
          {...getOverrideProps(overrides, "estadooption12")}
        ></option>
        <option
          children="Para"
          value="PARA"
          {...getOverrideProps(overrides, "estadooption13")}
        ></option>
        <option
          children="Paraiba"
          value="PARAIBA"
          {...getOverrideProps(overrides, "estadooption14")}
        ></option>
        <option
          children="Parana"
          value="PARANA"
          {...getOverrideProps(overrides, "estadooption15")}
        ></option>
        <option
          children="Pernambuco"
          value="PERNAMBUCO"
          {...getOverrideProps(overrides, "estadooption16")}
        ></option>
        <option
          children="Piaui"
          value="PIAUI"
          {...getOverrideProps(overrides, "estadooption17")}
        ></option>
        <option
          children="Rio de janeiro"
          value="RIO_DE_JANEIRO"
          {...getOverrideProps(overrides, "estadooption18")}
        ></option>
        <option
          children="Rio grande sul"
          value="RIO_GRANDE_SUL"
          {...getOverrideProps(overrides, "estadooption19")}
        ></option>
        <option
          children="Rondonia"
          value="RONDONIA"
          {...getOverrideProps(overrides, "estadooption20")}
        ></option>
        <option
          children="Roraima"
          value="RORAIMA"
          {...getOverrideProps(overrides, "estadooption21")}
        ></option>
        <option
          children="Santa catarina"
          value="SANTA_CATARINA"
          {...getOverrideProps(overrides, "estadooption22")}
        ></option>
        <option
          children="Sao paulo"
          value="SAO_PAULO"
          {...getOverrideProps(overrides, "estadooption23")}
        ></option>
        <option
          children="Sergipe"
          value="SERGIPE"
          {...getOverrideProps(overrides, "estadooption24")}
        ></option>
        <option
          children="Tocantins"
          value="TOCANTINS"
          {...getOverrideProps(overrides, "estadooption25")}
        ></option>
      </SelectField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Telefone fixo:</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={telefoneFixo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo: value,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.telefoneFixo ?? value;
          }
          if (errors.telefoneFixo?.hasError) {
            runValidationTasks("telefoneFixo", value);
          }
          setTelefoneFixo(value);
        }}
        onBlur={() => runValidationTasks("telefoneFixo", telefoneFixo)}
        errorMessage={errors.telefoneFixo?.errorMessage}
        hasError={errors.telefoneFixo?.hasError}
        {...getOverrideProps(overrides, "telefoneFixo")}
      ></TextField>
      <TextField
        label="Telefone celular:"
        isRequired={false}
        isReadOnly={false}
        value={telefoneCelular}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular: value,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.telefoneCelular ?? value;
          }
          if (errors.telefoneCelular?.hasError) {
            runValidationTasks("telefoneCelular", value);
          }
          setTelefoneCelular(value);
        }}
        onBlur={() => runValidationTasks("telefoneCelular", telefoneCelular)}
        errorMessage={errors.telefoneCelular?.errorMessage}
        hasError={errors.telefoneCelular?.hasError}
        {...getOverrideProps(overrides, "telefoneCelular")}
      ></TextField>
      <TextField
        label="Email:"
        isRequired={false}
        isReadOnly={false}
        value={emailGeral}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral: value,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.emailGeral ?? value;
          }
          if (errors.emailGeral?.hasError) {
            runValidationTasks("emailGeral", value);
          }
          setEmailGeral(value);
        }}
        onBlur={() => runValidationTasks("emailGeral", emailGeral)}
        errorMessage={errors.emailGeral?.errorMessage}
        hasError={errors.emailGeral?.hasError}
        {...getOverrideProps(overrides, "emailGeral")}
      ></TextField>
      <TextField
        label="Responsavel Compras:"
        isRequired={false}
        isReadOnly={false}
        value={responsavelCompras}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras: value,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.responsavelCompras ?? value;
          }
          if (errors.responsavelCompras?.hasError) {
            runValidationTasks("responsavelCompras", value);
          }
          setResponsavelCompras(value);
        }}
        onBlur={() =>
          runValidationTasks("responsavelCompras", responsavelCompras)
        }
        errorMessage={errors.responsavelCompras?.errorMessage}
        hasError={errors.responsavelCompras?.hasError}
        {...getOverrideProps(overrides, "responsavelCompras")}
      ></TextField>
      <TextField
        label="Telefone Compras:"
        isRequired={false}
        isReadOnly={false}
        value={telefoneCompras}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras: value,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.telefoneCompras ?? value;
          }
          if (errors.telefoneCompras?.hasError) {
            runValidationTasks("telefoneCompras", value);
          }
          setTelefoneCompras(value);
        }}
        onBlur={() => runValidationTasks("telefoneCompras", telefoneCompras)}
        errorMessage={errors.telefoneCompras?.errorMessage}
        hasError={errors.telefoneCompras?.hasError}
        {...getOverrideProps(overrides, "telefoneCompras")}
      ></TextField>
      <TextField
        label="Email Compras:"
        isRequired={false}
        isReadOnly={false}
        value={emailCompras}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras: value,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.emailCompras ?? value;
          }
          if (errors.emailCompras?.hasError) {
            runValidationTasks("emailCompras", value);
          }
          setEmailCompras(value);
        }}
        onBlur={() => runValidationTasks("emailCompras", emailCompras)}
        errorMessage={errors.emailCompras?.errorMessage}
        hasError={errors.emailCompras?.hasError}
        {...getOverrideProps(overrides, "emailCompras")}
      ></TextField>
      <TextField
        label="Responsavel Pagamentos:"
        isRequired={false}
        isReadOnly={false}
        value={responsavelPagamentos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos: value,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.responsavelPagamentos ?? value;
          }
          if (errors.responsavelPagamentos?.hasError) {
            runValidationTasks("responsavelPagamentos", value);
          }
          setResponsavelPagamentos(value);
        }}
        onBlur={() =>
          runValidationTasks("responsavelPagamentos", responsavelPagamentos)
        }
        errorMessage={errors.responsavelPagamentos?.errorMessage}
        hasError={errors.responsavelPagamentos?.hasError}
        {...getOverrideProps(overrides, "responsavelPagamentos")}
      ></TextField>
      <TextField
        label="Telefone Pagamentos:"
        isRequired={false}
        isReadOnly={false}
        value={telefonePagamenos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos: value,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.telefonePagamenos ?? value;
          }
          if (errors.telefonePagamenos?.hasError) {
            runValidationTasks("telefonePagamenos", value);
          }
          setTelefonePagamenos(value);
        }}
        onBlur={() =>
          runValidationTasks("telefonePagamenos", telefonePagamenos)
        }
        errorMessage={errors.telefonePagamenos?.errorMessage}
        hasError={errors.telefonePagamenos?.hasError}
        {...getOverrideProps(overrides, "telefonePagamenos")}
      ></TextField>
      <TextField
        label="Email Pagamentos:"
        isRequired={false}
        isReadOnly={false}
        value={emailPagamentos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos: value,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.emailPagamentos ?? value;
          }
          if (errors.emailPagamentos?.hasError) {
            runValidationTasks("emailPagamentos", value);
          }
          setEmailPagamentos(value);
        }}
        onBlur={() => runValidationTasks("emailPagamentos", emailPagamentos)}
        errorMessage={errors.emailPagamentos?.errorMessage}
        hasError={errors.emailPagamentos?.hasError}
        {...getOverrideProps(overrides, "emailPagamentos")}
      ></TextField>
      <TextField
        label="Data ultima compra"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dataUltimaCompra}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra: value,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.dataUltimaCompra ?? value;
          }
          if (errors.dataUltimaCompra?.hasError) {
            runValidationTasks("dataUltimaCompra", value);
          }
          setDataUltimaCompra(value);
        }}
        onBlur={() => runValidationTasks("dataUltimaCompra", dataUltimaCompra)}
        errorMessage={errors.dataUltimaCompra?.errorMessage}
        hasError={errors.dataUltimaCompra?.hasError}
        {...getOverrideProps(overrides, "dataUltimaCompra")}
      ></TextField>
      <TextField
        label="Valor Última Compra R$:"
        isRequired={false}
        isReadOnly={false}
        placeholder="R$"
        type="number"
        step="any"
        value={valorUltimaCompra}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra: value,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.valorUltimaCompra ?? value;
          }
          if (errors.valorUltimaCompra?.hasError) {
            runValidationTasks("valorUltimaCompra", value);
          }
          setValorUltimaCompra(value);
        }}
        onBlur={() =>
          runValidationTasks("valorUltimaCompra", valorUltimaCompra)
        }
        errorMessage={errors.valorUltimaCompra?.errorMessage}
        hasError={errors.valorUltimaCompra?.hasError}
        {...getOverrideProps(overrides, "valorUltimaCompra")}
      ></TextField>
      <SelectField
        label="Status Cliente:"
        placeholder="Por favor selecione uma opção"
        isDisabled={false}
        value={statusCliente}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente: value,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.statusCliente ?? value;
          }
          if (errors.statusCliente?.hasError) {
            runValidationTasks("statusCliente", value);
          }
          setStatusCliente(value);
        }}
        onBlur={() => runValidationTasks("statusCliente", statusCliente)}
        errorMessage={errors.statusCliente?.errorMessage}
        hasError={errors.statusCliente?.hasError}
        {...getOverrideProps(overrides, "statusCliente")}
      >
        <option
          children="Ativo"
          value="ATIVO"
          {...getOverrideProps(overrides, "statusClienteoption0")}
        ></option>
        <option
          children="Inativo"
          value="INATIVO"
          {...getOverrideProps(overrides, "statusClienteoption1")}
        ></option>
        <option
          children="Novo"
          value="NOVO"
          {...getOverrideProps(overrides, "statusClienteoption2")}
        ></option>
        <option
          children="Inadimplente"
          value="INADIMPLENTE"
          {...getOverrideProps(overrides, "statusClienteoption3")}
        ></option>
        <option
          children="Ativo mensal"
          value="ATIVO_MENSAL"
          {...getOverrideProps(overrides, "statusClienteoption4")}
        ></option>
      </SelectField>
      <TextAreaField
        label="Notas"
        isRequired={false}
        isReadOnly={false}
        value={notas}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              cnpjCpf,
              ieRg,
              especialidade,
              registroClasse,
              enderecoCompleto,
              bairro,
              cep,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              telefoneCompras,
              emailCompras,
              responsavelPagamentos,
              telefonePagamenos,
              emailPagamentos,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas: value,
            };
            const result = onChange(modelFields);
            value = result?.notas ?? value;
          }
          if (errors.notas?.hasError) {
            runValidationTasks("notas", value);
          }
          setNotas(value);
        }}
        onBlur={() => runValidationTasks("notas", notas)}
        errorMessage={errors.notas?.errorMessage}
        hasError={errors.notas?.hasError}
        {...getOverrideProps(overrides, "notas")}
      ></TextAreaField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="ORIGINAL"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || fichaCadastralModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="10px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="CANCELAR"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="SALVAR"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || fichaCadastralModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
