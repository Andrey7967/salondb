// Author: Andrey Tikhonov 2024

let clientData;
let haircutData;
let OrdersData;



    async function readSalonData(fileName) {
      try {
        const data = await window.electron.readSalon(fileName);
       return data;
       
      } catch (error) {
        console.error('Error reading salon data:', error);
      }
    }
  
    readSalonData("Database/clients.json").then(jsonData => clientData = jsonData);
    readSalonData("Database/haircuts.json").then(jsonData => haircutData = jsonData);;
    readSalonData("Database/orders.json").then(jsonData => OrdersData = jsonData);;
   





      


function findFromCode(code,array,up,bottom) {
    let check =  Number(code);
    let del = Math.floor((bottom-up+1)/2);
    let possible =  Number(array[up+del].code);
  
    if(possible == check) {
        return up+del;
    } else if(del == 0 && possible != check) {
        return 0;
    } else if(possible < check) {
        return findFromCode(code,array,up+del+1,bottom);
    } else if(possible > check) {
        return findFromCode(code,array,up,up+del-1);
    }
} 

function findFromDiv(code,array,up,bottom) {
    let check =  Number(code);
    let del = Math.floor((bottom-up+1)/2);
    let possible =  Number(array[up+del].firstChild.innerHTML);
  
    if(possible == check) {
        return up+del;
    } else if(del == 0 && possible != check) {
        return undefined;
    } else if(possible < check) {
        return findFromDiv(code,array,up+del+1,bottom);
    } else if(possible > check) {
        return findFromDiv(code,array,up,up+del-1);
    }
} 








let mainMenu =  document.getElementById("mainMenu");

  
let clientBtn = document.getElementById("clientBtn");
let OrderBtn = document.getElementById("OrderBtn");
let CreateBtn = document.getElementById("CreateBtn");

let clientList = document.getElementById("clientList");
let orderList = document.getElementById("orderList");
let hairList = document.getElementById("hairList");
let clientSection = document.getElementById("client");
let orderSection = document.getElementById("order");
let hairSection = document.getElementById("hair");
let createSection = document.getElementById("create");
let lastnameInputO = document.getElementById("FO");
let nameInputO = document.getElementById("IO");
let surnameInputO = document.getElementById("OO");
let dateInputO = document.getElementById("DO");
let haircut = document.getElementById("HO");

let lastnameInput = document.getElementById("F");
let nameInput = document.getElementById("I");
let surnameInput = document.getElementById("O");
let dateInput = document.getElementById("D");

let clientBack = document.getElementsByClassName("clientBack");

let btnSection = document.getElementById("btnSection");
let searchBtn = document.getElementById("search");
let addBtn = document.getElementById("add");
let editBtn = document.getElementById("edit");
let delBtn = document.getElementById("del");
let searchSection = document.getElementById("searchSection"); 
let clientName = document.getElementById("clientName"); 
let searchBack = document.getElementById("searchBack");
let searchClient = document.getElementById("searchClient");


let searchSectionOrder = document.getElementById("searchSectionOrder");
let btnSectionOrder = document.getElementById("btnSectionOrder");

let orderName = document.getElementById("orderName");
let searchOrders = document.getElementById("searchOrders");
let searchBackOrder = document.getElementById("searchBackOrder");
let clientStatus=  document.getElementById("clientStatus");
let searchArticle = document.getElementById("searchArticle");
let maleSelect = document.getElementsByClassName("male");
let femaleSelect = document.getElementsByClassName("female");

let searchArticleOrder =document.getElementById("searchArticleOrder");
let orderStatus = document.getElementById("orderStatus");
let orderBack =  document.getElementById("orderBack");
let searchBtnOrder = document.getElementById("searchOrder");
let editBtnOrder = document.getElementById("editOrder");
let delBtnOrder = document.getElementById("delOrder");





let searchSectionHair = document.getElementById("searchSectionHair");
let btnSectionHair = document.getElementById("btnSectionHair");

let hairName = document.getElementById("hairName");
let searchHair = document.getElementById("searchHair");
let searchBackHair = document.getElementById("searchBackHair");

let searchArticleHair = document.getElementById("searchArticleHair");



let hairStatus = document.getElementById("hairStatus");

let searchBtnHair = document.getElementById("searchBtnHair");
let editBtnHair = document.getElementById("editHair");
let delBtnHair = document.getElementById("delHair");
let addBtnHair = document.getElementById("addHair");

let hairInput = document.getElementById("H");
let costHair =  document.getElementById("cost");


let lastnameInputCreate = document.getElementById("FC");
let nameInputCreate = document.getElementById("IC");
let surnameInputCreate = document.getElementById("OC");
let birthDateInputCreate =  document.getElementById("DB");
let haircutInputCreate = document.getElementById("HC");
let DateOrderInputCreate = document.getElementById("ODC");
let costInputCreate = document.getElementById("costC");
let createOrder = document.getElementById("createOrder");
let createStatus = document.getElementById("createStatus");

let clientNum = document.getElementById("clientNum");
let orderNum =  document.getElementById("orderNum");
let hairNum =  document.getElementById("hairNum");

let bar = document.getElementsByClassName("bar");
class DynamicList {
    mode = 0; // 0 default, 1 edit, 2 delete, 3 search, 4 add
    listData;
    contain;
    lengths;
    filename;
    i= 1;
    scrollNum =0;
    generated = 0;
    selectedDel = [];
    selectedEdit = 0;
 searched =0;
    constructor(listData,contain,lengths,filename) {
        this.listData = listData;
        this.contain = contain;
       
        this.lengths = lengths;
        this.filename = filename;
      
    }
    
   

    generateList() {
        
 for(let p=0; p<10;p++) {
    if(this.i<this.listData.array.length) {
        
        let elem = document.createElement("div");
        elem.className = "listElem outshape";
        let property;
        let x= 0;
        for (var key in this.listData.array[this.i]) {
            property = document.createElement("div");
            if(key=="orders") {
                property.innerHTML = this.listData.array[this.i][key] + " заказов";
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
            }
            else if(key=="gender") {
                if(this.listData.array[this.i][key] =="1") {
                    property.innerHTML = "мужчина";
                } else {
                    property.innerHTML = "женщина";
                }
               
               
                property.title =  property.innerHTML ;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            

             
            } else {
              
                property.innerHTML = this.listData.array[this.i][key];
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
            }
    
            elem.appendChild(property);
            
            
            
            x++;
          
          }
          
          elem.addEventListener("click", ()  => {
            if(this.mode == 1) {
             
                if( !elem.classList.contains("selected")) { 
                    if(this.selectedEdit != 0) {
                        this.selectedEdit.classList.remove("selected");
                     
                    }
            
                    elem.classList.add("selected");
                    this.selectedEdit = elem;
                    
                    lastnameInput.value = elem.childNodes[1].innerHTML;
                    nameInput.value =  elem.childNodes[2].innerHTML;
                    surnameInput.value =  elem.childNodes[3].innerHTML;
                    dateInput.value =  elem.childNodes[4].innerHTML;
                    if( elem.childNodes[5].innerHTML =="мужчина") {
                        maleSelect[0].classList.add("selected");
                        femaleSelect[0].classList.remove("selected");

                    } else {
                        maleSelect[0].classList.remove("selected");
                        femaleSelect[0].classList.add("selected");

                    }
                     
                   
                } else {
                    this.selectedEdit.classList.remove("selected");
                  
                    this.selectedEdit = "";
                    lastnameInput.value = "";
                    nameInput.value =  "";
                    surnameInput.value = "";
                    dateInput.value =  "";
                    
                }
                
            } else if (this.mode == 2) {
                if(!elem.className.includes("del")) {
                    this.selectedDel.push(elem);
                    elem.classList.add('del');
                } else {
                    
                    for(let y=0; y< this.selectedDel.length;y++) {
                        if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                            this.selectedDel.splice(y,1);
                            break;
                        }

                    }
                    elem.classList.remove('del');
                }
               
                
            }
        })
        this.contain.appendChild(elem);

        this.i++;
    }
    }
    
   
}




