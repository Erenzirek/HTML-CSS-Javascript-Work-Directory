const getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          callback(null, JSON.parse(request.responseText));
        } else {
          callback('Başarılı cevap alamadık!', null);
        }
      }
    });
  
    request.open("GET", resource);
    request.send();
  }
  
  getTodos('example/can.json',(err, data) => {
   console.log(data);
   getTodos('example/osman.json',(err, data) => {
    console.log(data);
   }); 
   getTodos('example/tuba.json',(err, data) => {
    console.log(data);
   }); 
  });
  