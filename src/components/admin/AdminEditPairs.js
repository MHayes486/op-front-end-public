import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editPairing, getPairingById } from "../../actions/adminActions";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import Success from "../../components/Success";

export default function AdminEditPairs({ match }) {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [image, setimage] = useState("");

  const getpairingbyidstate = useSelector((state) => state.getPairingByIdReducer);

  const { pairings, error, loading } = getpairingbyidstate;

  const editpairingstate = useSelector((state) => state.editPairingReducer)
  const { editloading, editerror, editsuccess } = editpairingstate;

  useEffect(() => {

    if (pairings) {
      if (pairings._id === match.params.pairingsid) {
        setname(pairings.dishName)
        setimage(pairings.image)
      }
      else {
        dispatch(getPairingById(match.params.pairingsid));
      }

    }
    else {
      dispatch(getPairingById(match.params.pairingsid));
    }



  }, [pairings, dispatch]);

  function formHandler(e) {
    e.preventDefault();

    const editedpairing = {
      _id: match.params.pairingisd,
      name,
      image
    };

    dispatch(editPairing(editedpairing))
  }

  return (
    <div>
      


      <div className="text-left shadow-lg p-3 mb-5 bg-white rounded">
        <h1>Edit Pizza</h1>
        {loading && <Loading />}
        {error && <Error error="Something went wrong" />}
        {editsuccess && (<Success success='Pizza details edited successfully' />)}
        {editloading && (<Loading />)}

        <form onSubmit={formHandler}>
          <input
            className="form-control"
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />


          <input
            className="form-control"
            type="text"
            placeholder="image url"
            value={image}
            onChange={(e) => {
              setimage(e.target.value);
            }}
          />
          <button className="btn mt-3" type="submit">
            Edit Pairing
          </button>
        </form>
      </div>
    </div>
  );
}
