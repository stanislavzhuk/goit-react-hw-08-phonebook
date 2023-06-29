import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

export const Button = styled.button`
  display: inline-block;
  padding: 6px 20px;

  font-size: 25px;
  font-weight: 600;

  color: #ffffff;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  border: 1px solid #ffffff;

  cursor: pointer;

  transition: all 300ms ease;

  &:hover {
    background-color: #f5b05c;
    color: #000000;
  }
`;
