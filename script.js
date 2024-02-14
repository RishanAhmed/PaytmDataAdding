let appsscript_link="https://script.google.com/macros/s/AKfycbxi6OZeYlC_5u-1YKvWuUp9TXSUubRVZ2CqP2DG_xTEj2ibGw5o147_0KG9aWBfplEo/" 

let DOWDT = 0;

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

    DOWDT = document.getElementById("dowdt").value

    $.getJSON(appsscript_link+"exec?page=downlod&month="+DOWDT,

    function(data){

        let table = "",Row="<tr><td>Date</td></td><td>Amount</td></tr>",Column="",amt = 0,time = 1

        $.each(data, function(key, value){

            Column = ""

            time = 1

            $.each(value, function(key1, value1){

                if(time == 1){

                    var dat = value1.substring(0,10);

                    Column = Column + "<td>"+dat+"</td>"

                    //Column = Column + "<td class='bg-dark'></td>"

                    console.log(dat)

                }
                
                if (time == 2) {

                    Column = Column + "<td>"+value1+"</td>"

                    amt = amt + value1

                }

                time = time + 1

            })

            Row = Row + "<tr>"+Column+"</tr>"

        })

        Row = Row + "<tr><td class='bg-dark'></td><td class='bg-dark'></td></tr>"

        Row = Row + "<tr> <td>Grand Total</td><td>"+amt+"</td> </tr>"

        $("#TBody").append(Row)

    })

}

function PDFMAKER(){

    /*window.jsPDF = window.jspdf.jsPDF

    var MyPDF = new jsPDF()

    var myhtml = document.querySelector("#TBody")

    MyPDF.html(myhtml, {

        callback: function(doc) {

            MyPDF.save('Parumala Data of '+DOWDT+'.pdf')

        },

        x: 10,

        y: 10,

        width: 400,

        windowwidth: 2000

    });*/

    var table2excel = new Table2Excel();

    table2excel.export(document.querySelectorAll("#td"));

}
