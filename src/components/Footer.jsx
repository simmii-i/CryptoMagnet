import { Box, GenericAvatarIcon, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      p={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"} fontSize={"xl"}>
            About Us
          </Text>
          <Text
            fontWeight={"sm"}
            fontSize={"large"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            {" "}
            Welcome to CryptoMagnet🪙  Your gateway to the exciting
            world of cryptocurrencies. At our platform, we blend innovation with
            opportunity, providing a user-friendly space for enthusiasts,
            investors, and beginners. <br/> Explore the latest trends🚀, stay informed
            with expert analyses, and empower yourself through our educational
            resources. We prioritize your security🔒, ensuring a safe and seamless
            experience as you navigate the dynamic landscape of digital assets.
            Join us on this transformative journey into the future of finance.<br/>
            CryptoMagnet is your trusted partner in the decentralized
            realm, where possibilities abound. Dive into the world of
            digital currencies with confidence 📈. We've got your back with
            reliable market updates, expert insights, and user-friendly
            resources. Trust the best for your crypto adventure 🌻
          </Text>
          <VStack w={'full'} mt={'8'} alignItems={'center'} justifyContent={'center'}>
          <GenericAvatarIcon boxSize={"28"} mt={["4", "0"]} />
          
          <Text pl={'4'}>  Suman Saini🌻</Text>
          <Text fontSize={'small'}>(Our Founder)</Text>
        </VStack>
          <Text
          w={'full'}
            fontWeight={"sm"}
            fontSize={"small"}
            pt={"24"}
            letterSpacing={"widest"}
            textAlign={'center'}
          >
            © 2024 CryptoMagnet All rights reserved. Stay connected with
            us for the latest updates on cryptocurrencies.
          </Text>
          <Text
            fontWeight={"sm"}
            fontSize={"smaller"}
            pt={"4"}
            letterSpacing={"widest"}
            textAlign={'center'}
          >
            Disclaimer: Cryptocurrency investments involve risks. Please conduct
            thorough research and seek professional advice before making any
            financial decisions. We're here to inform, not to provide financial
            advice. Privacy Policy | Terms of Service
          </Text>
        </VStack>
       
      </Stack>
    </Box>
  );
};

export default Footer;
