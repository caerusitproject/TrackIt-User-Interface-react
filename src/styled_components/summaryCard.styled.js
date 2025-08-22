import styled from "styled-components";

export const Card = styled.div`
  border: 1.5px solid #dadada;
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: column;
`;

export const SummaryTitle = styled.div`
  font-weight: 600; 
  color: #124480; 
  margin-bottom: 9px;
  font-size: 1.09rem;
  display: flex;
  align-items: center;
  padding: 12px 15px 8px 15px;
  border-bottom: 1px solid #dadada;
`;

export const SummaryIcon = styled.div`
  color: #4d7ca2;
  margin-right: 6px;
  font-size: 1.08rem;
`;

export const CardBody = styled.div`
  padding-right: 18px;
  padding-left: 15px;
  margin-bottom: 0;
  min-width: 210px;
  max-width: 250px;
`;

export const SummaryItem = styled.div.attrs({ className: "summary-item" })`
  color: #353535;
  border-bottom: 1px solid #f1f1f1;
  padding: 7px 15px 7px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
 a {
    color: #007bff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;