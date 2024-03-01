import {
  Box,
  Button,
  ChevronLeftIcon,
  ChevronRightIcon,
  HStack,
  Image,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import NavBar from "./components/Navbar/Index";
import { BASE, Typho } from "./utils/Color";
import { FontStyle } from "./utils/FontStyle";
import { FONTS } from "./utils/Fonts";
import {
  FooterSVG,
  ICAddress,
  ICBack,
  ICComunicative,
  ICCoperative,
  ICDocument,
  ICEmail,
  ICFacebook,
  ICInstagram,
  ICLinkedin,
  ICMessage,
  ICPerfectionist,
  ICPhone,
  ICWhatsapp,
  ICWorkaholic,
} from "./assets/icons/Index";

const App = () => {
  return (
    <VStack space={20} py="10" flex={1} bg={BASE.DarkBG1}>
      {/* Navbar */}
      <HStack px="20" alignItems={"center"} justifyContent={"space-between"}>
        <HStack>
          <Text style={FontStyle.H5} color={BASE.Lavender}>
            Li
          </Text>
          <Text style={FontStyle.H5} color={"white"}>
            Pai
          </Text>
        </HStack>
        <HStack space={5}>
          {["Home", "About", "Project", "Blog", "Contact Me"].map(
            (item, index) => {
              return (
                <Button
                  px="5"
                  variant={index === 0 && "outline"}
                  key={index}
                  borderWidth={1}
                  borderColor={index === 0 ? BASE.Lavender : BASE.DarkBG1}
                >
                  <Text
                    color={index === 0 ? BASE.Lavender : "white"}
                    style={FontStyle.H6}
                  >
                    {item}
                  </Text>
                </Button>
              );
            }
          )}
        </HStack>
      </HStack>
      {/* Hero */}
      <HStack px="20" space={10} justifyContent={"space-between"}>
        <VStack flex={1} space={4}>
          <Text style={FontStyle.H2}>Hello Buds</Text>
          <HStack space={4}>
            <Text style={FontStyle.H1} color={"white"}>
              I am
            </Text>
            <Text style={FontStyle.H1} color={BASE.Lavender}>
              Lipai
            </Text>
          </HStack>

          <Text w={"auto"} style={FontStyle.LargeM} color={Typho.Gray}>
            Mobile Developer
          </Text>
          <Box bg={Typho.Gray} w={"30%"} h="1" rounded={"full"} my="5" />
          <Text style={FontStyle.LargeR} color={Typho.Gray}>
            I'm a person who has a keen interest in the design layout. I think
            presenting an attractive design is a matter of concern in developing
            a branding of products. To creates a good design, I focus on proper
            composition and visual decoration details in order to make it more
            professional. For the time being, I’m developing the skill for
            acquiring the UI/UX design for dynamic application and web
            development.
          </Text>
          <HStack flex={1} space={10} mt="4">
            <Button
              flex={0.4}
              bg={BASE.Lavender}
              colorScheme="lavender"
              onPress={() => {
                console.log("hello");
              }}
            >
              <HStack alignItems={"center"} justifyContent={"center"}>
                <Box mt={2}>
                  <ICDocument size="20" color="white" />
                </Box>
                <Text style={FontStyle.H6}>Download CV</Text>
              </HStack>
            </Button>
            <Button
              flex={0.4}
              variant={"outline"}
              borderWidth={2}
              outlineColor={"white"}
              bg={"none"}
              colorScheme="none"
              onPress={() => {
                console.log("hello");
              }}
            >
              <HStack alignItems={"center"} justifyContent={"center"}>
                <Box mt={2}>
                  <ICDocument size="20" color="white" />
                </Box>
                <Text style={FontStyle.H6}>More</Text>
              </HStack>
            </Button>
          </HStack>
        </VStack>
        <Box alignItems={"center"} flex={1}>
          <Image
            rounded={"2xl"}
            source={require("./assets/images/Profile.jpg")}
            alt="Alternate Text"
            size="full"
          />
        </Box>
      </HStack>
      {/* Find Me */}
      <HStack
        px="20"
        alignItems={"center"}
        justifyContent={"flex-end"}
        space={6}
      >
        <Text style={FontStyle.H6}>Find Me On</Text>

        <Pressable
          alignItems={"center"}
          justifyContent={"center"}
          p="1"
          bg={BASE.BGLavender}
          rounded={"full"}
          onPress={() => {
            console.log("hello");
          }}
        >
          <ICFacebook size="24" color={BASE.Lavender} />
        </Pressable>
        <Pressable
          alignItems={"center"}
          justifyContent={"center"}
          p="1"
          bg={BASE.BGLavender}
          rounded={"full"}
          onPress={() => {
            console.log("hello");
          }}
        >
          <ICInstagram size="24" color={BASE.Lavender} />
        </Pressable>
        <Pressable
          alignItems={"center"}
          justifyContent={"center"}
          p="1"
          bg={BASE.BGLavender}
          rounded={"full"}
          onPress={() => {
            console.log("hello");
          }}
        >
          <ICWhatsapp size="24" color={BASE.Lavender} />
        </Pressable>
        <Pressable
          alignItems={"center"}
          justifyContent={"center"}
          p="1"
          bg={BASE.BGLavender}
          rounded={"full"}
          onPress={() => {
            console.log("hello");
          }}
        >
          <ICLinkedin size="24" color={BASE.Lavender} />
        </Pressable>
      </HStack>
      {/* I offer */}
      <VStack
        px="20"
        alignItems={"center"}
        w={"60%"}
        space={8}
        alignSelf={"center"}
      >
        <Text style={FontStyle.H6} color={Typho.Gray}>
          What Do I Offer
        </Text>
        <Text style={FontStyle.H2} color={"white"} textAlign={"center"}>
          Creates Professional Design That’s Oriented Towards Client Needs
        </Text>
        <Box mt="10" bg={BASE.Lavender} w="20vw" rounded={"full"} h="1" />
        <HStack space={10}>
          {[1, 2, 3].map((item, index) => {
            return (
              <Box
                key={index}
                alignItems={"center"}
                justifyContent={"center"}
                w={"20vw"}
                h="20vw"
                bg={BASE.BGLavender}
                rounded={"2xl"}
                borderWidth={1}
                borderColor={BASE.Lavender}
              >
                <Image
                  source={require("../src/assets/images/banner1.png")}
                  alt="Alternate Text"
                  w={"70%"}
                  h="70%"
                />
                <Text color={BASE.Lavender} style={FontStyle.H6}>
                  Mobile App Design
                </Text>
              </Box>
            );
          })}
        </HStack>
        <HStack space={4} alignItems={"center"} mt="5">
          <ChevronLeftIcon color="white" size="22" />
          <HStack space={2}>
            {[1, 2, 3].map((item, index) => {
              console.log(index);
              return (
                <Box
                  key={index}
                  bg={index !== 1 ? Typho.Gray : BASE.Lavender}
                  h={2}
                  px="10"
                  rounded="full"
                />
              );
            })}
          </HStack>

          <ChevronRightIcon color="white" size="22" />
        </HStack>
      </VStack>
      {/* Review */}
      <HStack flex={1} bg={BASE.BGLavender} justifyContent={"center"}>
        <Image
          position={"absolute"}
          flex={1}
          source={require("../src/assets/images/background1.png")}
          alt="Alternate Text"
          size={"full"}
          resizeMode="stretch"
        />
        <Box
          bg={BASE.BGLavender}
          size="full"
          position={"absolute"}
          opacity={0.9}
        />
        <HStack p="10" space={20} flex={1} justifyContent={"center"}>
          {[
            {
              title: "Clients Order",
              total: "05",
            },
            {
              title: "Completed Projects",
              total: "03",
            },
            {
              title: "Stars Rating",
              total: "4.5",
            },
            {
              title: "Months Of Experience",
              total: "12",
            },
          ].map((item, index) => {
            return (
              <VStack
                justifyContent={"center"}
                key={index}
                borderWidth={1}
                borderStyle={index !== 1 && "dashed"}
                borderColor={index !== 1 ? "white" : BASE.Lavender}
                bg={index !== 1 ? BASE.DarkBG1 : BASE.Lavender}
                alignItems={"center"}
                w={"12vw"}
                h="12vw"
                rounded="lg"
              >
                <Text style={FontStyle.H2}>{item.total}</Text>
                <Text style={FontStyle.NormalR}>{item.title}</Text>
              </VStack>
            );
          })}
        </HStack>
      </HStack>
      {/* Project */}
      <VStack alignItems={"center"} my="5">
        <Text style={FontStyle.H2}>Latest Project</Text>
        <VStack mt="20" space={10}>
          {[
            {
              title: " Daur Ulang Mobile App",
            },
            {
              title: " Pos System App",
            },
            {
              title: " E-Mart Mobile App",
            },
          ].map((item, index) => {
            return (
              <HStack
                key={index}
                alignItems={"center"}
                w="70vw"
                p="5"
                space={20}
                bg={BASE.DarkBG2}
                rounded={"xl"}
              >
                <Image
                  rounded={"md"}
                  source={{
                    uri: "https://wallpaperaccess.com/full/317501.jpg",
                  }}
                  alt="Alternate Text"
                  w={"25%"}
                  h="32"
                />
                <HStack flex={1} justifyContent={"space-between"}>
                  <Text style={FontStyle.H5}>{item.title}</Text>
                  <Button
                    bg={BASE.Lavender}
                    colorScheme="indigo"
                    onPress={() => {
                      console.log("hello");
                    }}
                  >
                    <Text color="white" style={FontStyle.H6}>
                      View Details
                    </Text>
                  </Button>
                </HStack>
              </HStack>
            );
          })}
        </VStack>
        <HStack
          mt="20"
          alignItems={"center"}
          w="70vw"
          p="5"
          space={20}
          bg={BASE.DarkBG2}
          rounded={"xl"}
        >
          <VStack flex={1} justifyContent={"space-between"}>
            <Text style={FontStyle.H5}>Have any project in mind?</Text>

            <Text color={Typho.Gray} style={FontStyle.NormalR}>
              I’m available for freelancing
            </Text>
          </VStack>
          <HStack space={10}>
            <Button
              variant={"outline"}
              borderColor={"white"}
              colorScheme="indigo"
              onPress={() => {
                console.log("hello");
              }}
            >
              <Text style={FontStyle.H6}>More Projects</Text>
            </Button>
            <Button
              bg={BASE.Lavender}
              borderColor={BASE.Lavender}
              colorScheme="indigo"
              onPress={() => {
                console.log("hello");
              }}
            >
              <HStack alignItems={"center"} space={4}>
                <ICMessage size="24" color="white" />
                <Text style={FontStyle.H6}>Email Me</Text>
              </HStack>
            </Button>
          </HStack>
        </HStack>
      </VStack>
      {/* Why Me */}
      <VStack alignItems={"center"}>
        <Text style={FontStyle.H2}>Why Hire Me</Text>
        <HStack justifyContent={"center"} space={20} mt="20">
          {[
            {
              title: "Workaholic",
              desc: "I’m a kind of person who can’t just stand around and doing nothing. I have a tendency to do something productive.",
              icon: ICWorkaholic,
            },
            {
              title: "Communicative",
              desc: "I have a broad understanding of verbal vocabulary. Therefore, I can convey a message well to the receiver.",
              icon: ICComunicative,
            },
            {
              title: "Cooperative",
              desc: "Behind the successful project, there’s a great team. I can build a good cooperation and remain consistent with the goal.",
              icon: ICCoperative,
            },
            {
              title: "Perfectionist",
              desc: "I have a strong intuition. I have remained consistent with high quality standards to present a most worthy result.",
              icon: ICPerfectionist,
            },
          ].map((item, index) => {
            return (
              <VStack flex={0.2} space={10}>
                <item.icon />
                <VStack space={5}>
                  <Text textAlign={"center"} style={FontStyle.SubHeadM}>
                    {item.title}
                  </Text>
                  <Text style={FontStyle.NormalR} color={Typho.Gray}>
                    {item.desc}
                  </Text>
                </VStack>
              </VStack>
            );
          })}
        </HStack>
      </VStack>
      {/* Testimoni */}
      <VStack>
        <VStack alignItems={"center"} mb="32">
          <Text style={FontStyle.H6} color={Typho.Gray}>
            Testimonials
          </Text>
          <Text style={FontStyle.H2}>What Do They Say About Me</Text>
        </VStack>
        <HStack
          px="32"
          flex={1}
          bg={BASE.DarkBG2}
          alignItems={"center"}
          py="30"
          space={20}
        >
          <ChevronLeftIcon color="white" size="28" />

          {[
            {
              testi:
                "SamCreative has been the best designer I have ever worked with. The UI designs he created are top-notch and the design system he integrated allows for straight forward fixes throughout every area of the app. I'm looking forward to partner up with him on upcoming projects.",

              name: "Iqbal Hafish",
              role: "Project Manager, DaurUang",
            },
          ].map((item, index) => {
            return (
              <HStack flex={1} space={10}>
                <VStack space={10} alignItems={"center"}>
                  <Image
                    rounded={"xl"}
                    mt={-20}
                    source={{
                      uri: "https://wallpaperaccess.com/full/317501.jpg",
                    }}
                    alt="Alternate Text"
                    size="25vw"
                  />

                  <HStack space={2}>
                    {[1, 2, 3].map((item, index) => {
                      console.log(index);
                      return (
                        <Box
                          key={index}
                          bg={index !== 1 ? Typho.Gray : BASE.Lavender}
                          h={2}
                          px="10"
                          rounded="full"
                        />
                      );
                    })}
                  </HStack>
                </VStack>

                <VStack flex={1} space={10}>
                  <Text style={FontStyle.NormalR} color={Typho.Gray}>
                    {item.testi}
                  </Text>
                  <Text style={FontStyle.H4} color={BASE.Lavender}>
                    {item.name}
                  </Text>
                  <Text style={FontStyle.SmallR} color={"white"}>
                    {item.role}
                  </Text>
                </VStack>
              </HStack>
            );
          })}

          <ChevronRightIcon color="white" size="22" />
        </HStack>
      </VStack>
      {/* Tools & Skill */}
      <VStack mb="24">
        <VStack alignItems={"center"} mb="24">
          <Text style={FontStyle.H2}>Tools & Skill</Text>
        </VStack>
        <HStack justifyContent={"center"} space={10}>
          {[
            "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            "https://cdn.worldvectorlogo.com/logos/redux.svg",
            "https://miro.medium.com/v2/resize:fit:2400/1*gvlV5stc45hkSpxD9cCC-g.png",
            "https://logotyp.us/file/figma.svg",
            "https://reactnavigation.org/img/spiro.svg",
          ].map((item, index) => {
            return (
              <Box
                key={index}
                p="5"
                bg="#323131"
                rounded="lg"
                borderWidth={5}
                borderColor={"#4E504F"}
              >
                <Image
                  source={{
                    uri: item,
                  }}
                  alt="Alternate Text"
                  size="md"
                  resizeMode="contain"
                />
              </Box>
            );
          })}
        </HStack>
      </VStack>
      {/* Get Touch */}
      <HStack px="20" justifyContent={"space-between"}>
        <VStack space={5}>
          <Text style={FontStyle.H2}>Get in Touch</Text>
          <Text style={FontStyle.NormalR} color={Typho.Gray}>
            For business and partnership inquiry please contact me below!
          </Text>
          {[
            {
              title: "Phone",
              content: "0812-1234-5678",
              icon: ICPhone,
            },
            {
              title: "Email",
              content: "Lipai@gmail.com",
              icon: ICEmail,
            },
            {
              title: "Addres",
              content: "Know Your Place",
              icon: ICAddress,
            },
          ].map((item, index) => {
            return (
              <HStack space={5} alignItems={"center"}>
                <item.icon />
                <VStack>
                  <Text style={FontStyle.NormalR} color={Typho.Gray}>
                    {item.title}
                  </Text>
                  <Text style={FontStyle.NormalR} color={"white"}>
                    {item.content}
                  </Text>
                </VStack>
              </HStack>
            );
          })}
        </VStack>
        <Box>
          <FooterSVG />
        </Box>
      </HStack>
    </VStack>
  );
};

export default App;
