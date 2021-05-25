////////////////////////////////////////////////////////////////
const A = 2;
const B = 4;
const bits = "01010010010001000111101100001010011001111000010010011110010000000";
var cont = {}; // counter
for( var j = 0; j < bits.length; ++j )
{
    for( var len = A; len <= B; ++len )
    {
        // make sure within boundaries
        if( j + len > bits.length )break;
        const s = bits.substr( j, len );
        if( cont[s] === undefined )
        {
            cont[s] = 1;
        }
        else
        {
            ++cont[s];
        }
    }
}
// stackoverflow( sort cont by value )
var sorted = [];
for( var c in cont )
{
    sorted.push( [cont[c], c ] );
}
sorted.sort( ( x, y ) => y[0] - x[0] ); // yea!
// dunf
var prev = -1;
var out = "Contact";
for( var c of sorted )
{
    if( c[0] != prev )
    {
        console.log( out );
        prev = c[0];
        out = c[0] + ": " + c[1];
    }
    else
    {
        out += " " + c[1];
    }
}
console.log( out );
////////////////////////////////////////////////////////////////
// log: Ok, want to make myself clear, coz I'm pretty much aware
// of my bad reputation, I'm drawing for myself only, don't have
// nothing to say, don't want to show anything to anyone.
// By the way, there are no positive and negative cosmic forces,
// black and white or red and blue, in your case, represent the
// contrasts, there is only one force; the harmony between them.
//
