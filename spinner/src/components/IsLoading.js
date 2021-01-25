import React from 'react';
import './IsLoad.css'; 
import axios from 'axios';

const IsLoading =()=>{
    const [employee, setEmpoyee] =React. useState(null);

    React.useEffect(()=>{
  axios.get('http://dummy.restapiexample.com/api/v1/employees').then((res)=>{
 console.log("response from DB", res.data.data);
 let emp= res.data.data.slice(0,5);
 setEmpoyee(emp)
  })
  .catch((error)=>{
      console.log("Erorr Found: ", error.msg);
  })
    },[])

    return(
        <div className="container2">
            <p>Regular isLoading component</p>
            {employee? employee.map((e)=>{
                return(
                    <div key={e.id}>
                        <li >EMployee Name is: {e.employee_name}</li>
                    </div>
                )
            }):"Loading...."}

        </div>
    )
}
export default IsLoading;