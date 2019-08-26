$(function(){

	$('.flow-list').click(function(){
		var $contents = $(this).find('.flowboxsp-contents');
		var $icon =$(this).find('.list-item');
		
		if($contents.hasClass('open')){
			$contents.removeClass('open');
			$contents.slideUp();
			$icon.find('.list-item-right').html('<i class="fa fa-chevron-down" aria-hidden="true"></i>');
		}else{
			$contents.addClass('open');
			$contents.slideDown();
			$icon.find('.list-item-right').html('<i class="fa fa-chevron-up" aria-hidden="true"></i>');

		};
	});


	$('.qa-list').click(function(){
		var $answer = $(this).find('.answer');
		var $icon = $(this).find('.qa-list-item');

		if($answer.hasClass('open')){
			$answer.removeClass('open');
			$answer.slideUp();
			$icon.find('.qa-right').html('<i class="fas fa-chevron-down"></i>');

		}else{
			$answer.addClass('open');
			$answer.slideDown();
			$icon.find('.qa-right').html('<i class="fas fa-chevron-up"></i>');
		}
	});


});
