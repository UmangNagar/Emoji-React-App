
import SingleEmoji from "./SingleEmoji";

const EmojiContrainer=({list})=>{
return(
    <div className="container">
        {list.map((singleEmoji,idx)=>{
            return(
                <SingleEmoji key={idx} singleEmoji={singleEmoji}/>
            )
        })}
    </div>
)
}
export default EmojiContrainer;