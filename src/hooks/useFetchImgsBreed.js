import { useEffect, useState } from "react"
import { getImgsBreed } from "../helpers/getImgsBreed";

export const useFetchImgsBreed = (breed) => {
    const [state, setState] = useState({
        data:[],
        loading:true,
        status:'error'
    });

    useEffect(()=>{ 
        getImgsBreed(breed)
        .then(imgsBreed=>{
            setState({
                data:imgsBreed,
                loading:false,
                status:'success'
            });
            
        })

    },[])
    return state;
}
