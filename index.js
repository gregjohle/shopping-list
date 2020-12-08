$(function(){

    // cross out text if checked is clicked
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event){
        $(this).closest('.shopping-item-controls').siblings('.shopping-item').toggleClass('shopping-item__checked');
    
    });

    // hide list item if delete is clicked
    $('.shopping-list').on('click', '.shopping-item-delete', function(event){
        $(this).closest('li').remove();
    });

    //add item to list  
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        var item = $('#shopping-list-entry').val();
        if (item !== ""){
          $('.shopping-list').append(`<li>
            <span class="shopping-item">${item}</span>
            <div class="shopping-item-controls">
                <button class="shopping-item-toggle">
                    <span class="button-label">check</span>
                </button>
                <button class="shopping-item-delete">
                    <span class="button-label">delete</span>
                </button>
          </div>
        </li>`);
        $('.js-shopping-list-entry').val("");
        };
    });

});