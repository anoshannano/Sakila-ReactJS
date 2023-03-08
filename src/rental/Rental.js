import { useState } from "react";
import { json } from "react-router-dom";
import { useRef } from "react";

function Rental() {

    let [customer, setCustomer] = useState([]);
    let[name,setName] = useState('');
    let[show,setShow]=useState(false);
    let[customerId,setCustomerId] =useState(0);
    let rentalDate = useRef();

    let css= {
        float:'right',
        position:'absolute',
        backgroundColor:'lightblue',
        width: '200x'
    }
    const doSearch= (event) => {
        let newName = event.target.value;
        setName(newName);

        if(newName.length >2){
            setShow(true);
            let url='http://localhost:8080/search-customer?name='+newName;
            let param = {method: 'GET'};
            fetch(url,param)
            .then(data=> data.json())
            .then(json => setCustomer(json));
        }
        else{
            setShow(false);
        };
    }

    const doChoose=(cust) =>{
        // alert(cust.firstName);
        console.log(cust)
        setName(cust.firstName+' '+cust.lastName);
        setCustomerId(cust.customerId);
        setShow(false);
    }

    const doSave=()=>{

        let data = {
            customerId: customerId, 
            rentalDate : rentalDate.current.value,
            inventoryId : 1,
            staffId : 1,
            lastUpdate: "2023-03-08"
        }
        let url = 'http://localhost:8080/save-rental';
        let params = {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)

        }
        fetch(url,params)
        .then((data) => data.json())
        .then(json => console.log(json));
    }

    return ( 
       <div className="container">

            <div className="form-group">
                <label>Customer</label>
                <input type="text" className="form-control" placeholder="Enter Customer Name" onChange={doSearch} value={name} />
                {show && 
                <div style={css}>
                    {customer.map((cust) => (
                        <li key={cust.customerId} onClick={()=> doChoose(cust)} >
                            {cust.firstName} {cust.lastName}
                            </li>
                    ))}
                </div>
                }
            </div>
            <div className="form-group">
                <label>Return Date</label>
                <input type="date" className="form-control" placeholder="Rental Date" ref={rentalDate} />
            </div>
            <button type="submit" className="btn btn-primary" onClick={()=>doSave()}>Submit</button>
            
           
            <div>
                
            </div>
       </div>
     );
    
}

export default Rental;