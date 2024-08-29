function F6()
{
    const arr=["apple", "banana", "kiwi", "orange"];
    const result = arr.filter((fruit) => {
    if(fruit.length > 5)
        { return true;}        
        else { return false;  }
} );
    var arr1=result.join(",")
    return (<div>
    {arr1}
    </div>
    )

}
export default F6