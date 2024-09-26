import { useEffect, useState } from "react";
function Item({name,isPacked=false}){
    return(<li>
        {name}{isPacked && '✔'}
    </li>);
}
export default function ItemList(){
    const [val,setval] = useState("");
    useEffect(()=>{
        console.log("This component is loaded");
        return ()=>{
            alert("component unloaded");
        }
    },[]);
    const Items=[{name:"Jamal",isPacked:false},
        {name:"Sunblock",isPacked:true},
        {name:"Swimming suit",isPacked:true},
        {name:"Powerbank",isPacked:false}];
 
    const filterList=Items.filter(i=>i.name.toLowerCase().includes(val.toLowerCase()))
    const ItemList=filterList.map(i=><Item key={i.name}
        name={i.name} isPacked={i.isPacked}/>);
   
    return (<>
        <input type="text" onChange={(e)=>setval(e.target.value)}/>
        {ItemList}
        </>);
}