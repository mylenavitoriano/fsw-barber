"use client"

import { Card } from '@mantine/core'
import styled from 'styled-components'

export const CardBarbershopItem = styled(Card)`
    min-width: 10.5rem;
    max-width: 10.5rem;
    padding: .25rem;
    border-radius: 1rem;
    background-color: var(--secondary-black);
    border: 1px solid var(--gray-01);

    .mantine-Group-root{
        padding: .5rem;
        gap: 0;

        .mantine-Button-root{
            margin-top: .75rem;
            background-color: var(--gray-01);

            &:hover{
                background-color: var(--gray-02);
                transition: all ease-in-out .3s;
            }
        }
    }

    .titleBarbershop{
        margin-bottom: .25rem;
    }
`

export const ImageBarbershop = styled.div`
    position: relative;
    width: 100%;
    height: 10rem;
    
    .imageBarbershop{
        border-radius: 1rem; 
    }
`

export const ContainerBadge = styled.div`
    position: absolute;
    top: .25rem;
    left: .25rem;
    z-index: 50;

    .mantine-Badge-root{
        opacity: 80%;
    }
`