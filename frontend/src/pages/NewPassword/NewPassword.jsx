import {
  Box,
  Center,
  Link as ChakraLink,
  Image,
  FormControl,
  FormErrorMessage,
  Text,
  InputGroup,
  InputRightElement,
  Tooltip,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Eye from "../../assets/eye-open.svg";
import EyeClosed from "../../assets/eye-closed.svg";
import Alert from "../../assets/alert.gif";
import CheckGif from "../../assets/check.gif";
import theme from "../../themes/theme";
import Background from "../../assets/background-password-recovery.svg";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import PadlockOpen from "../../assets/padlock-open.png";
import Botao from "../../components/Botao";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
function NewPassword() {
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const EmailSchema = Yup.object().shape({
    password: Yup.string()
      .required("Campo obrigatório")
      .min(8, "Senha deve ter no mínimo 8 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]/,
        "Senha fora do formato"
      ),
    confirmPassword: Yup.string()
      .required("Campo obrigatório")
      .oneOf([Yup.ref("password"), null], "As senhas não coincidem"),
  });
  const initialValues = {
    email: "",
  };
  const getPasswordRules = (value) => {
    const isLengthValid = value.length >= 8;
    const isUpperCaseValid = /[A-Z]/.test(value);
    const isLowerCaseValid = /[a-z]/.test(value);
    const isNumberValid = /\d/.test(value);
    const isSpecialCharValid = /[@$!%*?&#]/.test(value);

    return {
      isLengthValid,
      isUpperCaseValid,
      isLowerCaseValid,
      isNumberValid,
      isSpecialCharValid,
    };
  };
  const handlePasswordChange = (e, values, setFieldValue) => {
    const newPasswordValue = e.target.value;
    const rules = getPasswordRules(newPasswordValue);
    setFieldValue("password", newPasswordValue);
    setFieldValue("isLengthValid", rules.isLengthValid);
    setFieldValue("isUpperCaseValid", rules.isUpperCaseValid);
    setFieldValue("isLowerCaseValid", rules.isLowerCaseValid);
    setFieldValue("isNumberValid", rules.isNumberValid);
    setFieldValue("isSpecialCharValid", rules.isSpecialCharValid);
  };
  const navigate = useNavigate();
  const handleSubmit = async (values) => {};
  return (
    <Formik
      validationSchema={EmailSchema}
      initialValues={{
        ...initialValues,
        isLengthValid: false,
        isUpperCaseValid: false,
        isLowerCaseValid: false,
        isNumberValid: false,
        isSpecialCharValid: false,
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, values }) => (
        <Form>
          <Box
            theme={theme}
            color={theme.colors.pipocaColors.font}
            backgroundImage={Background}
            backgroundColor={"#E3E3E3"}
            style={{
              backgroundImage: `url(${Background}) no-repeat center center fixed`,
              width: "100%",
              height: "100vh",
              backgroundSize: "cover",
            }}
          >
            <Box marginRight={"auto"} display={"flex"} flexDirection={"row"}>
              <ChakraLink onClick={() => navigate("/password-recovery/")}>
                <Image
                  src={IconeDeVoltar}
                  marginTop="50px"
                  marginLeft="60px"
                  boxSize="50px"
                />
              </ChakraLink>
            </Box>
            <Center height="100%">
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                border={"0.5px solid #575450"}
                borderRadius={"25px"}
                backgroundColor={"#E3E3E3"}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                padding={"20px"}
                marginBottom={"150px"}
                height={"658px"}
                width={"874px"}
                flexDirection={"column"}
              >
                <Image src={PadlockOpen} marginTop={"20px"} />
                <Text
                  fontFamily={"Comfortaa"}
                  fontSize={"40px"}
                  fontWeight={700}
                  marginBottom={"-40px"}
                >
                  Criar uma nova senha
                </Text>
              
                <FormControl marginTop={"60px"} id="password-tooltip">
                  <Tooltip
                    width={"190px"}
                    gutter={-150}
                    borderRadius={10}
                    arrowSize={20}
                    hasArrow={true}
                    placement="right-end"
                    backgroundColor={"#E3E3E3"}
                    label={
                      <Box className="tooltip" fontFamily={"Comfortaa"}>
                        <Text
                          fontFamily="Comfortaa"
                          fontSize="16px"
                          color={"black"}
                          fontWeight={700}
                        >
                          Senha deve conter
                        </Text>
                        <ul style={{ listStyleType: "none", margin: "10px" }}>
                          <li>
                            <Box display={"flex"}>
                              {" "}
                              {values.isLengthValid ? (
                                <Image
                                  src={CheckGif}
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                />
                              ) : (
                                <Image
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                  src={Alert}
                                />
                              )}
                              <Text
                                fontSize={"12px"}
                                color={values.isLengthValid ? "black" : "red"}
                              >
                                8 caracteres
                              </Text>
                            </Box>
                          </li>
                          <li>
                            <Box display={"flex"}>
                              {" "}
                              {values.isUpperCaseValid ? (
                                <Image
                                  src={CheckGif}
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                />
                              ) : (
                                <Image
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                  src={Alert}
                                />
                              )}
                              <Text
                                fontSize={"12px"}
                                color={
                                  values.isUpperCaseValid ? "black" : "red"
                                }
                              >
                                Letra maiúscula
                              </Text>
                            </Box>
                          </li>
                          <li>
                            <Box display={"flex"}>
                              {" "}
                              {values.isLowerCaseValid ? (
                                <Image
                                  src={CheckGif}
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                />
                              ) : (
                                <Image
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                  src={Alert}
                                />
                              )}
                              <Text
                                fontSize={"12px"}
                                color={
                                  values.isLowerCaseValid ? "black" : "red"
                                }
                              >
                                Letra minúscula
                              </Text>
                            </Box>
                          </li>
                          <li>
                            <Box display={"flex"}>
                              {" "}
                              {values.isNumberValid ? (
                                <Image
                                  src={CheckGif}
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                />
                              ) : (
                                <Image
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                  src={Alert}
                                />
                              )}
                              <Text
                                fontSize={"12px"}
                                color={values.isNumberValid ? "black" : "red"}
                              >
                                Número
                              </Text>
                            </Box>
                          </li>
                          <li>
                            <Box display={"flex"}>
                              {" "}
                              {values.isSpecialCharValid ? (
                                <Image
                                  src={CheckGif}
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                />
                              ) : (
                                <Image
                                  w={"21px"}
                                  h={"20px"}
                                  marginRight={"10px"}
                                  src={Alert}
                                />
                              )}
                              <Text
                                fontSize={"12px"}
                                color={
                                  values.isSpecialCharValid ? "black" : "red"
                                }
                              >
                                Caracter especial (!,@,#,%)
                              </Text>
                            </Box>
                          </li>
                        </ul>
                      </Box>
                    }
                    isInvalid={!values.isPasswordValid}
                  >
                    <InputGroup display={"flex"} justifyContent={"center"}>
                      <Field
                        as={TextField}
                        name="password"
                        errorBorderColor="crimson"
                        hasError={errors.password && touched.password}
                        placeholder="Digite a nova senha"
                        type={showPassword ? "text" : "password"}
                        onChange={(e) => {
                          handlePasswordChange(e, values, setFieldValue);
                        }}
                      />

                      <InputRightElement
                        marginRight={"11.5rem"}
                        marginTop={"0.8em"}
                      >
                        {showPassword ? (
                          <Image
                            src={Eye}
                            onClick={() => setShowPassword(false)}
                          />
                        ) : (
                          <Image
                            src={EyeClosed}
                            onClick={() => setShowPassword(true)}
                          />
                        )}
                      </InputRightElement>
                    </InputGroup>
                  </Tooltip>
                  <FormErrorMessage name="password" />
                  {errors.password && touched.password ? (
                    <Text fontSize={"12px"} marginLeft={170} color="red.500">
                      {errors.password}
                    </Text>
                  ) : null}
                </FormControl>

                <FormControl marginBottom={"30px"}>
                  <InputGroup
                    display={"flex"}
                    justifyContent={"center"}
                   
                  >
                    <Field
                      as={TextField}
                      name="confirmPassword"
                      placeholder="Repitir senha"
                      type={showConfirmPassword ? "text" : "password"}
                      hasError={
                        errors.confirmPassword && touched.confirmPassword
                      }
                    />
                    <InputRightElement
                      marginRight={"11.5rem"}
                      marginTop={"0.6em"}
                    >
                      {showConfirmPassword ? (
                        <Image
                          src={Eye}
                          onClick={() => setShowConfirmPassword(false)}
                        />
                      ) : (
                        <Image
                          src={EyeClosed}
                          onClick={() => setShowConfirmPassword(true)}
                        />
                      )}
                    </InputRightElement>
                  </InputGroup>
                  <FormErrorMessage name="confirmPassword" />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <Text fontSize={"12px"} marginLeft={170} color="red.500">
                      {errors.confirmPassword}
                    </Text>
                  ) : null}
                </FormControl>
                <Botao
                  text={"Recuperar"}
                  type={"submit"}
                  marginBottom={"70px"}
                />
              </Box>
            </Center>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default NewPassword;