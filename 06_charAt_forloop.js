var a="javascript";
for(let i=0;i<a.length;i++)
{
    var element = a.charAt(i);
    console.log(element);
}
console.log(`Program to calculate aharacter a `);
var a="javascript";
var count=0;
for(let i=0;i<a.length;i++)
{
    var element = a.charAt(i);
    if(element == 'a')
    {
        count=count+1;
    }
}
console.log(`char a count is ${count}`);