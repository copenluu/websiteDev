var clicks = 0;

if(document.getElementById('donateClick').clicks == true){
    writeFile('../SavedData/totalClicks.txt', "Total donate clicks is now ", clicks++,"clicks");
    console.log(clicks);
}