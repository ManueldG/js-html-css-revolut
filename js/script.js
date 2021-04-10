function main(){
    console.log("ok");
    $('.element').hover(function(){
        console.log($(this).find('.change'));
        $(this).find('.change').toggleClass('active');
        
    });
    
    $('.element').click(function(){
        $(this).find('.change').toggleClass('activeC');
        
    });

}