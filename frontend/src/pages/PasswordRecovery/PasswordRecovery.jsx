import {
  Box,
  Center,
  Link as ChakraLink,
  Image,
  FormControl,
  FormErrorMessage,
  Text,
} from "@chakra-ui/react";
import React from "react";
import theme from "../../themes/theme";
import IconError from '../../assets/errorIcon.png'
import Background from "../../assets/background-password-recovery.svg";
import IconeDeVoltar from "../../assets/Login/IconeDeVoltar.png";
import Padlock from "../../assets/padlock.png";
import Botao from "../../components/Botao";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
function PasswordRecovery() {
  const EmailSchema = Yup.object().shape({
    email: Yup.string().required("Informe um e-mail."),
  });
  const initialValues = {
    email: "",
  };
  const navigate = useNavigate();
  const handleSubmit = async (values) => {
    navigate("/new-password")
  };
  return (
    <Formik
      validationSchema={EmailSchema}
      initialValues={{
        ...initialValues,
      }}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, setFieldValue, values }) => (
      
        <Form>
      {console.log(errors.email,values.email )}    
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
              <ChakraLink onClick={()=>navigate("/")}>
                <Image
                  src={IconeDeVoltar}
                  marginTop="50px"
                  marginLeft="60px"
                  boxSize="50px"
                />
              </ChakraLink>
            </Box>
            <Center>
              <Box
                display={"flex"}
                justifyContent={"space-around"}
                alignItems={"center"}
                border={"0.5px solid #575450"}
                borderRadius={"25px"}
                backgroundColor={"#E3E3E3"}
                boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                padding={"20px"}
                marginTop={"100px"}
                height={"658px"}
                width={"874px"}
                flexDirection={"column"}
		
              >
                <Image src={Padlock} marginTop={"20px"}/>
                <Text fontFamily={'Comfortaa'}
		fontSize={'40px'}
		fontWeight={700}
		marginBottom={"-40px"}
		>Esqueceu sua senha?</Text>
                <Text fontSize={"24px"} fontWeight={400} fontFamily={ theme.fonts.pipocaFonts.placeholder}
		textAlign={'center'} >
                  Digite seu e-mail que enviaremos um link{<br></br>} para a redefinição de
                  senha.
                </Text>
		<FormControl marginBottom={"1em"}>
    <FormErrorMessage name="lastName" />
                    {errors.email && touched.email ? (
                     <Box display={'flex'} marginLeft={170}>
                      <Image src={IconError} marginRight={2}/>
		     <Text fontSize={"12px"}  color="red.500">
                        {errors.email}
                      </Text>
                      </Box>
                    ) : null}
                    <Field
                      as={TextField}
                      name="email"
                      placeholder="Digite o e-mail para redefinição"
                      type="email"
                      hasError={errors.email}
                      isCheck={errors.email === undefined && values.email !==''}
                    />
                   
                  </FormControl>
                <Botao text={"Recuperar"} type={"submit"} marginBottom={"70px"}/>
              </Box>
            </Center>
          </Box>
        </Form>
      )}
    </Formik>
  );
}

export default PasswordRecovery;
