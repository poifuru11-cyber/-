function addItem(){

const input = document.createElement("input");

input.className="itemName";

input.placeholder="測定項目";

document.getElementById("items").appendChild(input);

}

function save(){

const items=[];

document.querySelectorAll(".itemName").forEach(i=>{

items.push({
id:"item"+items.length,
name:i.value
});

});

const variety ={

name:document.getElementById("name").value,

cultivar:document.getElementById("cultivar").value,

items:items

};

const tx = db.transaction("varieties","readwrite");

tx.objectStore("varieties").add(variety);

alert("保存しました");

}