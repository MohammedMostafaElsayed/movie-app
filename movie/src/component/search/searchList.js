import SearchCard from "./searchCard";



export default function SearchList({item}){
    // if (!item) {
    //     return (<h1 className="m-5">not found</h1>);
    //   } else {
        return (
            <div className="row row-cols-1 row-cols-md-3 g-4 pt-5" style={{marginTop:"20px"}} >
            {
                item.map((c,i)=>{return(<SearchCard single={c} />)})

            }
        
    </div>
              
        );
      }


