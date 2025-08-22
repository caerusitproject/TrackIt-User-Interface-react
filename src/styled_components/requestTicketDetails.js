import styled from "styled-components";

export const Container = styled.div`
  margin: 1rem auto;
  max-width: 1200px;
`;

export const TicketRow = styled.div`
  display: flex;
  border: 2px solid #d6d6d6;
  border-radius: 6px;
  background: #fafafa;
`;

export const LeftColumn = styled.div`
  flex: 2;
  padding: 1rem;
  border-right: 2px solid #d6d6d6;
`;

export const RightColumn = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;

export const StatusDot = styled.span`
  display: inline-block;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: ${(props) => props.bg || "gray"};
  border: 1px solid ${(props) => props.border || "gray"};
  margin-right: 4px;
`;

export const rowStyle = {
    display: "grid",
    gridTemplateColumns: "1fr auto",
    padding: "4px 0",
    fontSize: "13px",
    borderBottom: "1px solid transparent", // keeps spacing consistent
  };

export const labelStyle = {
    color: "#333",
  };

  export const valueStyle = {
    color: "#555",
    textAlign: "right",
  };