document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true);

    xhr.onload = function(){
        if(this.status === 200){
            document.getElementById('customer').innerHTML = this.responseText;
            console.log(this.responseText);
        }
    }

    xhr.send();
}