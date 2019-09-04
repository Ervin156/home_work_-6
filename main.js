var body = document.querySelector('body');
var div = document.createElement('div');
var inpTitle = document.createElement('input');
var inpDescription = document.createElement('input');
var btn = document.createElement('input');
inpTitle.type = 'text';
inpTitle.placeholder = 'first name';
inpDescription.type = 'text';
inpDescription.placeholder = 'last name';
btn.type = 'button';
btn.value = 'next';
div.append(inpTitle);
div.append(inpDescription);
div.append(btn);
body.append(div);

var arr = [];

function secondForm() {
    div.remove();

    var divSecond = document.createElement('div');
    divSecond.className = 'second'
    var inpTitleSecond = document.createElement('input');
    var inpDescriptionSecond = document.createElement('input');
    var btnSecond = document.createElement('input');

    inpTitleSecond.type = 'text';
    inpTitleSecond.placeholder = 'mobile phone';
    inpTitleSecond.value = '';
    inpDescriptionSecond.type = 'text';
    inpDescriptionSecond.placeholder = 'email';
    btnSecond.type = 'button';
    btnSecond.value = 'next';

    arr.push(inpTitleSecond.value, inpDescriptionSecond.value);
    divSecond.append(inpTitleSecond);
    divSecond.append(inpDescriptionSecond);
    divSecond.append(btnSecond);
    body.append(divSecond);

    btnSecond.onclick = () => {
        if (inpTitleSecond.value !== '' && inpDescriptionSecond.value !== '') {
            arr.push(inpTitleSecond.value, inpDescriptionSecond.value);

            thirdForm();
        }
        function thirdForm() {
            divSecond.remove();
            var divThird = document.createElement('div');
            divThird.className = 'third';
            var inpTitleThird = document.createElement('input');
            var inpDescriptionThird = document.createElement('input');
            var btnThird = document.createElement('input');

            inpTitleThird.type = 'text';
            inpTitleThird.placeholder = 'password';
            inpTitleThird.value = '';
            inpDescriptionThird.type = 'text';
            inpDescriptionThird.placeholder = 'confirm password';
            btnThird.type = 'button';
            btnThird.value = 'next';

            arr.push(inpTitleThird.value, inpDescriptionThird.value);
            divThird.append(inpTitleThird);
            divThird.append(inpDescriptionThird);
            divThird.append(btnThird);
            body.append(divThird);

            btnThird.onclick = () => {
                if (inpTitleThird.value !== '' && inpDescriptionThird.value !== '') {
                    if (inpTitleThird.value !== inpDescriptionThird.value) {
                        alert('password not correct');

                    } else {
                        arr.push(inpTitleThird.value, inpDescriptionThird.value);
                        arr.pop();
                        div.remove();
                        divSecond.remove();
                        divThird.remove();
                        var divRes = document.createElement('div');
                        divRes.style.height = 'auto';
                        var btnRes = document.createElement('input');
                        btnRes.type = 'submit';
                        btnRes.value = 'Send info';
                        for (var i of arr) {
                            var p = document.createElement('p');
                            // p.style.paddingLeft = '10px';
                            p.style.margin = '5px 10px';
                            p.innerHTML += i;
                            divRes.append(p);
                        }
                        divRes.appendChild(btnRes);

                        body.append(divRes);

                        btnRes.onclick = () => {
                            alert('Operation conmlete');
                        }
                    }
                }
            }
        }
    }


}

btn.onclick = () => {

    if (inpTitle.value !== '' && inpDescription.value !== '') {

        arr.push(inpTitle.value, inpDescription.value);

        secondForm();

    }
}



