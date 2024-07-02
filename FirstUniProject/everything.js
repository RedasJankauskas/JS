class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  isEmpty(){
    return this.size === 0;
  }

  getSize(){
    return this.size;
  }

  addStart(value){
    const tempNode = new Node(value);
    if(this.isEmpty()){
      this.head=tempNode;
      this.tail=tempNode;
    }
    else{
      tempNode.next=this.head;
      this.head=tempNode;
    }
    this.size++;
  }
  addEnd(value){
    const tempNode = new Node(value);
    if(this.isEmpty()){
      this.head=tempNode;
      this.tail=tempNode;
    }
    else{
      this.tail.next=tempNode;
      this.tail=tempNode;
      this.tail.next=null;
    }
    this.size++;
  }
  printlist() {
    if (this.head == null) {
      console.log('Sarasas tuscias');
    } else {
      let curr = this.head;
      while (curr) {
        console.log(curr.value); 
        curr = curr.next;
      }
    }
  }
  insert(index, value){
    const tempNode=new Node(value);
    if(index===this.getSize()){
      this.addEnd(value);
    }
    else if(index===0){
      this.addStart(value);
    }
    else if(index<0 || index>this.getSize()+1){
      console.log('The index given is incorrect.');
    }
    else{
      let pre=this.head;
      for(let i=0;i<index-1;i++){
        pre=pre.next;
      }
      tempNode.next=pre.next;
      pre.next=tempNode;
      this.size++;
    }
  }
  removeindex(index){
    if(index<0 || index>=this.getSize() || this.isEmpty()){
      return null;
    }
    let temp;
    if(index===0){
      if(this.head!=this.tail){
      temp=this.head;
      this.head=this.head.next; 
      this.size--;}
      else{
      temp=this.head;
      this.head=null;
      this.tail=null; 
      this.size--;
      }
    }
    else{
    let prev=this.head;
    for(let i=0;i<index-1;i++){
      prev=prev.next;
    }
    if(prev.next===this.tail){
      this.tail=prev;
      temp=prev.next;
      prev.next=null;
      this.size--;
    }
    else{
      temp=prev.next;
      prev.next=temp.next;
      this.size--;
    }
  }
  }

  removevalue(value) {
    if (this.isEmpty()) {
        return null;
    }

    if(this.head.value === value){
      this.head = this.head.next;
      this.size--;
    }
    else{
      let prev=this.head;
      while(prev.next&&prev.next.value!==value){
        prev=prev.next;
      }
      if(prev.next){
        const removedNode = prev.next;
        prev.next = removedNode.next;
        this.size--;
      }
      return null;
    } 
}


  search(value){
    if(this.isEmpty()){
      return -1;
    }
    else{
      let curr=this.head;
      while(curr){
        if(curr.value === value){
          return curr;
        }
        curr=curr.next;
      }
    }
  }


  }

const pirmadienis_linkedList = new LinkedList();
const antradienis_linkedList = new LinkedList();
const treciadienis_linkedList = new LinkedList();
const ketvirtadienis_linkedList = new LinkedList();
const penktadienis_linkedList = new LinkedList();
const sestadienis_linkedList = new LinkedList();
const sekmadienis_linkedList = new LinkedList();
const visasavaite_linkedList = new LinkedList();

