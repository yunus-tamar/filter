import  { useEffect, useState } from 'react'
import { items } from './item'

const FilterSearch = () => {
const [selectedfilters,setselectedfilters] =useState([])
const [filteritems,setfilteritems]=useState(items)
const [search,setsearch] =useState('')
let filters =['Bags','Watches','Sports','Sunglasses']

 const handlefilter =(selectedcategory)=>{
  
    if(selectedfilters.includes(selectedcategory)){
        let filters = selectedfilters.filter((el)=> el!==selectedcategory);
        setselectedfilters(filters)
    }
    else{
        setselectedfilters([...selectedfilters,selectedcategory]);
    }
 }

 useEffect(()=>{
           filteritem();
 },[selectedfilters])

 const filteritem=()=>{
    if(selectedfilters.length>0){
        let tempitem = selectedfilters.map((select)=>{
            let temp = items.filter((item)=>item.category===select)
            return temp;
        })

        setfilteritems(tempitem.flat());
    }
    else{
        setfilteritems([...items])
    }
 }






  return (
    <div>
        <div className='inputbox'>
          <input type="search" onChange={(e)=>setsearch(e.target.value)} />
        </div>

          <div className='buttons-container'>
                {
                    filters.map((category,index)=>(
                        <button key={index}
                        
                        onClick={()=>handlefilter(category)}
                        
                        className={`button ${selectedfilters?.includes(category) ? "active" :"" }`}
                        >{category}</button>
                    ))
                }
          </div>

          <div className='items-container'>
              {
                filteritems.filter((data)=>{
                    return search.toLowerCase() ==="" 
                    ? data : data.name.toLowerCase().includes(search)
                }).map((item,index)=>(
                    <div className='item' key={index}>
                         <p>{item.name}</p>
                         <p className='category'>{item.category}</p>
                    </div>
                ))
              }
          </div>


    </div>
  )
}

export default FilterSearch