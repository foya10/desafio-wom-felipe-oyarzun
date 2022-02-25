import { useEffect, useState } from "react"
import { getBreeds } from "../helpers/getBreeds";

export const useFetchBreeds = () => {
    const [state, setState] = useState({
        data:[],
        loading:true,
        status:'error'
    });

    useEffect(()=>{ 
        getBreeds()
        .then(breeds=>{
            setState({
                data:breeds,
                loading:false,
                status:'success'
            });
            
        })

    },[])
    return state;
}
