import { Link } from "react-router-dom";
import {
  Card,
  SummaryTitle,
  SummaryIcon,
  CardBody,
  SummaryItem
} from "../../styled_components/summaryCard.styled"
// import { TextCenter } from "../../styled_components/login.styled"
export default function SummaryPanel() {
  return (
    <Card>
      <SummaryTitle>
        <SummaryIcon />
        My Summary
      </SummaryTitle>
      <CardBody>  
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SummaryItem><Link>Need Clarification</Link></SummaryItem>
          <div>0</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SummaryItem><Link>Request Overdue</Link></SummaryItem>
          <div>0</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SummaryItem><Link>Request Due Today</Link></SummaryItem>
          <div>0</div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <SummaryItem><Link>Pending Requests</Link></SummaryItem>
          <div>0</div>
        </div>
      </CardBody>

    </Card>
  );
}