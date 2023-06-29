import styled from '@emotion/styled';

export const Overlay = styled.div`
  overscroll-behavior: contain;
  position: fixed;
  overflow: hidden;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const LoaderImg = styled.img`
  z-index: 10000;
  user-select: none;
`;
