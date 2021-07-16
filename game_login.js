function add_user(){
    var player_1=document.getElementById("bhaar_jaa1").value;
    var player_2=document.getElementById("bhaar_jaa2").value;

    localStorage.setItem("Player_1", player_1);
    localStorage.setItem("Player_2", player_2);

    window.location="game_page.html";
}