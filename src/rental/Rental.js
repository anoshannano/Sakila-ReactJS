import { useState } from "react";

function Rental() {
    let css= {
        float:'right',
        position:'absolute',
        backgroundColor:'lightblue',
        width: '200x'
    }
    let [customer, setCustomer] = useState([]);
    let[name,setName] = useState('');
    let[show,setShow]=useState(false);

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
        setName(cust.firstName+' '+cust.lastName);
        setShow(false);
    }

    return ( 
       <div className="container">
        <form>
            <div className="form-group">
                <label>Customer</label>
                <input type="text" className="form-control" placeholder="Enter Customer Name" onChange={doSearch} value={name}/>
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
                <input type="date" className="form-control" placeholder="Return Date" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            
            </form>
            <div>
                
            </div>
       </div>
     );
    
}

export default Rental;