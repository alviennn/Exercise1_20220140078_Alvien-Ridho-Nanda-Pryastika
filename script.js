function showAlert(){
    alert(Date())
    Date()

    let tanggal = new Date;
    document.getElementById("hasil").innerHTML=tanggal;
}   

document.querySelectorAll('.card').forEach((item, index) => {
    item.addEventListener('click', function() {
        var link = this.getAttribute('data-link'); 
        if (link) {
            window.open(link, '_blank');  
        }
    });
}); 

document.getElementById('mutualanBtn').addEventListener('click', function() {
    var mutualanLink = "https://open.spotify.com/user/psuz9sr1uqoxaj10t7zl93r0h?si=c9d1140f3b874997";
    if (mutualanLink) {
        window.open(mutualanLink, '_blank');  
    }
});