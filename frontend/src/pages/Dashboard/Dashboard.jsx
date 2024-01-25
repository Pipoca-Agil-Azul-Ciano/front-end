import React from "react";
import Footer from "../../components/Footer";
import { Box, Image, Text, Center } from "@chakra-ui/react";
import Header from "../../components/Header";
import ImgSign from "../../assets/Dashboard/fundo_do_card_de_chamada_para_assinar.webp";
import Check from "../../assets/Dashboard/Group 2810.png";
import SignButton from "../../components/SignButton";
import LogoChannel from "../../assets/Dashboard/image 1.png";
import ThreePoints from "../../assets/Dashboard/Group.png";
import BgNewsletter from "../../assets/Dashboard/background-newsletter.webp"
import CheckChannel from "../../assets/Dashboard/Frame.png";
export default function Dashboard() {
  return (
    <Box
      minHeight="100vh" // Garante que o conteúdo ocupa pelo menos a altura da viewport
      display="flex"
      flexDirection="column"
      fontFamily={"Comfortaa"}
    >
      <Header />
      <Box flex="1" padding={"85px 20px 0px 60px"}>
        <Box display={"flex"}>
          <Box display={"flex"} flexDirection={"column"} >
            <Box >
              <Text
              
                fontSize={"54.1px"}
                fontWeight={700}
                color={"#585858"}
                marginBottom={"64px"}
              >
                Acesso exclusivo aos quatro últimos vídeos
              </Text>
            </Box>
            <Box
              width={"649px"}
              borderRadius="10px"
              overflow={"hidden"}
              marginBottom={"100px"}
            >
              <iframe
                width="649"
                height="360"
                src="https://www.youtube.com/embed/5JADwWwCe2g?si=cDGxyoynvRY5zmX4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
              <Box
                display={"flex"}
                fontFamily={"Questrial"}
                width={"649px"}
                justifyContent={"space-between"}
                paddingTop={"16px"}
              >
                <Image
                  src={LogoChannel}
                  w={"36px"}
                  h={"36px"}
                  marginRight={"12px"}
                  marginLeft={"16px"}
                />
                <Box display={"flex"} flexDirection={"column"} flex={1}>
                  <Text
                    overflow={"hidden"}
                    textOverflow={"ellipsis"}
                    lineHeight={"20px"}
                    color={"black"}
                    fontSize={"16px"}
                    fontWeight={400}
                  >
                    Na Daily - Episódio 3 -<br />
                    Trabalhar em Equipe
                  </Text>
                  <Box display={"flex"}>
                    <Text fontSize={"12px"} fontWeight={400}>
                      Pipoca Ágil{" "}
                    </Text>
                    <Image
                      w={"15px"}
                      marginLeft={"8px"}
                      h={"15px"}
                      src={CheckChannel}
                    />
                  </Box>
                  <Text fontSize={"12px"} fontWeight={400}>
                    197 views · 2 meses atrás
                  </Text>
                </Box>
                <Image
                  src={ThreePoints}
                  w={"3px"}
                  h={"15px"}
                  marginTop={"12px"}
                  marginRight={"16px"}
                />
              </Box>
            </Box>
          </Box>

          <Image
            src={ImgSign}
            marginTop="140px"
            w={"577px"}
            h={"432px"}
            zIndex={0}
          />

          <Box
            backgroundImage={
              " linear-gradient(190deg,rgba(236,109,200,2) 30%,  rgba(124,123,225,1) 90%) "
            }
            _hover={{
              bg: "linear-gradient(190deg,rgba(124,123,225,1) 30%,  rgba(236,109,200,1)  90%)",
            }}
            transitionProperty="background-image"
            transitionDuration={"low"}
            w={"420px"}
            borderRadius="20px"
            h={"277px"}
            position={"absolute"}
            top="34.5%"
            zIndex={1}
            left="66%"
          ></Box>

          <Box
            position="absolute"
            top="46.2%"
            left="81.7%"
            transform="translate(-50%, -50%)"
            backgroundColor="#FFF"
            padding="20px"
            borderRadius="20px"
            width={"385px"}
            height={"271px"}
            zIndex="2"
            display={"flex"}
            alignContent={"center"}
            flexDirection={"column"}
            flexWrap={"wrap"}
          >
            <Center>
              <Text
                color={"#000"}
                fontSize={"24px"}
                fontWeight={700}
                marginTop={"10px"}
              >
                Assine o Pipoca Ágil
              </Text>
            </Center>
            <Box
              fontFamily={"Inter"}
              fontSize={"16px"}
              fontWeight={400}
              marginTop={"20px"}
            >
              <Box display={"flex"} margin={"5px"}>
                <Center>
                  <Image
                    src={Check}
                    w={"16px"}
                    h={"16px"}
                    marginRight={"5px"}
                  />{" "}
                  <Text>Acesso ilimitado à todos os conteúdos.</Text>
                </Center>
              </Box>
              <Box display={"flex"} margin={"5px"}>
                <Center>
                  <Image
                    src={Check}
                    w={"16px"}
                    h={"16px"}
                    marginRight={"5px"}
                  />{" "}
                  <Text>Acesso exclusivo à 4 vídeos do canal.</Text>
                </Center>
              </Box>
              <Box display={"flex"} margin={"5px"}>
                <Center>
                  <Image
                    src={Check}
                    w={"16px"}
                    h={"16px"}
                    marginRight={"5px"}
                  />{" "}
                  <Text>Totalmente gratuito.</Text>
                </Center>
              </Box>
              <Center marginTop={"30px"}>
                <SignButton text={"Assinar"} />
              </Center>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box display={"flex"} justifyContent={"center"}>
      <Box  zIndex={0}   backgroundSize="cover" backgroundPosition="center"
      backgroundRepeat="no-repeat" backgroundImage={BgNewsletter} width="1381px" h={"540px"}>
     <Text>sdadasddddddddddddddddddddddddddddddddddddddddd</Text>
     
      </Box>
      </Box>
     
      <Footer />
    </Box>
  );
}
