
const Reducer = (state, action) => {
    var Men = {
        brandName: 'M-shirt',
        brandType: 'Slim-fit-colour-blocked-cotton',
        discountedPrice: 200,
        productStrike: 250,
        discountPercentage: 50
    };
    
     switch(action.type){
         case 'MEN': return Men;

         case 'WOMEN': return {
            brandType: 'Saree'

         };
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