searchList() {
     this.searched =1;
    let filledInp = 0;
    let lastname=lastnameInput.value.trim().toLowerCase();
  
    let name = nameInput.value.trim().toLowerCase();
   
    let surname = surnameInput.value.trim().toLowerCase();
   
    let date = dateInput.value;
    
    let gender = "";

    if(maleSelect[0].classList.contains("selected")) {
        gender = "1";
        filledInp++;
    } else if(femaleSelect[0].classList.contains("selected")) {
        gender = "0";
        filledInp++;
    }

     if(lastname != "") {
        lastname =  lastname[0].toUpperCase() + lastname.slice(1);
        filledInp++;
    
    }
    if(name != "") {
        filledInp++;
        name =  name[0].toUpperCase() + name.slice(1);
    
    }
    if(surname!= "") {
        filledInp++;
        surname =  surname[0].toUpperCase() + surname.slice(1);
    
    }
    if(date != "") {
        filledInp++;
    
    }
  
    if(filledInp==5) {
        this.contain.innerHTML = "";
        for(let x=1;x<this.listData.array.length;x++) {
            if(lastname==this.listData.array[x].F && name==this.listData.array[x].I && surname==this.listData.array[x].O && date==this.listData.array[x].birthDate && gender ==this.listData.array[x].gender ) {
              
                let elem = document.createElement("div");
                elem.className = "listElem outshape";
                let property;
                let y=0;
                for (var key in this.listData.array[x]) {
                    property = document.createElement("div");
                    if(key=="orders") {
                        property.innerHTML = this.listData.array[x][key] + " заказов";
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[y] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                    }
                    else if(key=="gender") {
                        if(this.listData.array[x][key] =="1") {
                            property.innerHTML = "мужчина";
                        } else {
                            property.innerHTML = "женщина";
                        }
                       
                       
                        property.title =  property.innerHTML ;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[y] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
        
                     
                    } else {
                      
                        property.innerHTML = this.listData.array[x][key];
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[y] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                    }
            
                    elem.appendChild(property);
                    
                    y++;
                
                
                   
              
                }

                elem.addEventListener("click", ()  => {
                    if(this.mode == 1) {
                     
                        if( !elem.classList.contains("selected")) { 
                            if(this.selectedEdit != 0) {
                                this.selectedEdit.classList.remove("selected");
                             
                            }
                    
                            elem.classList.add("selected");
                            this.selectedEdit = elem;
        
                            lastnameInput.value = elem.childNodes[1].innerHTML;
                            nameInput.value =  elem.childNodes[2].innerHTML;
                            surnameInput.value =  elem.childNodes[3].innerHTML;
                            dateInput.value =  elem.childNodes[4].innerHTML;
                            if( elem.childNodes[5].innerHTML =="мужчина") {
                                maleSelect[0].classList.add("selected");
                                femaleSelect[0].classList.remove("selected");
        
                            } else {
                                maleSelect[0].classList.remove("selected");
                                femaleSelect[0].classList.add("selected");
        
                            }
                             
                             
                           
                        } else {
                            this.selectedEdit.classList.remove("selected");
                          
                            this.selectedEdit = "";
                            lastnameInput.value = "";
                            nameInput.value =  "";
                            surnameInput.value = "";
                            dateInput.value =  "";
                            
                        }
                        
                    } else if (this.mode == 2) {
                        if(!elem.className.includes("del")) {
                            this.selectedDel.push(elem);
                            elem.classList.add('del');
                        } else {
                            
                            for(let y=0; y< this.selectedDel.length;y++) {
                                if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                    this.selectedDel.splice(y,1);
                                    break;
                                }
        
                            }
                            elem.classList.remove('del');
                        }
                       
                        
                    }
                })
              this.contain.appendChild(elem);
               break;
            }
           
        }

    } else if(filledInp != 0) {
        this.contain.innerHTML = "";
        
        for(let x=1;x<this.listData.array.length;x++) {
            if((lastname==this.listData.array[x].F || lastname=="") && (name==this.listData.array[x].I  || name=="") && (surname==this.listData.array[x].O   || surname=="") && ( date==this.listData.array[x].birthDate   || date=="") && (gender ==this.listData.array[x].gender || gender=="")) {
              
                let elem = document.createElement("div");
                elem.className = "listElem outshape";
                let property;
               
               let y=0;
                for (var key in this.listData.array[x]) {
                    property = document.createElement("div");
                    if(key=="orders") {
                        property.innerHTML = this.listData.array[x][key] + " заказов";
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[y] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                    }
                    else if(key=="gender") {
                        if(this.listData.array[x][key] =="1") {
                            property.innerHTML = "мужчина";
                        } else {
                            property.innerHTML = "женщина";
                        }
                       
                       
                        property.title =  property.innerHTML ;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[y] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
        
                     
                    } else {
                      
                        property.innerHTML = this.listData.array[x][key];
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[y] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                    }
            
                    elem.appendChild(property);
                    y++;
                
                
                   
              
                }
                elem.addEventListener("click", ()  => {
                    if(this.mode == 1) {
                     
                        if( !elem.classList.contains("selected")) { 
                            if(this.selectedEdit != 0) {
                                this.selectedEdit.classList.remove("selected");
                             
                            }
                    
                            elem.classList.add("selected");
                            this.selectedEdit = elem;
        
                            lastnameInput.value = elem.childNodes[1].innerHTML;
                            nameInput.value =  elem.childNodes[2].innerHTML;
                            surnameInput.value =  elem.childNodes[3].innerHTML;
                            dateInput.value =  elem.childNodes[4].innerHTML;
                            if( elem.childNodes[5].innerHTML =="мужчина") {
                                maleSelect[0].classList.add("selected");
                                femaleSelect[0].classList.remove("selected");
        
                            } else {
                                maleSelect[0].classList.remove("selected");
                                femaleSelect[0].classList.add("selected");
        
                            }
                             
                             
                           
                        } else {
                            this.selectedEdit.classList.remove("selected");
                          
                            this.selectedEdit = "";
                            lastnameInput.value = "";
                            nameInput.value =  "";
                            surnameInput.value = "";
                            dateInput.value =  "";
                            
                        }
                        
                    } else if (this.mode == 2) {
                        if(!elem.className.includes("del")) {
                            this.selectedDel.push(elem);
                            elem.classList.add('del');
                        } else {
                            
                            for(let y=0; y< this.selectedDel.length;y++) {
                                if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                    this.selectedDel.splice(y,1);
                                    break;
                                }
        
                            }
                            elem.classList.remove('del');
                        }
                       
                        
                    }
                })
              this.contain.appendChild(elem);
               
            }
           
        }
    }
    if( this.contain.childNodes.length ==0) {
        clientStatus.innerHTML = "Такого клиента не найдено"; 
    } else {
        clientStatus.innerHTML = "Найдено " +   this.contain.childNodes.length + " возможных клиентов"; 
    }
           
                


    
}

checkElem() {
     
    let filledInp = 0;
    let lastname=lastnameInput.value.trim().toLowerCase();
  
    let name = nameInput.value.trim().toLowerCase();
   
    let surname = surnameInput.value.trim().toLowerCase();
   
    let date = dateInput.value;
    let gender = "";

    if(maleSelect[0].classList.contains("selected")) {
        gender = "1";
        filledInp++;
    } else if(femaleSelect[0].classList.contains("selected")) {
        gender = "0";
        filledInp++;
    }
    if(lastname != "") {
        lastname =  lastname[0].toUpperCase() + lastname.slice(1);
        filledInp++;
    
    }
    if(name != "") {
        filledInp++;
        name =  name[0].toUpperCase() + name.slice(1);
    
    }
    if(surname!= "") {
        filledInp++;
        surname =  surname[0].toUpperCase() + surname.slice(1);
    
    }
    if(date != "") {
        filledInp++;
    
    }
    
    if(filledInp==5) {
        for(let x=1;x<this.listData.array.length;x++) {
            if(lastname==this.listData.array[x].F && name==this.listData.array[x].I && surname==this.listData.array[x].O && date==this.listData.array[x].birthDate && gender==this.listData.array[x].gender) {
              
                return true;
            
            }
           
        }
        
    }  else {
        return true;
    }
                
    return false;          


    
}

createElem() {
    if (this.checkElem() == false) {
        let lastname=lastnameInput.value.trim().toLowerCase();
      
        let name = nameInput.value.trim().toLowerCase();
       
        let surname = surnameInput.value.trim().toLowerCase();
       
        let date = dateInput.value;
       
        
            lastname =  lastname[0].toUpperCase() + lastname.slice(1);
        
            name =  name[0].toUpperCase() + name.slice(1);
        
      
            surname =  surname[0].toUpperCase() + surname.slice(1);
         
    let gender = "";

    if(maleSelect[0].classList.contains("selected")) {
        gender = "1";
    
    } else if(femaleSelect[0].classList.contains("selected")) {
        gender = "0";
    }

        
     
            clientData.lastCode=(Number(clientData.lastCode) +1).toString();
            let obj = {
                code: clientData.lastCode,
          F: lastname,
          I: name ,
          O: surname,
          birthDate: date,
          gender: gender,
          orders: "0"
            }
            clientData.array.push(obj);
            window.electron.writeSalon(this.filename, this.listData);
           this.generateList();
           clientStatus.innerHTML = "Новый клиент успешно добавлен";
    }
   
}

