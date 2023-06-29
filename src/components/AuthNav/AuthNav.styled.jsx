import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.nav`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 25px;
  font-weight: bold;
  transition: all 300ms ease;
  
  &.active {
    color: #a75f06;
  }
  
  &:hover {
    color: #f5b05c;
  }
`;