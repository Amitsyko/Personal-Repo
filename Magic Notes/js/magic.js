console.log("Hey Welcome to the Magic Notes --Today i will create Magic Notes");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {

    let addTxt = document.getElementById("addTxt");
    let notes = localStorage.getItem("notes");

    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addTxt.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addTxt.value = "";
    console.log(notesObj);


    showNotes();
})

//Function to retrive to show notes form localStorage

function showNotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
                <div class="card my-4 col-lg-4 mx-2">
                    <h5 class="card-header">Note ${index + 1}</h5>
                    <div class="card-body">
                        <p class="card-text">${element}</p>
                        <button class="btn btn-primary" id="${index}" onclick="deleteNotes(this.id)">Delete Note</button>
                    </div>
                </div>
                `
    });

    let noteElm = document.getElementById("notes");
    if(notesObj.length != 0){
        noteElm.innerHTML=html;
    }else{
        noteElm = `Nothing to show anything ! Use "Add Notes" section above the notes`;
    }
}


// Function to delete Notes

function deleteNotes(index){
    console.log("i am deleting", index);
    
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj= [];
    }else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesObj));
    showNotes();
}