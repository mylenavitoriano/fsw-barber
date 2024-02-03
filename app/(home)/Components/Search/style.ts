"use client"

import styled from 'styled-components'

export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: .5rem;
    margin-top: 1.5rem;

    .mantine-Input-wrapper{
        width: 100%;
    }

    .mantine-Input-input{
        background: transparent;
        border-color: var(--gray-01);
        width: 100%;

        &:focus{
            border: 1px solid var(--gray-01);
        }
    }

    .mantine-Button-root{
        border-radius: .5rem;
    }
`
