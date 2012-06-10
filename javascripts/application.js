jQuery.fn.extend({
	taskStates:['task-empty','task-x','task-apostrophe','task-dash'],
	resetTaskStateClassNames:function(){
		var elem
	},
	resetTaskState:function(){
		return this.each(function(){
			jQuery(this).data('taskStateIndex',0).addClass(jQuery.fn.taskStates[0]);
		)};
	},
	toggleTaskState:function(){
		this.resetTaskStateClassNames();
    return this.each(function(){
      var element = jQuery(this);
      var taskStateIndex = element.data('taskStateIndex') || 0;
      taskStateIndex = (taskStateIndex + 1) % jQuery.fn.taskStates.length;
      element.data('taskStateIndex',taskStateIndex).addClass(jQuery.fn.taskStates[taskStateIndex]);
    });	
	},
});
jQuery(function(){
	
	$('.completion a').live("click",function(){
		$(this).toggleTaskState();
		return false;
	});

	$('#add').click(function(){
		var taskItem = $('#tasks ul li:first').clone();
		taskItem
				.find('.completion a').resetTaskState()
			.end()
				.find('input[type="text"]').value("");
		//adds to the end of inside element
		$('#tasks ul').append(taskItem);
		taskItem.find('input[type="text"]:first').focus();
		return false;
	});	

	$('#add').click().click();

	$('#tasks ul').sortable({handle:"handle"}).disableSelection();	

	$('input[type="text"]:first').focus();
		
});
