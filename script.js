// Write your jQuery code on line 3!
$(document).ready(function () {
    $(function () {
        $("#datepicker").datepicker({
            firstDay: 1,
            onSelect: function (dateText) {
                $('#dateValue').val(dateText);
            }
        });

    });


    $('#selectCourse').click(function () {
        $.ajax({
                url: "https://query.yahooapis.com/v1/public/yql?q=select+*+from+yahoo.finance.xchange+where+pair+=+%22USDUAH,EURUAH%22&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=",
                cache: false
            })
            .done(function (html) {
                $('#datka tr').remove();
                $.each(html.query.results.rate, function () {
                    $("#datka").append("<tr></tr>");
                    $('#datka tr:last').after('<tr><td>' + this.Time + '</td> +  <td>' + this.Name + '</td>+ <td>' + this.Rate + '</td>+</tr>');
                });
            });
    });
});


