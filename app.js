function addFavoriteBook(bookName){
    var favoritebooks = ["a" , "c" , "b",'Great'];
    var book = favoritebooks.includes("Great");
    // console.log(favoritebooks.includes("Great"));
    if(book !==true){
favoritebooks.push('Great')
    }else{
        console.log('existe deja')
    }
   function printFavoriteBooks(){
    var number = favoritebooks.length; 
    console.log('livres'+''+'favoris:'+ number);
   
    for (let i = 0 ; i < favoritebooks.length; i++){
     console.log(favoritebooks[i]);
    
        
    }
   
   }printFavoriteBooks();
} addFavoriteBook();