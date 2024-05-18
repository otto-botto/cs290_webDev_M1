'use strict'

const express = require('express');
const app = express();
const PORT = 3000;


app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

// first variable, all HTML types
let htmlTop = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Lora Dushanova</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <meta name="robots" content="noindex,noarchive, nofollow" />
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
    <link rel="apple-touch-icon" sizes="180x180" href="apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="512x512" href="android-chrome-512x512.png"> 
    <link rel="icon" type="image/png" sizes="192x192" href="android-chrome-192x192.png">
    <link rel="icon" type="image/png" sizes="32x32" href="favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
</head>
<body>
    <header> 
        <img src="android-chrome-192x192.png" alt="Lora Dushanova" /> 
        <h1>Lora Dushanova</h1> 
    </header>

    <nav class= "global">  
		<a class="global" href="index.html">Home</a>
		<a class="global" href="gallery.html">Gallery</a>
		<a class="global" href="contact.html">Contact</a>
		<a class="global" href="order.html">Order</a>
    </nav>

    <main>
`;

// second variable, 
let htmlBottom = `
	</main>
	<footer>
		<p> &copy 2024 Lora Dushanova</p>
	</footer>
	</body>
	</html>
`;

// For the Contact Form
app.post("/review", (req, res) => {
	// Nodemailer
	const nodemailer = require('nodemailer');


	// Person and contact info
	const person = req.body.name;
	const email = req.body.email;
	const street = req.body.street;
	const streetNum = req.body.number;
	const city = req.body.city;
	const state =  req.body.state;
	const zip =  req.body.postalcode;
	const phone =  req.body.phone;

	// Strings tension and expedited
	const mains = req.body.mains;
	const crosses = req.body.crosses;
	const notes = req.body.notes;
	const expedite = req.body.expedite;

	// Fixes comma issue for Strings
	function getCheckBoxItems(checkedBoxes){
		switch(typeof checkedBoxes){
			case "object": // 2+ checked boxes
				return checkedBoxes.join(`, `);
			case "string": // Only one box
				return checkedBoxes;
			default: // None checked
				return ": not specified"	
		}
	}

	const strings = getCheckBoxItems(req.body.strings) 

	
	res.send(`${htmlTop}
		<section>
			<h2>Hello, <strong>${person}</strong>.</h2>
				<article> 
					<h3>Thank you for your racquet stringing order.</h3> 
						<h4>Below is where we will reach you:</h4>
							<p>By phone at <strong>${phone}</strong> and by email at <strong>${email}</strong>.</p>
						<h4>We will ship back your racquet to the provided address:</h4> 
							<p><strong>${streetNum} ${street}</strong> Street</p> 
							<p><strong>${city}</strong>, <strong>${state} ${zip}</strong>.</p>

				</article>


			<article>
				<h3>Strings and Tension</h3>
					<h4>Below is what we learned about your racquet:</h4>
						<p>You selected the following strings: <strong>${strings}</strong>.</p>
						<p>The mains and crosses tensioned (in lbs): <strong>${mains}</strong> mains and <strong>${crosses}</strong> crosses.</p> 
					<h4>Service Details:</h4>	
						<p>For expediting your stringing, you selected: <strong>${expedite}</strong></p>
						<p>Finally, you let us know about the following injuries:</p>
						<p><strong>${notes}</strong></p>
			</article>

		</section>

		
	${htmlBottom}`);

	// Generate SMTP service account from ethereal.email
	nodemailer.createTestAccount((err, account) => {
    if (err) {
        console.error('Failed to create a testing account. ' + err.message);
        return process.exit(1);
    }

    console.log('Credentials obtained, sending message...');

		// Create a SMTP transporter object
		let transporter = nodemailer.createTransport({
			host: account.smtp.host,
			port: account.smtp.port,
			secure: account.smtp.secure,
			auth: {
				user: account.user,
				pass: account.pass
			}
		});

		// Message object
		let message = {
			from: `Sender Name <racquet_stringing@tennis.com>`,
			to: `Recipient ${email}`,
			subject: `Your Racquet Stringing Request`,
			text: `Hello, ${person}, we received your racquet stringing request.Thank you for providing your phone number ${phone} and  email address ${email}. We'll get right to work stringing your racquet and tension it at ${mains} lbs for the mains and ${crosses} lbs for the crosses.`,

			html: `<p>Hello, ${person}, we received your racquet stringing request.
			Thank you for providing your phone number <strong>${phone}</strong> and  email address <strong>${email}</strong>.</p>
			<p>We'll get right to work stringing your racquet and tension it at ${mains} lbs for the mains and 
			${crosses} lbs for the crosses.</p>`
		};

		transporter.sendMail(message, (err, info) => {
			if (err) {
				console.log('Error occurred. ' + err.message);
				return process.exit(1);
			}

			console.log('Message sent: %s', info.messageId);
			// Preview only available when sending through an Ethereal account
			console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
		});
	});

});

const someProducts = require('./products.js').products;

// using the product's name to select
function selectProduct(item){
	for(const productName of someProducts){
		if(productName.product === item){
			return productName;
		}
	}
}

//For the Order Form
app.post("/chosen", (req, res) => {
	// Nodemailer
	const nodemailer = require('nodemailer');

	// Person and contact info
	const person = req.body.name;
	const email = req.body.email;
	const street = req.body.street;
	const streetNum = req.body.number;
	const city = req.body.city;
	const state =  req.body.state;
	const zip =  req.body.postalcode;
	const phone =  req.body.phone;
	const delivery = req.body.delivery;

	// Items and quantity
	const quantity = req.body.quantity;
	
	// Chosen item
	const result = selectProduct(req.body.item)
	let orderTotal = function(quantity){
		return (quantity * this.price).toLocaleString('en-US',{style: 'currency',currency: 'USD', minimumFractionDigits: 2});
	}

	result.orderTotal = orderTotal;
	

	// Send to chosen
	res.send(`
		${htmlTop}
		<section>
			<h2>Hello, <strong>${person}</strong>.</h2>
				<article> 
					<h3>Thank you for your order!</h3> 
							<p>We can reach you by phone at <strong>${phone}</strong> or by email at <strong>${email}</strong>.</p>
						<h4>We will ship your goodies to the following address:</h4> 
							<p>${streetNum} ${street} Street</p> 
							<p>${city}, ${state} ${zip}.</p>
							<p>Delivery notes: ${delivery}.</p>
				</article>


			<article>
				<h3>You'll be getting the following item:</h3> 
					<p><strong>${quantity}</strong> of the <strong>${result.product}</strong> made by ${result.company}.</p>
					<p>Your order total is <strong>${result.orderTotal(quantity)}</strong></p>
			</article>

		</section>

	
		${htmlBottom}
		`);
});


app.listen(PORT, () => {
	console.log(`Server listening on port${PORT}...`);
});
