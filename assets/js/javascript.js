var currentPage = 0


document.getElementById("nextPageButton").addEventListener("click", function(){
    if (currentPage < 47) {
        currentPage = currentPage + 1;
        document.getElementById("PDFView").src = "./assets/pages/document-page" + currentPage + ".pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0";
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
        document.getElementById("PDFView").src = "./assets/pages/document-page" + currentPage + ".pdf#view=FitH&toolbar=0&navpanes=0&scrollbar=0&statusbar=0&messages=0";
    }
    else {
        window.alert('Already on the first page.')
    }
});