editData() {
    if( this.selectedEdit != 0 && this.checkElem() == false) {
        let lastname=lastnameInput.value.trim().toLowerCase();
      
        let name = nameInput.value.trim().toLowerCase();
       
        let surname = surnameInput.value.trim().toLowerCase();
       
        let date = dateInput.value;
        let gender = "";

    if(maleSelect[0].classList.contains("selected")) {
        gender = "1";
    
    } else if(femaleSelect[0].classList.contains("selected")) {
        gender = "0";
    }

        
            lastname =  lastname[0].toUpperCase() + lastname.slice(1);
        
            name =  name[0].toUpperCase() + name.slice(1);
        
      
            surname =  surname[0].toUpperCase() + surname.slice(1);
        
          
            let adddress = findFromCode(this.selectedEdit.firstChild.innerHTML,this.listData.array,0,this.listData.array.length-1);
            this.listData.array[adddress].F = lastname;
            this.listData.array[adddress].I = name; 
            this.listData.array[adddress].O = surname;
            
            this.listData.array[adddress].birthDate = date;
            this.listData.array[adddress].gender = gender;
            this.selectedEdit.childNodes[1].innerHTML = lastname;
            this.selectedEdit.childNodes[2].innerHTML = name;
            this.selectedEdit.childNodes[3].innerHTML = surname;
            this.selectedEdit.childNodes[4].innerHTML = date;
            this.selectedEdit.childNodes[5].innerHTML = gender=="1" ? "мужчина" : "женщина";

            window.electron.writeSalon(this.filename,this.listData);
            this.selectedEdit.classList.remove("selected");
            clientStatus.innerHTML = "Данные клиента успешно отредактированы";
        }     
       
        lastnameInput.value = "";
        nameInput.value =  "";
        surnameInput.value = "";
        dateInput.value =  "";

}

deleteElem(status) {
   
    for(let x = 0; x<this.selectedDel.length;x++) {
        this.listData.array.splice(findFromCode(this.selectedDel[x].childNodes[0].innerHTML, this.listData.array,0, this.contain.childNodes.length-1), 1);
        this.contain.childNodes[findFromDiv(this.selectedDel[x].childNodes[0].innerHTML, this.contain.childNodes,0, this.contain.childNodes.length-1)].remove();
        this.i--;
    }


   
  
    window.electron.writeSalon(this.filename, this.listData);
  

    this.generateList();
    

    this.selectedDel = []
   status.innerHTML = "Удаление прошло успешно";
}

 
}

class listWithLinks extends DynamicList {
    
