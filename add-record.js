const params = new URLSearchParams(location.search);

const varietyId = params.get("id");

const today = new Date().toISOString().slice(0,10);

function save(){

const values={};

document.querySelectorAll(".itemInput").forEach(i=>{

values[i.dataset.id] = i.value;

});

const record={

id: varietyId+"_"+today,

varietyId: varietyId,

date: today,

values: values

};

const tx = db.transaction("records","readwrite");

tx.objectStore("records").put(record);

alert("保存");

}