initDB(loadVarieties);

function loadVarieties(){

const tx = db.transaction("varieties","readonly");

const store = tx.objectStore("varieties");

const req = store.getAll();

req.onsuccess = ()=>{

const list = document.getElementById("varietyList");

req.result.forEach(v=>{

const div = document.createElement("div");

div.className="card";

div.innerHTML=`
<h3>${v.name}</h3>
<p>${v.cultivar}</p>
<a href="variety.html?id=${v.id}">詳細</a>
`;

list.appendChild(div);

});

};

}