    selectedClientCode = 0;
    selectedHaircutCode  = 0;
    generateList() {
        for(let p=0; p<10;p++) {
        if(this.i<this.listData.array.length) {
            
            let elem = document.createElement("div");
            elem.className = "listElem outshape";
            let property;
                property = document.createElement("div");
                property.innerHTML = this.listData.array[this.i].code;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[0] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                property = document.createElement("div");
                
                property.innerHTML = clientData.array[findFromCode(this.listData.array[this.i].clientCode,clientData.array,0,clientData.array.length-1)].F;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[1] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                
                property = document.createElement("div");
                property.innerHTML = clientData.array[findFromCode(this.listData.array[this.i].clientCode,clientData.array,0,clientData.array.length-1)].I;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[2] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                
                property = document.createElement("div");
                property.innerHTML = clientData.array[findFromCode(this.listData.array[this.i].clientCode,clientData.array,0,clientData.array.length-1)].O;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[3] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                
                property = document.createElement("div");
                property.innerHTML = clientData.array[findFromCode(this.listData.array[this.i].clientCode,clientData.array,0,clientData.array.length-1)].birthDate;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[4] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);
              
                
                 property = document.createElement("div");
                property.innerHTML = haircutData.array[findFromCode(this.listData.array[this.i].haircutCode,haircutData.array,0,haircutData.array.length-1)].name;
                 property.title =  property.innerHTML;
                 property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[5] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                 elem.appendChild(property);
             
                property = document.createElement("div");
                property.innerHTML = this.listData.array[this.i].date;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[6] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                property = document.createElement("div");
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[7] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                if(this.listData.array[this.i].dis == 1 ) {
                    property.innerHTML = "% " + this.listData.array[this.i].cost  + "руб";
                   
               

                } else {
                    property.innerHTML = this.listData.array[this.i].cost + "руб";

                }
               
                property.title =  property.innerHTML;
               
            
                elem.appendChild(property);
                elem.addEventListener("click", ()  => {
                    if(this.mode == 1) {
                     
                        if( !elem.classList.contains("selected")) { 
                            if(this.selectedEdit != 0) {
                                this.selectedEdit.classList.remove("selected");
                             
                            }
                    
                            elem.classList.add("selected");
                            this.selectedEdit = elem;
        
                            lastnameInputO.value = elem.childNodes[1].innerHTML;
                            nameInputO.value =  elem.childNodes[2].innerHTML;
                            surnameInputO.value =  elem.childNodes[3].innerHTML;
                            dateInputO.value =  elem.childNodes[6].innerHTML;
                            haircut.value =  elem.childNodes[5].innerHTML;
                   
                             
                           
                        } else {
                            this.selectedEdit.classList.remove("selected");
                          
                            this.selectedEdit = "";
                            lastnameInputO.value = "";
                            nameInputO.value =  "";
                            surnameInputO.value = "";
                            dateInputO.value =  "";
                            haircut.value = "";
                        }
                        
                    } else if (this.mode == 2) {
                        if(!elem.className.includes("del")) {
                            this.selectedDel.push(elem);
                            elem.classList.add('del');
                        } else {
                            
                            for(let y=0; y< this.selectedDel.length;y++) {
                                if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                    this.selectedDel.splice(y,1);
                                    break;
                                }
        
                            }
                            elem.classList.remove('del');
                        }
                       
                        
                    }
                })
              this.contain.appendChild(elem);
            this.i++;
        }
    
        }
     
           
         
    }
        searchList() {
            this.searched =1;
            let filledInp = 0;
            let lastname= lastnameInputO.value.trim().toLowerCase();
          
            let name = nameInputO.value.trim().toLowerCase();
           
            let surname = surnameInputO.value.trim().toLowerCase();
            
            let hair = haircut.value.trim().toLowerCase();

            let date = dateInputO.value;
            let gender = "";

            if(maleSelect[2].classList.contains("selected")) {
                filledInp++;
                gender = "1";
            
            } else if(femaleSelect[2].classList.contains("selected")) {
                filledInp++;
                gender = "0";
            }
           
            if(lastname != "") {
                lastname =  lastname[0].toUpperCase() + lastname.slice(1);
                filledInp++;
            
            }
            if(name != "") {
                filledInp++;
                name = name[0].toUpperCase() + name.slice(1);
            
            }
            if(surname!= "") {
                filledInp++;
                surname =  surname[0].toUpperCase() + surname.slice(1);
            
                
            }
            if(hair != "") {
                filledInp++;
                hair =  hair[0].toUpperCase() + hair.slice(1);
            }
            if(date != "") {
                filledInp++;

            
            }
            
            if(filledInp==6) {
                this.contain.innerHTML = "";
                for(let x=0;x<this.listData.array.length;x++) {
                    if(lastname== clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].F && name==clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].I  && surname== clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].O && hair==haircutData.array[findFromCode(this.listData.array[x].haircutCode,haircutData.array,0,haircutData.array.length-1)].name && date==this.listData.array[x].date && gender==clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].gender) {
                      
                let elem = document.createElement("div");
                elem.className = "listElem outshape";
                let property;
                property = document.createElement("div");
                property.innerHTML = this.listData.array[x].code;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[0] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                property = document.createElement("div");
                
                property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].F;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[1] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                
                property = document.createElement("div");
                property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].I;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[2] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                
                property = document.createElement("div");
                property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].O;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[3] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                
                property = document.createElement("div");
                property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].birthDate;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[4] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);
              
                
                 property = document.createElement("div");
                property.innerHTML = haircutData.array[findFromCode(this.listData.array[x].haircutCode,haircutData.array,0,haircutData.array.length-1)].name;
                 property.title =  property.innerHTML;
                 property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[5] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                 elem.appendChild(property);
             
                property = document.createElement("div");
                property.innerHTML = this.listData.array[x].date;
                property.title =  property.innerHTML;
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[6] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
            
                elem.appendChild(property);

                property = document.createElement("div");
                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[7] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                if(this.listData.array[x].dis == 1 ) {
                    property.innerHTML = "% " + this.listData.array[x].cost  + "руб";
                    

                } else {
                    property.innerHTML = this.listData.array[x].cost + "руб";

                }
               
                property.title =  property.innerHTML;
               
            
                elem.appendChild(property);

                elem.addEventListener("click", ()  => {
                    if(this.mode == 1) {
                     
                        if( !elem.classList.contains("selected")) { 
                            if(this.selectedEdit != 0) {
                                this.selectedEdit.classList.remove("selected");
                             
                            }
                    
                            elem.classList.add("selected");
                            this.selectedEdit = elem;
        
                            lastnameInputO.value = elem.childNodes[1].innerHTML;
                            nameInputO.value =  elem.childNodes[2].innerHTML;
                            surnameInputO.value =  elem.childNodes[3].innerHTML;
                           
                            dateInputO.value =  elem.childNodes[6].innerHTML;
                            haircut.value =  elem.childNodes[5].innerHTML;
                           
                        } else {
                            this.selectedEdit.classList.remove("selected");
                          
                            this.selectedEdit = "";
                            lastnameInputO.value = "";
                            nameInputO.value =  "";
                            surnameInputO.value = "";
                            dateInputO.value =  "";
                            haircut.value = "";
                            
                        }
                        
                    } else if (this.mode == 2) {
                        if(!elem.className.includes("del")) {
                            this.selectedDel.push(elem);
                            elem.classList.add('del');
                        } else {
                            
                            for(let y=0; y< this.selectedDel.length;y++) {
                                if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                    this.selectedDel.splice(y,1);
                                    break;
                                }
        
                            }
                            elem.classList.remove('del');
                        }
                       
                        
                    }
                })
                        
                      this.contain.appendChild(elem);
                       break;
                    }
                   
                }
        
            } else if(filledInp != 0) {
              
                this.contain.innerHTML = "";

                for(let x=0;x<this.listData.array.length;x++) {
                   
                    if((lastname== clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].F  || lastname=="") && (name== clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].I || name=="")  && ( surname==clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].O ||   surname=="") && ( hair==haircutData.array[findFromCode(this.listData.array[x].haircutCode,haircutData.array,0,haircutData.array.length-1)].name  ||  hair=="") && ( date == this.listData.array[x].date  ||  date == "" )  &&( gender==clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].gender || gender=="")) {
                 
                        let elem = document.createElement("div");
                        elem.className = "listElem outshape";
                        let property;

                        property = document.createElement("div"); 
                        property.innerHTML = this.listData.array[x].code;
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[0] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                        elem.appendChild(property);
        
                        property = document.createElement("div");
                        
                        property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].F;
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[1] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                        elem.appendChild(property);
        
                        
                        property = document.createElement("div");
                        property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].I;
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[2] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                        elem.appendChild(property);
        
                        
                        property = document.createElement("div");
                        property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].O;
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[3] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                        elem.appendChild(property);
        
                        
                        property = document.createElement("div");
                        property.innerHTML = clientData.array[findFromCode(this.listData.array[x].clientCode,clientData.array,0,clientData.array.length-1)].birthDate;
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[4] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                        elem.appendChild(property);
                      
                        
                         property = document.createElement("div");
                        property.innerHTML = haircutData.array[findFromCode(this.listData.array[x].haircutCode,haircutData.array,0,haircutData.array.length-1)].name;
                         property.title =  property.innerHTML;
                         property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[5] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                         elem.appendChild(property);
                     
                        property = document.createElement("div");
                        property.innerHTML = this.listData.array[x].date;
                        property.title =  property.innerHTML;
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[6] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                    
                        elem.appendChild(property);
        
                        property = document.createElement("div");
                        property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[7] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                        if(this.listData.array[x].dis == 1 ) {
                            property.innerHTML = "% " + this.listData.array[x].cost  + "руб";
        
                        } else {
                            property.innerHTML = this.listData.array[x].cost + "руб";
        
                        }
                       
                        property.title =  property.innerHTML;
                       
                    
                        elem.appendChild(property);
        
                        elem.addEventListener("click", ()  => {
                            if(this.mode == 1) {
                             
                                if( !elem.classList.contains("selected")) { 
                                    if(this.selectedEdit != 0) {
                                        this.selectedEdit.classList.remove("selected");
                                     
                                    }
                            
                                    elem.classList.add("selected");
                                    this.selectedEdit = elem;
                
                                    lastnameInputO.value = elem.childNodes[1].innerHTML;
                                    nameInputO.value =  elem.childNodes[2].innerHTML;
                                    surnameInputO.value =  elem.childNodes[3].innerHTML;
                                 
                                    dateInputO.value = elem.childNodes[6].innerHTML ;
                                    
                                    haircut.value = elem.childNodes[5].innerHTML;
                                   
                                } else {
                                    this.selectedEdit.classList.remove("selected");
                                  
                                    this.selectedEdit = "";
                                    lastnameInputO.value = "";
                                    nameInputO.value =  "";
                                    surnameInputO.value = "";
                                    dateInputO.value =  "";
                                    haircut.value = "";
                                }
                                
                            } else if (this.mode == 2) {
                                if(!elem.className.includes("del")) {
                                    this.selectedDel.push(elem);
                                    elem.classList.add('del');
                                } else {
                                    
                                    for(let y=0; y< this.selectedDel.length;y++) {
                                        if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                            this.selectedDel.splice(y,1);
                                            break;
                                        }
                
                                    }
                                    elem.classList.remove('del');
                                }
                               
                                
                            }
                        })
                      this.contain.appendChild(elem);
                       
                    }
                   
                }
            }
               
            if( this.contain.childNodes.length ==0) {
               orderStatus.innerHTML = "Такого заказа не найдено"; 
            } else {
               orderStatus.innerHTML = "Найдено " +   this.contain.childNodes.length + " возможных заказов"; 
            }
                          
                    
        
        
            
        }


        checkElem(lastnameInput,nameInput,surnameInput,haircut,birthDateInput,genderSelectorCode,status,edit=0) {
     
            let filledInp = 0;
            let lastname=lastnameInput.value.trim().toLowerCase();
          
            let name = nameInput.value.trim().toLowerCase();
           
            let surname = surnameInput.value.trim().toLowerCase();
           let hair = haircut.value.trim().toLowerCase();
            let date = birthDateInput.value;
            let gender = "";
       
            if(maleSelect[genderSelectorCode].classList.contains("selected")) {
                gender = "1";
                filledInp++;
            } else if(femaleSelect[genderSelectorCode].classList.contains("selected")) {
                gender = "0";
                filledInp++;
            }
        
            if(hair != "") {
                hair =  hair[0].toUpperCase() + hair.slice(1);
                filledInp++;
            } 
            if(lastname != "") {
                lastname =  lastname[0].toUpperCase() + lastname.slice(1);
                filledInp++;
               
     
                
            
            }
            if(name != "") {
                filledInp++;
                name =  name[0].toUpperCase() + name.slice(1);
            
            }
            if(surname!= "") {
                filledInp++;
                surname =  surname[0].toUpperCase() + surname.slice(1);
            
            }
            if(date != "") {
                filledInp++;
               
                
            
            }
            
        
            let existPerson = 0;
            let existHaircut = 0;
            if(filledInp==6) {
                for(let x=0;x<clientData.array.length;x++) {
                    if(lastname== clientData.array[x].F && name==clientData.array[x].I  && surname== clientData.array[x].O  && gender==clientData.array[x].gender  && ( edit==1  || date==clientData.array[x].birthDate)) {
                      existPerson = 1;
                      this.selectedClientCode = clientData.array[x].code;
                      break;
                    }
                   
                }
                for(let x=0;x<haircutData.array.length;x++) {
                    if( hair==haircutData.array[x].name) {
                        existHaircut=1;
                        this.selectedHaircutCode  = haircutData.array[x].code;
                        break;
                    }
                    
                }
             
                if(existPerson==1 && existHaircut ==1) {
                    return true;
    
                } else if (existPerson==1) {
                    status.innerHTML = "Такой прически нет в базе данных";
                    return false;
                } else if (existHaircut==1) {
                    status.innerHTML = "Такого клиента нет в базе данных";
                    return false;
                }
                else {
                status.innerHTML = "Такого клиента и прически нет в базе данных";
                return false;
            }

            }
            status.innerHTML = "Недостаточно данных для действия";
            return false;
        
            
        }

        createElem() {
            if(DateOrderInputCreate.value ==""  ) {
                createStatus.innerHTML = "Недостаточно введенных данных для действия"
            } else {

            
            if (this.checkElem(lastnameInputCreate,nameInputCreate,surnameInputCreate,haircutInputCreate,birthDateInputCreate,3,createStatus)  == true) {

          
               let orderDate = DateOrderInputCreate.value;
               let cost;
              
            
                
             
               let clientAddress =findFromCode(this.selectedClientCode,clientData.array,0,clientData.array.length-1); 
                let dis = 0;
                if(costInputCreate.value == "") {
                    cost = Number(haircutData.array[findFromCode(this.selectedHaircutCode,haircutData.array,0,haircutData.array.length-1) ].cost);
                     if(clientData.array[clientAddress].orders >= 4 ) {
                    dis = 1;
                    cost=  Math.round((cost * 0.97) * 100)/100;
                    
                }
                   
                 } else {
            
                  cost = costInputCreate.value;
                 }
               
                clientData.array[clientAddress].orders++;
                    this.listData.lastCode=(Number(this.listData.lastCode) +1).toString();
                    let obj = {
                        code: this.listData.lastCode,
                  clientCode: this.selectedClientCode,
                  haircutCode: this.selectedHaircutCode ,
                  date: orderDate,
                  cost: cost,
                  dis:  dis,
                    }
                    this.listData.array.push(obj);
                    window.electron.writeSalon("Database/clients.json", clientData);
                    window.electron.writeSalon(this.filename, this.listData);
                  
                   this.generateList();
                   client.i = 1;
                   client.scrollNum = 0;
                    client.contain.innerHTML = "";
                    client.generateList();
                    lastnameInputCreate.value = "";
                    nameInputCreate.value = "";
                    surnameInputCreate.value = "";
                    haircutInputCreate.value = "";
                    birthDateInputCreate.value = "";
                    DateOrderInputCreate.value = "";
                    costInputCreate.value="";
                    createStatus.innerHTML = "Новый заказ успешно создан";
            }
        }
        }
        
        editData() {
            if( this.selectedEdit != 0 && this.checkElem(lastnameInputO,nameInputO,surnameInputO,haircut,dateInputO,2 ,orderStatus,1) == true) {
                let lastname=lastnameInputO.value.trim().toLowerCase();
              
                let name = nameInputO.value.trim().toLowerCase();
               
                let surname = surnameInputO.value.trim().toLowerCase();
               let hair = haircut.value.trim().toLowerCase();
                let date = dateInputO.value;
           
                
            
                
                    lastname =  lastname[0].toUpperCase() + lastname.slice(1);
                
                    name =  name[0].toUpperCase() + name.slice(1);
                
                    hair = hair[0].toUpperCase() + hair.slice(1);
                    surname =  surname[0].toUpperCase() + surname.slice(1);
                
                    
                    if(this.checkElem(lastnameInputO,nameInputO,surnameInputO,haircut,dateInputO,2,orderStatus,1) == true) {

                  
                    let adddress = findFromCode(this.selectedEdit.firstChild.innerHTML,this.listData.array,0,this.listData.array.length-1);
                  
                    clientData.array[findFromCode(this.listData.array[adddress].clientCode,clientData.array,0,clientData.array.length-1)].orders--;
                    clientData.array[findFromCode(this.selectedClientCode,clientData.array,0,clientData.array.length-1)].orders++;



                    this.listData.array[adddress].clientCode = this.selectedClientCode;
                    this.listData.array[adddress].haircutCode = this.selectedHaircutCode;
                    this.listData.array[adddress].date = date;
                  
                    this.selectedEdit.childNodes[1].innerHTML = lastname;
                    this.selectedEdit.childNodes[2].innerHTML = name;
                    this.selectedEdit.childNodes[3].innerHTML = surname;
                    this.selectedEdit.childNodes[4].innerHTML = clientData.array[findFromCode(this.selectedClientCode,clientData.array,0,clientData.array.length-1)].birthDate;
                    this.selectedEdit.childNodes[5].innerHTML = hair;
                    this.selectedEdit.childNodes[6].innerHTML = date;
                
                   
                    window.electron.writeSalon("Database/clients.json", clientData);
                    window.electron.writeSalon(this.filename, this.listData);
                    client.i = 1;
                    client.scrollNum = 0;
                    client.contain.innerHTML = "";
                    client.generateList();
                    orderStatus.innerHTML = "Заказ успешно отредактирован";
                    }
                    this.selectedEdit.classList.remove("selected");
                }   
                
                
                lastnameInputO.value = "";
                nameInputO.value =  "";
                surnameInputO.value = "";
                haircut.value  ="";
                dateInputO.value =  "";
               
                
        }
        
       
          
}

