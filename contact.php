<?php include 'includes/header.php';?>
	<div class="banner">

		<img src="img/AOLogo.svg" style="vertical-align: bottom" width="100%">

	</div>  
	
	<div class="row">
		<div class="col-12 magnify center">

			<form id="contact_form" action="#" method="POST" enctype="multipart/form-data">
				<div class="row">
					<h1>Enquiry form</h1>
					<p>Feel free to ask me anything via this enquiry form</p>
					<label for="name">Your name:</label><br />
					<input id="name" class="input" name="name" type="text" value="" size="30" /><br />
				</div>
				<div class="row">
					<label for="email">Your email:</label><br />
					<input id="email" class="input" name="email" type="text" value="" size="30" /><br />
				</div>
				<div class="row">
					<label for="message">Your message:</label><br />
					<textarea id="message" class="input" name="message" rows="7" cols="30"></textarea><br />
				</div>
				<input id="submit_button" type="submit" value="Send email" />
			</form>						
			
		
					
		</div>
	</div>

<?php include 'includes/footer.php';?>