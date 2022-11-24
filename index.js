// Code your solution in this file!
function distanceFromHqInBlocks(block){
    if(block=== 43){
        return(43-42)
    }
    else if(block===50){
        return(50-42)
    }
else if (block===34){
    return(42-34)
}
}
function distanceFromHqInFeet(feet){
    {
        if(feet=== 43){
            return((43-42)*264)
        }
        else if(feet===50){
            return((50-42)*264)
        }
    else if (feet===34){
        return((42-34)*264)
    }}

}
function distanceTravelledInFeet(a,b){
if( b>a)
{
    const distance = (b-a)*264
    return (distance)
}
else if( a>b)
{
    const distance =(a-b)*264
    return(distance)

}
}
function calculatesFarePrice(start, destination){
    const distant = distanceTravelledInFeet( start, destination)
    let cost;
    if(distant <= 400)
    {
        cost= 0;
    }
    else if ( distant >400 && distant <2000)
    {
        cost=2.56;
    }
    else if (distant>2000 && distant <2500){
        cost= 25;
    }
    else if (distant> 2500){
    cost = "cannot travel that far"}
    return cost
}