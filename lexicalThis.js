class Shape
{
    constructor()
    {
        this.nums=[1,51,50,55,15,65];
        this.fives=[];
        this.getNums=function() {
            console.log(this.nums);
            console.log(this.fives);
        }
        this.nums.forEach(element => {
            if(element%5===0)
            this.fives.push(element);
        });
    }   
    }

    var shape=new Shape();
    shape.getNums();