import {Men, Women} from '../../Constants/Constants';

const Reducer = (state, action) => {

       
     switch(action.type){
         case 'MEN': return Men;

         case 'WOMEN': return Women;
         case 'BOYS' : return {
            brandType: 'Jeans'
         };
         case 'GIRLS' : return {
            brandType: 'Uniform'
         };
         default: return{
             brandType : 'Mens wear'
         }

     }

}

export default Reducer;