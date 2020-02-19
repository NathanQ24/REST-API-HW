// https://github.com/NathanQ24/REST-API-HW.git
// Nathan Quinn

var jsonObject = [];
fetch('http://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(response => response.json())
  .then(data => jsonObject = data)
  .then(() => {
    
    
    // insert json data into table
    function fillTable(jsonObject) {
    let tablePosition = 1;
    jsonObject.forEach(element => {
        var table = document.getElementById("myTable");
        var row = table.insertRow(tablePosition);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = element.id;
        cell2.innerHTML = element.title;
        cell3.innerHTML = element.body;
        tablePosition = tablePosition + 1;
    });
    };
    
    fillTable(jsonObject)

    
    // create and fill <p> tags from json data
    function fillDiv(jsonObject) {
        jsonObject.forEach(element => {
            var para = document.createElement("p");
            if (element.body.length > 50){
                var node = document.createTextNode(element.body.slice(0,50));
            }
            else{
                var node = document.createTextNode(element.body);
            }
            para.appendChild(node);
            var newElement = document.getElementById("myDiv");
            newElement.appendChild(para);
        })
    }

    fillDiv(jsonObject)


    function createJsonObj(jsonObject) {
        var rand1 = Math.floor(Math.random() * 3) + 1;
        var rand2 = Math.floor(Math.random() * 200) + 100;

        var idValue = rand1 + rand2;

        var titleValue;

        var bodyValue;

        jsonObject.forEach(element => {
            if (element.id == rand1){
                titleValue = element.body.slice(0,5);

                var bodyLength = element.body.length;
                var bodyHalf = bodyLength / 2;
                bodyValue = element.body.slice(bodyHalf, bodyLength);
            }
        })

        var newJsonObj = {
            "id":idValue,
            "title":titleValue,
            "body":bodyValue
        };
        
        console.log(newJsonObj);
    }

    createJsonObj(jsonObject)


    function displayList(jsonObject) {
        var list = document.createElement('ul');

        jsonObject.forEach(element => {
            var item = document.createElement('li');

            if (element.title.length >= 30){
                item.appendChild(document.createTextNode(element.title));
                list.appendChild(item);
            }
        });

        document.getElementById('myList').appendChild(list);
    }

    displayList(jsonObject);

    
    function listOddAndEven(jsonObject) {
        var listEven = document.createElement('ul');
        var listOdd = document.createElement('ul');

        jsonObject.forEach(element => {
            var item = document.createElement('li');

            if (element.id % 2 == 0){
                item.appendChild(document.createTextNode(element.title));
                listEven.appendChild(item);
            }
            else{
                item.appendChild(document.createTextNode(element.title));
                listOdd.appendChild(item);
            }
        });

        document.getElementById('listEven').appendChild(listEven);
        document.getElementById('listOdd').appendChild(listOdd);
    }

    listOddAndEven(jsonObject);
  })