function displayNode(diena,valanda1,valanda2,vardas,pavarde,pratimai){

  const TableElement=document.createElement("div");
    TableElement.classList.add("table-element");

  const IconsContainer=document.createElement("div");
  IconsContainer.classList.add("iconscontainer");

  const EditIcon=document.createElement("img"); //edit
  EditIcon.src="Icons/edit.png";
  EditIcon.classList.add("edit-icon");
  EditIcon.onclick= function(){
    editlist(diena, valanda1, vardas, pavarde, pratimai);
  };

  const RemoveIcon=document.createElement("img"); //remove
  RemoveIcon.src="Icons/close-icon-png.webp";
  RemoveIcon.classList.add("close-icon");
  RemoveIcon.onclick= function(){
    RemoveNode(diena,valanda1);
  };

  IconsContainer.appendChild(EditIcon);
  IconsContainer.appendChild(RemoveIcon);
  TableElement.appendChild(IconsContainer);

  const date=document.createElement("p"); //Diena
  date.classList.add("info");
  date.textContent="Diena: "+diena;

  const time=document.createElement("p"); //Laikas
  time.classList.add("info");
  time.textContent="Laikas: "+valanda1+":00-"+valanda2+":00";

  TableElement.appendChild(date);
  TableElement.appendChild(time);

  const clientinfo=document.createElement("div"); 
  clientinfo.classList.add("info");

  const client=document.createElement("p"); //Klientas
  client.classList.add("info");
  client.innerHTML = "Klientas:<br>{";

  const name=document.createElement("p"); //Vardas
  name.classList.add("info");
  name.textContent="Vardas: "+vardas;

  const surname=document.createElement("p"); //Pavarde
  surname.classList.add("info");
  surname.textContent="Pavarde: "+pavarde;

  const exercises=document.createElement("p"); //Pratimai
  exercises.classList.add("info");
  exercises.textContent="Pratimai: "+pratimai;

  clientinfo.appendChild(client);
  clientinfo.appendChild(name);
  clientinfo.appendChild(surname);
  clientinfo.appendChild(exercises);

  TableElement.appendChild(clientinfo);

  const contentDiv = document.querySelector(".content");
  contentDiv.appendChild(TableElement);


}

  function displayNodes() {
    var currentDay = document.getElementById("daysDropdown");


    if (currentDay.value === "Monday") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Pirmadienis");
      console.log(pirmadienis_linkedList.printlist());
    }

    if (currentDay.value === "Tuesday") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Antradienis");
      console.log(antradienis_linkedList.printlist());
    }

    if (currentDay.value === "Wednesday") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Trečiadienis");
      console.log(treciadienis_linkedList.printlist());
    }

    if (currentDay.value === "Thursday") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Ketvirtadienis");
      console.log(ketvirtadienis_linkedList.printlist());
    }

    if (currentDay.value === "Friday") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Penktadienis");
      console.log(penktadienis_linkedList.printlist());
    }

    if (currentDay.value === "Saturday") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Šeštadienis");
      console.log(sestadienis_linkedList.printlist());
    }

    if (currentDay.value === "Sunday") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Sekmadienis");
      console.log(sekmadienis_linkedList.printlist());
    }
    if (currentDay.value === "WholeWeek") {
      document.querySelector(".content").innerHTML = "";
      console.log("displayNodes function called.");
      displaylinkedlist("Visa savaitė");
      console.log(visasavaite_linkedList.printlist());
    }
  }



  function displaylinkedlist(inputday){
    let current=null;
    if(inputday==="Pirmadienis"){
    current= pirmadienis_linkedList.head;}
    if(inputday==="Antradienis"){
    current= antradienis_linkedList.head;}
    if(inputday==="Trečiadienis"){
    current= treciadienis_linkedList.head;}
    if(inputday==="Ketvirtadienis"){
    current= ketvirtadienis_linkedList.head;}
    if(inputday==="Penktadienis"){
    current= penktadienis_linkedList.head;}
    if(inputday==="Šeštadienis"){
    current= sestadienis_linkedList.head;}
    if(inputday==="Sekmadienis"){
    current= sekmadienis_linkedList.head;}
    if(inputday==="Visa savaitė"){
      current= visasavaite_linkedList.head;}
    while(current){
      displayNode(
        current.value.diena,
        current.value.valanda1,
        current.value.valanda2,
        current.value.vardas,
        current.value.pavarde,
        current.value.pratimai
      );
      current=current.next;
    }
  }

  function CreateWholeWeek(){
    var vardas="Nėra", pavarde="Nėra", pratimai="Nėra";
      for(let i=0;i<7;i++){
        let valanda1=8, valanda2=9;
        for(let j=0;j<8;j++){
          let diena="XXXXXX";
          if(i===0){
          diena="Pirmadienis";
            pirmadienis_linkedList.addEnd({
              diena: diena,
              valanda1: valanda1,
              valanda2: valanda2,
              vardas: vardas,
              pavarde: pavarde,
              pratimai: pratimai
            });
          }

          if(i===1){
            diena="Antradienis";
            antradienis_linkedList.addEnd({
              diena: diena,
              valanda1: valanda1,
              valanda2: valanda2,
              vardas: vardas,
              pavarde: pavarde,
              pratimai: pratimai
            })
          }
          if(i===2){
            diena="Trečiadienis";
            treciadienis_linkedList.addEnd({
              diena: diena,
              valanda1: valanda1,
              valanda2: valanda2,
              vardas: vardas,
              pavarde: pavarde,
              pratimai: pratimai
            })
          }

          if(i===3){
            diena="Ketvirtadienis";
            ketvirtadienis_linkedList.addEnd({
              diena: diena,
              valanda1: valanda1,
              valanda2: valanda2,
              vardas: vardas,
              pavarde: pavarde,
              pratimai: pratimai
            });

          }
          if(i===4){
            diena="Penktadienis";
            penktadienis_linkedList.addEnd({
              diena: diena,
              valanda1: valanda1,
              valanda2: valanda2,
              vardas: vardas,
              pavarde: pavarde,
              pratimai: pratimai
            });

          }
          if(i===5){
            diena="Šeštadienis";
            sestadienis_linkedList.addEnd({
              diena: diena,
              valanda1: valanda1,
              valanda2: valanda2,
              vardas: vardas,
              pavarde: pavarde,
              pratimai: pratimai
            });
          }

          if(i===6){
            diena="Sekmadienis";
            sekmadienis_linkedList.addEnd({
              diena: diena,
              valanda1: valanda1,
              valanda2: valanda2,
              vardas: vardas,
              pavarde: pavarde,
              pratimai: pratimai
            });
          }

          visasavaite_linkedList.addEnd({
            diena: diena,
            valanda1: valanda1,
            valanda2: valanda2,
            vardas: vardas,
            pavarde: pavarde,
            pratimai: pratimai
          });

          valanda1++;
          valanda2++;
        }
      }
      /* visasavaite_linkedList.addEnd(pirmadienis_linkedList);
      visasavaite_linkedList.addEnd(antradienis_linkedList);
      visasavaite_linkedList.addEnd(treciadienis_linkedList);
      visasavaite_linkedList.addEnd(ketvirtadienis_linkedList);
      visasavaite_linkedList.addEnd(penktadienis_linkedList);
      visasavaite_linkedList.addEnd(sestadienis_linkedList);
      visasavaite_linkedList.addEnd(sekmadienis_linkedList); */

  }

  window.onload = function() {
    CreateWholeWeek();
  };

