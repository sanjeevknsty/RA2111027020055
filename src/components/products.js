import React,{useState} from 'react'

const Products = () => {
  const data = ['a','a','a','a','a','a','a','a','a','a']
  const [products,setProducts] = useState(data)
  return (
    <div>
      <div className="container text-center">
        <div className="row row-cols-2 row-cols-lg-4 g-2 g-lg-3">
          { products.map((ele)=>{
            return <div className="col">
            <div className="p-3">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Product title</h5>
                  <p className="card-text">Product Description</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Company</li>
                  <li className="list-group-item">Category</li>
                  <li className="list-group-item">Price</li>
                  <li className="list-group-item">Rating</li>
                  <li className="list-group-item">Discount</li>
                  <li className="list-group-item">Availability</li>
                </ul>
                <div className="card-body">
                  <button type="button" class="btn btn-primary">BuyNow</button>
                </div>
              </div>
            </div>
          </div>

            })
          }
         

        </div>
      </div>

    </div>
  )
}

export default Products
