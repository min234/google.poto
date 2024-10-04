setInterval(() => {
    let imgs = document.querySelectorAll('img');
    let text =document.querySelectorAll('a,h3');

    imgs.forEach((a,i) => {
        a.src = 'https://t3.daumcdn.net/thumb/R720x0.fjpg/?fname=http://t1.daumcdn.net/brunch/service/user/cnoC/image/MZAwEToXlzQSuy5D1ea2za55zEg.jpg'
    });
    text.forEach((node) => {
        node.childNodes.forEach(child => {
            if (child.nodeType === Node.TEXT_NODE) {
                child.textContent = '속았징?';
            }
        })
    })
}, 500);


