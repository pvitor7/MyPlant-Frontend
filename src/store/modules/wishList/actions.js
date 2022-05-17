import { WISH_DELETE, WISH_LIST } from "./actionsTypes";

export default function personalWish(plants){
    return { type: WISH_LIST, myWishList: plants }
}

export default function deletelWish(plant){
    return { type: WISH_DELETE, myWishList: plant }
}