/* function displayWholeWeek() {
    let curr = visasavaite_linkedList.head;
    while (curr) {
      let temp = curr.head;
      while (temp) {
        displayNode(
          temp.value.diena,
          temp.value.valanda1,
          temp.value.valanda2,
          temp.value.vardas,
          temp.value.pavarde,
          temp.value.pratimai
        );
        temp = temp.next;
      }
      curr = curr.next; 
    }
  } */

  function RemoveNode(diena, valanda1) {
    let curr = null;
    if (diena === "Pirmadienis") {
      let curr = pirmadienis_linkedList.head;
      let prev = null;
      var LastNode=pirmadienis_linkedList.tail;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1) {
          if (prev && curr.value.valanda1!==LastNode.value.valanda1) {
            prev.next = curr.next;
          } 
          else if(prev && curr.value.valanda1===LastNode.value.valanda1){
            pirmadienis_linkedList.tail=prev;
            prev.next=null;
          }
          else {
            pirmadienis_linkedList.head = curr.next;
          }
          pirmadienis_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      curr = visasavaite_linkedList.head;
      prev = null;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1 && curr.value.diena===diena) {
          if (prev) {
            prev.next = curr.next;
          } else {
            visasavaite_linkedList.head = curr.next;
          }
          visasavaite_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      document.querySelector(".content").innerHTML = "";
      displaylinkedlist("Pirmadienis");
      console.log(pirmadienis_linkedList.printlist());
    }
    if (diena === "Antradienis") {
      let curr = antradienis_linkedList.head;
      let prev = null;
      var LastNode=antradienis_linkedList.tail;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1) {
          if (prev && curr.value.valanda1!==LastNode.value.valanda1) {
            prev.next = curr.next;
          } 
          else if(prev && curr.value.valanda1===LastNode.value.valanda1){
            antradienis_linkedList.tail=prev;
            prev.next=null;
          }
          else {
            antradienis_linkedList.head = curr.next;
          }
          antradienis_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      curr = visasavaite_linkedList.head;
      prev = null;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1 && curr.value.diena===diena) {
          if (prev) {
            prev.next = curr.next;
          } else {
            visasavaite_linkedList.head = curr.next;
          }
          visasavaite_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      document.querySelector(".content").innerHTML = "";
      displaylinkedlist("Antradienis");
      console.log(antradienis_linkedList.printlist());
    }

    if (diena === "Trečiadienis") {
      let curr = treciadienis_linkedList.head;
      let prev = null;
      var LastNode=treciadienis_linkedList.tail;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1) {
          if (prev && curr.value.valanda1!==LastNode.value.valanda1) {
            prev.next = curr.next;
          } 
          else if(prev && curr.value.valanda1===LastNode.value.valanda1){
            treciadienis_linkedList.tail=prev;
            prev.next=null;
          }
          else {
            treciadienis_linkedList.head = curr.next;
          }
          treciadienis_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      curr = visasavaite_linkedList.head;
      prev = null;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1 && curr.value.diena===diena) {
          if (prev) {
            prev.next = curr.next;
          } else {
            visasavaite_linkedList.head = curr.next;
          }
          visasavaite_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      document.querySelector(".content").innerHTML = "";
      displaylinkedlist("Trečiadienis");
      console.log(treciadienis_linkedList.printlist());
    }
    if (diena === "Ketvirtadienis") {
      let curr = ketvirtadienis_linkedList.head;
      let prev = null;
      var LastNode=ketvirtadienis_linkedList.tail;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1) {
          if (prev && curr.value.valanda1!==LastNode.value.valanda1) {
            prev.next = curr.next;
          } 
          else if(prev && curr.value.valanda1===LastNode.value.valanda1){
            ketvirtadienis_linkedList.tail=prev;
            prev.next=null;
          }
          else {
            ketvirtadienis_linkedList.head = curr.next;
          }
          ketvirtadienis_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      curr = visasavaite_linkedList.head;
      prev = null;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1 && curr.value.diena===diena) {
          if (prev) {
            prev.next = curr.next;
          } else {
            visasavaite_linkedList.head = curr.next;
          }
          visasavaite_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      document.querySelector(".content").innerHTML = "";
      displaylinkedlist("Ketvirtadienis");
      console.log(ketvirtadienis_linkedList.printlist());
    }

    if (diena === "Penktadienis") {
      let curr = penktadienis_linkedList.head;
      let prev = null;
      var LastNode=penktadienis_linkedList.tail;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1) {
          if (prev && curr.value.valanda1!==LastNode.value.valanda1) {
            prev.next = curr.next;
          } 
          else if(prev && curr.value.valanda1===LastNode.value.valanda1){
            penktadienis_linkedList.tail=prev;
            prev.next=null;
          }
          else {
            penktadienis_linkedList.head = curr.next;
          }
          penktadienis_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      curr = visasavaite_linkedList.head;
      prev = null;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1 && curr.value.diena===diena) {
          if (prev) {
            prev.next = curr.next;
          } else {
            visasavaite_linkedList.head = curr.next;
          }
          visasavaite_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      document.querySelector(".content").innerHTML = "";
      displaylinkedlist("Penktadienis");
      console.log(penktadienis_linkedList.printlist());
    }
    if (diena === "Šeštadienis") {
      let curr = sestadienis_linkedList.head;
      let prev = null;
      var LastNode=sestadienis_linkedList.tail;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1) {
          if (prev && curr.value.valanda1!==LastNode.value.valanda1) {
            prev.next = curr.next;
          } 
          else if(prev && curr.value.valanda1===LastNode.value.valanda1){
            sestadienis_linkedList.tail=prev;
            prev.next=null;
          }
          else {
            sestadienis_linkedList.head = curr.next;
          }
          sestadienis_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      curr = visasavaite_linkedList.head;
      prev = null;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1 && curr.value.diena===diena) {
          if (prev) {
            prev.next = curr.next;
          } else {
            visasavaite_linkedList.head = curr.next;
          }
          visasavaite_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      document.querySelector(".content").innerHTML = "";
      displaylinkedlist("Šeštadienis");
      console.log(sestadienis_linkedList.printlist());
    }
    if (diena === "Sekmadienis") {
      let curr = sekmadienis_linkedList.head;
      let prev = null;
      var LastNode=sekmadienis_linkedList.tail;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1) {
          if (prev && curr.value.valanda1!==LastNode.value.valanda1) {
            prev.next = curr.next;
          } 
          else if(prev && curr.value.valanda1===LastNode.value.valanda1){
            sekmadienis_linkedList.tail=prev;
            prev.next=null;
          }
          else {
            sekmadienis_linkedList.head = curr.next;
          }
          sekmadienis_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      curr = visasavaite_linkedList.head;
      prev = null;
    
      while (curr) {
        if (curr.value.valanda1 === valanda1 && curr.value.diena===diena) {
          if (prev) {
            prev.next = curr.next;
          } else {
            visasavaite_linkedList.head = curr.next;
          }
          visasavaite_linkedList.size--;
          
          break;
        }
    
        prev = curr;
        curr = curr.next;
      }
      document.querySelector(".content").innerHTML = "";
      displaylinkedlist("Sekmadienis");
      console.log(sekmadienis_linkedList.printlist());
    }
  }
  
  function editlist(diena, valanda1, vardas, pavarde, pratimai) {
    
    const editdiv = document.createElement("div");
    editdiv.classList.add("edit-form");
  
    const vardasInput = document.createElement("input");
    vardasInput.placeholder = "Vardas";
    vardasInput.classList.add("editInput")
    vardasInput.value = vardas;
  
    const pavardeInput = document.createElement("input");
    pavardeInput.placeholder = "Pavarde";
    pavardeInput.classList.add("editInput");
    pavardeInput.value = pavarde;
  
    const pratimaiInput = document.createElement("input");
    pratimaiInput.placeholder = "Pratimai";
    pratimaiInput.classList.add("editInput");
    pratimaiInput.value = pratimai;
  
    const save = document.createElement("button");
    save.textContent = "Save";
    save.onclick = function() {
      const newvardas = vardasInput.value;
      const newpavarde = pavardeInput.value;
      const newpratimai = pratimaiInput.value;
  
      updateNode(diena, valanda1, newvardas, newpavarde, newpratimai);
  
      editdiv.style.display = "none";
      if (diena === "Pirmadienis") {
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Pirmadienis");
      }
      if (diena === "Antradienis") {
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Antradienis");
      }
      if (diena === "Trečiadienis") {
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Trečiadienis");
      }
      if (diena === "Ketvirtadienis") {
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Ketvirtadienis");
      }
      if (diena === "Penktadienis") {
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Penktadienis");
      }
      if (diena === "Šeštadienis") {
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Šeštadienis");
      }
      if (diena === "Sekmadienis") {
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Sekmadienis");
      }
    };
  
    editdiv.appendChild(vardasInput);
    editdiv.appendChild(pavardeInput);
    editdiv.appendChild(pratimaiInput);
    editdiv.appendChild(save);
  

    const bodyDiv = document.querySelector("body");
    bodyDiv.appendChild(editdiv);
  }
  
  function updateNode(diena, valanda1, newvardas, newpavarde, newpratimai) {

    let currentList;
    if (diena === "Pirmadienis") {
      currentList = pirmadienis_linkedList;
    }
    if (diena === "Antradienis") {
      currentList = antradienis_linkedList;
    }
    if (diena === "Trečiadienis") {
      currentList = treciadienis_linkedList;
    }
    if (diena === "Ketvirtadienis") {
      currentList = ketvirtadienis_linkedList;
    }
    if (diena === "Penktadienis") {
      currentList = penktadienis_linkedList;
    }
    if (diena === "Šeštadienis") {
      currentList = sestadienis_linkedList;
    }
    if (diena === "Sekmadienis") {
      currentList = sekmadienis_linkedList;
    }
  
    let currNode = currentList.head;
    while (currNode) {
      if (currNode.value.valanda1 === valanda1) {
        currNode.value.vardas = newvardas;
        currNode.value.pavarde = newpavarde;
        currNode.value.pratimai = newpratimai;
        break;
      }
      currNode = currNode.next;
    }
  
    let visasavaiteNode = visasavaite_linkedList.head;
    while (visasavaiteNode) {
      if (visasavaiteNode.value.diena === diena && visasavaiteNode.value.valanda1 === valanda1) {
        visasavaiteNode.value.vardas = newvardas;
        visasavaiteNode.value.pavarde = newpavarde;
        visasavaiteNode.value.pratimai = newpratimai;
        break;
      }
      visasavaiteNode = visasavaiteNode.next;
    }
  }
  
  function addNode() {
    const currentDay = document.getElementById("daysDropdown");
    var vardas = "Nėra", pavarde = "Nėra", pratimai = "Nėra";0
    var diena, lastNode;

    if (currentDay.value === "Monday") {
      diena = "Pirmadienis";
      
      lastNode = pirmadienis_linkedList.tail;
      let valanda1 = lastNode.value.valanda2;
      let valanda2 = valanda1 + 1;
      
      if (valanda2 <= 24) {
        pirmadienis_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
        visasavaite_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
    
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Pirmadienis");
        console.log(pirmadienis_linkedList.printlist());
    
      } else {
        alert("Viršijote galimų valandų skaičių!");
      }
    }

    if (currentDay.value === "Tuesday") {
      diena = "Antradienis";
      
      lastNode = antradienis_linkedList.tail;
      let valanda1 = lastNode.value.valanda1+1;
      let valanda2 = valanda1 + 1;
  
      if(valanda2<=24){
        antradienis_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });

        visasavaite_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
    
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Antradienis");
        console.log(antradienis_linkedList.printlist());
      }
    else{alert("Viršijote galimų valandų skaičių!");}}
    
    if (currentDay.value === "Wednesday") {
      diena = "Trečiadienis";
      
      lastNode = treciadienis_linkedList.tail;
      let valanda1 = lastNode.value.valanda1+1;
      let valanda2 = valanda1 + 1;
  
      if(valanda2<=24){
        treciadienis_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });

        visasavaite_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
    
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Trečiadienis");
        console.log(treciadienis_linkedList.printlist());
      }
    else{alert("Viršijote galimų valandų skaičių!");}}

    if (currentDay.value === "Thursday") {
      diena = "Ketvirtadienis";
      
      lastNode = ketvirtadienis_linkedList.tail;
      let valanda1 = lastNode.value.valanda1+1;
      let valanda2 = valanda1 + 1;
  
      if(valanda2<=24){
        ketvirtadienis_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });

        visasavaite_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
    
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Ketvirtadienis");
        console.log(ketvirtadienis_linkedList.printlist());
      }
    else{alert("Viršijote galimų valandų skaičių!");}}


    if (currentDay.value === "Friday") {
      diena = "Penktadienis";
      
      lastNode = penktadienis_linkedList.tail;
      let valanda1 = lastNode.value.valanda1+1;
      let valanda2 = valanda1 + 1;
  
      if(valanda2<=24){
        penktadienis_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });

        visasavaite_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
    
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Penktadienis");
        console.log(penktadienis_linkedList.printlist());
      }
    else{alert("Viršijote galimų valandų skaičių!");}}

    if (currentDay.value === "Saturday") {
      diena = "Šeštadienis";
      
      lastNode = sestadienis_linkedList.tail;
      let valanda1 = lastNode.value.valanda1+1;
      let valanda2 = valanda1 + 1;
  
      if(valanda2<=24){
        sestadienis_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });

        visasavaite_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
    
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Šeštadienis");
        console.log(sestadienis_linkedList.printlist());
      }
    else{alert("Viršijote galimų valandų skaičių!");}}

    if (currentDay.value === "Sunday") {
      diena = "Sekmadienis";
      
      lastNode = sekmadienis_linkedList.tail;
      let valanda1 = lastNode.value.valanda1+1;
      let valanda2 = valanda1 + 1;
  
      if(valanda2<=24){
        sekmadienis_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });

        visasavaite_linkedList.addEnd({
          diena: diena,
          valanda1: valanda1,
          valanda2: valanda2,
          vardas: vardas,
          pavarde: pavarde,
          pratimai: pratimai,
        });
    
        document.querySelector(".content").innerHTML = "";
        displaylinkedlist("Sekmadienis");
        console.log(sekmadienis_linkedList.printlist());
      }
    else{alert("Viršijote galimų valandų skaičių!");}}

  }

  function searchClient() {
    const clientName = document.getElementById("name").value; 
    const searchperson = document.getElementById("search-button");
  
    searchperson.addEventListener("click", function () { //kodel onclick() neveikė????????
      document.querySelector(".content").innerHTML = "";
      displayClient(clientName);
    });

  }
  
  function displayClient(clientName) {
    let visasavaiteNode = visasavaite_linkedList.head;
    while (visasavaiteNode) {
      if (visasavaiteNode.value.vardas === clientName) {
        displayNode(
          visasavaiteNode.value.diena,
          visasavaiteNode.value.valanda1,
          visasavaiteNode.value.valanda2,
          visasavaiteNode.value.vardas,
          visasavaiteNode.value.pavarde,
          visasavaiteNode.value.pratimai
        );
      }
      visasavaiteNode = visasavaiteNode.next;
    }
  }
  function displayExercises(clientName){
    let visasavaiteNode = visasavaite_linkedList.head;
    while (visasavaiteNode) {
      if (visasavaiteNode.value.vardas === clientName) {
        displayNode(
          visasavaiteNode.value.diena,
          visasavaiteNode.value.valanda1,
          visasavaiteNode.value.valanda2,
          visasavaiteNode.value.vardas,
          visasavaiteNode.value.pavarde,
          visasavaiteNode.value.pratimai
        );
      }
      visasavaiteNode = visasavaiteNode.next;
    }
  }
  
  
  function closeWindow(){
    window.close();
  }
  


  function saveLinkedListToJSON(linkedList, filename) { //CHATGPT DARBAS
    // Convert linked list data to an array of objects
    const dataArray = [];
    let current = linkedList.head;
    while (current) {
      dataArray.push(current.value);
      current = current.next;
    }
  
    // Create a JSON blob
    const jsonBlob = new Blob([JSON.stringify(dataArray, null, 2)], { type: 'application/json' });
  
    // Create a URL for the blob
    const jsonURL = URL.createObjectURL(jsonBlob);
  
    // Create a download link
    const a = document.createElement('a');
    a.href = jsonURL;
    a.download = filename;
  
    // Trigger a click event on the link to initiate the download
    a.click();
  
    // Clean up: Revoke the object URL to free up memory
    URL.revokeObjectURL(jsonURL);
  }
  
  function downloadJSON(){
  const filename = 'visasavaite_linkedlist.json';
  saveLinkedListToJSON(visasavaite_linkedList, filename);}
