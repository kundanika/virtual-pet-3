class Food {
    constructor(){
    this.foodStock=0;
    this.image=loadImage("images/milk.png");
    }
  
   updateFoodStock(food){
    this.foodStock=food;
    database.ref('/').update({
      Food: food
  });
   }

   getFoodStock(){
     this.x=database.ref("Food")
     this.x.on("value",(data)=>{
      this.foodStock=data.val();
    })
}
deductFood(){
  this.foodStock--;
  updateFoodStock(this.foodStock);
   }
  
  
  
   display(){

    var x = 80, y = 100;
    imageMode(CENTER);
    if(this.foodStock != 0){
        for(var i = 0; i < this.foodStock; i++){
            if(i % 10 === 0){
               x = 80;
               y += 50;
            }
            image(this.image, x, y, 50, 50);
            x += 30; 
        }
     }
   }
   garden(){
       imageMode(CENTER);
       image(garden,300,300,600,600);
   }
   bedroom(){
       imageMode(CENTER);
       image(bedroom,300,300,600,600);
   }
   washroom(){
       imageMode(CENTER);
       (washroom,300,300,600,600);
   }
}