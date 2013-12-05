

$(document).ready(function() {
    //populate coin boxes

  var numItems = 2;
  for ( var i = 0; i <= numItems; i++ ) {
      $('#copyMe').clone(true).appendTo('.list').removeAttr('id').removeClass('hidden').addClass('item')
  }   
    
  $('<div/>', {
      'id':'item_name',
      'text':'Item',
  }).appendTo('.item');

  $('.item').each(function(index){
      $(this).attr('id', 'item_' + index);
  });
  
  $('input.checker').change(function(){
    $(this).siblings().toggleClass('strike');
  });

  $('#add_item').keypress(function(event){
    if(event.which == 13 ){
      var new_todo = $.trim($( "#add_item" ).val());
      if (new_todo){
        numItems = numItems+1;
        $('#copyMe').clone(true).appendTo('.list').removeAttr('id').removeClass('hidden').addClass('item');
        var new_item = $('ul li');
        new_item.last().attr('id', 'item_' + numItems);
        $('<div/>', {
          'id':'item_name',
          'text':new_todo,
        }).appendTo(new_item.last());
        $('#add_item').removeAttr('value');
      }
    };

  });

/* Removing Checked Items */
  $('#remove_items').click(function(event){    
    $('li').each(function(){      
      if($(this).find('div').hasClass('strike')){
        $(this).remove();
      }
    });
  });
});