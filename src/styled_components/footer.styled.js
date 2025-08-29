import styled from "styled-components";
export const FooterRow = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 28px;
  gap: 200px;

  @media (max-width: 600px) {
    gap: 16px;
    padding: 12px 16px;
  }
`;

export const FooterItem = styled.div`
  color: #555;
  text-align: center;
  font-size: 0.98rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.25s ease-in-out;

  &:hover {
    color: #1976d2; /* MUI Primary Blue */
    transform: scale(1.1);
  }

  svg {
    font-size: 1.8rem;
    transition: all 0.25s ease-in-out;
  }

  &:hover svg {
    color: #1976d2;
  }

  @media (max-width: 600px) {
    font-size: 0.85rem;
  }
`;

export const FooterLabel = styled.span`
  margin-top: 2px;
`;