import React from 'react'
import Project from './Components/project.jsx';
import Navbar from './Components/navbar.jsx'
import './app.css'
import AdsPage from './Pages/adsPage.jsx';
import Footer from './Components/footer.jsx';
import ViewByGrid from './Components/viewByGrid.jsx';

export default class App extends React.Component {
  render() {
    return (

      <div>
          {/* <Navbar/>
          <AdsPage/>
          
        
          <br />
          <br />

          <section>
            <div className='container'>
              <div className='columns'>
                <div className='column center'>
                  <button className='button is-primary is-large'>Watch Our Ads</button>
                </div>
                <div className='column center'>
                  <button className='button is-success is-large'>See the Projectss</button>
                </div>


              </div>

            </div>
          </section>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>
          <br/><br/><br/><br/><br/>

          <Footer/> 
           */}
           <ViewByGrid/>
        </div>
        )
    }
}