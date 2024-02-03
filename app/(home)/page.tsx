import {format} from 'date-fns'
import Header from "../components/Header";
import { ptBR } from 'date-fns/locale';
import { Text } from "@mantine/core";
import Search from './Components/Search';
import BookingItem from '../components/BookingItem';
import { ContainerElement, ListBarbershops } from './style';
import BarbershopItem from './Components/BarbershopItem';

import {db} from '../lib/prisma'

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})

  return (
    <>
      <Header/>

      <div className='container'>
        <Text size="lg" fw={700}>Olá, Miguel!</Text>
        <Text size="sm">{format(new Date(), "EEEE',' dd 'de' MMMM", {locale: ptBR})}</Text>

        <Search />

        <ContainerElement>
          <Text c="dimmed" size="sm" tt="capitalize" fw={700} className='title'>Agendamentos</Text>
          <BookingItem />
        </ContainerElement>

        <ContainerElement>
          <Text c="dimmed" size="sm" tt="capitalize" fw={700} className='title'>Recomendados</Text>
          <ListBarbershops>
            {barbershops.map((barbershop) => (
              <BarbershopItem key={barbershop.id} barbershop={barbershop} />
            ))}
          </ListBarbershops>
        </ContainerElement>
      </div>

      
      
    </>
  );
}
