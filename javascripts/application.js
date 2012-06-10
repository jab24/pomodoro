jQuery(function(){
	
	$('#add').click(function(){
		var taskItem = $('#tasks ul li:first').clone();
		taskItem.find('input[type="text"]').value("");
		//adds to the end of inside element
		$('#tasks ul').append(taskItem);
		taskItem.find('input[type="text"]:first').focus();
		return false;
	});	

	$('input[type="text"]:first').focus();
		
});
