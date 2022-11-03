const {createApp} = Vue;

createApp({
data(){
return{

all:[
  {
    titolo: 'Svezia',
    desc: 'Temperature molto basse, Capitale: Stockholma',
    foto: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
   },
   {
    titolo: 'Peru',
    desc: 'Molto soleggiata, Capitale: Lima',
    foto: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
   },
   {
    titolo: 'Chile',
    desc: 'Grossa popolazione, Capitale : Santiago',
    foto: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
   },
   {
    titolo: 'Argentina',
    desc: 'Belle persone, Capitale: Buenos Aires',
    foto: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
   },
   {
    titolo: 'Colombia',
    desc: 'Molto caldo, Capitale : Bogotà ',
    foto: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
   }   

],

counter : 0,
auto:''

}},

methods:{

cambiaFoto(index){
this.counter = index;
}, 

next(){
  this.counter++
  if(this.counter == this.all.length){
    this.counter = 0
  }
},

prev(){
  this.counter--
  if(this.counter < 0){
    this.counter = this.all.length -1
  }
},

autoPlay(){

this.auto = setInterval(()=>{
  
this.next()


},3000)

},

stopAutoPlay(){

clearInterval(this.auto)

}

},

mounted(){
this.autoPlay()
 
}




}).mount('#app')