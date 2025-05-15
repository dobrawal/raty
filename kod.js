function oblicz()
{
    var kwota=0;
    var miasto=document.getElementById("miasto").value;
    var liczba=parseFloat(document.getElementById("liczba").value);
    var react=document.getElementById("kurs1").checked;
    var java=document.getElementById("kurs2").checked;

    if(react==true)
    {
        kwota=5000;
    }
    else if(java==true)
    {
        kwota=3000;
    }
    else
    {
        kwota=0;
    }

    var rata=kwota/liczba;

    document.getElementById("paragraf").innerHTML="Kurs odbędzie się w "+miasto+". Koszt całkowity: "+kwota+" zł. Płacisz "+liczba+" rat po "+rata+" zł.";
}