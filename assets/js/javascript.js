var currentPage = 0


document.getElementById("nextPageButton").addEventListener("click", function(){
    if (currentPage < 47) {
        currentPage = currentPage + 1;
        console.log(currentPage)
        document.getElementById("panelView").src = "./assets/pages/document-page" + currentPage + ".png";
    }
    else {
        window.alert('Already on the last page.')
    }
});

console.log(currentPage)

document.getElementById("previousPageButton").addEventListener("click", function(){
    if (currentPage > 0) {
        currentPage = currentPage - 1;
        console.log(currentPage)
        document.getElementById("panelView").src = "./assets/pages/document-page" + currentPage + ".png";
    }
    else {
        window.alert('Already on the first page.')
    }
});