class HairList extends DynamicList {
    generateList() {
        
        for(let p=0; p<10;p++) {
           if(this.i<this.listData.array.length) {
               
               let elem = document.createElement("div");
               elem.className = "listElem outshape";
               let property;
               let x= 0;
               for (var key in this.listData.array[this.i]) {
                   property = document.createElement("div");
                   if(key=="cost") {
                    property.innerHTML = this.listData.array[this.i][key];
                    property.title =  property.innerHTML;
                    property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: right;';
                
                   }
                  else if(key=="gender") {

                    if(this.listData.array[this.i][key] =="1") {
                        property.innerHTML = "мужчина";
                    } else {
                        property.innerHTML = "женщина";
                    }
                   
                   
                    property.title =  property.innerHTML ;
                    property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                
                     
                   } else {
                    property.innerHTML = this.listData.array[this.i][key];
                    property.title =  property.innerHTML;
                    property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                
                   
                   }
           
                   elem.appendChild(property);
                   
                   
                   
                   x++;
                 
                 }
                 property =document.createElement("div");
                 property.innerHTML = " руб";
                 property.style.cssText =   ' margin-right: 5px; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                   
                 elem.appendChild(property)
                 elem.addEventListener("click", ()  => {
                   if(this.mode == 1) {
                    
                       if( !elem.classList.contains("selected")) { 
                           if(this.selectedEdit != 0) {
                               this.selectedEdit.classList.remove("selected");
                            
                           }
                   
                           elem.classList.add("selected");
                           this.selectedEdit = elem;
                           //this.selectedEdit.style.background ="rgba(190, 190, 190, 0.14)";
                           hairInput.value = elem.childNodes[1].innerHTML;
                           costHair.value =  elem.childNodes[3].innerHTML;
                           if( elem.childNodes[2].innerHTML =="мужчина") {
                            maleSelect[1].classList.add("selected");
                            femaleSelect[1].classList.remove("selected");
    
                        } else {
                            maleSelect[1].classList.remove("selected");
                            femaleSelect[1].classList.add("selected");
                        }
                         
                            
                          
                       } else {
                           this.selectedEdit.classList.remove("selected");
                         
                           this.selectedEdit = "";
                           hairInput.value = elem.childNodes[1].innerHTML;
                           costHair.value =  elem.childNodes[3].innerHTML;
                           
                       }
                       
                   } else if (this.mode == 2) {
                       if(!elem.className.includes("del")) {
                           this.selectedDel.push(elem);
                           elem.classList.add('del');
                       } else {
                           
                           for(let y=0; y< this.selectedDel.length;y++) {
                               if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                   this.selectedDel.splice(y,1);
                                   break;
                               }
       
                           }
                           elem.classList.remove('del');
                       }
                      
                       
                   }
               })
               this.contain.appendChild(elem);
       
               this.i++;
           }
           }
           
          
       }
       
       
       
       
       searchList() {
            this.searched =1;
           let filledInp = 0;
           let hair = hairInput.value.trim().toLowerCase();
         
           let cost = costHair.value.trim();
         
           
           let gender = "";
       
           if(maleSelect[1].classList.contains("selected")) {
               gender = "1";
               filledInp++;
           } else if(femaleSelect[1].classList.contains("selected")) {
               gender = "0";
               filledInp++;
           }
       
            if(hair != "") {
                hair = hair[0].toUpperCase() + hair.slice(1);
               filledInp++;
           
           }
           if( cost != "") {
               filledInp++;
             
           
           }

           if(filledInp==3) {
               this.contain.innerHTML = "";
               for(let x=1;x<this.listData.array.length;x++) {
                   if(hair==this.listData.array[x].name && cost==this.listData.array[x].cost && gender ==this.listData.array[x].gender ) {
                     
                       let elem = document.createElement("div");
                       elem.className = "listElem outshape";
                       let property;
                       let y=0;
                       for (var key in this.listData.array[x]) {
                           property = document.createElement("div");
                           if(key=="cost") {
                            property.innerHTML = this.listData.array[x][key];
                            property.title =  property.innerHTML;
                            property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: right;';
                        
                           }
                          else if(key=="gender") {
        
                            if(this.listData.array[x][key] =="1") {
                                property.innerHTML = "мужчина";
                            } else {
                                property.innerHTML = "женщина";
                            }
                           
                           
                            property.title =  property.innerHTML ;
                            property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                        
                             
                           } else {
                            property.innerHTML = this.listData.array[x][key];
                            property.title =  property.innerHTML;
                            property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                        
                           
                           }
                           elem.appendChild(property);
                           y++;
                       
                       
                          
                     
                       }
                       property =document.createElement("div");
                       property.innerHTML = " руб";
                       property.style.cssText =   ' margin-right: 5px; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                         
                       elem.appendChild(property)
                       elem.addEventListener("click", ()  => {
                        if(this.mode == 1) {
                         
                            if( !elem.classList.contains("selected")) { 
                                if(this.selectedEdit != 0) {
                                    this.selectedEdit.classList.remove("selected");
                                 
                                }
                        
                                elem.classList.add("selected");
                                this.selectedEdit = elem;
            
                                hairInput.value = elem.childNodes[1].innerHTML;
                                costHair.value =  elem.childNodes[3].innerHTML;
                                if( elem.childNodes[2].innerHTML =="мужчина") {
                                 maleSelect[1].classList.add("selected");
                                 femaleSelect[1].classList.remove("selected");
         
                             } else {
                                maleSelect[1].classList.remove("selected");
                                femaleSelect[1].classList.add("selected");
                             }
                               
                            } else {
                                this.selectedEdit.classList.remove("selected");
                              
                                this.selectedEdit = "";
                              
                                hairInput.value = elem.childNodes[1].innerHTML;
                                costHair.value =  elem.childNodes[3].innerHTML;
                                
                            }
                            
                        } else if (this.mode == 2) {
                            if(!elem.className.includes("del")) {
                                this.selectedDel.push(elem);
                                elem.classList.add('del');
                            } else {
                                
                                for(let y=0; y< this.selectedDel.length;y++) {
                                    if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                        this.selectedDel.splice(y,1);
                                        break;
                                    }
            
                                }
                                elem.classList.remove('del');
                            }
                           
                            
                        }
                    }) 
                     this.contain.appendChild(elem);
                      break;
                   }
                  
               }
       
           } else if(filledInp != 0) {
               this.contain.innerHTML = "";
               
               for(let x=1;x<this.listData.array.length;x++) {
                   if((hair==this.listData.array[x].name || hair=="") && (cost==this.listData.array[x].cost  || cost=="") && (gender ==this.listData.array[x].gender || gender=="")) {
                     
                       let elem = document.createElement("div");
                       elem.className = "listElem outshape";
                       let property;
                   
                      let y=0;
                       for (var key in this.listData.array[x]) {
                         
                               property = document.createElement("div");
                               if(key=="cost") {
                                property.innerHTML = this.listData.array[x][key];
                                property.title =  property.innerHTML;
                                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; text-align: right;';
                            
                               }
                              else if(key=="gender") {
            
                                if(this.listData.array[x][key] =="1") {
                                    property.innerHTML = "мужчина";
                                } else {
                                    property.innerHTML = "женщина";
                                }
                               
                               
                                property.title =  property.innerHTML ;
                                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                            
                                 
                               } else {
                                property.innerHTML = this.listData.array[x][key];
                                property.title =  property.innerHTML;
                                property.style.cssText =   ' margin-right: 5px; width:' + this.lengths[x] + '%; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                            
                               
                               }
                         
                           elem.appendChild(property);
                           y++;
                       
                       
                          
                     
                       }
                       property =document.createElement("div");
                       property.innerHTML = " руб";
                       property.style.cssText =   ' margin-right: 5px; display: inline-block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;';
                         
                       elem.appendChild(property)
                       elem.addEventListener("click", ()  => {
                           if(this.mode == 1) {
                            
                               if( !elem.classList.contains("selected")) { 
                                   if(this.selectedEdit != 0) {
                                       this.selectedEdit.classList.remove("selected");
                                    
                                   }
                           
                                   elem.classList.add("selected");
                                   this.selectedEdit = elem;
               
                                   hairInput.value = elem.childNodes[1].innerHTML;
                                   costHair.value =  elem.childNodes[3].innerHTML;
                                   if( elem.childNodes[2].innerHTML =="мужчина") {
                                    maleSelect[1].classList.add("selected");
                                    maleSelect[1].classList.remove("selected");
            
                                } else {
                                    maleSelect[1].classList.remove("selected");
                                    femaleSelect[1].classList.add("selected");
                                 }
                                    
                                  
                               } else {
                                   this.selectedEdit.classList.remove("selected");
                                 
                                   this.selectedEdit = "";
                                 
                                   hairInput.value = elem.childNodes[1].innerHTML;
                                   costHair.value =  elem.childNodes[3].innerHTML;
                                   
                               }
                               
                           } else if (this.mode == 2) {
                               if(!elem.className.includes("del")) {
                                   this.selectedDel.push(elem);
                                   elem.classList.add('del');
                               } else {
                                   
                                   for(let y=0; y< this.selectedDel.length;y++) {
                                       if(elem.firstChild.innerHTML ==  this.selectedDel[y].firstChild.innerHTML) {
                                           this.selectedDel.splice(y,1);
                                           break;
                                       }
               
                                   }
                                   elem.classList.remove('del');
                               }
                              
                               
                           }
                       })
                     this.contain.appendChild(elem);
                      
                   }
                  
               }
           }
           if( this.contain.childNodes.length ==0) {
               hairStatus.innerHTML = "Такого услуги не найдено"; 
           } else {
               hairStatus.innerHTML = "Найдено " +   this.contain.childNodes.length + " возможных услуг"; 
           }
                  
                       
       
       
           
       }
       
       checkElem(without =0) {
            
           let filledInp = 0;
           let hair= hairInput.value.trim().toLowerCase();
         
           let cost = costHair.value.trim();
          
           let gender = "";
       
           if(maleSelect[1].classList.contains("selected")) {
               gender = "1";
               filledInp++;
           } else if(femaleSelect[1].classList.contains("selected")) {
               gender = "0";
               filledInp++;
           }
           if(hair != "") {
               hair = hair[0].toUpperCase() + hair.slice(1);
               filledInp++;
           
           }
           if(cost != "") {
               filledInp++;
    
           
           }
          
           
           if(filledInp==3) {
               for(let x=1;x<this.listData.array.length;x++) {
                   if(hair==this.listData.array[x].name && without.childNodes[1].innerHTML != hair ) {
                     
                       return true;
                   
                   }
                  
               }
               
           }  else {
               return true;
           }
                       
           return false;          
       
       
           
       }
       
       createElem() {
           if (this.checkElem() == false) {
            let hair= hairInput.value.trim().toLowerCase();
         
            let cost = costHair.value.trim(); 
            hair = hair[0].toUpperCase() + hair.slice(1);
    
              
               
                
                
           let gender = "";
       
           if(maleSelect[1].classList.contains("selected")) {
               gender = "1";
           
           } else if(femaleSelect[1].classList.contains("selected")) {
               gender = "0";
           }
  
               
            
                   this.listData.lastCode=(Number(this.listData.lastCode) +1).toString();
                   let obj = {
                       code: this.listData.lastCode,
                 name: hair,
                 gender: gender,
                 cost: cost 
                   }
                   this.listData.array.push(obj);
                  window.electron.writeSalon(this.filename, this.listData);
                  this.generateList();
                  hairStatus.innerHTML = "Новая услуга успешно добавлена";
           }
          
       }
       
       editData() {
   
           if( this.selectedEdit != 0 && this.checkElem(this.selectedEdit) == false) {
            let hair= hairInput.value.trim().toLowerCase();
         
            let cost = costHair.value.trim(); 
            hair = hair[0].toUpperCase() + hair.slice(1);
    
            let gender = "";
       
           if(maleSelect[1].classList.contains("selected")) {
               gender = "1";
           
           } else if(femaleSelect[1].classList.contains("selected")) {
               gender = "0";
           }
       
               
                 
                   let adddress = findFromCode(this.selectedEdit.firstChild.innerHTML,this.listData.array,0,this.listData.array.length-1);
                   this.listData.array[adddress].name = hair;
                   this.listData.array[adddress].cost = cost;
                   this.listData.array[adddress].gender = gender;
                   this.selectedEdit.childNodes[1].innerHTML = hair;
                   this.selectedEdit.childNodes[2].innerHTML = gender=="1" ? "мужчина" : "женщина";
                    this.selectedEdit.childNodes[3].innerHTML = cost;
                   window.electron.writeSalon(this.filename,this.listData);
                   this.selectedEdit.classList.remove("selected");
                   hairStatus.innerHTML = "Данные услуги успешно отредактированы";
               }     
              
               hairInput.value = "";
               costHair.value = "";
       }
}


