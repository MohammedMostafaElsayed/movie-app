import { useSelector } from "react-redux";
import WatchCard from "./watchCard";

export default function WatchList(){
    const items = useSelector(state => state.watch.items);

    return(
        <>
            <h3>Watch list</h3>
            <div class="row row-cols-2 g-4 m-5">
                {
                    items.map((s, i)=>{
                        return(<WatchCard item={s}/>);
                        
                    })
                }
            </div>
        
        </>
        
    );

}