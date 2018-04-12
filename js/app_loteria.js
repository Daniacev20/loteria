$(document).ready(function() {
	$("#btn-generar").on("click", function() {
		var numeros = generarBillete();
		$(".numero").each(function(i, elem) {
			$(this).text(numeros[i]);
		});

		$("#btn-imprimir").attr("disabled", false);
	});

	$("#btn-imprimir").click(function() {
		print();
	});

	$("#frm-venta").on("reset", function() {
		$("#btn-imprimir").attr("disabled", true);
		$(".numero").text("--");
	});

	function generarBillete() {
		var resultados = [];

		do {
			var num = Math.ceil(Math.random() * 100);
			if (!(resultados.indexOf(num) >= 0))
				resultados.push(num);
		} while (resultados.length < 6);

		return resultados;
	}
});