let client;
let order;
let hair;



let generatedClient=0;
clientBtn.addEventListener("click", () => {
    clientNum.innerHTML = "Всего: " + (clientData.array.length-1).toString() + " клиентов";
    if(generatedClient == 0) {
        client= new DynamicList(clientData,clientList,[10,15,15,18,13,10,13], "Database/clients.json");
        client.generateList();
        generatedClient=1;
    } 
    mainMenu.style.display = "none";

    clientSection.style.display = "block";
})

let generatedOrder=0;
OrderBtn.addEventListener("click", () => {
    orderNum.innerHTML = "Всего: " + (OrdersData.array.length -1).toString()+ " заказов";
    if(generatedOrder == 0) {
        order= new listWithLinks(OrdersData,orderList,[10,10,10,15,12,10,12,15], "Database/orders.json");
        order.generateList();
        generatedOrder = 1;
    }
    if(generatedClient == 0) {
        client= new DynamicList(clientData,clientList,[10,15,15,18,13,10,13], "Database/clients.json");
        client.generateList();
        generatedClient=1;
    } 
    mainMenu.style.display = "none";
    orderSection.style.display = "block";
})

let generatedHair=0;
hairBtn.addEventListener("click", () => {
    hairNum.innerHTML = "Всего: " + (haircutData.array.length-1).toString() + " услуг";
    if(generatedHair == 0) {
        
        hair= new HairList(haircutData,hairList,[10,20,20,15], "Database/haircuts.json");
        hair.generateList();
        generatedHair = 1;
    }
    mainMenu.style.display = "none";
    hairSection.style.display = "block";
})



