import { useLocation } from "react-router"

const CreateView=()=>{
    const location=useLocation();
    const {form}=location.state;
    return(
        
        <div>
         <h1>Products</h1><br/>
         <h2>name: {form[0].value}</h2>
         <h2> Description: {form[1].value}</h2>
         
         
         </div>
    )
}
export default CreateView;