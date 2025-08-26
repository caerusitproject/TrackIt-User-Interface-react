import Button from '@mui/material/Button';
import {
PanelAnnouncements,
AnnouncementsHeader,
AnnouncementsShowAll,
AnnouncementsNothing
} from "../../styled_components/announcementpanel.styled";
import CampaignIcon from '@mui/icons-material/Campaign';
import { Paper } from '@mui/material';

export default function AnnouncementPanel() {
  return (
    
    <PanelAnnouncements>
       <Paper
        elevation={3} // 🔥 Material shadow depth (0–24)
        sx={{
          borderRadius: "1.3rem",
          marginTop: 2,
          backgroundColor: "#fff",
        }}
    >
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
      </Paper>
    </PanelAnnouncements>
  );
}


