import styled from 'styled-components'

export const ContainerBooking = styled.div`
    .mantine-Card-root {
        padding: 0 0 0 .75rem;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        background-color: var(--secondary-black);
    }

    .mantine-Badge-label{
        color: var(--primary-purple);
        text-transform: capitalize;
    }

    .mantine-Group-root {
        flex-direction: column;
        gap: 0;
        padding: .75rem 1.25rem;
    }
`
export const GroupLeft = styled.div`
    display: flex;
    flex-direction: column;
    border-right: 1px solid var(--gray-01);
    width: 100%;
    padding: .75rem 0;

    .service{
        margin-top: .75rem;
    }
`

export const DescriptionBarber = styled.div`
    display: flex;
    align-items: center;
    gap: .5rem;
    margin-top: .5rem;
`
