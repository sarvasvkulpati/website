const colors = require("../utils/colors.json");


const ascii = (a) => a.charCodeAt(0);


export default function Tags({ tags }) {




    console.log(tags, colors[parseInt(tags[0]) % 13], parseInt(tags[0]))
    return (
        <>


<div className="flex flex-row"> 
{tags.map((tag) =>
                <p className="text-white text-sm px-4 py-1 rounded-xl font-bold shadow-md self-center "
                
                style={{
                    backgroundColor: colors[tag.split("").map(ascii).reduce((a, b) => a + b, 0) % colors.length]
                }}>
                    {tag}
                </p>


            )}
</div>
           
        </>
        )
}