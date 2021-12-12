const Reducer = (state, action) => {
     switch(action.type){
         case 'MEN': return {
             brandType: 'T-shirt'

         };
         case 'WOMEN': return {
            brandType: 'Saree'

         };
         case 'BOYS' : return {
            brandType: 'Jeans'
         };
         case 'GIRLS' : return {
            brandType: 'Uniform'
         };

     }

}

export default Reducer;