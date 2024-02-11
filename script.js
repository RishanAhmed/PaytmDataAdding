let appsscript_link="https://script.google.com/macros/s/AKfycbzmC4-3rBMcrMOXZg2TxwmB9WUljOfvb-jq5fbe--lHJQx83VjYDKMLFg9Ou72sX1Ih/" 
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