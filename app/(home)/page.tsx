import {format} from 'date-fns'
import Header from "../components/Header";
import { ptBR } from 'date-fns/locale';
import { Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Header/>

      <div className='container'>
        <Text size="lg" fw={700}>Olá, Miguel!</Text>
        <Text size="sm">{format(new Date(), "EEEE',' dd 'de' MMMM", {locale: ptBR})}</Text>
      </div>
      
    </>
  );
}
