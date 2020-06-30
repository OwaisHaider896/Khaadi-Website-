/* ye style ke method ki working he, 
   iske zarea hum css styling karsakte hen jistarhan ye niche ki he mene
*/

var element;
element = document.querySelector(".nav").style.border;
console.log(element);

element = document.querySelector("#navi").style.color;
console.log(element);

element = document.querySelector(".nav").style.backgroundColor = "tan";
console.log(element);


/* ye className method ki working he
   iski help se hum kisi bhi class ko get kar sakte hen 
   or class ko koi bhi new value de sakte hen iske zarea matlb ka class ka name change kar sakte hen
   direc DOM se . 
*/

element = document.querySelector("#links").className = "abc xyz"; // idhar ek class ko 2 name de hen //
console.log(element);


/* ye classList ka method ki working he 
   classList or className me ye diff he k hum class ko jitne bhi name deden
   className se wo un names ko ek string ki soorat me dikhaega console me.
   jabke classList me wo ek array ki shakal me un name ko dikhaega, matlb ek array banadega un name ka.
*/

element = document.querySelector("#links").classList;
console.log(element);
/* classList k apne bhi kuch methods hen */
element = document.querySelector("#links").classList.add("ghi", "efg"); /* ye add method he classList ka */
console.log(element);
element = document.querySelector("#links").classList.remove("xyz"); /* ye remove ka method he */
console.log(element);