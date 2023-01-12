
// day start
let years = document.getElementById('years')
let month = document.getElementById('month')
let day = document.getElementById('day')
let date = new Date().getFullYear()
let date_1 = new Date().getMonth() + 1
let date_2 = new Date().getUTCDate() 
years.innerHTML = date;
month.innerHTML = date_1
day.innerHTML = date_2
// day end
// start project
let name = document.getElementById('emp_num')
let jop = document.getElementById('jop')
let basic_salary = document.getElementById('basic_salary')
let bonuses = document.getElementById('bonuses')
let Promotion = document.getElementById('Promotion')
let Loans = document.getElementById('Loans')
let Absence = document.getElementById('Absence')
let total = document.getElementById('total')
let count = document.getElementById('count')
let catogery = document.getElementById('catogery')
let submit = document.getElementById('submit')
console.log(submit)
let mood = 'create'
let temp;
let yes = document.getElementById('yes')
let no = document.getElementById('no')

// find the salary 
function total_salary(){
    if(basic_salary.value != ''){
       let returns =  (+basic_salary.value +  +bonuses.value + +Promotion.value) - +Loans.value - Absence.value
     total.innerHTML = returns
    
     total.style.background = 'green'
    }else{
        total.innerHTML = "";
        total.style.background= 'green';
    }
    if(total.innerHTML < 200){
        total.style.background = 'orange'
     }
}
// find the salary 
// save in data 
let data ;
if(localStorage.employees !=null){
data = JSON.parse(localStorage.employees)
}else{
    data = [];
}
submit.onclick =()=>{
    let obj = { 
        name:name.value,
        jop:jop.value,
        basic_salary:basic_salary.value,
        bonuses:bonuses.value,
        Promotion:Promotion.value,
        Loans:Loans.value,
        Absence:Absence.value,
        total:total.innerHTML,
        count:count.value,
        catogery:catogery.value
   
    }

   
        if(mood == "create"){
            if(obj.count > 1){
                for(let i = 0 ; i < obj.count ;i++){
                    data.push(obj)
                   
                }
                }else{
                    data.push(obj)
               
               }
           }else{
            data[temp]= obj
           }
                localStorage.setItem('employees',JSON.stringify(data))
                clear_data();
                show_data()
        }
 


function clear_data(){
    name.value = '',
    jop.value = '',
    basic_salary.value = '',
    bonuses.value = '',
    Promotion.value = '',
    Loans.value = '',
    Absence.value = '',
    total.innerHTML = '',
    count.value = '',
    catogery.value = ''
}


function show_data(){
let table_one = ''
for(let i = 0 ; i <data.length;i++ ){
    table_one += `
    <tr>
    <td>${i+1}</td>
    <td>${data[i].name}</td>
    <td>  ${data[i].jop}</td>
    <td>${data[i].basic_salary}</td>
    <td>${data[i].bonuses}</td>
    <td>${data[i].Promotion}</td>
    <td>${data[i].Loans}</td>
    <td>${data[i].Absence}</td>
    <td>${data[i].total}</td>
    <td>${data[i].count}</td>
    <td>${data[i].catogery} </td>
    <td class="btn_edit" onclick='update_data(${i}) ' >تعديل</td>
    <td class="btn_del" onclick ='deleted(${i})'>حذف</td> 
</tr>
    `
 
}
document.getElementById('tbody').innerHTML = table_one
if(data.length > 1 ){
    document.getElementById('deleted_all').style.display = 'block'
}
}
show_data();

function deleted(i){
data.splice(i,1);
localStorage.employees = JSON.stringify(data)
show_data();
}



function deleted_all(){
document.querySelector('.sweet_title').style.display = 'block'
show_data();
}
  

function yes_all(){
    if(yes.id=='yes'){
        console.log('hello')
        data.splice(0);
        localStorage.employees = JSON.stringify(data)
        show_data();
        document.querySelector('.sweet_title').style.display = 'none'
    }
}
 

function no_all(){
    if(no.id == 'no'){
        document.querySelector('.sweet_title').style.display = 'none'
    }
}





function update_data(i){
    console.log('hello')
    name.value = data[i].name
    jop.value = data[i].jop
    basic_salary.value = data[i].basic_salary
    bonuses.value = data[i].bonuses
    Promotion.value = data[i].Promotion
    Loans.value = data[i].Loans
    Absence.value = data[i].Absence
    total_salary()
    count.style.display = 'none'
    catogery.style.width = "100%"
    submit.innerHTML = 'تعديل'
    mood = 'update'
    temp = i
}
let search_mode = 'search_name';

