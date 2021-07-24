import react from 'react'
import { Progress } from 'reactstrap';

function Load() {
    return(
        <div>
            <Progress animated color="danger" value="100" />
        </div>
    )
}
export default Load;