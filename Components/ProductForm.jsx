import React, { Component } from 'react'

export default class ProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			id: '',
			title: '',
			price: '',
			area: '',
			address: '',
			project: '',
			number_of_bedrooms: '',
			number_of_floors: '',
			post_date:'',
			expired_date:'',
			contact_info:{
				name:'',
				phone:'',
			}
		}
	}

	componentWillReceiveProps(props) {
		this.setState(props.editProduct)
	}

	handleChange(e) {
		let change = {};
		change[e.target.title] = e.target.value;
		this.setState(change);
	}

	handleSubmit() {
		if (this.state._id === undefined || this.state._id === null) {
			console.log('Add case called')
			this.props.addProduct(this.state);
			this.clearForm()
			this.props.closeForm()
		}
		else {
			console.log('Edit case called')
			this.props.updateProduct(this.state)
			this.clearForm()
			this.props.closeForm()
		}
	}
	clearForm() {
		this.setState({
			id: '',
			title: '',
			price: '',
			area: '',
			address: '',
			project: '',
			number_of_bedrooms: '',
			number_of_floors: '',
			post_date:'',
			expired_date:'',
			contact_info:{
				name:'',
				phone:'',
			}
		})
	}





	render() {
		return (
			<div>
				<div className="container-fluid">
					<div className="row">
						
						<div className="col-sm-12">
							<div className='card'>
								<div className='card-header text-center bg-standard text-black'>
									{!this.state._id ? 'Product Information' : 'Edit Form'}
									
									
								</div>
								<div className='card-body'>
									<form onSubmit="alert('Submission Successful!')">
										<div className='form-group'>
											<div className='form-row'>
												<label>ID</label>
												<input type='text' name='id' className='form-control' placeholder='Ads ID'
													value={this.state._id} onChange={this.handleChange.bind(this)} autoFocus />
													<legend></legend>
												<label>Ads Name</label>
												<input type='text' name='name' className='form-control' placeholder='Ads Name'
													value={this.state.title} onChange={this.handleChange.bind(this)}  />
											</div>
										</div>

										<div className='form-group'>
											<label>Ads Price</label>
											<input type='text' name='price' className='form-control' placeholder='Ads Price'
												value={this.state.price} onChange={this.handleChange.bind(this)}  />
										</div>

										<div className='form-group'>
											<label>Area</label>
											<input type='text' className='form-control' name='area' placeholder="Ads Area"
												value={this.state.area} onChange={this.handleChange.bind(this)} 
											/>
										</div>

										<div className='form-group'>
											<div className='form-row'>
												<label>Address</label>
												<input type='text' name='address' className='form-control' placeholder='Ads Address'
													value={this.state.address} onChange={this.handleChange.bind(this)}  />

												<label>Number of Floors</label>
												<input type='text' name='number of floors' className='form-control' placeholder='Number of Floors'
													value={this.state.number_of_floors} onChange={this.handleChange.bind(this)}  />
											</div>
										</div>

										<div className='form-group'>
											<label>Number of Bedrooms</label>
											<input type='text' name='number of bedrooms' className='form-control' placeholder='Number of Bedrooms'
												value={this.state.number_of_bedrooms} onChange={this.handleChange.bind(this)} validations />
										</div>

										<div className='form-group'>
											<label>Post Date</label>
											<input type='text' name='post date' className='form-control' placeholder='Number of Bedrooms'
												value={this.state.post_date} onChange={this.handleChange.bind(this)} validations />
										</div>

										<div className='form-group'>
											<label>Expired Date</label>
											<input type='text' name='expired date' className='form-control' placeholder='Expired Date'
												value={this.state.expired_date} onChange={this.handleChange.bind(this)} validations />
										</div>

										<div className='form-group'>
											<label>Number of Bedrooms</label>
											<input type='text' name='imageUrl' className='form-control' placeholder='Number of Bedrooms'
												value={this.state.number_of_bedrooms} onChange={this.handleChange.bind(this)} validations />
										</div>

										<div className="form-group">
											<label>Select Product Type</label>
											<select style={{ height: '34px' }} className="form-control" name="productType" onChange={this.handleChange.bind(this)}>
												
												{this.props.productTypes.map((type, index) =>
													<option key={index} value={type.id} >{type.name}</option>
												)}
											</select>
										</div>
										<br />
										<button className='btn btn-standard inline mr-1'
											onClick={this.handleSubmit.bind(this)}
										>
											{!this.state._id ? 'Add' : 'Save'}
										</button>
									
									</form>
								</div>
							</div>
						</div>
					
					</div>
				</div>
			</div>
		)
	}
}
