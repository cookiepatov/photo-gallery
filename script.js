const gallery = document.querySelector('.photo-gallery__grid');
const fullPhoto = document.querySelector('.fullscreen-photo__img');
const fullphotoBlock = document.querySelector('.fullscreen-photo');
const closeButton = document.querySelector('.fullscreen-photo__button_close');
const nextButton = document.querySelector('.fullscreen-photo__button_next');
const prevButton = document.querySelector('.fullscreen-photo__button_previous');
const fullScreenBackground = document.querySelector('.fullscreen-photo');
const photoList = getPhotoList();
let prev;
let next;
function getPhotoList(){
    const photoObjectList = document.querySelectorAll('.photo-gallery__item');
    const photoList=[];
    for (let i=0;i<photoObjectList.length;i++)
    {
        photoList.push(photoObjectList[i].attributes.src.value);
    }
    return photoList;
}


getFullRes = (lowRes) => lowRes.replace('low-res','high-res');

getPreviousPhoto = (current) => {
    const cur=photoList.findIndex(function(value){return value==current});
    if (cur!=0)
    {
        return photoList[cur-1];
    }
    else
    {
        return null;
    }
}

getNextPhoto = (current) => {
    const cur=photoList.findIndex(function(value){return value==current});
    if (cur!=photoList.length-1)
    {
        return photoList[cur+1];
    }
    else
    {
        return null;
    }
}

loadPhoto = (src, hide=1) => {
    if (hide)
    {
        fullphotoBlock.classList.toggle('hide');
    }
    fullPhoto.attributes.src.value=getFullRes(src);
    prev=getPreviousPhoto(src);
    next=getNextPhoto(src);
}

hideFullScreen = (e) => {
    e.preventDefault();
    fullphotoBlock.classList.toggle('hide');
}


function init() {
    gallery.addEventListener('click', function(e) {
        if (e.target.attributes.src)
        {
            loadPhoto(e.target.attributes.src.value);
        }
    })
    closeButton.addEventListener('click', hideFullScreen);
    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        loadPhoto(prev, 0)});
    nextButton.addEventListener('click', function(e) {
        e.preventDefault();
        loadPhoto(next, 0)});
    document.addEventListener('keydown',function(e){
        if(e.keyCode=='37')
        {
            e.preventDefault();
            loadPhoto(prev, 0);
        }
        if(e.keyCode=='39')
        {
            e.preventDefault();
            loadPhoto(next, 0);
        }
        if(e.key=='Escape')
        {
            hideFullScreen(e);
        }
    })
    fullScreenBackground.addEventListener('click',function(e){
        console.dir(e.target);
        if(e.target.className=='fullscreen-photo'||e.target.className=='fullscreen-photo__block')
        {
            hideFullScreen(e);
        }
    })

}

init();






