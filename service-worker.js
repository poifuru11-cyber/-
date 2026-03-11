self.addEventListener("install",e=>{

e.waitUntil(

caches.open("plant").then(cache=>{

return cache.addAll([
"/",
"/index.html"
]);

})

);

});