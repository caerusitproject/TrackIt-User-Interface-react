import React from 'react'
import { Link } from 'react-router-dom'
// import { useDispatch } from 'react-redux'

export default function ConfirmEmailTrigger() {
  // const dispatch=useDispatch()

  // React.useEffect(()=>{
  //   dispatch(notificationEmail())
  // },[dispatch])

  return (
    <section>
        <div style={{display:'flex',justifyContents:'center',flexDirection:'column',alignItems:'center',flexWrap:'wrap'}}>
           <h4>Password Reset is triggered at the email service</h4>
           <Link to ='/'><p>Back to Sign In</p></Link>
        </div>
    </section>
  )
}
