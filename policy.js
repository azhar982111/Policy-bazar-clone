let imgarr = ["https://static.pbcdn.in/term-cdn/images/images/mrs_kumar.png",
  "https://images.livemint.com/img/2021/01/25/600x338/Sarbvir_Singh_1611559251881_1611559260437.jpg",
  "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/in/wp-content/uploads/2021/02/Yashish-Dahiya-ITHSWFAI-e1613128740180.jpg"
]

let name1 = ["Mr Kumar", "Mr Chouhan", "Mr Narware"]

let name2 = ["Mr Harsh", "Mr Kuldeep", "Mr Kuldeep"]

let img = document.getElementById("images")

let namekumar = document.getElementById("mrkumar")
let nameharish = document.getElementById("mrharsh")


var i = 0;
setInterval(function () {
  img.src = imgarr[i]
  namekumar.textContent = name1[i]
  nameharish.textContent = name2[i]
  i++;
  if (i == name1.length) {
    i = 0;
  };
}, 3000);

let dataarr = ["20 Lac", "30 Lac", "40 Lac", "50 Lac", "60 Lac", "70 Lac", "80 Lac", "90 Lac", "1 crore"]







let lifecoverdropdown = document.getElementById("lifecoverdiv")
lifecoverdropdown.addEventListener("click", creatediv)

function creatediv() {

  if (!document.getElementById('createddiv')) {
    dropdown = document.createElement("div")
    dropdown.setAttribute("id", "createddiv")
    dataarr.forEach(element => {
      let divitem = document.createElement("div")
      divitem.setAttribute("id", "item")
      divitem.textContent = element
      dropdown.append(divitem)
    });
  }

  body.append(dropdown)
}

  document.addEventListener('mouseup', function(e) {
    var container = document.getElementById('createddiv');
    if(container != null){
      if (!container.contains(e.target)) {
        container.style.display = 'none';
        container.remove();
    }
    }
  });
