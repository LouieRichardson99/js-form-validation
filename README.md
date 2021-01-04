# Description
A Bootstrap form using JavaScript validation.
Linked Bootstrap via the CDN to allow the use of the pre-made form. 

# Process
1. onSubmit the validateForm function is called and form awaits a 'true' value until it can POST form.
2. validateForm stores the password input in memory while returning the next function.
3. The password gets checked for both length and special characters. If both return true, it will POST form and display 'Success!' message.

Created on 04/01/21