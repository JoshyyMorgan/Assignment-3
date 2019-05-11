import React, { Component } from 'react'
import ProductForm from './ProductForm.jsx'
// import './viewByGrid.css'


export default class ViewByGrid extends Component {


    constructor(props) {
        super(props);
        this.state = {
            ads: [],
            currentPage: 1,
            todosPerPage: 6,
            formVisibility: false,
            currentProducts: props.products,
        }
        this.handleClick = this.handleClick.bind(this);
    }



    handleClick(event) {
        this.setState({
            currentPage: Number(event.target.id)
        });
    }
    fetchAds() {
        fetch(`https://fathomless-escarpment-67497.herokuapp.com/ads/`)
            .then(res => res.json())
            .then(json => this.setState({ ads: json }))
    }
    componentDidMount(){
        this.fetchAds()
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ currentProducts: nextProps.products })
    }

    handleFilterByCategory(id) {
        if (id !== 'all') {
            let sameType = this.props.products.filter((product) => product.productType === id);
            this.setState({ currentProducts: sameType });
        }
        else if (id === 'all') {
            this.setState({ currentProducts: this.props.products })
        }

    }

    handleFilterByPrice(filter) {
        if (filter === 'LO_TO_HI') {
            let lowToHigh = this.props.products.sort(function (a, b) {
                return parseFloat(a.price) - parseFloat(b.price);
            });
            this.setState({ currentProducts: lowToHigh })


        }
        else if (filter === 'HI_TO_LO') {
            let highToLow = this.props.products.sort(function (a, b) {
                return parseFloat(b.price) - parseFloat(a.price);
            });
            this.setState({ currentProducts: highToLow })

        }
        else if (filter === '0_500') {
            let firstCase = this.props.products.filter((product) => product.price <= 500)
            this.setState({ currentProducts: firstCase })
        }
        else if (filter === '500_2000') {
            let secondCase = this.props.products.filter((product) => product.price >= 500 && product.price <= 2000)
            this.setState({ currentProducts: secondCase })
        }

        else if (filter === 'ABOVE_2000') {
            let fourthCase = this.props.products.filter((product) => product.price >= 2000)
            this.setState({ currentProducts: fourthCase })
        }
        else if (filter === 'ABOVE_5000') {
            let fifthCase = this.props.products.filter((product) => product.price >= 5000)
            this.setState({ currentProducts: fifthCase })
        }
        else if (filter === 'ABOVE_10000') {
            let sixthCase = this.props.products.filter((product) => product.price >= 10000)
            this.setState({ currentProducts: sixthCase })
        }
        else if (filter === 'ALL') {
            this.setState({ currentProducts: this.props.products })
        }
    }

    displayForm() {
        this.setState({ formVisibility: !this.state.formVisibility })
    }

    closeForm() {
        this.setState({ formVisibility: false })
    }

    handleEdit(_id) {
        this.displayForm()
        this.props.getProduct(_id)
    }

    onFind(e) {
        var target = e.target
        var name = target.name
        var value = target.value
        this.setState({
            [name]: value
        })
        var loweredKeyWord = this.state.keyWord.toLowerCase()
        if (this.state.keyWord === '') {
            this.setState({ currentProducts: this.props.products })
        }
        this.setState({
            currentProducts: this.props.products.filter(product =>
                product.name.toLowerCase().indexOf(loweredKeyWord) !== -1

            )
        })
    }

    clearKey() {
        this.setState({
            currentProducts: this.props.products,
            keyWord: ''
        })
    }

    render() {
        var { formVisibility } = this.state
        var productForm = formVisibility ? <ProductForm
            addProduct={(product) => this.props.addProduct(product)}
            closeForm={this.closeForm.bind(this)}
            editProduct={this.props.editProduct}
            updateProduct={(product) => this.props.updateProduct(product)}

            productTypes={this.props.productTypes} /> : null

            const { ads, currentPage, todosPerPage } = this.state;

            // Logic for displaying current todos
            const indexOfLastTodo = currentPage * todosPerPage;
            const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
            const currentTodos = ads.slice(indexOfFirstTodo, indexOfLastTodo);
    
            const renderTodos = currentTodos.map((product, index) => {


              return (
              
                <div className="col-sm-4" key={index} align="center" id="card">
                    <div className='card border-dark card-cascade h-100 '>



                        <div className='card-body'>
                            <h4 className='h5 card-title'>{product.title}</h4>
                            <hr />
                            <p className='p card-text'><b>Price:</b>${product.price}</p>
                            <p className='p card-text'><b>Project:</b> {product.project}</p>
                            <p className='p card-text'><b>Area:</b> {product.area}</p>
                        </div>

                        <div className="card-body">
                            <button className="button is-info is-medium"><a className='link' href={`${product._id}`}>View</a></button> &nbsp;&nbsp;

                            <button className="button is-danger is-medium" onClick={() => this.props.deleteProduct(product._id)}>Delete</button>&nbsp;&nbsp;
                            <button className="button is-light is-medium" onClick={() => this.handleEdit(product._id)}>Edit</button>&nbsp;&nbsp;
                        </div>



                    </div>

                </div>

              )
            });
    
            // Logic for displaying page numbers
            const pageNumbers = [];
            for (let i = 1; i <= Math.ceil(ads.length / todosPerPage); i++) {
              pageNumbers.push(i);
            }
    
            const renderPageNumbers = pageNumbers.map(number => {
              return (
                <li
                  key={number}
                  id={number}
                  onClick={this.handleClick}
                >
                  {number}
                </li>
              );
            });
    
    

       

        return (
            <div>

                <br /><br /><br />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-3">
                        </div>
                        <div className="col-sm-3" align="center">
                            <div className='card filter-card'>
                                <div className='card-header bg-dark text-white'>
                                    <h4 className='card-title'>Filter</h4>
                                </div>
                                <div className='card-body'>

                                    <div className='card-header'>
                                        <h5 className='card-title'>
                                            <a href='#byPrice'>
                                                <i className></i> Price
							            </a>
                                        </h5>
                                    </div>
                                    <div id='byPrice' className='card-collapse collapse in' >
                                        <ul className='list-group'>
                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('ALL')}>
                                                    All
                                            </button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('LO_TO_HI')}>
                                                    Low To High
                                            </button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('HI_TO_LO')}>
                                                    High To Low
                                            </button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('0_500')}>
                                                    $0 - $500
                                            </button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('500_2000')}>
                                                    $500 - $2000
                                            </button>
                                            </li>

                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('ABOVE_2000')}>
                                                    Above $2000
                                            </button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('ABOVE_5000')}>
                                                    Above $5000
                                            </button>
                                            </li>
                                            <li className='list-group-item'>
                                                <button className='btn btn-primary w-100' onClick={() => this.handleFilterByPrice('ABOVE_10000')}>
                                                    Above $10000
                                            </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm-3" align="center">
                            <div className="form-group">

                                <br />
                                <button className="btn btn-standard" onClick={this.displayForm.bind(this)} >Add Product</button>

                            </div>
                        </div>
                        <div className="col-sm-3">
                        </div>
                    </div>
                </div>
                <br />

                <div className="contaier-fluid">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6">
                            {productForm}
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>

                <br />

                <div className="row">


                    <div className="col-sm-12">
                        <div className="row">
                        {renderTodos}

                        




                            {/* {this.state.currentProducts.map((product, index) =>
                                <div className="col-sm-4" key={index} align="center" id="card">
                                    <div className='card border-dark card-cascade h-100 '>



                                        <div className='card-body'>
                                            <h4 className='h5 card-title'>{product.title}</h4>
                                            <hr />
                                            <p className='p card-text'><b>Price:</b>${product.price}</p>
                                            <p className='p card-text'><b>Project:</b> {product.project}</p>
                                            <p className='p card-text'><b>Area:</b> {product.area}</p>
                                        </div>

                                        <div className="card-body">
                                            <button className="button is-info is-medium"><a className='link' href={`${product._id}`}>View</a></button> &nbsp;&nbsp;

                                            <button className="button is-danger is-medium" onClick={() => this.props.deleteProduct(product._id)}>Delete</button>&nbsp;&nbsp;
                                            <button className="button is-light is-medium" onClick={() => this.handleEdit(product._id)}>Edit</button>&nbsp;&nbsp;
                                        </div>



                                    </div>

                                </div>

                            )} */}
                          
                           
                        </div>
                    </div>

                </div>
                
            </div>

        )
    }
}
