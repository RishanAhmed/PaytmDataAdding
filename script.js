let appsscript_link="https://script.google.com/macros/s/AKfycbxi6OZeYlC_5u-1YKvWuUp9TXSUubRVZ2CqP2DG_xTEj2ibGw5o147_0KG9aWBfplEo/" 
function Insert(){
    let Value = document.getElementById("date").value
    const Val = Value.split("-");

    let M_AND_Y = Val[1]+"-"+Val[0]

    let amt = document.getElementById("amt").value
    $.getJSON(appsscript_link+"exec?page=ADD&dt="+Value+"&month="+M_AND_Y+"&amt="+amt,
    function (data){
        console.log(data)
    })
}

$(document).ready(function(){
    //FillDataList()
})

function FillDataList()
{
        $.getJSON(appsscript_link+"exec?page=drop", 
        function (data) {                              //01
          var Options="";                              
          $.each(data, function(key, value)            //02
          {
            Options = Options + '<option>' + value + '</option>';   //03
          });
          $("#mylist").append(Options);               //04
        });
}

function Download(){
    document.getElementById("TBody").innerHTML =""
    let val = document.getElementById("dowdt").value
    $.getJSON(appsscript_link+"exec?page=downlod&month="+val,
    function(data){
        let table = "",Row="<tr><td>Date</td><td>Amount</td></tr>",Column="",amt = 0,time = 1

        $.each(data, function(key, value){
            Column = ""
            time = 1
            $.each(value, function(key1, value1){
                Column = Column + "<td>"+value1+"</td>"
                time ++
                if (time == 3) {
                    
                    amt = amt + value1
                }
            })
            Row = Row + "<tr>"+Column+"</tr>"
        })
        Row = Row + "<tr> <td>Grand Total</td> <td>"+amt+"</td> </tr>"
        $("#TBody").append(Row)
    })
}