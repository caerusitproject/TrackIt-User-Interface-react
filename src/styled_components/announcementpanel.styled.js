import styled from 'styled-components';

export const PanelAnnouncements = styled.div.attrs({ className: "card panel-announcements" })`
  border: 1.5px solid #dadada;
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: column;

  .card-body {
    padding-left: 24px;
    padding-right: 15px;
    padding-top: 12px;
    position: relative;
    flex: 1 1 0;
    min-width: 270px;
  }
`;

export const AnnouncementsHeader = styled.div.attrs({ className: "announcements-header" })`
  font-weight: 600;
  color: #124480;
  font-size: 1.08rem;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 15px;
`;

export const AnnouncementsShowAll = styled.button.attrs({ className: "announcements-showall" })`
  display:flex;
  justify-content: flex-end;
  flex:1;
  border: none;
  background: #f8f9fa;
  color: #848484;
  font-weight: 500;
  font-size: 0.93rem;
  padding: 3px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

export const AnnouncementsNothing = styled.div.attrs({ className: "announcements-nothing mb-3 mt-4" })`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 140px;
  color: #787878;
  font-size: 1rem;

  img {
    width: 54px;
    margin-bottom: 7px;
    opacity: 0.85;
  }
`;