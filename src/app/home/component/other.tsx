'use client';
import React from "react";
export default function Other({allData , setId}:any){
    const scrollContainerRef =React.useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = React.useState(false);
    const [startX, setStartX] = React.useState<number | null>(null);
    const [scrollLeft, setScrollLeft] = React.useState(0);
  
    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
      setIsDragging(true);
      setStartX(e.pageX - scrollContainerRef.current!.offsetLeft);
      setScrollLeft(scrollContainerRef.current!.scrollLeft);
    };
  
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - scrollContainerRef.current!.offsetLeft;
      const walk = x - (startX as number);
      scrollContainerRef.current!.scrollLeft = scrollLeft - walk;
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
    };
  
    const getCursorStyle = () => {
        return isDragging ? 'grabbing' : 'grab';
      };
    
    return (
        <div className=" w-full p-4">
         <h3 className=" font-bold text-4xl mb-4">Other Movies</h3>
         <div 
               ref={scrollContainerRef}
               onMouseDown={handleMouseDown}
               onMouseMove={handleMouseMove}
               onMouseUp={handleMouseUp}
               onMouseLeave={handleMouseLeave}
               style={{ cursor: getCursorStyle() ,width:"100%"}}

         className=" flex gap-4 flex-row overflow-x-scroll custom-scrollbar" >
            {
            allData.map((item:any , i:number)=>{
            return(
              
                <div key={i} style={{minWidth:"200px", cursor:"pointer"}} onClick={()=>{
                    setId(i);
                }} >
             
                <img src= {`https://image.tmdb.org/t/p/w500/${item["poster_path"]}`}  />
              </div>
                );
                })

            }
         </div>
        </div>
    );
}