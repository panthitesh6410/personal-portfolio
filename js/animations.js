var toggle_flag = 0
function toggler(){
    if(toggle_flag == 0)
    {
        toggle_flag = 1
        $("#menu").slideDown(500);
    }
    else{
        toggle_flag = 0
        $("#menu").slideUp(500);
    }
}