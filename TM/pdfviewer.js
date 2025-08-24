const url='TM/docs/JAVA CONTENT.pdf';

let pdfDoc=null,
    pageNum=1,
    pageIsrendering=false,
   pageNumPending=null;

const scale=1.5,
    canvas=document.getElementById('pdf-render'),
    ctx=canvas.getContext('2d');

//Render the page

const renderPage=num=>{ 
    
}

//Get document
pdfjsLib.getDocument(url).promise.then(pdfDoc_=>{
    pdfDoc=pdfDoc_;
    document.querySelector('#page-count').textContent=pdfDoc.numPages;
    renderPage(pageNum);
});
