import CustomButton from "./customButton"
export default function Mid({data, id, setId}:any){
    return(
<div 
       className=' flex flex-col gap-2'
       style={{
        
        width:"50%",
        
       }}>
        
        <h1 className=' font-bold text-6xl'>{data[id]["original_title"]}</h1>
        <p>{data[id]["overview"]}</p>
        
        <CustomButton text="Play" width ="20%" icon="carbon:play-filled" id={id} setId = {setId} length = {data.length - 1} allData ={data} />
       </div>
    )
}