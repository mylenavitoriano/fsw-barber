"use client";
import styled from "styled-components";
import { Button as ButtonMantine } from "@mantine/core";

export const HeaderComponent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.65625rem 1.875rem;
  background-color: var(--secondary-black);
  border-bottom: 1px solid var(--gray-01);
`;

export const Button = styled(ButtonMantine)`
  background: transparent;
`;