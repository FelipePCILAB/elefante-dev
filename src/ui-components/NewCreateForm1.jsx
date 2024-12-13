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
export default function NewCreateForm1(props) {
  const {
    clearOnSuccess = true,
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
    especialidade: "",
    registroClasse: "",
    enderecoCompleto: "",
    cidade: "",
    estado: "",
    telefoneFixo: "",
    telefoneCelular: "",
    emailGeral: "",
    responsavelCompras: "",
    responsavelPagamentos: "",
    dataVisita: "",
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
  const [especialidade, setEspecialidade] = React.useState(
    initialValues.especialidade
  );
  const [registroClasse, setRegistroClasse] = React.useState(
    initialValues.registroClasse
  );
  const [enderecoCompleto, setEnderecoCompleto] = React.useState(
    initialValues.enderecoCompleto
  );
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
  const [responsavelPagamentos, setResponsavelPagamentos] = React.useState(
    initialValues.responsavelPagamentos
  );
  const [dataVisita, setDataVisita] = React.useState(initialValues.dataVisita);
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
    setRazaoSocial_Nome(initialValues.razaoSocial_Nome);
    setNomeFantasia(initialValues.nomeFantasia);
    setEspecialidade(initialValues.especialidade);
    setRegistroClasse(initialValues.registroClasse);
    setEnderecoCompleto(initialValues.enderecoCompleto);
    setCidade(initialValues.cidade);
    setEstado(initialValues.estado);
    setTelefoneFixo(initialValues.telefoneFixo);
    setTelefoneCelular(initialValues.telefoneCelular);
    setEmailGeral(initialValues.emailGeral);
    setResponsavelCompras(initialValues.responsavelCompras);
    setResponsavelPagamentos(initialValues.responsavelPagamentos);
    setDataVisita(initialValues.dataVisita);
    setDataUltimaCompra(initialValues.dataUltimaCompra);
    setValorUltimaCompra(initialValues.valorUltimaCompra);
    setStatusCliente(initialValues.statusCliente);
    setNotas(initialValues.notas);
    setErrors({});
  };
  const validations = {
    razaoSocial_Nome: [{ type: "Required" }],
    nomeFantasia: [],
    especialidade: [],
    registroClasse: [],
    enderecoCompleto: [{ type: "Required" }],
    cidade: [{ type: "Required" }],
    estado: [{ type: "Required" }],
    telefoneFixo: [{ type: "Required" }],
    telefoneCelular: [],
    emailGeral: [{ type: "Email" }],
    responsavelCompras: [],
    responsavelPagamentos: [],
    dataVisita: [],
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
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          razaoSocial_Nome,
          nomeFantasia,
          especialidade,
          registroClasse,
          enderecoCompleto,
          cidade,
          estado,
          telefoneFixo,
          telefoneCelular,
          emailGeral,
          responsavelCompras,
          responsavelPagamentos,
          dataVisita,
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
          await DataStore.save(new FichaCadastral(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "NewCreateForm1")}
      {...rest}
    >
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="LIMPAR DADOS"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
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
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
      <Heading
        children="Formulário de Criação de Cadastro (Soft)"
        {...getOverrideProps(overrides, "SectionalElement0")}
      ></Heading>
      <TextField
        label="Razão Social / Nome:*"
        isRequired={true}
        isReadOnly={false}
        value={razaoSocial_Nome}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome: value,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
              especialidade: value,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
              especialidade,
              registroClasse: value,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
        label="Endereco Completo:*"
        isRequired={true}
        isReadOnly={false}
        value={enderecoCompleto}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto: value,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
        label="Cidade:*"
        isRequired={true}
        isReadOnly={false}
        value={cidade}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade: value,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado: value,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
        label="Telefone Fixo:"
        isRequired={true}
        isReadOnly={false}
        value={telefoneFixo}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo: value,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
        label="Telefone Celular:"
        isRequired={false}
        isReadOnly={false}
        value={telefoneCelular}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular: value,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
        label="Email Geral:"
        isRequired={false}
        isReadOnly={false}
        value={emailGeral}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral: value,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras: value,
              responsavelPagamentos,
              dataVisita,
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
        label="Secretária(s):"
        isRequired={false}
        isReadOnly={false}
        value={responsavelPagamentos}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos: value,
              dataVisita,
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
        label="Data da Visita:"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={dataVisita}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita: value,
              dataUltimaCompra,
              valorUltimaCompra,
              statusCliente,
              notas,
            };
            const result = onChange(modelFields);
            value = result?.dataVisita ?? value;
          }
          if (errors.dataVisita?.hasError) {
            runValidationTasks("dataVisita", value);
          }
          setDataVisita(value);
        }}
        onBlur={() => runValidationTasks("dataVisita", dataVisita)}
        errorMessage={errors.dataVisita?.errorMessage}
        hasError={errors.dataVisita?.hasError}
        {...getOverrideProps(overrides, "dataVisita")}
      ></TextField>
      <TextField
        label="Data Última Compra:"
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
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
        placeholder="Por favor selecione uma opção (clique na seta)"
        isDisabled={false}
        value={statusCliente}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
        label="Notas:"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              razaoSocial_Nome,
              nomeFantasia,
              especialidade,
              registroClasse,
              enderecoCompleto,
              cidade,
              estado,
              telefoneFixo,
              telefoneCelular,
              emailGeral,
              responsavelCompras,
              responsavelPagamentos,
              dataVisita,
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
          children="LIMPAR DADOS"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
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
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
