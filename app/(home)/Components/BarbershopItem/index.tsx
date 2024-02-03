"use client"

import { Badge, Button, Card, Group, Text } from "@mantine/core";
import Image from "next/image";

import { Barbershop } from "@prisma/client";
import { CardBarbershopItem, ContainerBadge, ImageBarbershop } from "./style";
import { GoStarFill } from "react-icons/go";

interface BarbershopItemProps {
    barbershop: Barbershop
}

const BarbershopItem = ({barbershop}: BarbershopItemProps) => {
    return ( 
        <CardBarbershopItem>
            <ImageBarbershop>
                <ContainerBadge>
                    <Badge color={'purple.9'} 
                    leftSection={<GoStarFill  color={'#8162FF'} size={12} /> }>
                        5,0
                    </Badge>
                </ContainerBadge>
                <Image 
                    src={barbershop.imageUrl} 
                    alt={barbershop.name}
                    fill
                    style={{objectFit: "cover"}}
                    className="imageBarbershop"
                />
            </ImageBarbershop>

            <Group>
                <Text fw={700} truncate="end" className="titleBarbershop">{barbershop.name}</Text>
                <Text size="xs" truncate="end" c="dimmed">{barbershop.address}</Text>
                <Button radius="md" fullWidth>Reservar</Button>
            </Group>
        </CardBarbershopItem>
    );
}
 
export default BarbershopItem;