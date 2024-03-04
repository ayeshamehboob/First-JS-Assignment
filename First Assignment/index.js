// function table(){
//     var number = parseInt(document.getElementById("number").value);
//     var limit = parseInt(document.getElementById("limit").value);
//     var tableBody = document.getElementById("tableBody");
//     tableBody.innerHTML = '';

//     var reverse = number < 20;

//     for (var i =1; i <= limit; i++) {
//         var row = document.createElement('tr');
//         var cell1 = document.createElement('td');
//         var cell2 = document.createElement('td');
//         cell1.textContent = i;
//         cell2.textContent = reverse ? (number * limit - i + 1) : (number * i);
//         row.append(cell1);
//         row.append(cell2);
//         tableBody.append(row);
//     }
// }


        let a1=  parseInt(window.prompt("Enter the number you want table for: "));
        let a2=  parseInt(window.prompt("Enter the limit: "));

        if (a1 > 20)
        for (let i = 1; i = a2; i++) {
            document.write((a1 + " * " + i + " = " + a1 * i + "<br>"));
        }

        else{
            for (let i = a2; i > 0; i--) {
                document.write((a1 + " * " + i + " = " + a1 * i + "<br>"));
            }
        }

    
   



       

