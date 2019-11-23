$('#useBilling').click(function() {
	var home = $("#home");
	if (this.checked){
		console.log("Selected")
		$('#home').val($("#billing").val());
		$('#home').this.prop("disabled", true);}
	else {
		console.log("Not selected")
		$('#home').val('');
		$('#home').this.prop("disabled", false);}
	
	})