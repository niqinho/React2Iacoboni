import {BsCart} from "react-icons/bs"
import Badge from "react-bootstrap/Badge"
const CartWidget = () => {
    return (
        <div>
    <BsCart fontSize={"2rem"} color='white'/>
    <Badge bg="danger">2</Badge>
        </div>
    )
}
export default CartWidget