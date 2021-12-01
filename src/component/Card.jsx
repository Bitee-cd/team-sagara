import React from "react";
import { useEffect } from "react";
import { useState } from "react";



const url = "https://course-api.com/react-tours-project";

function Card() {
  const handleDelete = (id) => {
    setresponse((response) => response.filter((item) => item.id !== id))
     
  }
  



const[isOpen,setisOpen]=useState(false)
const[response, setresponse]=useState(null)
useEffect(() => {
    fetch(url)
    .then(resp => resp.json())
    .then((data) =>setresponse(data));
    console.log(response)

}, [])



  return (
    <div className="section">{response ?
      Object.keys(response).map((item, i) => (
        <li className="travelcompany-input" key={i}>
              <div className="single-tour">
                <img src={response[item].image} alt="" />
                <footer>
                  <div className="tour-info">
                    <h4>{response[item].name}</h4>
                    <div className="tour-price">
                      <h4>${response[item].price}</h4>
                    </div>
                  </div>
                  <p>
                    {!isOpen ? response[item].info.slice(0, 150):response[item].info }
                    {!isOpen && < button type="button" onClick={()=>setisOpen(true)}>
                      show more
                    </button>}
                    {isOpen && < button type="button" onClick={()=>setisOpen(false)}>
                      show less
                    </button>}
                  </p>
                  <div className="delete-btn" onClick={()=>handleDelete(response[item].id)}>Not Interested</div>
                </footer>
              </div>
        </li>
    ))
:<h2>Loading...</h2>}
    </div>
  );
}

export default Card;
