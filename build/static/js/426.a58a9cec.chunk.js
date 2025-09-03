"use strict";(self.webpackChunkticketmanagementsystem=self.webpackChunkticketmanagementsystem||[]).push([[426],{7426:(e,n,i)=>{i.r(n),i.d(n,{default:()=>ce});var t=i(5043),s=(i(954),i(1529));const l=s.Ay.div`
  padding:3px;
  background: #fff;
  border: 1.3px solid #c4c4c4;
  border-radius: 7px;
  min-width: 300px;
  max-width: 310px;
  min-height: 460px;
  height: 390px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 2px 8px #dfdfdf55;
`,r=(s.Ay.button`
  background: none;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.06em;
    color: #abb2be;
  }
`,s.Ay.div`
  background: #f6f6fa;
  padding: 10px 14px 10px 16px;
  border-bottom: 1px solid #e3e3e3;
  font-weight: 600;
  font-size: 1.07em;
  letter-spacing: 0.04em;
  display: flex;
  align-items: center;
  gap: 8px;
`),d=s.Ay.div`
  margin-left: auto;
  display: flex;
  gap: 7px;
  svg {
    color: #959596;
    font-size: 1.05em;
    cursor: pointer;
  }
`,o=s.Ay.div`
  padding: 6px 14px;
  background: #fcfcfe;
  border-bottom: 1px solid #e3e3e3;
  display: flex;
  align-items: center;
  gap: 7px;
`,a=(s.Ay.select`
  font-size: 0.97em;
  min-width: 100px;
  padding: 3px 9px;
  border-radius: 6px;
`,s.Ay.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`),c=s.Ay.img`
  width: 60px;
  opacity: 0.94;
  margin-bottom: 12px;
`,x=s.Ay.div`
  color: #686a71;
  font-size: 1.09em;
  margin-bottom: 16px;
`,p=s.Ay.button`
  cursor:pointer;
  border: 1.2px solid #b0b6c6;
  color: #2746bb;
  background: #f6fafd;
  border-radius: 6px;
  padding: 4px 18px;
  font-size: 1.01em;
  font-weight: 500;
  display:flex;
  justify-contents:center;
  align-items:center;
  transition: background 0.13s;
  &:hover {
    background: #edecf8;
    border-color: #2744ae;
    color: #183089;
  }
`,h=s.Ay.div`
  background: #fafafd;
  border-top: 1px solid #e3e3e3;
  padding: 5px 14px;
  font-size: 0.97em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,g=s.Ay.div`
  display: flex;
  align-items: center;
  gap: 13px;
  button {
    background: none;
    border: none;
    font-size: 1.3em;
    cursor: pointer;
    color: #777;
  }
`;var j=i(3745),f=i(9302),u=i(894),A=i(2579),m=i(9067),b=i(8560),y=i(6677),k=i(4938),v=i(1530),w=i(2490),C=i(2038),S=i(5449),z=i(579);const P=(0,s.Ay)(l)`
  transition: width 0.3s ease;
  overflow: hidden;
  ${e=>{let{collapsed:n}=e;return n?"\n    width: 50px;\n    min-width: 50px;\n  ":"\n    width: 100%;\n  "}}
`,M=(0,s.Ay)(A.A)`
  margin-right: 8px;
  transition: transform 0.3s ease;
  ${e=>{let{collapsed:n}=e;return n?"transform: rotate(180deg);":""}}
`;function N(){const[e,n]=(0,t.useState)(!1);return(0,z.jsxs)(P,{collapsed:e,children:[(0,z.jsxs)(r,{children:[!e&&"My All Tasks",(0,z.jsxs)(d,{children:[!e&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A.A,{children:(0,z.jsx)(j.A,{})}),(0,z.jsx)(A.A,{children:(0,z.jsx)(f.A,{})}),(0,z.jsx)(A.A,{children:(0,z.jsx)(u.A,{})})]}),(0,z.jsx)(M,{onClick:()=>n(e=>!e),collapsed:e?1:0,children:(0,z.jsx)(S.A,{})})]})]}),!e&&(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(o,{children:(0,z.jsxs)(y.A,{fullWidth:!0,sx:{"& .MuiInputLabel-root":{top:-5,fontSize:"0.85rem"},"& .MuiSelect-select":{padding:"8px 12px",minHeight:"40px !important"},"& .MuiOutlinedInput-root":{height:40}},children:[(0,z.jsx)(m.A,{id:"demo-simple-select-label",children:"Task"}),(0,z.jsxs)(k.A,{labelId:"demo-simple-select-label",id:"demo-simple-select",label:"Task",children:[(0,z.jsx)(b.A,{value:10,children:"Ten"}),(0,z.jsx)(b.A,{value:20,children:"Twenty"}),(0,z.jsx)(b.A,{value:30,children:"Thirty"})]})]})}),(0,z.jsxs)(a,{children:[(0,z.jsx)(c,{src:"https://img.icons8.com/ios-filled/100/clipboard.png",alt:"No tasks"}),(0,z.jsx)(x,{children:"There are no tasks in this view"}),(0,z.jsxs)(p,{children:[(0,z.jsx)(v.A,{})," New Task"]})]}),(0,z.jsxs)(h,{children:[(0,z.jsxs)("div",{children:[(0,z.jsxs)("select",{style:{width:"58px",height:"28px"},children:[(0,z.jsx)("option",{children:"25"}),(0,z.jsx)("option",{children:"50"}),(0,z.jsx)("option",{children:"100"})]}),(0,z.jsx)("span",{style:{marginLeft:"8px"},children:"\u2022 0 - 0"})]}),(0,z.jsxs)(g,{children:[(0,z.jsx)("button",{title:"Prev",children:(0,z.jsx)(w.A,{})}),(0,z.jsx)("button",{title:"Next",children:(0,z.jsx)(C.A,{})})]})]})]})]})}var T=i(4799),F=i(7443),I=i(4375),$=i(6172),L=i(1341),O=i(172),q=i(4842),E=i(6711),R=i(1692),_=i(9090),D=i(4337),H=i(267),W=i(3969),X=i(5842),Z=i(5724),B=i(5613),G=i(8442),J=i(6936),K=i(3616),Q=i(2097),U=i(8259);const V=s.Ay.div`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  background: #f1f3f5;
  border-bottom: 1px solid #ddd;
  font-weight: 500;
  gap: 8px;
`,Y=s.Ay.div`
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background: #f8f9fa;
  border-bottom: 1px solid #ddd;
  gap: 8px;
`,ee=(0,s.Ay)(U.A)`
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
  width: 100%;
`,ne=(0,s.Ay)($.A)`
  background-color: #f5f5f5;
`,ie=(0,s.Ay)(L.A)`
  font-weight: bold;
  color: #333;
  font-size: 14px;
`,te=(0,s.Ay)($.A)`
  &:nth-of-type(even) {
    background-color: #fafafa;
  }
  &:hover {
    background-color: #f0f7ff;
    cursor: pointer;
  }
`,se=(0,s.Ay)(L.A)`
  font-size: 14px;
  color: #555;
`,le=s.Ay.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  background-color: #ffcd00;
  border-radius: 50%;
  margin-right: 8px;
