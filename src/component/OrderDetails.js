import React from 'react'
import { Link } from "react-router-dom";
export default function OrderDetails() {
    return (
        <div>
            <div className='orderdetails'>
            <h1 className='createtext2'> Order Details </h1>
                <form>

                    <div className="mb-3" id='namescont'>
                        <div className='names'>
                            <label for="exampleInputEmail1" className="form-label" >First Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                        </div>
                        <div className='names2'>
                            <label for="exampleInputEmail1" className="form-label" >Last Name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                        </div>
                        
                        {/* <label for="exampleInputEmail1" className="form-label" >First Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> */}
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Street Address</label>
                        <input type="password" className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3" id='namescont'>
                        <div className='names'>
                            <label for="exampleInputEmail1" className="form-label" >City</label>
                            <input type="email" className="form-control" id="namescont2" aria-describedby="emailHelp"  />
                        </div>
                        <div className='names2'>
                            <label for="exampleInputEmail1 " className="form-label" >State</label>
                            <input type="email" className="form-control" id="namescont2" aria-describedby="emailHelp"  />
                        </div>
                        <div className='names2'>
                            <label for="exampleInputEmail1 " className="form-label" >Postal Code</label>
                            <input type="email" className="form-control" id="namescont2" aria-describedby="emailHelp"  />
                        </div>
                        
                        
                        {/* <label for="exampleInputEmail1" className="form-label" >First Name</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  /> */}
                    </div>
                    <div className='names'>
                            <label for="exampleInputEmail1" className="form-label" >Phone Number</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                        </div>
                        <div className='names2'>
                            <label for="exampleInputEmail1" className="form-label" >Email ID</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  />
                        </div>
                    
                    <Link to="/orderplaced" type="submit" className="btn btn-danger buybtn2" id='buy-btn'>Place Order</Link>
                </form>
            </div>
        </div>
    )
}
