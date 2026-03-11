let db;

const request = indexedDB.open("plantDB",1);

request.onupgradeneeded = e=>{

db = e.target.result;

db.createObjectStore("varieties",{keyPath:"id",autoIncrement:true});

db.createObjectStore("records",{keyPath:"id"});

};

request.onsuccess = e=>{
db = e.target.result;
};