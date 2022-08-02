        var Id=999;

        const Employee1={
            EmployeeID: ++Id,
            fullName:"Ghazi Samer",
            Department :"Administration",
            "Image URL":"https://cute1.cc/wp-content/uploads/2016/08/20160819-3487.jpg",
            Level:"Senior",
            uniqueId: function (){
                    return this.EmployeeID;

                },
                getRandomSenior: function(min, max) {
                    let salary= Math.floor(Math.random() * (max - min) + min);
                    let netSalary=salary-(salary*0.075);
                    console.log( "Employee salary:  "+salary);
                    console.log("the netTax is  "+netSalary);  
                }
        };
        const Employee2={
            EmployeeID: ++Id,
          fullName:"Lana Ali",
            Department :"Finance",
            "Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-3.jpg",
            Level:"Senior",
            uniqueId: function (){
                return this.EmployeeID;

                } ,
            getRandomSenior: function(min, max) {
                let salary= Math.floor(Math.random() * (max - min) + min);
                let netSalary=salary-(salary*0.075);
                console.log( "Employee salary:  "+salary);
                console.log("the netTax is  "+netSalary);  
            }
        };

        const Employee3={
            EmployeeID:++Id,
            fullName:"Tamara Ayoub",
            Department :"Marketing",
            "Image URL":"https://new3.co/wp-content/uploads/2018/01/1883-6.jpg",
            Level:"Senior",
            uniqueId: function (){
                return this.EmployeeID;
                },
            getRandomSenior: function(min, max) {
                let salary= Math.floor(Math.random() * (max - min) + min);
                let netSalary=salary-(salary*0.075);
                console.log( "Employee salary:  "+salary);
                console.log("the netTax is  "+netSalary);  
            } 
        };

        const Employee4={
            EmployeeID:++Id,
            fullName:"Safi Walid",
            Department :"Administration",
            Level:"Mid-Senior",
            "Image URL":"https://eveningg.cc/wp-content/uploads/2019/06/11450-6.jpg",
            uniqueId: function (){
                return this.EmployeeID;
                } ,

                getRandomMidSenior: function(min, max) {
                    let salary= Math.floor(Math.random() * (max - min) + min);
                    let netSalary=salary-(salary*0.075);
                    console.log( "Employee salary:  "+salary);
                    console.log("the netTax is  "+netSalary);  
                }
        };


        const Employee5={
            EmployeeID:++Id,
            fullName:"Omar Zaid",
            Department :"Development",
            "Image URL":"https://www.nawa3em.com/big/romance10-17-8-2014.jpg",
            Level:"Senior",
            uniqueId: function (){
                return this.EmployeeID;
                } 

                ,

            getRandomSenior: function(min, max) {
                let salary= Math.floor(Math.random() * (max - min) + min);
                let netSalary=salary-(salary*0.075);
                console.log( "Employee salary:  "+salary);
                console.log("the netTax is  "+netSalary);  
            }
        };


        const Employee6={
            EmployeeID:++Id,
            fullName:"Rana Saleh",
            Department :"Development",
            "Image URL":"https://mrahkat.net/wp-content/uploads/2019/12/6954-6.jpg",
            Level:"junior",
            uniqueId: function (){
                return this.EmployeeID;
                } ,

                getRandomjunior: function(min, max) {
                    let salary= Math.floor(Math.random() * (max - min) + min);
                    let netSalary=salary-(salary*.075);
                    console.log( "Employee salary:  "+salary);
                    console.log("the netTax is  "+netSalary);  
                }   
        };

        const Employee7={
            EmployeeID:++Id,
            fullName:"Hadi Ahmad",
            Department :"Finance",
            Level:"Mid-Senior",
            "Image URL":"https://media.linkonlineworld.com/img/large/2017/11/18/2017_11_18_13_38_40_513.jpg",
            uniqueId: function (){
                return this.EmployeeID;
                } ,

                getRandomMidSenior: function(min, max) {
                    let salary= Math.floor(Math.random() * (max - min) + min);
                    let netSalary=salary-(salary*0.075);
                    console.log( "Employee salary:  "+salary);
                    console.log("the netTax is  "+netSalary);  
                }
            
        };

        var Array=[Employee1,Employee2,Employee3,Employee4,Employee5,Employee6,Employee7];
      


            function salary(){
                for(let i=0; i<Array.length;i++){
                    console.log(Array[i].uniqueId());
                    if(Array[i]["Level"] === "Senior"){
                        console.log("Employee name:  "+Array[i]["fullName"]);
                        Array[i]["getRandomSenior"](1500,2000);
                        
                }else if(Array[i]["Level"]==="Mid-Senior"){
                    console.log("Employee name:  "+Array[i]["fullName"]);
                    Array[i]["getRandomMidSenior"](1000,1500);

                }else if(Array[i]["Level"]==="junior"){
                    console.log("Employee name:  "+Array[i]["fullName"]);
                    Array[i]["getRandomjunior"](500,1000);
                }
            }}

            
            salary();