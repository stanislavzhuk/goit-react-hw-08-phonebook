import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Text = styled.h2` 
  margin-top: 50px;
  font-size: 35px;
`

export const StyledLink = styled(Link)`
  color: #a75f06;
  transition: color 250ms ease;

  &:hover {
    color: #f5b05c;
  }
`;
