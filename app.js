'use strict';
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
            const Employee1 =new Employees(0,"Ghazi Samer","Administration","https://cute1.cc/wp-content/uploads/2016/08/20160819-3487.jpg","Senior",0,Id);
            const Employee2 =new Employees(0,"Lana Ali","Finance","https://mrahkat.net/wp-content/uploads/2019/12/6954-3.jpg","Senior",0);
            const Employee3 =new Employees(0,"Tamara Ayoub","Marketing","https://new3.co/wp-content/uploads/2018/01/1883-6.jpg","Senior",0);
            const Employee4 =new Employees(0,"Safi Walid","Administration","https://eveningg.cc/wp-content/uploads/2019/06/11450-6.jpg","Mid-Senior",0);
            const Employee5 =new Employees(0,"Omar Zaid","Development","https://www.nawa3em.com/big/romance10-17-8-2014.jpg","Senior",0);
            const Employee6 =new Employees(0,"Rana Saleh","Development","https://mrahkat.net/wp-content/uploads/2019/12/6954-6.jpg","junior",0);
            const Employee7 =new Employees(0,"Hadi Ahmad","Finance","https://media.linkonlineworld.com/img/large/2017/11/18/2017_11_18_13_38_40_513.jpg","Mid-Senior",0);

            //console.log(document);
            //console.log(allEmployees);

           Employees.prototype.render=function(){

            document.write(`<p style="color:red;font-size: 20px ;padding-left:55px">Employee name: ${this.fullName} <br>Department : ${this.Department} <br>Employee salary : ${this.salary}</p>`);

           }
            function print(){
                for(let i =0;i<allEmployees.length;i++){
                  allEmployees[i].uniqueId(Id);
                  if(allEmployees[i].Level==="Senior"){
                    allEmployees[i].getRandomSenior(1500,2000);
                  } else if(allEmployees[i].Level==="Mid-Senior")
                  {allEmployees[i].getRandomSenior(1000,1500);}
                  else{allEmployees[i].getRandomSenior(500,1000);}     
                allEmployees[i].render();
            }
        }
        print();

        


          