import { Component } from 'react'
import './Carddetails.css'

export class Cardex2 extends Component {
  render() {
    return (
        <div className="container">
            <div className="header">
                <div className="heading">Welcome to KL University</div>
                <div className="menu">
                    <span>Home</span>
                    <span>About</span>
                    <span>Portfolio</span>
                    <span>Login</span>
                </div>
            </div>
            <div className="card1">
                <div className="plogo">
                    <img src="../../images/impg1.jpg" alt="logo" />
                </div>
                <div className="pdetails">
                    <div className="pname">Product Name - HP</div>
                    <div className="pother">
                        <p>Product Description</p>
                        <p>Rs 30000</p>
                        <p>Year of Manufacture - 2024</p>
                    </div>
                </div>
            </div>
            <div className="card2">
                <div className="plogo">
                    <img src="../../images/impg1.jpg" alt="logo" />
                </div>
                <div className="pdetails">
                    <div className="pname">Product Name - Dell</div>
                    <div className="pother">
                        <p>Product Description</p>
                        <p>Rs 40000</p>
                        <p>Year of Manufacture - 2023</p>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="icon">
                    <img src="../../images/img2.jpeg" alt="Facebook" />
                </div>
                <div className="icon">
                    <img src="../../images/img3.jpeg" alt="Twitter" />
                </div>
            </div>
        </div>
    )
  }
}

export default Cardex2;