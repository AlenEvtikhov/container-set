(()=>{"use strict";class e{constructor(e){this.name=e.name,this.age=e.age}}const s=new class{constructor(){this.members=new Set}add(e){if(this.members.has(e))throw new Error("Игрок уже есть в команде.");this.members.add(e)}addAll(...e){e.forEach((e=>{this.members.add(e)}))}toArray(){this.members=Array.from(this.members)}},a=new e({name:"Joe",age:32}),r=new e({name:"John",age:44}),m=new e({name:"Vanda",age:25});s.addAll(a,r,m,m)})();