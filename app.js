        var Id=999;//(counter)

        const Employee1={
            EmployeeID: 0,
            fullName:"Ghazi Samer",
            Department :"Administration",
            //"Image URL":"https://cute1.cc/wp-content/uploads/2016/08/20160819-3487.jpg",
            Level:"Senior",
            salary: 0,

            uniqueId: function (counter){
                this.EmployeeID=counter +1;
                    ++Id;

            },

            getRandomSenior: function() {
                let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
                let netSalary=salary-(salary*0.075);
                this.salary=netSalary;
                  
            }



        };
        




        const Employee2={
            EmployeeID:0,
          fullName:"Lana Ali",
            Department :"Finance",
            //"Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-3.jpg",
            Level:"Senior",
            salary:0,
            uniqueId: function (counter){
                this.EmployeeID=counter +1;
                    ++Id;

                },
                getRandomSenior: function() {
                    let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
                    let netSalary=salary-(salary*0.075);
                    this.salary=netSalary;
                      
                }
    
    
        };
       


        const Employee3={
            EmployeeID:0,
            fullName:"Tamara Ayoub",
            Department :"Marketing",
           // "Image URL":"https://new3.co/wp-content/uploads/2018/01/1883-6.jpg",
            Level:"Senior",
            salary:0,
            uniqueId: function (counter){
                this.EmployeeID=counter +1;
                    ++Id;

                },
                getRandomSenior: function() {
                    let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
                    let netSalary=salary-(salary*0.075);
                    this.salary=netSalary;
                      
                }
    
        };

        const Employee4={
            EmployeeID:0,
            fullName:"Safi Walid",
            Department :"Administration",
            Level:"Mid-Senior",
           // "Image URL":"https://eveningg.cc/wp-content/uploads/2019/06/11450-6.jpg",
           

           salary:0,
           uniqueId: function (counter){
               this.EmployeeID=counter +1;
                   ++Id;

               },
               getRandomSenior: function() {
                   let salary= Math.floor(Math.random() * (1500 - 1000) + 1000);
                   let netSalary=salary-(salary*0.075);
                   this.salary=netSalary;
                     
               }
   
        };


        const Employee5={
            EmployeeID:0,
            fullName:"Omar Zaid",
            Department :"Development",
            //"Image URL":"https://www.nawa3em.com/big/romance10-17-8-2014.jpg",
            Level:"Senior",
            salary:0,
            uniqueId: function (counter){
                this.EmployeeID=counter +1;
                    ++Id;

                },
                getRandomSenior: function() {
                    let salary= Math.floor(Math.random() * (2000 - 1500) + 1500);
                    let netSalary=salary-(salary*0.075);
                    this.salary=netSalary;
                      
                }
    
        };


        const Employee6={
            EmployeeID:0,
            fullName:"Rana Saleh",
            Department :"Development",
            //"Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-6.jpg",
            Level:"junior",
            salary:0,
            uniqueId: function (counter){
                this.EmployeeID=counter +1;
                    ++Id;

                },
                getRandomSenior: function() {
                    let salary= Math.floor(Math.random() * (1000 - 500) + 500);
                    let netSalary=salary-(salary*0.075);
                    this.salary=netSalary;
                      
                }
       
        };

        const Employee7={
            EmployeeID:0,
            fullName:"Hadi Ahmad",
            Department :"Finance",
            Level:"Mid-Senior",
           // "Image URL":"https://media.linkonlineworld.com/img/large/2017/11/18/2017_11_18_13_38_40_513.jpg",
           salary:0,
           uniqueId: function (counter){
               this.EmployeeID=counter +1;
                   ++Id;

               },
               getRandomSenior: function() {
                   let salary= Math.floor(Math.random() * (1500 - 1000) + 1000);
                   let netSalary=salary-(salary*0.075);
                   this.salary=netSalary;
                     
               }
   
            
        };

        var Array=[Employee1,Employee2,Employee3,Employee4,Employee5,Employee6,Employee7];
      


            function salary(){
                for(let i=0; i<Array.length;i++){
                        console.log("Employee name:  ",Array[i].fullName);
                        Array[i].getRandomSenior();
                        console.log("Employee salary:  ",Array[i].salary);
                        Array[i].uniqueId(Id);
        console.log("employee id ------------>",Array[i].EmployeeID);

                }
            }
            salary();