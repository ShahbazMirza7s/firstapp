import { useState } from "react";
import Data from "../data/Data";

function Myy() {
    const [product, SetProduct]=useState(Data)
    // return ( 
        {product.map((item, index)=>{
            
            return( 
                
                <div><button style={{width:200, marginTop:10}} type="button" class="btn btn-success">Add Product</button></div>
            <table>
                
                <tr>
                    <th>ID</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Tile</th>
                    <th>Description</th>
                    <th>Image</th>
                </tr>
                {product.map((item, index)=>{
                    return (
                        <tr key={item}>
                            <th>{item.id}</th>
                            <th>{item.category}</th>
                            <th>{item.price}</th>
                            <th>{item.title}</th>
                            <th>{item.description}</th>
                            <th><img style={{width:50}} src={item.image}></img></th>
                            <button onClick={()=>deletHander(item.id)}>Delete</button>
                        </tr>
                    )
                })}
                
            </table>
            </div>
            )
                  
        })}
    //  );
}

export default Myy;