`;var re=i(3216);function de(e){const n=(0,H.A)(),{count:i,page:t,rowsPerPage:s,onPageChange:l}=e;return(0,z.jsxs)(W.A,{sx:{flexShrink:0,ml:2.5},children:[(0,z.jsx)(A.A,{onClick:e=>l(e,0),disabled:0===t,children:"rtl"===n.direction?(0,z.jsx)(X.A,{}):(0,z.jsx)(Z.A,{})}),(0,z.jsx)(A.A,{onClick:e=>l(e,t-1),disabled:0===t,children:"rtl"===n.direction?(0,z.jsx)(B.A,{}):(0,z.jsx)(G.A,{})}),(0,z.jsx)(A.A,{onClick:e=>l(e,t+1),disabled:t>=Math.ceil(i/s)-1,children:"rtl"===n.direction?(0,z.jsx)(G.A,{}):(0,z.jsx)(B.A,{})}),(0,z.jsx)(A.A,{onClick:e=>{const n=Math.max(0,Math.ceil(i/s)-1);l(e,n)},disabled:t>=Math.ceil(i/s)-1,children:"rtl"===n.direction?(0,z.jsx)(Z.A,{}):(0,z.jsx)(X.A,{})})]})}function oe(){const e=(0,re.Zp)(),[n,i]=(0,t.useState)(0),[s,l]=(0,t.useState)(5),[r,d]=(0,t.useState)([]),[o,a]=(0,t.useState)(0),[c,x]=(0,t.useState)(!1),[p,h]=(0,t.useState)(null),[g,j]=(0,t.useState)([]);(0,t.useEffect)(()=>{(async(e,n)=>{x(!0),h(null);try{const i=e*n,t=await fetch(`http://localhost:3000/posts?_start=${i}&_limit=${n}`);if(!t.ok)throw new Error("Failed to fetch data");const s=await t.json();d(s);const l=t.headers.get("X-Total-Count")||s.total||15;a(Number(l))}catch(i){h(i.message)}finally{x(!1)}})(n,s)},[n,s]);const u=e=>g.includes(e);return(0,z.jsxs)(ee,{component:T.A,children:[(0,z.jsxs)(V,{children:[(0,z.jsx)(D.A,{}),"My Completed Requests",(0,z.jsx)("span",{style:{flex:1}}),(0,z.jsx)(Q.A,{variant:"outlined",size:"small",children:(0,z.jsx)(f.A,{})}),(0,z.jsx)(Q.A,{variant:"outlined",size:"small",children:(0,z.jsx)(J.A,{})}),(0,z.jsx)(Q.A,{variant:"outlined",size:"small",children:(0,z.jsx)(K.A,{})})]}),(0,z.jsxs)(Y,{children:[(0,z.jsx)("input",{type:"text",placeholder:"Search...",style:{width:170}}),(0,z.jsxs)("select",{style:{width:95},children:[(0,z.jsx)("option",{children:"All"}),(0,z.jsx)("option",{children:"Open"}),(0,z.jsx)("option",{children:"Closed"})]}),(0,z.jsx)("span",{style:{flex:1}})]}),(0,z.jsxs)(F.A,{"aria-label":"completed requests table",style:{width:"100%"},children:[(0,z.jsx)(I.A,{children:c?(0,z.jsx)($.A,{children:(0,z.jsx)(L.A,{colSpan:5,align:"center",children:(0,z.jsx)(O.A,{})})}):p?(0,z.jsx)($.A,{children:(0,z.jsx)(L.A,{colSpan:5,align:"center",sx:{color:"error.main"},children:p})}):0===r.length?(0,z.jsx)($.A,{children:(0,z.jsx)(L.A,{colSpan:5,align:"center",children:(0,z.jsx)(q.A,{children:"No data available"})})}):(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(ne,{children:[(0,z.jsx)(ie,{padding:"checkbox",children:(0,z.jsx)(E.A,{checked:r.length>0&&g.length===r.length,indeterminate:g.length>0&&g.length<r.length,onChange:e=>{if(e.target.checked){const e=r.map(e=>e.id);j(e)}else j([])}})}),(0,z.jsx)(ie,{children:"ID"}),(0,z.jsx)(ie,{children:"First Name"}),(0,z.jsx)(ie,{children:"Last Name"})]}),r.map(n=>(0,z.jsxs)(te,{selected:u(n.id),onClick:()=>{return i=n.id,void e(`/ticket/${i}`);var i},children:[(0,z.jsx)(se,{padding:"checkbox",children:(0,z.jsx)(E.A,{checked:u(n.id),onClick:e=>e.stopPropagation(),onChange:()=>{return e=n.id,void j(n=>n.includes(e)?n.filter(n=>n!==e):[...n,e]);var e}})}),(0,z.jsxs)(se,{children:[(0,z.jsx)(le,{}),n.id]}),(0,z.jsx)(se,{children:n.firstName}),(0,z.jsx)(se,{children:n.lastName})]},n.id))]})}),(0,z.jsx)(R.A,{children:(0,z.jsx)($.A,{children:(0,z.jsx)(_.A,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:5,count:o,rowsPerPage:s,page:n,onPageChange:(e,n)=>i(n),onRowsPerPageChange:e=>{l(parseInt(e.target.value,10)),i(0)},ActionsComponent:de})})})]})]})}const ae=s.Ay.div`
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
`;function ce(){return(0,z.jsx)("div",{children:(0,z.jsxs)(ae,{children:[(0,z.jsx)(N,{}),(0,z.jsx)(oe,{})]})})}}}]);
//# sourceMappingURL=426.a58a9cec.chunk.js.map