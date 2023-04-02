

function togglePanel(){
    console.log("button clicked");
    //hide the section/element
    $("#form").slideToggle('slow');
    //$("#form").hide();
}

function saveTask(){
    console.log("Save Clicked");
}

function toggleImportant(){
    const nonImpClasses="fa-regular fa-bookmark not-important";
    const impClasses="fa-solid fa-bookmark important";

    $("#iImportant").removeClass(nonImpClasses);
    $("#iImportant").addClass(impClasses);
    console.log("icon Clicked");
}


function init(){
    console.log("Task Manager")

    // retrieve data

    //hook events
    $("#btnShowPanel").click(togglePanel);
    $("#btnSave").click(saveTask);
    $("#iImportant").click(toggleImportant);
}

window.onload = init;