var images=["https://www.qualitycottages.co.uk/aroundwales/wp-content/uploads/2017/12/family-2355697_1920-1140x759.jpg","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjIZv37NJzAirYazCRfNHWQRxK_3-QsEtjNQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkXWi2Qbou8rGHsKtUDH2F45CyMVMYHvupFA&usqp=CAU","https://media-exp1.licdn.com/dms/image/C5103AQEUhHZ1GhMfUQ/profile-displayphoto-shrink_100_100/0/1516242625085?e=1619654400&v=beta&t=kbyPUwarfQGOOYl-k4QsujRhsr6Kvcup3_HWnk1B30U","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYPYyIYgcVkfRnU1r1R1ELEtfTqm7nzJJJ2g&usqp=CAU", ];

var i = 0;
function nextslide() { 
                      document.getElementById("album").src = images[i];
                      i++; 

if(i ==5)
{
  i=0;
}
}