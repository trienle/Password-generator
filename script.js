const empty="",
uCase='MNBVCXZLKJHGFDSAPOIUYTREWQ',
lCase='mnbvcxzlkjhgfdsapoiuytrewq',
number='1234567890',
symbol='!@#$%^&*=-_"';


const pLength = document.querySelector("#p-length")
const upperCase = document.querySelector("#p-uppercase");
const lowerCase = document.querySelector("#p-lowercase");
const pNumber = document.querySelector("#p-number");
const pSymbol = document.querySelector("#p-symbols");
const submit = document.querySelector("#submit");
const password = document.querySelector("#password");
const copy=document.querySelector('.copy')

submit.addEventListener('click',()=>{
    let initialPassword=empty;
    upperCase.checked ? (initialPassword += uCase) : " ";
    lowerCase.checked ? (initialPassword += lCase) : " ";
    pNumber.checked ? (initialPassword += number) : " ";
    pSymbol.checked ? (initialPassword += symbol) : " ";
    password.value=generatePassword(pLength.value,initialPassword)
})  
function generatePassword(length,initialPassword){
   let pass='';
   for(let i=0;i<length;i++){
       pass+=initialPassword.charAt(
           Math.floor(Math.random()*initialPassword.length)
       )
   }
   return pass;
}
copy.addEventListener('click',()=>{
    if(password.value==''){
              alert('Please generate a password')
    }else{
        
        password.select();
        document.execCommand("copy");
        alert('Password has been copied to clipboard')
    }
})