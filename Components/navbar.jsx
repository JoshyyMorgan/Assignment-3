import React, { Component } from 'react'
import './navbar.css'
const url=`https://fathomless-escarpment-67497.herokuapp.com/ads/`;


export default class Navbar extends Component {
	constructor(){
		super()
		this.state={
		  ads: [],
		  search: ''
		}
	  }
	
	  fetchAds(){
		fetch(url)
		.then(res=>res.json())
		.then(json=>this.setState({ads: json}))
	
	}
	componentDidMount(){
		this.fetchAds()
	}
	onChange(){
		this.setState({search:event.target.value})
		console.log(this.state.search.length)
	  }
	
	render() {
		let filterAds = this.state.ads.filter(
			(a)=>{
			  if(this.state.search.length === 0){
				return null
			  }
			  else{
				return a.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
			  }
			}
		   )
		return (
			<div className="row has-background-black" align="center" >
				<div className="column center is-2">
            	<img src="Logo VCS.png" sizes="auto"/>
          		</div>

				<div className="column center is-4">
              		<div className="search-box">
                	<input className='search-text'type='text' placeholder='Type to Search' value = {this.state.search}
                onChange = {this.onChange.bind(this)}/>
                
                		<a className='search-btn' href='#'>
                		<i className="fas fa-search"></i>
                	</a>
              		</div>
					  <div className="dropdown-content">
                  <ul className= 'ulAdsList'>
                  {filterAds.map(a=>
                  // <Link to={`/product/${encodeURIComponent(p._id)}/${encodeURIComponent(p.name)}/${encodeURIComponent(p.price)}/${encodeURIComponent(p.description)}/${encodeURIComponent(p.brand)}/${encodeURIComponent(p.imageUrl)}`}>
                      <li className="w-120 adsList" >{a.title}</li>
                  // </Link>
                  )}
                  
                  </ul>
                </div>
			  	</div>

				<div className="column center">
					<a className="a nav-link" href="/home"><h3> Home</h3>  </a>
				</div>

				
				<div className="column center">
					<a className="a nav-link" href="/productslist"><h3> Ads</h3> </a>
				</div>
				<div className="column center">
					<a className="a nav-link" href="/producttypeslist"><h3> Project</h3> </a>
				</div>

			</div>
		)
	}
}