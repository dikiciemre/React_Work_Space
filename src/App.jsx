import Test from "./components/Test"
import { useState,useEffect, useRef } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';

function App() {

  const name1 = "Emre Dikici"
  let name2 = "Deneme"
  let add = 2 + 2




  //USESTATE KULLANIMI
  // [adını değiştirmek istediğin değer,  setlemek istediğin fonksiyon]
  const [name,setName] = useState("UseState Örneği")



  const ClickFunction = () => {
    console.log("İşlem Tamam!") //UseState Örneği üzerine basınca konsola İşlem Tamam! yazar
    setName("UseState değişti yeğenim") // setName fonksiyonu yanında olan değerin(name) içini değiştiren fonksiyom
  }





  // ONCHANGE ÖRNEĞİ
  const [deger,setDeger] = useState(null)

  console.log(deger,"deger") // konsola kullanıcının girdiği değerleri yazar

  const targetFunction = (e) =>{
    setDeger(e.target.value)
  }





// USEEFFECT ÖRNEĞİ
  const [ısım,setIsım] = useState("selam")
  // Sayfa yüklendikten hemen sonra çalışır
/* 
  useEffect(() =>{
    
    setIsım("Selamunaleykum !")
  },[])
*/


// sayfa yüklendikten 4 saniye sonra çalışır
/*
useEffect(() =>{
  setTimeout(() =>{

  setIsım("Selamunaleykum !")
},4000);
},[])
*/




// USEREF KULLANIMI
// focus butonuna tıkladığında text alanında imleç uyarılır kullanıcının değer girmesi beklenir
const inputRef = useRef();


const focusFunction = () => {
  inputRef.current.focus();
}



  return (
<>



<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/detail/:id" element={<Detail/>}/>
  </Routes>
</Router>







<br></br>
<br></br>

// USEREF ÖRNEĞİ
<input type="text" ref = {inputRef}/>
<button onClick={focusFunction}>
  focus!
</button>









<br></br>
<br></br>


// router kulllanımı
<Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/detail" element={<Detail/>}/>
  </Routes>
</Router>






<br></br>
<br></br>



// useffect örneği
{
  ısım
}








<br></br>
<br></br>


//onchange kullanım örneği 
<div>
  <input type="text" onChange={targetFunction}/>
</div>



<br></br>
<br></br>


// ayrı bir div içerisinde tıklandığında adını değiştiren fonksiyon
    <div onClick={ClickFunction}>
    {name} //useState kullanımı
    </div>




    <br></br>



      <div>

        {name1} + {name2} + {add}

        <br></br>
        <br></br>
        <br></br>


        // Test.jsx de verilen react eğitimi değerlerini 1-2-3 diye dinamik şekilde döner
        <Test number="1"/>
        <Test number="2"/>
        <Test number="3"/>

        <br></br>
        <br></br>



        <Test number="1" name = "react"/>
        <Test number="2" name = "reactt"/>
        <Test number="3" name = "reacttt"/>


        <br></br>


        <button name="arttır"/>
        <button name="azalt"/>
        <button name="Allahhh"/>

    </div>
    </>
  )
}

export default App
