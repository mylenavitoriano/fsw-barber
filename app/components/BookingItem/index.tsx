"use client"

import { Avatar, Badge, Card, Group, Text } from "@mantine/core";
import { ContainerBooking, DescriptionBarber, GroupLeft } from "./style";

const BookingItem = () => {
    return ( 
        <ContainerBooking>
            <Card radius="md">
                <GroupLeft>
                    <Badge color="purple.9">Confirmado</Badge>
                    <Text fw={700} className="service">Corte de Cabelo</Text>

                    <DescriptionBarber>
                        <Avatar src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" alt="" size="24"/>
                        <Text size="sm">Vintage Barber</Text>
                    </DescriptionBarber>
                </GroupLeft>

                <Group>
                    <Text size="sm">Fevereiro</Text>
                    <Text size="lg">06</Text>
                    <Text size="sm">09:45</Text>
                </Group>
            </Card>
        </ContainerBooking>
     );
}
 
export default BookingItem;