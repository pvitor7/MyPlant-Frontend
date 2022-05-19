/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import MyPot from '../../components/MyPot';
import getPrivatePlants from '../../store/modules/plants/thunks';
import { wishList } from '../../store/modules/wishList/thunks';
import { MyGarden, PersonalGarden, MyWish } from './styled';

function PersonalPlants() {
  const { token, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const plantsUser = useSelector((state) => state.userPlants);
  const wishUserList = useSelector((state) => state.userWish);

  const [GardenOpen, setGardenOpen] = useState(80);
  const [wishOpen, setWishOpen] = useState(12);

  const [displayGardenList, setDisplayGardenList] = useState('flex');
  const [displayWishList, setWishList] = useState('none');

  useEffect(() => {
    getPrivatePlants(dispatch);
    wishList(dispatch);
  }, []);

  return (
    <PersonalGarden>
      {!token && <Redirect to="/login" />}

      <h2>
        Boas vindas,
        {' '}
        {user.name}
        !
      </h2>
      <div className="div--MyGardens--area">
        <MyGarden
          open={GardenOpen}
          display={displayGardenList}
          onClick={() => {
            setGardenOpen(80);
            setWishOpen(12);
            setDisplayGardenList('flex');
            setWishList('none');
          }}
        >
          <h4 className="h4--MyGarden">
            Seu jardim
            {GardenOpen < wishOpen && (
              <button
                className="button--MyGarden"
              >
                +
              </button>
            )}
          </h4>

          <div className="div--MyGarden--list">
            {
              plantsUser.length > 0 && (
                plantsUser.map((plant, index) => <MyPot dispatch={dispatch} myChild key={index} plant={plant} />)
              )
            }
          </div>
        </MyGarden>

        <MyWish
          open={wishOpen}
          display={displayWishList}
          onClick={() => {
            setGardenOpen(12);
            setWishOpen(80);
            setDisplayGardenList('none');
            setWishList('flex');
          }}
        >
          <h4 className="MyWish--h4">
            Favoritos
            {wishOpen < GardenOpen && (
              <button
                className="button--MyWish"
              >
                +
              </button>
            )}
          </h4>
          <div className="div--MyWish--list">
            {
            wishUserList?.length > 0
            && wishUserList?.map((plant, index) => <MyPot dispatch={dispatch} addMyWish plant={plant} key={index} />)
}
          </div>
        </MyWish>
      </div>
    </PersonalGarden>
  );
}

export default PersonalPlants;
