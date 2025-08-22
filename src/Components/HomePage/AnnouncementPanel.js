import Button from '@mui/material/Button';
import {
PanelAnnouncements,
AnnouncementsHeader,
AnnouncementsShowAll,
AnnouncementsNothing
} from "../../styled_components/announcementpanel.styled";
import CampaignIcon from '@mui/icons-material/Campaign';

export default function AnnouncementPanel() {
  return (
    <PanelAnnouncements>
      <AnnouncementsHeader>
       <CampaignIcon/>
        Announcements
        {/* <Button variant="outlined">Show All</Button>  */}
        <Button style={{ marginLeft: "auto" ,marginTop:'5px'}} variant="outlined">Show All</Button>
      </AnnouncementsHeader>
      <div className="card-body p-0">
        <AnnouncementsNothing>
          <img
            src="https://cdn-icons-png.flaticon.com/512/2922/2922616.png"
            alt="No Announcements"
          />
          There are no new announcements today.
        </AnnouncementsNothing>
      </div>
    </PanelAnnouncements>
  );
}


