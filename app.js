'use strict';
let body1=document.getElementsByClassName('body1');

var Id=999;//(counter)
        const allEmployees=[];
        function Employees(EmployeeID,fullName,Department,ImageURL,Level,salary)
        {
            this.EmployeeID=EmployeeID;
            this.fullName=fullName;
            this.Department=Department;
            this.ImageURL=ImageURL;
            this.Level=Level;
            this.salary=salary;
            this.uniqueId=function(counter){
                this.EmployeeID=counter +1;
                    ++Id;

            };
            this.getRandomSenior=function(min,max) {
                    let salary= Math.floor(Math.random() * (max - min) + min);
                    let netSalary=Math.floor(salary-(salary*0.075));
                    this.salary=netSalary;
                      
                };

            allEmployees.push(this);
        }       
            const Employee1 =new Employees(0,"Ghazi Samer","Administration","./assests/Ghazi.jpg","Senior",0);
            const Employee2 =new Employees(0,"Lana Ali","Finance","././assests/Lana.jpg","Senior",0);
            const Employee3 =new Employees(0,"Tamara Ayoub","Marketing","./assests/Tamara.jpg","Senior",0);
            const Employee4 =new Employees(0,"Safi Walid","Administration","./assests/Safi.jpg","Mid-Senior",0);
            const Employee5 =new Employees(0,"Omar Zaid","Development","./assests/Omar.jpg","Senior",0);
            const Employee6 =new Employees(0,"Rana Saleh","Development","./assests/Rana.jpg","junior",0);
            const Employee7 =new Employees(0,"Hadi Ahmad","Finance","./assests/Hadi.jpg","Mid-Senior",0);

            //console.log(document);
            //console.log(allEmployees);

           Employees.prototype.render=function(x){

           
            let div1=document.getElementsByClassName('div1');
            let div2=document.getElementsByClassName('div2');
            div1[0].style.display="flex";
           let pE1=document.createElement('p');
           let pE2=document.createElement('p');
           let pE3=document.createElement('p');
           let pE4=document.createElement('p');
           pE1.textContent=`Name: ${this.fullName}  ,  ID:${this.EmployeeID}   `;
           pE2.textContent=`  Department : ${this.Department}  `;
            pE3.textContent=`Level :${this.Level}  `;
            pE4.textContent=`salary : ${this.salary}  `;
           
            console.log(pE1);
            const img1=document.createElement('img');
            img1.src=this.ImageURL;
            img1.alt=this.fullName;
            img1.style.width="20%";
            //div1[0].style.background="blue";
            pE1.style.color="blue";
            div2[x].appendChild(img1);
            div2[x].appendChild(pE1);
            div2[x].appendChild(pE2);
            div2[x].appendChild(pE3);
            div2[x].appendChild(pE4);
           
            
            img1.style.maxWidth="70px";
            img1.style.height="auto";
            pE1.style.color="white";
            pE2.style.color="white";
            pE3.style.color="white";
            pE4.style.color="white";
        
            }
       
                
      
           function print(){
                for(let i =0;i<allEmployees.length;i++){
                 allEmployees[i].uniqueId(Id);
                  if(allEmployees[i].Level==="Senior"){
                    allEmployees[i].getRandomSenior(1500,2000);
                  } else if(allEmployees[i].Level==="Mid-Senior")
                  {allEmployees[i].getRandomSenior(1000,1500);}
                  else{allEmployees[i].getRandomSenior(500,1000);}     
                allEmployees[i].render(i);
            }
        }
        print();

        


          