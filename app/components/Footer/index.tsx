"use client"

import { Text } from "@mantine/core";
import { ContainerFooter } from "./style";

const Footer = () => {
    return ( 
        <ContainerFooter>
            <Text size="xs" c="dimmed">© 2023 Copyright 
                <Text span fw={700}> FSW Barber</Text>
            </Text>
        </ContainerFooter>
     );
}
 
export default Footer;