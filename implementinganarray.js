class MyArray{
  constructor(){
    this.length=0;
    this.data={}
  }
  get(index){
    return this.data[index];
  }
  push(item){
    this.data[this.length]=item
    this.length++
  }
  pop(){
    const lastitem=this.data[this.length-1]
    delete this.data[this.length-1]
    this.length--;
    return lastitem;
  }
  delete(index){
    let item=this.data[index]
    this.shiftItems(index)

  }
  shiftItems(index){
    for(let i=index; i< this.length-1; i++){
      this.data[i]=this.data[i+1]
    }
   delete this.data[this.length-1]
  }
}

const newArray= new MyArray()
// console.log(newArray.get(0))
newArray.push("hi")
newArray.push("hello")
newArray.push("how")
newArray.push("are")
newArray.delete(2)
console.log(newArray)
// newArray.pop()
// console.log(newArray)

