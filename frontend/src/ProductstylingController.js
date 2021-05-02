
import React, { useState }  from "react";

import{Link} from 'react-router-dom'
  import BellIcon from 'react-bell-icon';
import comment from "./features/comment";
import Comment from './features/comment';

function ProductstylingController({ blogsObject,title, description, imagePath,image}) {
    
return (
    
    <div className="container">
      
      
       <img src= {imagePath}  width="250px" height="250px"></img>
      
       
            <Link to =
                   {{ 
                    pathname: "/getBlogsByTitle",
                   blogsObject:blogsObject,
                 
                    }}>
                       
                          <p>{title}</p> 
 </Link>

        
        
       {/* <div className="product__info"> */}
      
        {/* </div>
         <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
         </p> }
        
       <button onClick={alertName} > Add to Basket</button> */}
      </div>
      
     
  );

                }
export default ProductstylingController;