function  getserch_mood(id){
    let search = document.getElementById('search')
if(id === 'search_name'){
    search_mode = 'البحت من خلال اسم الموظف'
    search.placeholder='البحت من خلال اسم الموظف'

}else{
    search_mode = 'البحت من خلال الرقم الوظيفي'
    search.placeholder='البحت من خلال الرقم الوظيفي'
}
search.focus();


 }


 

 function search_data(value){
    let table_one = '';
    if( search_mode == 'البحت من خلال اسم الموظف'){
for(let i = 0 ; i < data.length ; i++){
if(data[i].name.includes(value)){
    table_one += `
    <tr>
    <td>${i+1}</td>
    <td>${data[ i  ].name}</td>
    <td>${data[i].jop}</td>
    <td>${data[i].basic_salary}</td>
    <td>${data[i].bonuses}</td>
    <td>${data[i].Promotion}</td>
    <td>${data[i].Loans}</td>
    <td>${data[i].Absence}</td>
    <td>${data[i].total}</td>
    <td>${data[i].count}</td>
    <td>${data[i ].catogery} </td>
    <td class="btn_edit" onclick='update_data(${i}) ' >تعديل</td>
    <td class="btn_del" onclick ='deleted(${i})'>حذف</td> 
</tr>
    `
}
}
}else{
    for(let i = 0 ; i < data.length ; i++){
        if(data[i].catogery.includes(value)){
            table_one += `
            <tr>
            <td>${i+1}</td>
            <td>${data[ i  ].name}</td>
            <td>${data[i].jop}</td>
            <td>${data[i].basic_salary}</td>
            <td>${data[i].bonuses}</td>
            <td>${data[i].Promotion}</td>
            <td>${data[i].Loans}</td>
            <td>${data[i].Absence}</td>
            <td>${data[i].total}</td>
            <td>${data[i].count}</td>
            <td>${data[i ].catogery} </td>
            <td class="btn_edit" onclick='update_data(${i}) ' >تعديل</td>
            <td class="btn_del" onclick ='deleted(${i})'>حذف</td> 
        </tr>
            `

        }
        }
}
document.getElementById('tbody').innerHTML = table_one
}




































// تسجيل الدخول
let all_sestems = document.querySelector('.all')
let user_name = document.getElementById('user_name')
let password = document.getElementById('password')
let save =document.getElementById('save')
let alert_user = document.querySelector('.sweet_alert')
let alert_password = document.querySelector('.sweet_alert_tow')










save.onclick = function(){
if(user_name.value == ''){
    // alert_user.innerHTML = 'الرجاء ادخال اسم المستخدم'
    alert_user.style.display = 'block'
}else{
    alert_user.style.display = 'none' 
    alert_password.style.display = 'none'
}
}
save.addEventListener('click',()=>{
if(password.value.length == 0){
    // alert_password.innerHTML='الرجاء ادخال كلمة المرور'
    alert_password.style.display ='block'
}
})

let good = document.querySelector('.sign_in .ture-cheak')
let bad = document.querySelector('.sign_in .folse-cheak')
console.log(good)
console.log(bad)


let username = 'ahmed'
let loginPassword = '123456789*-+'

user_name.onkeyup = function(){
if(user_name.value == username){
    good.style.display = 'block'
    bad.style.display = 'none'
}else{
    good.style.display = 'none'
    bad.style.display = 'block'
}
}


let x = document.querySelector('.passtrue')
let d =document.querySelector('.passFolse')
password.onkeyup = function(){
    if(password.value == loginPassword){
        x.style.display = 'block'
        d.style.display = 'none'
    }else{
        d.style.display = 'block'
        x.style.display = 'none'
    }
    }
    let all= document.querySelector('.all')
    password.addEventListener('keypress',function(event){
        if(event.key === 'Enter'){
       if(user_name.value == username && password.value == loginPassword   ){
        setInterval(()=>{
            all_sestems.classList.add('change')
        },3000)
       }
    }
    })
    
// show the password by check 
function showpassword(){
    let x = document.getElementById('password')
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
      
}
// show the password by check 





   













