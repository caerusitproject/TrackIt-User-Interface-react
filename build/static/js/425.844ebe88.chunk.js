"use strict";(self.webpackChunkticketmanagementsystem=self.webpackChunkticketmanagementsystem||[]).push([[425],{8806:(e,n,i)=>{i.r(n),i.d(n,{default:()=>w});var t=i(5043),r=(i(954),i(1529));r.Ay.nav`
  border: 2px solid #222;
  border-radius: 3px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  margin-bottom: 1rem;
`;const a=r.Ay.div`
  background: #fff;
  border: 1.5px solid #dadada;
  border-radius: 6px 6px 0 0;
  padding: 7px 0 7px 10px;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,s=r.Ay.button`
  border: none;
  background: transparent;
  font-size: 1.1rem;
  font-weight: 500;
  margin-right: 17px;
  padding-bottom: 2px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${e=>{let{active:n}=e;return n?"#f06c35":"#c9c9c9"}};
  border-bottom: ${e=>{let{active:n}=e;return n?"2px solid #f06c35":"none"}};

  i {
    margin-right: 6px;
  }

  &:hover {
    color: ${e=>{let{active:n}=e;return n?"#d95d2e":"#a0a0a0"}};
  }
`;r.Ay.div`
  font-weight: bold;
  min-width: 80px;
`,r.Ay.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 1rem;
`,r.Ay.a`
  font-weight: 500;
  // color: #222;
  text-decoration: none;
  margin-right: 22px;

  a {
    text-decoration: none;
    color: black;
    font-weight: 500;
    transition: color 0.2s ease;

    &.active {
      color: red;
    }
  }

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 850px) {
    margin-right: 14px;
  }
`,r.Ay.div`
  display: flex;
  align-items: center;

  .bi {
    color: #1984cb;
    font-size: 1.7rem;
    margin-left: 18px;
    vertical-align: middle;

    @media (max-width: 850px) {
      font-size: 1.3rem;
      margin-left: 12px;
    }
  }
`;var d=i(579);function o(){const[e,n]=(0,t.useState)("myView");return(0,d.jsxs)(a,{children:[(0,d.jsxs)(s,{active:"myView"===e,onClick:()=>n("myView"),children:[(0,d.jsx)("i",{className:"bi bi-person"})," My View"]}),(0,d.jsxs)(s,{active:"scheduler"===e,onClick:()=>n("scheduler"),children:[(0,d.jsx)("i",{className:"bi bi-calendar2"})," Scheduler"]})]})}var l=i(5475);const c=r.Ay.div`
  border: 1.5px solid #dadada;
  border-radius: 6px;
  background: #fff;
  display: flex;
  flex-direction: column;
`,x=r.Ay.div`
  font-weight: 600; 
  color: #124480; 
  margin-bottom: 9px;
  font-size: 1.09rem;
  display: flex;
  align-items: center;
  padding: 12px 15px 8px 15px;
  border-bottom: 1px solid #dadada;
`,p=r.Ay.div`
  color: #4d7ca2;
  margin-right: 6px;
  font-size: 1.08rem;
`,m=r.Ay.div`
  padding-right: 18px;
  padding-left: 15px;
  margin-bottom: 0;
  min-width: 210px;
  max-width: 250px;
`,f=r.Ay.div.attrs({className:"summary-item"})`
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
`;function g(){return(0,d.jsxs)(c,{children:[(0,d.jsxs)(x,{children:[(0,d.jsx)(p,{}),"My Summary"]}),(0,d.jsxs)(m,{children:[(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(f,{children:(0,d.jsx)(l.N_,{children:"Need Clarification"})}),(0,d.jsx)("div",{children:"0"})]}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(f,{children:(0,d.jsx)(l.N_,{children:"Request Overdue"})}),(0,d.jsx)("div",{children:"0"})]}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(f,{children:(0,d.jsx)(l.N_,{children:"Request Due Today"})}),(0,d.jsx)("div",{children:"0"})]}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,d.jsx)(f,{children:(0,d.jsx)(l.N_,{children:"Pending Requests"})}),(0,d.jsx)("div",{children:"0"})]})]})]})}var h=i(2097);const u=r.Ay.div.attrs({className:"card panel-announcements"})`
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
`,y=r.Ay.div.attrs({className:"announcements-header"})`
  font-weight: 600;
  color: #124480;
  font-size: 1.08rem;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding-left: 15px;
`,b=(r.Ay.button.attrs({className:"announcements-showall"})`
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
`,r.Ay.div.attrs({className:"announcements-nothing mb-3 mt-4"})`
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
`);const j=(0,i(9992).A)((0,d.jsx)("path",{d:"M18 11v2h4v-2zm-2 6.61c.96.71 2.21 1.65 3.2 2.39.4-.53.8-1.07 1.2-1.6-.99-.74-2.24-1.68-3.2-2.4-.4.54-.8 1.08-1.2 1.61M20.4 5.6c-.4-.53-.8-1.07-1.2-1.6-.99.74-2.24 1.68-3.2 2.4.4.53.8 1.07 1.2 1.6.96-.72 2.21-1.65 3.2-2.4M4 9c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h1v4h2v-4h1l5 3V6L8 9zm11.5 3c0-1.33-.58-2.53-1.5-3.35v6.69c.92-.81 1.5-2.01 1.5-3.34"}),"Campaign");function v(){return(0,d.jsxs)(u,{children:[(0,d.jsxs)(y,{children:[(0,d.jsx)(j,{}),"Announcements",(0,d.jsx)(h.A,{style:{marginLeft:"auto",marginTop:"5px"},variant:"outlined",children:"Show All"})]}),(0,d.jsx)("div",{className:"card-body p-0",children:(0,d.jsxs)(b,{children:[(0,d.jsx)("img",{src:"https://cdn-icons-png.flaticon.com/512/2922/2922616.png",alt:"No Announcements"}),"There are no new announcements today."]})})]})}i(3130);function w(){const e=r.Ay.div`
  display: flex;
  gap: 16px; /* spacing between panels */
  align-items: stretch;

  .panel-summary {
    flex: 0 0 auto; /* fixed size */
  }

  .panel-announcements {
    flex: 1; /* takes the rest of the space */
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;return(0,d.jsx)("div",{children:(0,d.jsxs)("section",{children:[(0,d.jsx)(o,{}),(0,d.jsxs)(e,{children:[(0,d.jsx)(g,{}),(0,d.jsx)(v,{})]})]})})}}}]);
//# sourceMappingURL=425.844ebe88.chunk.js.map