getUrlData();
function getUrlData() {
    let url = window.location.search;

    let urlParams = new URLSearchParams(url);
    
    for(const entry of urlParams) {
        console.log(entry);
        const pTag = document.createElement('p');
        pTag.innerHTML = `${entry[0]}: ${entry[1]}`;
        document.querySelector('.wrapper').appendChild(pTag);
      }
};