CreateBtn.addEventListener("click", () => {
    mainMenu.style.display = "none";

    createStatus.innerHTML = "";
    createSection.style.display = "block";
    
    
})



clientList.addEventListener('scroll', function() {
    if( client.searched != 1) {
       
        if( Math.ceil(this.scrollTop/100) >client.scrollNum  ) {
            client.scrollNum = Math.ceil(this.scrollTop/100);
       
            client.generateList();
           
        }
       }
      })
      



hairList.addEventListener('scroll', function() {
if( hair.searched != 1) {
   
    if( Math.ceil(this.scrollTop/100) >hair.scrollNum  ) {
        hair.scrollNum = Math.ceil(this.scrollTop/100);
   
        hair.generateList();
       
    }
   }
  })
  
  orderList.addEventListener('scroll', function() {
    if(order.searched !=1) {
    
        if( Math.ceil(this.scrollTop/100) >order.scrollNum  ) {
            order.scrollNum = Math.ceil(this.scrollTop/100);
            order.generateList();
           
        }
       }
      })
      

searchBtn.addEventListener("click",()=> {
    client.mode = 3;
    
    searchClient.firstChild.className = "search-img";
    searchSection.style.display = "block";

    bar[0].style.display = "none";
    clientList.style.height = "235px";
    clientName.innerHTML = "Поиск клиента";
    searchArticle.innerHTML = "Введите данные клиента";
});
addBtn.addEventListener("click",()=> {
    client.mode = 4;
    
    searchClient.firstChild.className = "add-img";
    searchSection.style.display = "block";
    bar[0].style.display = "none";
    clientList.style.height = "235px";
    clientName.innerHTML = "Добавление клиента";
    searchArticle.innerHTML = "Введите данные нового клиента";
});

let delElemBtn = document.createElement('div');
delElemBtn.className = "outshape roundBtn";
let imgDel = document.createElement("div");
delElemBtn.style.position = "absolute";
delElemBtn.style.right = "0px";
delElemBtn.style.bottom = "10px";
delElemBtn.appendChild(imgDel);

editBtn.addEventListener("click",()=> {
    searchSection.appendChild(delElemBtn); 

    imgDel.className = "edit-img";
    client.mode = 1;
    bar[0].style.display = "none";
    searchClient.firstChild.className = "search-img";
    searchSection.style.display = "block";
   
    clientList.style.height = "235px";
    clientName.innerHTML = "Изменение данных клиента";
    searchArticle.innerHTML = "Выберите из списка или используйте поиск";
  
   
});




delBtn.addEventListener("click",()=> {
    searchSection.appendChild(delElemBtn);
 
    imgDel.className = "del-img"; 
    searchClient.firstChild.className = "search-img";
    searchSection.style.display = "block";
    bar[0].style.display = "none";
    clientList.style.height = "235px";
    clientName.innerHTML = "Удаление клиентов";
    searchArticle.innerHTML = "Введите данные клиента";
    client.mode = 2;
});

delElemBtn.addEventListener("click", () => {
    if(client.mode ==1) {
        client.editData();
    } else if(client.mode==2) {
        client.deleteElem(clientStatus);
    }
    
    
    
});



searchBack.addEventListener("click",()=> {
    if(client.mode  ==1) {
        if(client.selectedEdit != 0) {
            client.selectedEdit.classList.remove("selected");
            client.selectedEdit = 0;
        }
    
    }  else if(client.mode  ==2) {
        for(let i=0;i<client.selectedDel.length;i++) {
            client.selectedDel[i].classList.remove("del");
            
        }
        client.selectedDel = [];
    } if(client.searched ==1) {
        client.searched =0;
        client.i = 1;
        client.scrollNum = 0;
        client.contain.innerHTML ="";
    
        client.generateList();
    }
    clientStatus.innerHTML = ""; 
    lastnameInput.value = "";
            nameInput.value =  "";
            surnameInput.value = "";
            dateInput.value =  "";
    searchSection.style.display = "none";
    delElemBtn.remove(); 
    maleSelect[1].classList.remove("selected");
    femaleSelect[1].classList.remove("selected");
    clientNum.innerHTML = "Всего: " + (clientData.array.length-1).toString() + " клиентов";
    bar[0].style.display = "flex";
    
  
    clientList.style.height = "394px";
    clientName.innerHTML = "Клиенты";
    client.mode = 0;
    
});

searchClient.addEventListener("click",()=> {
   if(client.mode ==4) {
    client.createElem();
   }
 else if(client.mode ==3) {
   
    client.searchList();
   
 }
  else if(client.mode ==2) {
    
    client.searchList();
 }
 else if(client.mode ==1) {
   
    client.selectedEdit =0;
 
    client.searchList();
 }
   
  
});














 searchBtnOrder.addEventListener("click",()=> {
    order.mode = 3;
    bar[2].style.display = "none";
    searchOrders.firstChild.className = "search-img";
    searchSectionOrder.style.display = "block";

    orderList.style.height = "235px";
    orderName.innerHTML = "Поиск заказа";
    searchArticleOrder.innerHTML = "Введите данные заказа";
});



let delElemBtnOrder = document.createElement('div');
delElemBtnOrder.className = "outshape roundBtn";
let imgDelOrder = document.createElement("div");
delElemBtnOrder.style.position = "absolute";
delElemBtnOrder.style.right = "0px";
delElemBtnOrder.style.bottom = "10px";
delElemBtnOrder.appendChild(imgDelOrder);

editBtnOrder.addEventListener("click",()=> {
    searchSectionOrder.appendChild(delElemBtnOrder); 
    imgDelOrder.className = "edit-img";
    order.mode = 1;
 
    searchOrders.firstChild.className = "search-img";
    searchSectionOrder.style.display = "block";
    bar[2].style.display = "none";
    orderList.style.height = "235px";
    orderName.innerHTML = "Изменение данных заказа";
    searchArticleOrder.innerHTML = "Выберите из списка или используйте поиск";
  
   
});




