const blur=document.createElement('div');
document.body.appendChild(blur);
blur.id='blur';

const images=document.querySelectorAll('.img');

images.forEach(image=>{
    image.addEventListener('click',()=>{
        blur.classList.add('active');
        while(blur.firstChild){
            blur.removeChild(blur.firstChild);
        }
        const img=document.createElement('img');
        blur.appendChild(img);
        img.src=image.src;
        img.id='img';

    });
});
blur.addEventListener('click',()=>{
    blur.classList.remove('active');
});

