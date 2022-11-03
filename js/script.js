const {createApp} = Vue;

createApp({
data(){
return{

foto:[
 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',

 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',

 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',

'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',

'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'

],

titolo:[
  'Svezia','Peru','Chile','Argentina','Colombia'
],

desc:[
  'Temperature molto basse, Capitale: Stockholma','Molto soleggiata, Capitale: Lima','Grossa popolazione, Capitale : Santiago','Belle persone, Capitale: Buenos Aires','Molto caldo, Capitale : Bogotà '

],
counter : 0

}},

methods:{

cambiaFoto(index){
this.counter = index;
}, 

next(){
  this.counter++
  
},

prev(){
  this.counter--
}

}



}).mount('#app')