import React from 'react'
import Footer from '../Components/footer.jsx';
import Navbar from'../Components/navbar.jsx';
import ViewByGrid from '../Components/viewByGrid.jsx';
export default class AdsPage extends React.Component{

    render(){
        return(
            <div>
				<Navbar/>
				<div align="center">
				<br/>
					<h2>
					Here is our Ads 
					</h2>
					<br/>
					
				</div>
			
				<div className="container">
					
				</div>
				

				 <ViewByGrid
					onViewGrid={this.onViewGrid}
					ads={this.props.ads}
					addAds={(ads) => this.props.addAds(ads)}
					deleteAds={(_id) => this.props.deleteAds(_id)}
					getAds={(_id) => this.props.getAds(_id)}
					editAds={this.props.editAds}
					updateAds={(ads) => this.props.updateAds(ads)}

					 /> 
				<br />
                <Footer/>
				
			</div>
        )
    }
}