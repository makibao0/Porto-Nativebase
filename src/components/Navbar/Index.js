import { HStack, Pressable, Text } from "native-base";
import React from "react";
import { BASE } from "../../utils/Color";
import { FontStyle } from "../../utils/FontStyle";

const NavBar = () => {
  return (
    <HStack p="5" alignItems={"center"} justifyContent={"space-between"}>
      <HStack>
        <Text style={FontStyle.H5} color={BASE.Lavender}>
          Li
        </Text>
        <Text style={FontStyle.H5} color={"white"}>
          Pai
        </Text>
      </HStack>
      <HStack>
        <Pressable>
          <Text fontSize="xs">Text</Text>
        </Pressable>
      </HStack>
    </HStack>
  );
};

export default NavBar;
