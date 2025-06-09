import {useForm} from 'react-hook-form';

export default function useFilterFrom(){
    const form=useForm({
        defaultValues:{
            starCategory:[],
            priceRange:'500-1000'
        }
    })

    return{form}

}