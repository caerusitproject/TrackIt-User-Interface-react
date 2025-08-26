import MyTaskAddition from './MyTaskAddition'
import RequestsTable from "./RequestsTable"
import styled from 'styled-components'

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  // margin-top:10px;
  gap: 20px; /* only affects desktop horizontal gap */

  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap:wrap;
    align-items:center;
    gap: 10; /* no vertical gap */
  }
`;

export default function Request() {
  return (
    <div>
      <ContentWrapper>
        <MyTaskAddition/>
        <RequestsTable/>
      </ContentWrapper>
    </div>
  )
}
