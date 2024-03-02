import {useState} from "react";

function Show() {
    const[block, setBlock] = useState(true);
    const blockShow = () => {
        setBlock(!block);
    }

    return ( 
        <div>
            <button onClick={blockShow}>
                Показать или скрыть
            </button>
            <p style={{display: block ? 'block' : 'none'}}>Текст параграфа</p>
        </div>
     );
}

export default Show;
<div>
    <button>
        
    </button>
</div>