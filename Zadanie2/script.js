function wypisz()
{
  var liczba1 = document.getElementById('pole1').value;
  var liczba2 = document.getElementById('pole2').value;
  var napis = "";

  if((liczba1>0 || liczba1<0 || liczba1==0) && (liczba2>0 || liczba2<0 || liczba2==0))
  {
    if(liczba1<liczba2)
    {
      for (i=liczba1; i<=liczba2; i++)
      {
        napis = napis + i + " ";
      }document.getElementById('wynik').innerHTML = napis;
    }else document.getElementById('wynik').innerHTML = "Pierwsza liczba musi być mniejsza niż liczba druga";
  }else document.getElementById('wynik').innerHTML = "W obu polach muszą być wpisane liczby!";
}
