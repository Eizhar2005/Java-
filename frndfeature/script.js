var friendStatus = document.querySelector('h5');

var btn = document.querySelector('#add');
var flag = 0;

btn.addEventListener('click', function() {
    if(flag==0) {
        friendStatus.innerHTML = 'Friends';
        friendStatus.style.color = 'green';
        btn.innerHTML = 'Remove Friend';
        btn.style.backgroundColor = 'red';
        flag = 1;
    } else {
        friendStatus.innerHTML = 'Removed from friends';
        friendStatus.style.color = 'red '; 
        btn.innerHTML = 'Add Friend';   
        btn.style.backgroundColor = 'cornFlowerBlue';
        flag = 0;

    }
});

