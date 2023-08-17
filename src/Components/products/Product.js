import { useState } from "react";
import Data from '../data/Data'
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '70%'
    },
  };

function Product() {
    
    const [product, setProduct]=useState(Data);
    const [modalVisible, setModalVisible]=useState(false);
    const [title, setTitle]=useState('');
    const [price, setPrice]=useState('');
    const [ description, setDescription]=useState('');
    const [category, setCategory]=useState('');
    const [imageURL, setImagURL]=useState('');





    const submitHandler = ()=>{
        
        let addedproducts = {
            id: Math.round(Math.random()*12345678),
            title: title,
            price: price,
            description: description,
            category: category,
            image: imageURL,
        }
        setProduct([addedproducts, ...product])
        setModalVisible(false)
    }



    const deletHander=(id)=>{
        const newProducts = product.filter((item)=> item.id !==id )
        setProduct(newProducts);
    }
    return ( 
        <div>
            <div><button onClick={()=>setModalVisible(true)} style={{width:200, marginTop:10}} type="button" class="btn btn-success">Add Product</button></div>
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
            <Modal
                    isOpen={modalVisible}
                    onAfterOpen={()=>null}
                    onRequestClose={()=>null}
                    style={customStyles}
                >
        <h2>Add New Product</h2>
        <button onClick={()=>setModalVisible(false)}>close</button>
        <form>
                <label for="exampleFormControlInput1" class="form-label">Category: </label>
                <input onChange={(e)=>setCategory(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Category Here" />

                <label for="exampleFormControlInput1" class="form-label">Price: </label>
                <input onChange={(e)=>setPrice(e.target.value)} type="number" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Price Here" />

                <label for="exampleFormControlInput1" class="form-label">Title: </label>
                <input onChange={(e)=>setTitle(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Title Here" />

                <label for="exampleFormControlInput1" class="form-label">Description: </label>
                <input onChange={(e)=>setDescription(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Description Here" />

                <label for="exampleFormControlInput1" class="form-label">Image: </label>
                <input onChange={(e)=>setImagURL(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Image URL Here" />
          <button onClick={submitHandler} style={{marginTop:10}} type="button" class="btn btn-primary">Submit</button>
          
        </form>
      </Modal>

        </div>
     );
}

export default Product;