$('button').click(function(){
    $('.animationDiv').animate(
        { 
            marginLeft: '100px',
            width: '100px',
            height: '100px'
        },
        3000,
        function(){
            // console.log(this);
            $(this).animate(
                {
                    backgroundColor: 'blue',
                },
                2000,
                function(){
                    $(this).html('<h2>animacja zakończona</h2>');
                }
            )
        }
    );
});
