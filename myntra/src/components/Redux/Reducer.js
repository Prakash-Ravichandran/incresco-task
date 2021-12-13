import {Men, Women, Girl, Boy} from '../../Constants/Constants';

const Reducer = (state, action) => {

       
     switch(action.type){
         case 'MEN': return Men;

         case 'WOMEN': return Women;

         case 'BOYS' : return Boy;

         case 'GIRLS' : return Girl;

         default: return Boy;
     }

}

export default Reducer;