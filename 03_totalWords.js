function totalWord(a)
{
   a="I am happy buddy" ;
   b="I am learning JS the language of internet";
   var resultValue=a.split(" ");// pls give space between " "
   var resVal = b.split(" ");
   console.log(resultValue);

   console.log(`Total words are: ${resultValue.length+resVal.length}`);

}
totalWord();