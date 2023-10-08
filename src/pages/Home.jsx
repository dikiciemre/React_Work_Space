import { useEffect ,useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Home = () => {

const navigate = useNavigate();
const [allData,setAllData] = useState([]);

useEffect(() => {
    const getData = async () =>{
        const data =  await axios.get('https://fakestoreapi.com/products')
        setAllData(data)
    }
    getData();
},[])

console.log(allData,"allData")


  return (
    <div>Home Page</div>
  )
}

export default Home
