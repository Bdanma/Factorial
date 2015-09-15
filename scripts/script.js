$ ("form").on("submit", function(event) {
	event.preventDefault();

	var numero = parseInt($("input#ingreso").val());
	if (numero>=0) {
		var j=1
		for (var i=1; i<=numero; i++) {
			console.log(i);
			j = j * i;
			console.log(j)
		}

		$("span#valido").empty()
		$("tbody.tabla2").append("<tr> <td align=center>" + numero + "</td> <td align=center>" + j + " </td>");
		$("thead.tabla1").empty().append("<tr> <td align=center>Numero ingresado</td> <td align=center>Resultado </td>");

		$("#img2").fadeIn();
	} else {
		$("span#valido").empty().text("Primero ingresa un numero valido!")
	}
		
})

$("button#delete").on("click", function() {
	$("thead.tabla1").empty()
	$("tbody.tabla2").empty()
	$("#img2").fadeOut();
})

$("button#inicio").on("click", function() {
	$(".todo").fadeIn();
})

$("button#final").on("click", function() {
	$(".todo").fadeOut();
	$("span#valido").empty();
	$("thead.tabla1").empty();
	$("tbody.tabla2").empty();
	$("#img2").fadeOut();
})