import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  HStack,
  Icon,
  Link,
  VStack,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <Box
      py={20}
      px={4}
      bgImage="url('https://images.unsplash.com/photo-1501504905255-47ed74404309?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"
      bgSize="cover"
      bgPosition="center"
      bgAttachment="fixed"
      color="white"
      textAlign="center"
    >
      <Container maxW="container.lg">
        <Heading as="h2" size="2xl" mb={6} fontWeight="bold">
          Get in Touch
        </Heading>
        <Text fontSize="lg" mb={10} opacity={0.8}>
          Have a question or project in mind? Let's connect!
        </Text>

        <VStack spacing={10} justify="center">
          {/* Address */}
          <Box textAlign="center">
            {" "}
            {/* Align text within the box to the left */}
            <Icon as={FaMapMarkerAlt} boxSize={20} mb={1} />
            <Text fontWeight="medium">
              123 Innovation Avenue, Suite 456
              <br />
              Tech City, CA 94105
            </Text>
          </Box>

          {/* Phone */}
          <Box textAlign="center">
            <Icon as={FaPhoneAlt} boxSize={20} mb={1} mr={6} />
            <Link href="tel:+15555551212" fontWeight="medium">
              +1 (555) 555-1212
            </Link>
          </Box>

          {/* Email */}
          <Box textAlign="center">
            <Icon as={FaEnvelope} boxSize={20} mb={1} mr={6} />
            <Link href="mailto:hello@example.com" fontWeight="medium">
              hello@example.com
            </Link>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactSection;
