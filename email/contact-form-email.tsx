import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Link,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFromEmailProps = {
  message: string;
};

export const ContactFromEmail = ({ message }: ContactFromEmailProps) => {
  return <div>ContactFromEmailProps</div>;
};
