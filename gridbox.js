(function() {
	document.addEventListener("DOMContentLoaded", function(){
		var fileInputs = document.querySelectorAll("input[type=file]");
		for (var i = 0; i < fileInputs.length; i++) {
			var node = fileInputs.item(i);
			node.addEventListener("change", function(e) {
				if (!this.files || !this.files.length) return;
				var file = this.files.item(0);
				// Find .UploadedFile element.
				for (var p = this.parentElement; p != null; p = p.parentElement) {
					var label = p.querySelector(".UploadedFile");
					if (label != null) {
						label.innerHTML = file.name;
						break;
					}
				}
			});
		}
	});
})();