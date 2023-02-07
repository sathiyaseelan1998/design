const blur=document.createElement('div');
document.body.appendChild(blur);
blur.id='blur';

const images=document.querySelectorAll('.img');

images.forEach(image=>{
    image.addEventListener('click',()=>
    alert("hi")
    )
}
)