delBtnOrder.addEventListener("click",()=> {
    searchSectionOrder.appendChild(delElemBtnOrder);
   
    imgDelOrder.className = "del-img"; 
    searchOrders.firstChild.className = "search-img";
    searchSectionOrder.style.display = "block";
    bar[2].style.display = "none";
    orderList.style.height = "235px";
    orderName.innerHTML = "Удаление заказов"
    searchArticleOrder.innerHTML = "Введите данные заказа";
    order.mode = 2;
});

delElemBtnOrder.addEventListener("click", () => {
    if(order.mode ==1) {
        order.editData();
    } else if(order.mode==2) {
        order.deleteElem(orderStatus);
    }
    
    
    
});



searchBackOrder.addEventListener("click",()=> {
    if(order.mode  ==1) {
        if(order.selectedEdit != 0) {
            order.selectedEdit.classList.remove("selected");
            order.selectedEdit = 0;
        }
    
    }  else if(order.mode  ==2) {
        for(let i=0;i<order.selectedDel.length;i++) {
            order.selectedDel[i].classList.remove("del");
            
        }
        order.selectedDel = [];
    }
  
     if(order.searched == 1) {
        order.searched =0;
        order.i = 0;
        order.scrollNum = 0;
        order.contain.innerHTML ="";
    
        order.generateList();
    }
    orderStatus.innerHTML = ""; 
    lastnameInputO.value = "";
            nameInputO.value =  "";
            surnameInputO.value = "";
            dateInputO.value =  "";
    searchSectionOrder.style.display = "none";
    delElemBtnOrder.remove(); 
    orderNum.innerHTML = "Всего: " +(OrdersData.array.length -1).toString()+ " заказов";
    bar[2].style.display = "flex";
    orderList.style.height = "394px";
    orderName.innerHTML = "История заказов";
    order.mode = 0;
    
});

searchOrders.addEventListener("click",()=> {
   if(order.mode ==3) {
   
    order.searchList();
   
 }
  else if(order.mode ==2) {
    
    order.searchList();
 }
 else if(order.mode ==1) {
   
    order.selectedEdit =0;
 
    order.searchList();
 }
   
  
});













 searchBtnHair.addEventListener("click",()=> {
    hair.mode = 3;
    bar[1].style.display = "none";
    
    searchHair.firstChild.className = "search-img";
    searchSectionHair.style.display = "block";
   
    hairList.style.height = "235px";
    hairName.innerHTML = "Поиск услуги";
    searchArticleHair.innerHTML = "Введите данные услуги";
});



let delElemBtnHair = document.createElement('div');
delElemBtnHair.className = "outshape roundBtn";
let imgDelHair = document.createElement("div");
delElemBtnHair.style.position = "absolute";
delElemBtnHair.style.right = "0px";
delElemBtnHair.style.bottom = "10px";
delElemBtnHair.appendChild(imgDelHair);

editBtnHair.addEventListener("click",()=> {
    searchSectionHair.appendChild(delElemBtnHair); 
    imgDelHair.className = "edit-img";
    hair.mode = 1;
   
    searchHair.firstChild.className = "search-img";
    searchSectionHair.style.display = "block";
    bar[1].style.display = "none";
    hairList.style.height = "235px";
    hairName.innerHTML = "Изменение данных заказа";
    searchArticleHair.innerHTML = "Выберите из списка или используйте поиск";
  
   
});




delBtnHair.addEventListener("click",()=> {
    searchSectionHair.appendChild(delElemBtnHair);
    
    imgDelHair.className = "del-img"; 
    searchHair.firstChild.className = "search-img";
    searchSectionHair.style.display = "block";
    bar[1].style.display = "none";
    hairList.style.height = "235px";
    hairName.innerHTML = "Удаление заказов";
    searchArticleHair.innerHTML = "Введите данные клиента";
    hair.mode = 2;
});

delElemBtnHair.addEventListener("click", () => {
    if(hair.mode ==1) {
        hair.editData();
    } else if(hair.mode==2) {
       hair.deleteElem(hairStatus);
    }
    
    
    
});



searchBackHair.addEventListener("click",()=> {
    if(hair.mode  ==1) {
        if(hair.selectedEdit != 0) {
            hair.selectedEdit.classList.remove("selected");
            hair.selectedEdit = 0;
        }
    
    }  else if(hair.mode  ==2) {
        for(let i=0;i<hair.selectedDel.length;i++) {
            hair.selectedDel[i].classList.remove("del");
            
        }
        hair.selectedDel = [];
    }

     if(hair.searched == 1) {
        hair.searched =0;
        hair.i = 1;
        hair.scrollNum = 0;
        hair.contain.innerHTML ="";
    
        hair.generateList();
    }
    hairStatus.innerHTML = ""; 
    hairInput.value = "";
    costHair.value = "";
    searchSectionHair.style.display = "none";
    delElemBtnHair.remove(); 
    hairNum.innerHTML = "Всего: " + (haircutData.array.length -1).toString() + " услуг";
    bar[1].style.display = "flex";
    hairList.style.height = "394px";
    hairName.innerHTML = "Услуги";
    hair.mode = 0;
    
});

searchHair.addEventListener("click",()=> {
   if(hair.mode ==4) {
    hair.createElem();
   }
 else if(hair.mode ==3) {
   
    hair.searchList();
   
 }
  else if(hair.mode ==2) {
    
    hair.searchList();
 }
 else if(hair.mode ==1) {
   
    hair.selectedEdit =0;
 
    hair.searchList();
 }
   
  
});

















 addBtnHair.addEventListener("click",()=> {
    hair.mode = 4;

    searchHair.firstChild.className = "add-img";
    searchSectionHair.style.display = "block";
    bar[1].style.display = "none";
    hairList.style.height = "235px";
    hairName.innerHTML = "Добавление услуги";
    searchArticleHair.innerHTML = "Введите данные нового услуги";
});




maleSelect[0].addEventListener("click", ()=> {
    if(!maleSelect[0].classList.contains("selected")) {
       maleSelect[0].classList.add("selected");
       femaleSelect[0].classList.remove("selected");
    }
});

femaleSelect[0].addEventListener("click",()=> {
   if(!femaleSelect[0].classList.contains("selected")) {
       femaleSelect[0].classList.add("selected");
       maleSelect[0].classList.remove("selected");
    }
});


 maleSelect[1].addEventListener("click", ()=> {
     if(!maleSelect[1].classList.contains("selected")) {
        maleSelect[1].classList.add("selected");
        femaleSelect[1].classList.remove("selected");
     }
 });

 femaleSelect[1].addEventListener("click",()=> {
    if(!femaleSelect[1].classList.contains("selected")) {
        femaleSelect[1].classList.add("selected");
        maleSelect[1].classList.remove("selected");
     }
 });

 maleSelect[2].addEventListener("click", ()=> {
    if(!maleSelect[2].classList.contains("selected")) {
       maleSelect[2].classList.add("selected");
       femaleSelect[2].classList.remove("selected");
    }
});

femaleSelect[2].addEventListener("click",()=> {
   if(!femaleSelect[2].classList.contains("selected")) {
       femaleSelect[2].classList.add("selected");
       maleSelect[2].classList.remove("selected");
    }
});

maleSelect[3].addEventListener("click", ()=> {
    if(!maleSelect[3].classList.contains("selected")) {
       maleSelect[3].classList.add("selected");
       femaleSelect[3].classList.remove("selected");
    }
});

femaleSelect[3].addEventListener("click",()=> {
   if(!femaleSelect[3].classList.contains("selected")) {
       femaleSelect[3].classList.add("selected");
       maleSelect[3].classList.remove("selected");
    }
});

createOrder.addEventListener("click", () => {
    if(generatedOrder == 0) {
        order= new listWithLinks(OrdersData,orderList,[10,10,10,15,12,10,12,15], "Database/orders.json");
        order.generateList();
        generatedOrder = 1;
    }

    if(generatedClient == 0) {
        client= new DynamicList(clientData,clientList,[10,15,15,18,13,10,13], "Database/clients.json");
        client.generateList();
        generatedClient=1;
    } 
    order.mode = 4;
    order.createElem();
})

lastnameInputCreate.addEventListener("click", ()=> {
        let curDate =   new Date().toISOString().slice(0, 10);
        DateOrderInputCreate.value = curDate;
    
})




for(let i=0;i<clientBack.length;i++) {
    clientBack[i].addEventListener("click", () => {
        clientBack[i].parentNode.style.display = "none";
        mainMenu.style.display = "block";
        
     
    });
}
    



