import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  margin: 15% auto;
  padding: 40px;
  max-width: 500px;
  max-height: 500px;

  font-size: 35px;
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;

  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
`;

export const VisuallyHidden = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

export const Error = styled.h2`
  font-size: 100px;
`;

export const StyledLink = styled(Link)`
  display: inline-block;
  margin-top: 30px;
  padding: 10px 30px;

  text-transform: uppercase;
  font-size: 18px;
  font-weight: 600;

  color: #ffffff;
  border-radius: 4px;
  border: 1px solid #ffffff;

  cursor: pointer;

  transition: all 250ms ease;

  &:hover {
    background-color: #ffffff;
    color: #000000;
  }
`;