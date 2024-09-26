import { useRef,useState,useEffect } from "react";
export default function BMI(){
    const w_input = useRef(null);
    const h_input = useRef(null);
    const[bmi,setbmi] = useState(0);
    const[check,type] = useState("");
    function handleClick(){
        let weight = w_input.current.value;
        let height = h_input.current.value/100;
        setbmi(weight/Math.pow(height,2));
        if(bmi <= 18.5){
            type("Underweight");
        }
        else if(bmi >=30 ){
            type("Overweight");
        }
        else{
            type("Normal")
        }

    }
    return (<><>weight<input ref={w_input} /> kg    <br></br>
        height <input ref={h_input} /></> cm        <br></br>
        <button onClick={handleClick}>calculate</button><br></br>  
        <label>BMI:{bmi.toFixed(2)}</label>
        <h1>{check}</h1>
        </>
        

);
}