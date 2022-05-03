	       $.ajax({
		  url: "https://tonerfox.bplaced.net/tonerfox_sifis/admin_sifis/Giorgos/formated_improve.php?invoice_id=<?php echo $invoice_id;?>&invoice_type=timologio&invoice_date=<?php echo $my_invoice_date;?>&order_id=<?php echo $order_id;?>&tax_value=<?php echo $tax_value;?>&payment_method=<?php echo $payment_method;?>&ot_subtotal_ex=<?php echo $ot_subtotal_ex;?>&ot_shipping=<?php echo $ot_shipping;?>&ot_payment=<?php echo $ot_payment;?>&ot_tax=<?php $total_vat_amount = (($ot_subtotal_ex + $ot_shipping + $ot_payment)*$tax_value)/100; echo $total_vat_amount;?>&ot_total=<?php echo number_format($ot_subtotal_ex + $ot_shipping + $ot_payment + $total_vat_amount,2);?>&customers_name=<?php echo $customers_name;?>&customers_company=<?php echo $customers_company;?>&customers_street_address=<?php echo $customers_street_address;?>&customers_city=<?php echo $customers_city;?>&customers_postcode=<?php echo $customers_postcode;?>&customers_country=<?php echo $customers_country;?>&customers_afm=<?php echo $customers_afm;?>&customers_id=<?php echo $customers_id;?>",
		  type: "GET"			
		})
		.done(function(data) {
			console.log("%cYou sent:","color: blue; font-size: 20px;");
			console.log(data);
			$.ajax({
				url: "https://mydata-dev.azure-api.net/SendInvoices",
				beforeSend: function(xhrObj){					
					xhrObj.setRequestHeader("aade-user-id","myNameHere");
					xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","MyTesting PrimaryKey");
				},
				type: "POST",
				dataType:"text",
				// Request body
				data: data
			})
			.done(function(data) {
				console.log("%cThe respose:","color: blue; font-size: 20px;");
				console.log(data);
			})
			.fail(function() {
				console.log("failed to do the post");
			});
		 })
		.fail(function() {
			console.log("Failed to get the data");
		});
	   
