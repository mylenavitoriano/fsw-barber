"use client"

import styled from 'styled-components'
import { Button as ButtonMantine, Input as InputMantine } from '@mantine/core'

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: .5rem;
    margin-top: 1.5rem;
`

export const ButtonSearch = styled(ButtonMantine)`
    background-color: var(--primary-purple);
    
`

export const InputSearch = styled(InputMantine)`
    background: transparent;

`