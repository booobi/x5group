// use this while at https://www.facebook.com/media/ of your desired page
// then just copy object from console
// I suggest running it in FireFox because Chrome seems to cut the full urls
Array.from(document.querySelectorAll('div > a > div > img')).map(item => item.src)
