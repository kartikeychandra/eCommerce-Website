import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import { Link } from "react-router-dom";
import Image from './images/img4.png'
import Image2 from './images/img5.png'
import Image3 from './images/img6.png'
import Image4 from './images/img7.png'
import Image5 from './images/icon-65.png'
import Image6 from './images/secure.png'
import Image7 from './images/icon-64.png'
import Footer from './Footer'
const Items = () => {
    const [data, setData] = useState([]);
    const [items, setItems] = useState(data);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState("DFLT")
    let compMounted = true;
    useEffect(() => {
        const getItems = async () => {
            setLoading(true);
            const parsedData = await fetch("https://fakestoreapi.com/products")
            if (compMounted) {
                setData(await parsedData.clone().json());
                setItems(await parsedData.json());
                setLoading(false);
                console.log(items)
            }
            
            return () => {
                compMounted = false;
            }
        }
        
        getItems()
    }, [])
    const itemProduct = (itemCat) => {
        const showItem = data.filter((product) =>
            product.category === itemCat);
        setItems(showItem);
    }
    const itemPrice3 = () => {
        if(order === "DFLT" || order === "DSC"){
            const sorted = data.sort((a, b) => 
                a.price - b.price
            
            );
            
            setData(sorted);
            setItems(data)
            setOrder("ASC")
        }
        else if(order === "DFLT" || order === "ASC"){
            const sorted = data.sort((a, b) => 
                b.price - a.price
            
            );
            
            setData(sorted);
            setItems(data)
            setOrder("DSC")
        }
        
    }
    const itemPrice4 = () => {
        if(order === "DFLT" || order === "ASC" || order === "DSC"){
            const sorted = data.sort((a, b) => 
                a.rating.count - b.rating.count
            
            );
            
            setData(sorted);
            setItems(data)
            setOrder("DFLT")
        }
    }
    // const itemPrice3 = () => {
        // const sorted = data.sort((a, b) => 
        //    a.price - b.price
            
        // );
        
        // setData(sorted);
        // setItems(data)
    // }
    // const itemPrice4 = () => {
    //     const sorted = data.sort((a, b) => 
    //        b.price - a.price
            
    //     );
        
    //     setData(sorted);
    //     setItems(data)
    // }
    // const h = data.sort(itemPrice3);
    // setItems(h)
    const itemPrice1 = (itemPrice) => {
        
            const showItem = data.filter((product) => 
                product.price < itemPrice);
            setItems(showItem);
        

    }
    const itemPrice2 = (itemPrice) => {
        const showItem = data.filter((product) => 
            product.price > itemPrice);
        setItems(showItem);
    }
    
    const ProductList = () => {
        return (
            <>
                <div className=' overflow-hidden position-relative mt-5'>
                    <div className="row text-center ">

                        <div className="circular-cards col-md-3 mb-2" onClick={() => itemProduct("men's clothing")}>

                            <h2 className="my-5 h2 btn btn-outline-dark border-light" id='cat-btn' >Men's Clothing</h2>

                            <img className="rounded-circle" id='cat-pic' alt="100x100" src="https://i1.feedspot.com/200/4750596.jpg?t=1623171093" height="200px"
                                data-holder-rendered="true" />

                        </div>
                        <div className="circular-cards col-md-3 mb-2" onClick={() => itemProduct("women's clothing")}>

                            <h2 className="my-5 h2 btn btn-outline-dark border-light" id='cat-btn'>Women's Clothing</h2>

                            <img className="rounded-circle" id='cat-pic' alt="100x100" src="https://data.whicdn.com/images/355585732/original.jpg?t=1621263812" height="200px"
                                data-holder-rendered="true" />

                        </div>
                        <div className="circular-cards col-md-3 mb-2" onClick={() => itemProduct("jewelery")}>

                            <h2 className="my-5 h2 btn btn-outline-dark border-light" id='cat-btn'>Jewelery</h2>

                            <img className="rounded-circle" alt="100x100" id='cat-pic' src="https://images.squarespace-cdn.com/content/v1/569d07c51a520349a512a8bc/1637531724663-AIFKR4LQUEKK6ECJB1YU/6I6A8873-Edit+copy.jpg?format=1000w" height="200px"
                                data-holder-rendered="true" />

                        </div>
                        <div className="circular-cards col-md-3 mb-2" onClick={() => itemProduct("electronics")}>

                            <h2 className="my-5 h2 btn btn-outline-dark border-light" id='cat-btn'>Electronics</h2>

                            <img className="rounded-circle mr-3" alt="100x100" id='cat-pic' src="https://mlzhmyfbnxyr.i.optimole.com/w:1000/h:1000/q:auto/https://truvison.com/wp-content/uploads/2016/10/84-TV-1000x1000-right.jpg" height="200px"
                                data-holder-rendered="true" />

                        </div>

                    </div>
                </div>

                <div className="col-12">
                    <h1 className="fw-bolder text-center mt-5">Latest Items</h1>
                    <hr className='mb-5 mt-5' />
                    <div className='setting'>
                        <div className="dropdown filter">
                            <button className="btn btn-secondary dropdown-toggle" id='filter' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Search Filters
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => itemProduct("men's clothing")}>Men's Clothing</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemProduct("women's clothing")}>Women's Clothing</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemProduct("jewelery")}>Jewelery</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemProduct("electronics")}>Electronics</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemPrice1("50")}>Price: Under $50</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemPrice1("100")}>Price: Under $100</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemPrice1("500")}>Price: Under $500</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemPrice2("499.99")}>Price: $500+</a></li>
                                
                            </ul>
                        </div>
                        {/* <select name="filter"  className="filter" aria-label="Shop order">
                            <option value="menu_order" >Search Filters </option>
                            
                            <option value="mens" onClick={() => itemProduct("men's clothing")}>Men's Clothing</option>
                            <option value="womens">Women's Clothing </option>
                            <option value="date">Price: $0 - $50</option>
                            <option value="date">Price: $50 - $100</option>
                            <option value="date">Price: $100 - $500</option>
                            <option value="date">Price: $500+</option>
                            <option value="date">Rate: 5 star</option>
                            <option value="date">Rate: 4 star +</option>
                            <option value="date">Rate: 3 star +</option>
                            <option value="date">Rate: Any</option>
                        </select> */}
                        <div className="dropdown orderby">
                            <button className="btn btn-secondary dropdown-toggle" id='sort' type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Default Sorting
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={() => itemPrice4()}>Sort by rating</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemPrice3()}>Sort by price: low to high</a></li>
                                <li><a className="dropdown-item" href="#" onClick={() => itemPrice3()}>Sort by price: high to low</a></li>
                                
                                
                            </ul>
                        </div>
                        {/* <select name="orderby" className="orderby" aria-label="Shop order">
                            <option value="menu_order" selected="selected">Default sorting</option>
                            <option value="popularity">Sort by popularity</option>
                            <option value="rating">Sort by average rating</option>
                            <option value="date">Sort by latest</option>
                            <option value="price">Sort by price: low to high</option>
                            <option value="price-desc">Sort by price: high to low</option>
                        </select> */}
                    </div>
                    
                </div>

                {items.map((products) => {
                    return (
                        <>
                            
                            <div className="col-md-3">
                                <Link to={`/items/${products.id}`} className="card text-center h-100 p-5 border-light text-decoration-none text-black" id='cards' key={products.id}>

                                    <img src={products.image} className="card-img-top" alt={products.title} height="270px" />
                                    <div className="card-body">
                                        <p id='category'>{products.category.toUpperCase()}</p>
                                        <h5 className="card-title">{products.title.substring(0, 19)}...</h5>
                                        <div className="mx-3">
                                            <b className="card-text">${products.price}</b>
                                            <Link to="/signup" className="btn btn-outline-dark mt-2 border-light">Buy Now</Link>
                                        </div>

                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })}
                <hr className='mt-5'></hr>
                <div className=''>
                    <ul className='offers'>
                        <li className='offer-text'>
                            <p className='get-offer'>GET 10% OFF</p>
                            <p className='from-49'>ON ORDER FROM $49</p>
                        </li>
                        <li className='offer-text'>
                            <p className='get-offer'>GET 20% OFF</p>
                            <p className='from-99'>ON ORDER FROM $99</p>
                        </li>
                        <li className='offer-text'>
                            <p className='get-offer'>GET 30% OFF</p>
                            <p className='from-399'>ON ORDER FROM $399</p>
                        </li>
                        
                    </ul>
                    <div id='ad-div'>
                        <img src={Image} alt="Ad" id='ad'/>
                    </div>
                    <div id='addiv2'>
                        <img src={Image2} alt="Qutoe" id='ad2'/>
                    </div>
                    <div id='instagram'>
                        <div id='img6-div'>
                            <img src={Image3} alt="Qutoe" id='img6'/>
                        </div>
                        <div className='container' id='in-btw'>
                            <i className="fa-brands fa-instagram fs-3" id='instalogo'></i>
                            <h2>#Market</h2>
                            <p id='instapara'>A conscious collection made entirely from food crop waste, recycled cotton, other more sustainable materials.</p>
                            <h5 id='gotoinsta'>GO TO INSTAGRAM</h5>
                        </div>
                        <div id='img7-div'>
                            <img src={Image4} alt="Qutoe" id='img7'/>
                        </div>
                    </div>
                    <div id='info'>
                        <ul className='policies'>
                            <li>
                                <p className='policy wrapping'><i className="fa-solid fa-gift"></i>FREE GIFT WRAPPING </p>
                               
                            </li>
                            <hr/>
                            <li>
                                <p className='policy returns'><img src={Image7} alt="Service" width="22" height="22"/>30 DAYS FREE RETURNS</p>
                            </li>
                            <hr/>
                            <li>
                                <p className='policy discount'><img src={Image5}></img>WEEKLY SALE EVENT</p>
                            </li>
                            <hr/>
                            <li>
                                <p className='policy secure'><img src={Image6}></img>100% SECURE SHOPPING</p>
                            </li>
            
                        </ul>
                    </div>
                    
                </div>
                
            </>
        )


    }

    return (
    <>

        <div className="container">

            <div className="row justify-content-center">
                    
                
                
                
                {loading ? <Loading /> :  <ProductList />  }
                
            </div>
            
        </div>
        <div>
        {<ProductList/> ? <Footer/> : <Loading/>}
        </div>
        
        </>
        
    )
    
}

export default Items
