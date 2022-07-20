import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footertop">
            <div className="footertopleft">

                <div className="foottopleftwrapper">
                    <h1 className='addreshead subscripbe' >OUR ADDRESS </h1>
                    <div className="location l1">
                    <i class="fa-solid fa-location-dot addressicon"></i>
                    <div className="locatiinaddress adrs">prayagraj uttar pradesh india</div>
                        
                    </div>
                    <div className="mobilenum l1">
                    <i class="fa-solid fa-phone addressicon"></i>
                    <div className="phnnum adrs">9415687862</div>

                    </div>
                    <div className="email l1">
                    <i class="fa-solid fa-envelope addressicon"></i>
                    <div className="gmail adrs">connect@chctindia.in</div>

                    </div>

                </div>

            </div>
            <div className="footertopmeiddle">
              <div className="ftmwrapper">

              <h1 className="working subscripbe">WE ARE WORKING ON</h1>
              <div className="workinfdays">
                <span className="workd">WORKING DAYS:</span>
                <span className="days">Monday	&#8211; Saturday</span>
              </div>
              <div className="workinfdays">
                <span className="workd">WORKING TIME:</span>
                <span className="days">9.00 AM &#8211; 10.00 PM</span>
              </div>

              <span className='follow'>FOLLOW US ON</span>
              <span className='follow'>Follow us on Instaagram Twitter Facebook Youtube Linkdin.</span>

              <div className="mediaicons">
               <a href="/" className="ficon"><img src="/assests/facebook2.png" alt="" className="facebbok mda" /></a> 
               <a href="/" className="ficon"> <img src="/assests/twitter2.png" alt="" className="twitter mda" /></a> 
               <a href="/" className="ficon"><img src="/assests/linkdin2.png" alt="" className="linkdin mda" /></a> 
               <a href="/" className="ficon"><img src="/assests/youtube.png" alt="" className="Youtube mda" /></a> 
               <a href="/" className="ficon"><img src="/assests/google.png" alt="" className="Google mda" /></a> 
              </div>
              
              </div>


            </div>


            <div className="footertopright">
              <div className="ftbwrapper">
                <h1 className='subscripbe working' >SUBSCRIBE FOR NEWSLETTER</h1>
                <span className="newslater">I amm a paragraph. Go to SitePad Editor to add your own text and edit me. I am a great place for you to tell a story.</span>

                <div className="emails">
                  <input placeholder='xyz@gmail.com' type="text" className="emailtext" />
                  <div className="sendicon">
                   
                    <i class="fa-solid fa-paper-plane sicon"></i>
                 
                  </div>
                </div>

              </div>

              

            </div>
           
        </div>
        <div className="footerbootom">

          <div className="footerbuttomleft">
            <div className="footerbottumicon">
              <img className='buttomicon' src="/assests/footerimg.png" alt="" />
              </div>
              <div className="foottertital">Chamela Helpdia Charitable Trust</div>
            

          </div>
          <div className="footerbuttomright">

            <span className="reserve">© 2022 My Website</span>

          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
