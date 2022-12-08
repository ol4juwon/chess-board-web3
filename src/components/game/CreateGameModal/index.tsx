import React, { FC } from 'react'
interface Props{
    show: boolean;
    setShow: any;
    entryFee: number;
    setEntryFee: any;
    privacy: string;
    setPrivacy: any;
    currency: string;
    setCurrency: any;
    addGames: () => void;
    getGames: () => void;
}
const CreateGameModal : FC<Props> = ({show, setShow, entryFee, setEntryFee, setCurrency,currency, setPrivacy, privacy, getGames, addGames}: Props) => {
  return (
    <div
    className={`flex  justify-center  items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-mofa `}
  >
    <div className=" p-10 w-300px lg:w-500px shadow-md  bg-colors-white">
      <div>
        <h2 className="my-2 font-extrabold text-md"> Create New Room</h2>
        <form>
          <div className="my-3">
            <label>
              <span>Entry Fee</span>
              <div className="w-full border-mt-grey border-1 p-2 px-5 rounded-md">
                <input
                  type="num"
                  value={entryFee}
                  onChange={(e) => {
                      const x = parseFloat(e.target.value)
                    setEntryFee(x);
                  }}
                  className="w-4/5"
                />
                <select
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  className="w-1/5"
                >
                  <option value="ETH">ETH</option>
                  <option value="BSD">BUSD</option>
                  <option value="BTC">BTC</option>
                </select>
              </div>
            </label>
          </div>
          <div className="my-3">
            <label>
              <span>Room Privacy</span>
              <div className="w-full p-2 rounded-md px-5 border-mt-grey border-1">
                <select
                  value={privacy}
                  onChange={(e) => {
                    setPrivacy(e.target.value);
                  }}
                  className="w-full "
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                </select>
              </div>
            </label>
          </div>
          <div className="w-full my-3 flex text-xs justify-end">
            <button
              onClick={() => {
                getGames();
                setShow(!show)}}
              className="mx-2 w-20 p-2 border-colors-black border-solid border-1 rounded-lg"
            >
              Cancel
            </button>
            <button
              onClick={addGames}
              className="p-2 bg-primary-btn w-20 rounded-lg text-colors-white"
              type="button"
              aria-label="save"
              name="save"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default CreateGameModal