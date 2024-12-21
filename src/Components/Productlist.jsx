
import { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {
    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://dummyjson.com/products');
            setProducts(resp.data.products);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="row">
            {
                products.map((item) => (
                    <div className="col-md-6 col-lg-3">
                        <div class="card" style={{width: '18rem'}}>
                            <img src={item.thumbnail} className="card-img-top" alt={item.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <a href="#" className="btn btn-primary">Add To Cart</a>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ProductList;
